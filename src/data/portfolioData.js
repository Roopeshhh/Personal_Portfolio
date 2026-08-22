export const portfolioData = {
  personal: {
    name: "Roopesh BY",
    role: "Full Stack Developer",
    experienceYears: "3+ Years",
    tagline: "Building scalable full-stack applications with MERN.",
    bio: "I'm a Full Stack Developer with 3+ years of experience building web applications with React, Node.js, Express.js, and MongoDB. I work across frontend engineering, backend REST APIs, real-time communication, performance optimization, and cloud deployment on AWS.",
    availability: "Available for Full-time Roles & Contracts",
    email: "byroopesh@gmail.com",
    phone: "+91-8618925164",
    location: "Bangalore, India",
    socials: {
      github: "https://github.com/Roopeshhh",
      linkedin: "https://www.linkedin.com/in/roopeshby",
    },
    resumeUrl: "#",
    stats: [
      { label: "Experience", value: "3+ Years" },
      { label: "Primary Stack", value: "MERN Stack" },
      { label: "Performance", value: "~40% Load Reduction" },
      { label: "Development Speed", value: "30% Faster Delivery" }
    ]
  },

  // 6 Clean Skill Categories with Core vs Secondary Hierarchy
  skills: [
    {
      category: "Frontend",
      description: "Component architecture, state management, and responsive interfaces.",
      core: ["React.js", "JavaScript (ES6+)", "TypeScript", "Redux Toolkit", "Next.js"],
      secondary: ["Context API", "React Hooks", "HTML5", "CSS3", "Tailwind CSS", "Material UI", "Bootstrap", "Responsive Design", "Lazy Loading", "Code Splitting"]
    },
    {
      category: "Backend",
      description: "RESTful services, real-time communication, and server logic.",
      core: ["Node.js", "Express.js", "RESTful APIs", "WebSockets / Socket.io"],
      secondary: ["JWT Authentication", "Role-Based Access Control (RBAC)", "Middleware Development"]
    },
    {
      category: "Databases",
      description: "Data modeling, schema design, and query optimization.",
      core: ["MongoDB", "Redis"],
      secondary: ["MySQL", "PostgreSQL", "Query Optimization", "Indexing"]
    },
    {
      category: "Cloud & DevOps",
      description: "Containerization, cloud infrastructure, and CI/CD pipelines.",
      core: ["AWS (EC2, S3)", "Docker", "GitHub Actions"],
      secondary: ["AWS SES", "CI/CD Pipelines", "Automated Deployments"]
    },
    {
      category: "Tools",
      description: "Development workflow, API testing, and collaboration tools.",
      core: ["Git", "GitHub", "Postman"],
      secondary: ["Jira", "Agile / Scrum", "Code Reviews"]
    },
    {
      category: "Architecture",
      description: "Application design patterns and software engineering practices.",
      core: ["MVC", "Microservices", "Event-Driven Architecture"],
      secondary: ["OOP", "Multi-Tenant SaaS", "Modular Component Design"]
    }
  ],

  projects: [
    {
      id: "greenloop",
      title: "GreenLoop — Smart Waste Management Platform",
      category: "Full-Stack SaaS Application",
      description: "A multi-role web platform designed for urban waste management. It provides role-specific dashboards for households, collection teams, and municipal administrators to monitor collection schedules and track status in real time.",
      tags: ["React.js", "Node.js", "Express.js", "MongoDB", "AWS (EC2, S3)", "WebSockets", "Docker"],
      highlights: [
        "Interactive dashboard displaying live bin status, pickup schedules, and alerts via WebSockets",
        "Route optimization logic using geo-coordinates and bin capacity data for collection planning",
        "Gamified Eco Score system that calculates compliance scores from user waste logs",
        "Resident complaint tracking with automated status updates",
        "Dockerized setup with GitHub Actions CI/CD targeting AWS"
      ],
      status: "in-development",
      statusMessage: "Currently in development — implementation and deployment coming soon.",
      liveUrl: null,
      githubUrl: null,
    },
    {
      id: "vivafit",
      title: "VivaFit — Health & Wellness Web Platform",
      category: "Full-Stack Fitness & Nutrition App",
      description: "A web platform designed to support personalized fitness journeys. It combines workout tracking, live coaching integration, meal planning, and wearable data sync.",
      tags: ["React.js", "Node.js", "Express.js", "MongoDB", "WebRTC", "AWS", "OAuth2", "Redis"],
      highlights: [
        "Multi-step onboarding flow tailored to user fitness goals and health history",
        "Virtual live coaching integration using WebRTC for real-time video sessions",
        "Interactive dashboard with visual progress charts for workouts and calorie tracking",
        "Meal planner and nutrition log with macronutrient breakdowns",
        "OAuth2 integration for wearable health devices (Fitbit, Google Fit, Apple Health)",
        "Secure user authentication using JWT and role-based access control"
      ],
      status: "in-development",
      statusMessage: "Currently in development — implementation and deployment coming soon.",
      liveUrl: null,
      githubUrl: null,
    }
  ],

  experience: [
    {
      role: "Software Engineer",
      company: "Cognizants",
      location: "Bangalore, India",
      period: "Apr 2023 – Present",
      summary: "Working as a Full Stack Developer building web applications using the MERN stack across SaaS and enterprise client domains.",
      responsibilities: [
        "Developed modular, reusable React component libraries with TypeScript, helping speed up frontend delivery across projects.",
        "Built and maintained backend RESTful APIs with Node.js and Express.js, implementing JWT authentication and role-based access control (RBAC).",
        "Integrated real-time communication using Socket.io for live dashboards, notifications, and chat modules.",
        "Improved frontend and database performance through lazy loading, code splitting, memoization, and MongoDB query tuning, reducing page load times by up to 40%.",
        "Assisted with containerization using Docker and automated deployments to AWS (EC2, S3) using GitHub Actions CI/CD pipelines.",
        "Participated in daily Agile/Scrum ceremonies, code reviews, and contributed to technical documentation and onboarding guides."
      ],
      technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "TypeScript", "Socket.io", "AWS EC2/S3", "Docker", "Git"]
    }
  ],

  education: {
    degree: "Bachelor of Engineering – Computer Science",
    institution: "Visvesvaraya Technological University (VTU)",
    location: "Karnataka, India",
    grade: "CGPA: 8.0"
  }
};