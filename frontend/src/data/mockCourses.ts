import { Course } from '../types';

export const mockCourses: Course[] = [
  {
    id: '1',
    title: 'Complete Web Development Bootcamp',
    description: 'Learn web development from scratch with HTML, CSS, JavaScript, React, Node.js, and more. Build real-world projects and become a full-stack developer.',
    instructor: {
      id: 'instructor-1',
      name: 'Dr. Angela Yu',
      avatar: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'Lead Instructor at the App Brewery. Former Lead Developer at Google. Over 10 years of experience in web development.',
      rating: 4.9,
      students: 842000
    },
    image: 'https://images.pexels.com/photos/2004161/pexels-photo-2004161.jpeg?auto=compress&cs=tinysrgb&w=800',
    price: 89.99,
    originalPrice: 199.99,
    rating: 4.9,
    reviews: 156420,
    duration: '65.5 hours',
    students: '842k',
    level: 'Beginner',
    category: 'Development',
    badge: 'Bestseller',
    curriculum: [
      {
        id: 'module-1',
        title: 'Introduction to Web Development',
        duration: '2 hours',
        lessons: [
          {
            id: 'lesson-1-1',
            title: 'What is Web Development?',
            duration: '15 min',
            type: 'video',
            videoUrl: 'https://example.com/video1',
            isFree: true
          },
          {
            id: 'lesson-1-2',
            title: 'Setting Up Your Development Environment',
            duration: '30 min',
            type: 'video',
            videoUrl: 'https://example.com/video2',
            isFree: true
          }
        ]
      },
      {
        id: 'module-2',
        title: 'HTML Fundamentals',
        duration: '8 hours',
        lessons: [
          {
            id: 'lesson-2-1',
            title: 'HTML Basics',
            duration: '45 min',
            type: 'video',
            videoUrl: 'https://example.com/video3'
          },
          {
            id: 'lesson-2-2',
            title: 'HTML Forms',
            duration: '60 min',
            type: 'video',
            videoUrl: 'https://example.com/video4'
          }
        ]
      }
    ],
    whatYouWillLearn: [
      'Build responsive websites with HTML, CSS, and JavaScript',
      'Create dynamic web applications with React',
      'Develop backend APIs with Node.js and Express',
      'Work with databases using MongoDB',
      'Deploy applications to the cloud',
      'Understand modern development workflows'
    ],
    requirements: [
      'No programming experience needed',
      'A computer with internet connection',
      'Willingness to learn and practice'
    ],
    createdAt: new Date('2024-01-01'),
    updatedAt: new Date('2024-12-01')
  },
  {
    id: '2',
    title: 'Machine Learning A-Z: Python & R',
    description: 'Learn to create Machine Learning Algorithms in Python and R from two Data Science experts. Code templates included.',
    instructor: {
      id: 'instructor-2',
      name: 'Kirill Eremenko',
      avatar: 'https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'Data Scientist & Forex Systems Expert. Former KPMG consultant with expertise in machine learning and data analysis.',
      rating: 4.8,
      students: 523000
    },
    image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800',
    price: 79.99,
    originalPrice: 179.99,
    rating: 4.8,
    reviews: 98765,
    duration: '44 hours',
    students: '523k',
    level: 'Intermediate',
    category: 'Data Science',
    badge: 'Hot & New',
    curriculum: [
      {
        id: 'module-1',
        title: 'Data Preprocessing',
        duration: '4 hours',
        lessons: [
          {
            id: 'lesson-1-1',
            title: 'Introduction to Machine Learning',
            duration: '20 min',
            type: 'video',
            videoUrl: 'https://example.com/ml-video1',
            isFree: true
          }
        ]
      }
    ],
    whatYouWillLearn: [
      'Master Machine Learning on Python & R',
      'Make accurate predictions',
      'Make powerful analysis',
      'Make robust Machine Learning models',
      'Create strong added value to your business',
      'Use Machine Learning for personal purpose'
    ],
    requirements: [
      'Just some high school mathematics level',
      'Basic Python knowledge helpful but not required'
    ],
    createdAt: new Date('2024-02-01'),
    updatedAt: new Date('2024-11-15')
  }
];