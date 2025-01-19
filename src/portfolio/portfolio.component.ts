import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ProjectCardComponent } from '../app/project-card/project-card.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-portfolio',
  imports: [ProjectCardComponent, CommonModule],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css'
})
export class PortfolioComponent {
  constructor(private titleservice: Title) {
    this.titleservice.setTitle('Saad Sultan - Portfolio');
  }

  projects = [
    {
      Name: 'Gym Management System',
      Stack: ['ASP.NET', 'C#', 'SignalR'],
      Description: {
        text: `Gym Management System where trainers can upload videos and pictures. Trainees can see their trainer’s videos and pictures and chat using SignalR WebSocket.`,
        keyFeatures: [
          {
            heading: 'Admin Interface',
            points: [
              'Admins manage gym products, trainer profiles, and member subscriptions.',
              'Admins can update and remove products from the inventory.'
            ]
          },
          {
            heading: 'Trainer Interface',
            points: [
              'Trainers can upload media content like workout videos and photos.',
              'They engage with trainees by providing exercise tutorials and fitness tips.'
            ]
          },
          {
            heading: 'Trainee Interface',
            points: [
              'Trainees can browse and view trainers’ media content.',
              'They can see images and videos shared by trainer.',
              'They can select trainer.'
            ]
          },
          {
            heading: 'Message',
            points: [
              'Trainees and trainer can chat after the trainee selects their trainer.',
              'They can interact with trainers via chat using SignalR WebSocket.'
            ]
          },
          {
            heading: 'Skills',
            points: ['C#', '.NET MVC', 'SignalR', 'SQL', 'Web-Sockets', 'JS', 'HTML', 'CSS']
          }
        ],
        overall: `This Gym Management System offers a seamless experience for trainers and trainees alike, with real-time chat functionality and media-sharing capabilities.`,
      },
      githubLink: 'https://github.com/Xdsaad5/Gym-Management-System-using-.NET-and-SignalR',
      image: 'https://images.pexels.com/photos/1552252/pexels-photo-1552252.jpeg?cs=srgb&dl=pexels-leonardho-1552252.jpg&fm=jpg'
    },
    {
      Name: 'Inventory Management System',
      Stack: ['.NET', 'C#', 'SQL'],
      Description: {
        text: `A robust inventory management system that allows administrators to manage products, track stock, and generate reports.`,
        keyFeatures: [
          {
            heading: 'Admin Interface',
            points: [
              'Admins can add, update, and delete product records.',
              'System generates real-time stock reports and alerts for low-stock items.'
            ]
          },
          {
            heading: 'Product Management',
            points: [
              'Admin can set product prices, descriptions, and availability.',
              'System integrates with database for product management and stock tracking.'
            ]
          },
          {
            heading: 'Skills',
            points: ['ASP.NET', 'C#', 'SQL', 'MVC', 'Entity Framework']
          }
        ],
        overall: `A comprehensive system for managing inventory, stock levels, and product records, providing real-time insights for administrators.`,
      },
      githubLink: 'https://github.com/Xdsaad5/InventoryHub',
      image: 'https://thumbs.dreamstime.com/b/paper-words-inventory-management-charts-92977969.jpg'
    },
    {
      Name: 'E-commerce Gym Management System',
      Stack: ['Python', 'Flask'],
      Description: {
        text: `A full-stack gym management system integrated with an e-commerce platform, enabling users to manage gym activities and purchase products online.`,
        keyFeatures: [
          {
            heading: 'Admin Interface',
            points: [
              'Admins can manage gym products, subscriptions, and memberships.',
              'Admin can update the product inventory and handle customer orders.'
            ]
          },
          {
            heading: 'Trainee Interface',
            points: [
              'Trainee can view gym classes, trainers, and purchase gym products.',
              'They can sign up for memberships and manage their subscriptions online.'
            ]
          },{
            heading: 'Trainer Interface',
            points: [
              'Trainers can upload media content like exercise tutorials and fitness tips.',
              'Trainers can track trainee progress.'
            ]
          },
          {
            heading: 'Product Management',
            points: [
              'Admins and users can browse products such as supplements, equipment, and accessories.',
              'Product details include pricing, availability, and purchase options.'
            ]
          },
          {
            heading: 'Online Payment Integration',
            points: [
              'Supports secure online payments for both memberships and product purchases.'
            ]
          },
          {
            heading: 'Skills',
            points: ['Python', 'Flask', 'SignalR', 'SQL', 'MongoDB', 'Web-Sockets']
          }
        ],
        overall: `An integrated gym and e-commerce platform, offering gym management functionalities alongside an online platform to purchase gym products.`,
      },
      githubLink: 'https://github.com/Xdsaad5/Gym-Management-System-Flask',
      image: 'https://thumbs.dreamstime.com/b/sports-nutrition-f…-dumbbells-black-background-fitness-112716854.jpg'
    },
    {
      Name: 'Route Mate',
      Stack: ['Firebase', 'Python-Flask', 'RestApi'],
      Description: {
        text: `A ride-sharing platform with enhanced security features, offering a community-based approach to ride-sharing, focusing on driver and passenger trust.`,
        keyFeatures: [
          {
            heading: 'Community Integration',
            points: [
              'Users can create and join communities based on email-domain or code.',
              'Rides are only visible to users within the same community for added trust.'
            ]
          },
          {
            heading: 'Driver and Passenger Matching',
            points: [
              'Passengers can view and book rides from drivers within their community.',
              'Drivers can offer rides to trusted members of their community.'
            ]
          },
          {
            heading: 'Skills',
            points: ['Firebase', 'Python', 'Flask', 'API Development']
          }
        ],
        overall: `Route Mate redefines ride-sharing with its community-based approach, prioritizing safety and trust between users.`,
      },
      githubLink: 'https://github.com/Xdsaad5/FYP',
      image: ''
    },
    {
      Name: 'My Ride',
      Stack: ['C#', 'SQL', 'File-Handling'],
      Description: {
        text: `A ride-hailing system inspired by Uber that connects riders with drivers for booking, tracking, and completing trips.`,
        keyFeatures: [
          {
            heading: 'Admin Interface',
            points: [
              'Manage driver and user profiles.',
              'Track active and completed rides.',
            ],
          },
          {
            heading: 'Driver Interface',
            points: [
              'Accept or reject ride requests.',
              'View trip details, including pickup and drop-off locations.',
            ],
          },
          {
            heading: 'User Interface',
            points: [
              'Book rides based on location and destination.',
              'Rate and review drivers after completing a trip.',
            ],
          },
        ],
        skills: ['C#', '.NET MVC', 'SQL', 'Object-Oriented Programming', 'File-Handling'],
        overall: `My Ride offers a seamless ride-booking experience with intuitive features for admins, drivers, and users.`,
      },
      githubLink: 'https://github.com/Xdsaad5/Ride-Management-System',
      image: 'https://c0.wallpaperflare.com/preview/662/765/141/motorcycle-harley-davidson-bike-machine.jpg',
    },
    {
      Name: 'Library Management System',
      Stack: ['C#', 'SQL', 'ADO.NET'],
      Description: {
        text: `A console-based library management system where administrators and users can manage book records and handle borrowing and returns.`,
        keyFeatures: [
          {
            heading: 'Admin Interface',
            points: [
              'Admins can manage book records, add, update, or delete books.',
              'System tracks book availability and due dates for borrowed books.'
            ]
          },
          {
            heading: 'User Interface',
            points: [
              'Users can browse available books, borrow and return books.',
              'Users can view their borrowing history and current status.'
            ]
          },
          {
            heading: 'Skills',
            points: ['C#', 'ADO.NET', 'SQL']
          }
        ],
        overall: `A simple yet effective library management system that facilitates efficient borrowing and returning of books.`,
      },
      githubLink: 'https://github.com/Xdsaad5/Library-Management-System',
      image: 'https://www.edigitallibrary.com/img/library-img.jpg'
    },
    {
      Name: 'Student Enrollment System',
      Stack: ['Python', 'PyMySQL', 'Raw-Queries'],
      Description: {
        text: `A Python-based student enrollment system that allows students to enroll in courses and manage their educational progress through a relational database.`,
        keyFeatures: [
          {
            heading: 'Admin Interface',
            points: [
              'Admin can manage student records, update details, and track their enrollment status.'
            ]
          },          
          {
            heading: 'Course Enrollment',
            points: [
              'Students can enroll in courses through a menu-driven interface.',
              'Admin can manage course offerings and student enrollments.'
            ]
          },
          {
            heading: 'Skills',
            points: ['Python', 'PyMySQL', 'Relational Databases']
          }
        ],
        overall: `A simple and effective enrollment system for managing students and their courses.`,
      },
      githubLink: 'https://github.com/Xdsaad5/Student-Course-Enrollment-System',
      image: 'https://t4.ftcdn.net/jpg/08/88/74/21/360_F_888742106_RUCqHlmpVW8pwVciF7PfGkb0nV9leCLe.jpg'
    },
    {
      Name: 'Car Management System',
      Stack: ['C++', 'File Handling'],
      Description: {
        text: `A console-based car management system that features both admin and user interfaces for managing car inventory and user authentication using file handling.`,
        keyFeatures: [
          {
            heading: 'Admin Interface',
            points: [
              'Admins can add, remove, and update car records.',
              'Admin manages car inventory using file-based storage.'
            ]
          },
          {
            heading: 'Buyer Interface',
            points: [
              'Buyer can view available cars and inquire about car details.',
              'Buyer can perform basic actions like authentication and viewing car information.',
              'Buyer purchase a car.',

            ]
          },
          {
            heading: 'Skills',
            points: ['C++', 'File Handling']
          }
        ],
        overall: `A simple car management system with an intuitive interface, powered by file handling for storing car data.`,
      },
      githubLink: 'https://github.com/Xdsaad5/car_management_system',
      image: 'https://www.uffizio.com/wp-content/uploads/2024/01/Trailers-3-1-3.jpg'
    },
    {
      Name: 'Chatbot Using Google Gemini AI',
      Stack: ['Python-Flask', 'Google Gemini AI'],
      Description: {
        text: `A chatbot powered by Google Gemini AI that processes and responds to text and code-based prompts intelligently.`,
        keyFeatures: [
          {
            heading: 'AI-Powered Responses',
            points: [
              'Integrates Google Gemini AI for intelligent text and code-based responses.',
              'Handles various types of queries with precision.',
            ],
          },
          {
            heading: 'Frontend Interaction',
            points: [
              'Delivers formatted responses for better readability.',
              'Allows users to engage with the chatbot in real-time.',
            ],
          },
          {
            heading: 'Backend Functionality',
            points: [
              'Handles API interactions and data processing using Python Flask.',
              'Ensures seamless database operations with SQL integration.',
            ],
          },
        ],
        skills: ['Python', 'Flask', 'API Development', 'AI Integration', 'Data Processing'],
        overall: `This chatbot is a robust tool for interacting with users and solving their queries using advanced AI technologies.`,
      },
      githubLink: 'https://github.com/Xdsaad5/ChatBot',
      image: 'https://img.freepik.com/free-psd/futuristic-robot-illustration_23-2150979001.jpg',
    },
    {
      Name: 'SDES (Simplified Data Encryption Standard)',
      Stack: ['Python', 'Cryptography'],
      Description: {
        text: `An implementation of the Simplified Data Encryption Standard (SDES), a widely used encryption algorithm.`,
        keyFeatures: [
          {
            heading: 'Core Features',
            points: [
              'Implements both encryption and decryption processes.',
              'Demonstrates the functionality of SDES for educational purposes.',
              'Encodes plaintext into ciphertext and vice versa.',
            ],
          },
          {
            heading: 'Applications',
            points: [
              'Provides a simple yet effective demonstration of cryptography.',
              'Helps understand the fundamentals of secure communication.',
            ],
          },
        ],
        skills: ['Python', 'Cryptography', 'Encryption Algorithms', 'Data Security'],
        overall: `The SDES project is a comprehensive implementation designed for understanding encryption and secure data transmission.`,
      },
      githubLink: 'https://github.com/Xdsaad5/encryption',
      image: 'https://wordpress.cdsec.co.uk/wp-content/uploads/2023/08/kVbVKMr6Fr-800-1.png',
    },
  ];
  



}
