import { Injectable } from '@angular/core';
import { Project, SkillGroup } from '../models/portfolio.model';

@Injectable({ providedIn: 'root' })
export class PortfolioService {

  readonly name = 'Moaaz Atef';
  readonly tagline = 'Full Stack Developer';
  readonly description = 'Building scalable enterprise applications with Spring Boot microservices & Angular. Passionate about clean architecture, RESTful APIs, AI-powered platforms, and seamless user experiences.';
  readonly aboutText = `I'm a full stack developer specializing in enterprise-grade applications using Spring Boot microservices for backend and Angular for dynamic frontends. I've built everything from AI assistant platforms and civic engagement systems to CRM tools and financial investment platforms. I love turning complex business requirements into clean, maintainable, production-ready code.`;
  readonly yearsExp = '3+';
  readonly projectsCount = '10+';
  readonly email = 'moazatef435@gmail.com';
  readonly github = 'https://github.com/the1zozz';
  readonly linkedin = 'https://www.linkedin.com/in/dev-moaaz-atef/';

  readonly skillGroups: SkillGroup[] = [
    {
      title: 'Backend',
      icon: 'server',
      color: 'green',
      skills: [
        { label: 'Java 21' }, { label: 'Spring Boot' }, { label: 'Spring Security' },
        { label: 'Spring Cloud' }, { label: 'JPA / Hibernate' }, { label: 'REST APIs' },
        { label: 'Microservices' }, { label: 'JWT / OAuth2' }, { label: 'Maven' }
      ]
    },
    {
      title: 'Frontend',
      icon: 'monitor',
      color: 'blue',
      skills: [
        { label: 'Angular 20+' }, { label: 'TypeScript' }, { label: 'RxJS' },
        { label: 'NGXS' }, { label: 'Angular Material' }, { label: 'HTML / SCSS' },
        { label: 'Bootstrap' }, { label: 'Tailwind CSS' }
      ]
    },
    {
      title: 'Database & DevOps',
      icon: 'database',
      color: 'yellow',
      skills: [
        { label: 'PostgreSQL' }, { label: 'MySQL' }, { label: 'MongoDB' },
        { label: 'Docker' }, { label: 'Docker Compose' }, { label: 'Railway' },
        { label: 'Git / GitHub' }, { label: 'CI/CD' }, { label: 'EHCache' }
      ]
    }
  ];

