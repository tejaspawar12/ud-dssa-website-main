import { Member } from '@/types/member';

export const tejasPawar: Member = {
  id: 'tejas-pawar',
  fullName: 'Tejas Pawar',
  email: 'tejas@udel.edu',
  major: 'Data Science',
  graduationMonth: 'May',
  graduationYear: '2026',
  bio: 'I\'m Tejas Pawar — an AI builder and researcher passionate about Generative AI, NLP, and agentic systems. I created SuNaAI Lab as a space where ideas move fast, experiments turn into projects, and knowledge is shared openly. My work explores how LLMs, semantic search, and memory-augmented systems can be transformed into real-world applications. From natural language understanding and dialogue systems to cloud-native AI deployment, I focus on creating tools that are not only technically sound but also impactful for learners, researchers, and industries.',
  linkedin: 'https://linkedin.com/in/tejaspawar',
  github: 'https://github.com/tejaspawar',
  website: 'https://sunaailab.com',
  skills: [
    'Python',
    'LLMs',
    'RAG',
    'Fine-tuning',
    'Agentic AI',
    'NLP',
    'AR/VR AI',
    'FastAPI',
    'Flask',
    'Docker',
    'AWS (Bedrock, S3, Lambda)',
    'GCP (Vertex AI)',
    'JavaScript',
    'SQL',
    'PHP'
  ],
  interests: [
    'Generative AI',
    'Agentic AI',
    'Natural Language Understanding',
    'Dialogue Systems',
    'Cloud-native AI Deployment',
    'Memory-augmented Systems',
    'Multi-agent Workflows'
  ],
  clubs: ['1'],
  role: 'officer',
  featured: true,
  experience: [
    {
      title: 'Graduate Assistant',
      company: 'University of Delaware – IT Academic Technology Services',
      location: 'Newark, DE, USA',
      startDate: '2025',
      endDate: 'Present',
      description: 'Contributing to the UD StudyAiDE project (ats.udel.edu/udstudyaide), an AI-powered platform designed to enhance teaching and learning at scale.',
      responsibilities: [
        'Developing agentic AI systems that enable autonomous and intelligent support for academic use cases',
        'Fine-tuning large language models (LLMs) to specialize them for education-focused tasks such as summarization, topic review, and personalized assistance',
        'Leveraging AWS Bedrock services to deploy, scale, and manage LLM-based applications in a secure cloud environment',
        'Building and maintaining backend workflows that ensure smooth integration of AI capabilities into the StudyAiDE ecosystem'
      ],
      achievements: [
        'Applied Generative AI, NLP, and cloud-native deployment in a production-level academic platform',
        'Shaped how AI can be used responsibly in higher education'
      ]
    },
    {
      title: 'Machine Learning Intern',
      company: 'LogicMo Systems Pvt. Ltd.',
      location: 'Pune, Maharashtra, India',
      startDate: 'March 2023',
      endDate: 'July 2024',
      description: 'Worked on a computer vision project focusing on solving challenges related to video and image data processing.',
      responsibilities: [
        'Designed and trained computer vision models to analyze video streams and image datasets for object detection, classification, and feature extraction',
        'Implemented end-to-end ML pipelines, including preprocessing (frame extraction, noise reduction, normalization) and feature engineering',
        'Optimized model performance through fine-tuning, hyperparameter tuning, and evaluation using standard CV benchmarks',
        'Applied PyTorch deep learning frameworks to deploy robust vision solutions',
        'Documented workflows and experimental results, ensuring reproducibility and clarity for future engineering teams'
      ]
    },
    {
      title: 'Independent AI Researcher',
      company: 'SuNaAI Lab',
      location: 'Remote',
      startDate: '2025',
      endDate: 'Present',
      description: 'Building M-Maze (memory-augmented assistant), DebateGPT (AI debate system), AR cybertext, and other AI research projects.',
      responsibilities: [
        'Research and development of cutting-edge AI systems',
        'Architect and build AI platforms and tools',
        'Share insights through blogs, posts, and collaborative learning'
      ]
    }
  ],
  education: [
    {
      degree: 'Master of Science in Data Science',
      institution: 'University of Delaware',
      location: 'Newark, DE, USA',
      startDate: '2024',
      endDate: '2026'
    },
    {
      degree: 'Bachelor of Engineering Honors in Data Science',
      institution: 'Savitribai Phule Pune University',
      location: 'Pune, Maharashtra, India',
      startDate: '2022',
      endDate: '2024'
    },
    {
      degree: 'Bachelor of Engineering in Electronics & Telecommunication',
      institution: 'Savitribai Phule Pune University',
      location: 'Pune, Maharashtra, India',
      startDate: '2020',
      endDate: '2024'
    }
  ],
  projects: [
    {
      title: 'M-Maze',
      description: 'Memory-augmented AI assistant using Qdrant & agentic AI. Advanced AI system with long-term memory capabilities and intelligent agent workflows.',
      technologies: ['Python', 'Qdrant', 'Agentic AI', 'LLMs', 'RAG'],
      github: 'https://github.com/tejaspawar/m-maze',
      link: 'https://sunaailab.com/projects/m-maze',
      status: 'active'
    },
    {
      title: 'DebateGPT',
      description: 'Voice-based AI debate platform leveraging AWS Bedrock, Polly, and Transcribe services for natural language processing and speech synthesis.',
      technologies: ['AWS Bedrock', 'AWS Polly', 'AWS Transcribe', 'Python', 'FastAPI'],
      github: 'https://github.com/tejaspawar/debategpt',
      link: 'https://sunaailab.com/projects/debategpt',
      status: 'active'
    },
    {
      title: 'AR Hackathon Project',
      description: 'Real-time 3D cybertext generator using LLM, Blender, and A-Frame. Award-winning project combining generative AI with augmented reality for immersive text experiences.',
      technologies: ['LLMs', 'Blender', 'A-Frame', 'AR', 'JavaScript', 'WebGL'],
      github: 'https://github.com/tejaspawar/ar-cybertext',
      link: 'https://sunaailab.com/projects/ar-cybertext',
      status: 'completed'
    },
    {
      title: 'SuNaAI Lab Platform',
      description: 'Collaborative AI lab website and project hub. Modern web platform built with Next.js, Tailwind CSS, and Docker for showcasing AI research and projects.',
      technologies: ['Next.js', 'Tailwind CSS', 'Docker', 'TypeScript', 'React'],
      github: 'https://github.com/tejaspawar/sunaai-lab',
      link: 'https://sunaailab.com',
      status: 'active'
    }
  ],
  achievements: [
    {
      title: 'Creativity & Originality Prize',
      organization: 'HensStreet Hacks 2025',
      date: 'August 2025',
      description: 'Won for AR + GenAI project combining generative AI with augmented reality'
    },
    {
      title: 'Project Presentations',
      organization: 'AI Makerspace, University of Delaware',
      description: 'Presented projects and research findings'
    },
    {
      title: 'Founded SuNaAI Lab',
      organization: 'Collaborative AI Lab',
      description: 'Created a space for AI projects and research collaboration',
      link: 'https://sunaailab.com'
    }
  ]
};

