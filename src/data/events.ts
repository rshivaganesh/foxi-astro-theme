import type { Event } from '../types/event';

export const events: Event[] = [
  {
    id: 'upcoming-event-1',
    title: 'Web Development Workshop',
    description: 'Learn the latest web development techniques and best practices.',
    location: 'Virtual',
    image: '/images/event-1.jpg',
    category: 'Workshop',
    content: `
      Join us for an intensive workshop on modern web development. We'll cover:
      - Frontend frameworks and best practices
      - Backend development with Node.js
      - Database design and optimization
      - Deployment strategies
      
      This workshop is perfect for developers looking to enhance their skills and stay up-to-date with the latest technologies.
    `
  },
  {
    id: 'upcoming-event-2',
    title: 'Tech Conference 2024',
    description: 'Join us for the biggest tech conference of the year.',
    location: 'San Francisco',
    image: '/images/event-2.jpg',
    category: 'Conference',
    content: `
      The Tech Conference 2024 brings together industry leaders, innovators, and enthusiasts for three days of:
      - Keynote speeches from tech visionaries
      - Interactive workshops and sessions
      - Networking opportunities
      - Latest technology showcases
      
      Don't miss this opportunity to connect with the tech community and learn about the future of technology.
    `
  }
]; 