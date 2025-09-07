import { Injectable, Inject, UnauthorizedException, ConflictException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { ClientProxy } from '@nestjs/microservices';
import { firstValueFrom } from 'rxjs';
import { MICROSERVICE_TOKENS } from '@shared/constants';
import { LoginDto, RegisterDto } from '@shared/dto';
import { PasswordUtils, ApiResponseUtil } from '@shared/utils';
import { PrismaService } from '@shared/database/prisma.service';

@Injectable()
export class AuthService {
  constructor(
    private prisma: PrismaService,
    private jwtService: JwtService,
    @Inject(MICROSERVICE_TOKENS.USER_SERVICE)
    private userServiceClient: ClientProxy,
  ) {}

  async login(loginDto: LoginDto) {
    try {
      const user = await this.prisma.user.findUnique({
        where: { email: loginDto.email },
        include: {
          instructorProfile: true,
        },
      });

      if (!user || !user.passwordHash) {
        throw new UnauthorizedException('Invalid credentials');
      }

      const isPasswordValid = await PasswordUtils.compare(
        loginDto.password, 
        user.passwordHash
      );

      if (!isPasswordValid) {
        throw new UnauthorizedException('Invalid credentials');
      }

      const payload = {
        sub: user.id,
        email: user.email,
        role: user.role,
      };

      const accessToken = this.jwtService.sign(payload);

      return ApiResponseUtil.success({
        accessToken,
        user: {
          id: user.id,
          email: user.email,
          name: user.name,
          avatar: user.avatar,
          role: user.role,
          instructorProfile: user.instructorProfile,
        },
      });
    } catch (error) {
      if (error instanceof UnauthorizedException) {
        throw error;
      }
      throw new UnauthorizedException('Login failed');
    }
  }

  async register(registerDto: RegisterDto) {
    try {
      const existingUser = await this.prisma.user.findUnique({
        where: { email: registerDto.email },
      });

      if (existingUser) {
        throw new ConflictException('User already exists');
      }

      const passwordHash = await PasswordUtils.hash(registerDto.password);

      const user = await this.prisma.user.create({
        data: {
          name: registerDto.name,
          email: registerDto.email,
          passwordHash,
          role: registerDto.role || 'USER',
        },
      });

      // Emit user creation event to user service
      this.userServiceClient.emit('user.created', {
        userId: user.id,
        email: user.email,
        name: user.name,
        role: user.role,
      });

      const payload = {
        sub: user.id,
        email: user.email,
        role: user.role,
      };

      const accessToken = this.jwtService.sign(payload);

      return ApiResponseUtil.success({
        accessToken,
        user: {
          id: user.id,
          email: user.email,
          name: user.name,
          avatar: user.avatar,
          role: user.role,
        },
      });
    } catch (error) {
      if (error instanceof ConflictException) {
        throw error;
      }
      throw new ConflictException('Registration failed');
    }
  }

  async refresh(refreshToken: string) {
    try {
      const decoded = this.jwtService.verify(refreshToken);
      const user = await this.prisma.user.findUnique({
        where: { id: decoded.sub },
      });

      if (!user) {
        throw new UnauthorizedException('Invalid refresh token');
      }

      const payload = {
        sub: user.id,
        email: user.email,
        role: user.role,
      };

      const accessToken = this.jwtService.sign(payload);

      return ApiResponseUtil.success({ accessToken });
    } catch (error) {
      throw new UnauthorizedException('Invalid refresh token');
    }
  }
}