export type UserRole = 'student' | 'instructor' | 'admin' | 'teaching_assistant' | 'corporate_admin' | 'support_agent' | 'content_reviewer';

export interface RolePermissions {
  canCreateCourse: boolean;
  canModerateContent: boolean;
  canManageUsers: boolean;
  canViewAnalytics: boolean;
  canProcessPayments: boolean;
  canManageSupport: boolean;
  canReviewContent: boolean;
}

export const ROLE_PERMISSIONS: Record<UserRole, RolePermissions> = {
  student: {
    canCreateCourse: false,
    canModerateContent: false,
    canManageUsers: false,
    canViewAnalytics: false,
    canProcessPayments: false,
    canManageSupport: false,
    canReviewContent: false,
  },
  instructor: {
    canCreateCourse: true,
    canModerateContent: false,
    canManageUsers: false,
    canViewAnalytics: true,
    canProcessPayments: false,
    canManageSupport: false,
    canReviewContent: false,
  },
  admin: {
    canCreateCourse: true,
    canModerateContent: true,
    canManageUsers: true,
    canViewAnalytics: true,
    canProcessPayments: true,
    canManageSupport: true,
    canReviewContent: true,
  },
  teaching_assistant: {
    canCreateCourse: false,
    canModerateContent: true,
    canManageUsers: false,
    canViewAnalytics: false,
    canProcessPayments: false,
    canManageSupport: true,
    canReviewContent: false,
  },
  corporate_admin: {
    canCreateCourse: false,
    canModerateContent: false,
    canManageUsers: true,
    canViewAnalytics: true,
    canProcessPayments: false,
    canManageSupport: false,
    canReviewContent: false,
  },
  support_agent: {
    canCreateCourse: false,
    canModerateContent: false,
    canManageUsers: false,
    canViewAnalytics: false,
    canProcessPayments: false,
    canManageSupport: true,
    canReviewContent: false,
  },
  content_reviewer: {
    canCreateCourse: false,
    canModerateContent: true,
    canManageUsers: false,
    canViewAnalytics: false,
    canProcessPayments: false,
    canManageSupport: false,
    canReviewContent: true,
  },
};