  readonly projects: Project[] = [
    {
      title: 'ITWays AI Platform',
      description: 'Enterprise-grade AI assistant platform built with 13+ Spring Boot microservices behind a reactive Spring Cloud Gateway. The core is a sophisticated journey/workflow engine supporting 15+ step types — RESPONSE, USER_INPUT, API_CALL, CONDITION, SWITCH, MAIL, TEMPLATE, DATA_MAP, and INTENT. The Speech Service handles real-time audio transcription via an AI Engine SDK, detects user intent, and triggers the correct journey automatically. Services communicate via OpenFeign with JWT-secured multi-tenant account isolation. The Angular 21 frontend (NGXS state management) includes a drag-and-drop visual journey builder, a FreeMarker template editor, a voice assistant interface, and an analytics dashboard — all in a glassmorphic dark/light UI.',
      tags: [
        { label: 'Spring Cloud', color: 'green' },
        { label: 'Angular 21', color: 'blue' },
        { label: 'Docker', color: 'yellow' }
      ],
      featured: true
    },
    {
      title: 'Integral Way – Investment Platform',
      description: 'Comprehensive financial investment platform architected as 16 independent Spring Boot microservices with a centralized Spring Cloud Config Server and API Gateway for routing and load balancing. Key services include KYC/Onboarding with NAFATH identity verification, portfolio management, product catalog, CMS, AI-powered content generation, a URL shortener, and a notification service for email/SMS. The authentication service supports JWT and Google OAuth2. All services are containerized with Docker, share encrypted centralized configuration, and communicate via Feign clients — making it a fully production-ready microservices ecosystem.',
      tags: [
        { label: 'Spring Boot', color: 'green' },
        { label: 'Microservices', color: 'yellow' },
        { label: 'PostgreSQL', color: 'yellow' }
      ],
      featured: true
    },
    {
      title: 'People Voice',
      description: 'Civic engagement platform designed to streamline communication between citizens and their parliament members. The Spring Boot 3.5 (Java 21) backend provides a fully documented REST API with JWT authentication, Spring Security RBAC, MapStruct DTO mapping, Bean Validation, and email notifications. The Angular Material frontend delivers a rich citizen-facing UI with emoji support, Bootstrap Icons, Font Awesome, and Angular CDK. A separate Angular 20 admin panel (with Lucide icons) handles platform management. The entire system is designed for real-world civic use with clean separation between citizen and admin concerns.',
      tags: [
        { label: 'Spring Boot', color: 'green' },
        { label: 'Angular Material', color: 'blue' },
        { label: 'PostgreSQL', color: 'yellow' }
      ],
      featured: true
    },
    {
      title: 'Customer Relation Manager',
      description: 'Enterprise CRM system built on Spring Boot 4.0.1 (Java 21) with a complete lead management pipeline and three-role RBAC (Admin, Marketing, Sales). Features include lead assignment, sales pipeline status tracking, a collaborative comment system, real-time notifications, multi-criteria search with pagination and sorting, EhCache for performance, and a full audit trail. The Angular 21 frontend and PostgreSQL backend are fully containerized with Docker Compose — three services (db, backend, frontend) on a shared bridge network — and deployed on Railway. Swagger/OpenAPI provides interactive API documentation.',
      tags: [
        { label: 'Spring Boot 4', color: 'green' },
        { label: 'Angular 21', color: 'blue' },
        { label: 'Railway', color: 'yellow' }
      ],
      featured: true
    },
    {
      title: 'AI Assistant UI',
      description: 'Angular 21 SPA serving as the frontend for the ITWays AI platform, with global state managed by NGXS and i18n support via ngx-translate. The journey builder offers three modes: a drag-and-drop visual node editor, a raw JSON editor with schema validation, and an AI generator that creates workflows from natural language prompts. The template editor supports FreeMarker syntax highlighting. Authentication uses JWT with MFA and RSA encryption via jsencrypt. The glassmorphic design system supports adaptive dark/light mode and is fully responsive across all screen sizes.',
      tags: [
        { label: 'Angular 21', color: 'blue' },
        { label: 'NGXS', color: 'blue' },
        { label: 'Bootstrap 5', color: 'blue' }
      ]
    },
    {
      title: 'Digital Products API (Waseel)',
      description: 'Reusable enterprise backend service built with Spring Boot 3.4 (Java 17) providing a solid foundation for digital product platforms. Integrates Twilio for SMS, Spring Mail with FreeMarker templates for rich email delivery, GeoIP2 for geolocation-based logic, and EhCache for performance. Supports JWT authentication and Google OAuth2 client flows. MapStruct handles clean DTO mapping, Swagger/OpenAPI provides full interactive documentation, and Spring Validation enforces input integrity. Designed as a plug-and-play backend that can be dropped into any product requiring user management and notifications.',
      tags: [
        { label: 'Spring Boot', color: 'green' },
        { label: 'Twilio SMS', color: 'yellow' },
        { label: 'OAuth2', color: 'green' }
      ]
    },
    {
      title: 'Employee Management System',
      description: 'Full-stack employee management application showcasing clean Spring Boot 4.0 (Java 21) REST API design with JPA/Hibernate, MapStruct DTO mapping, and Bean Validation. The Angular frontend consumes the API for complete CRUD operations on employee records with a clean, responsive UI. The entire stack is containerized with Docker Compose — spinning up a PostgreSQL database, the Spring Boot backend, and the Angular frontend as isolated services on a shared bridge network — making local setup a single command.',
      tags: [
        { label: 'Spring Boot 4', color: 'green' },
        { label: 'Angular', color: 'blue' },
        { label: 'Docker', color: 'yellow' }
      ]
    },
    {
      title: 'Investment Calculator',
      description: 'Angular 17 SPA for investment return calculations built with standalone components and typed reactive forms. Uses RxJS to deliver real-time computation as users adjust principal, interest rate, and duration — giving instant visual feedback on projected returns. Demonstrates clean Angular architecture with reactive programming patterns, proper form validation, and a fully responsive layout.',
      tags: [
        { label: 'Angular 17', color: 'blue' },
        { label: 'RxJS', color: 'blue' },
        { label: 'TypeScript', color: 'blue' }
      ]
    }
  ];
}
