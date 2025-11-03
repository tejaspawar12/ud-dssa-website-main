import { Member } from '@/types/member';

export const testUser: Member = {
  id: 'test-user',
  fullName: 'Alex Test User',
  email: 'atest@udel.edu',
  major: 'Data Science',
  graduationMonth: 'May',
  graduationYear: '2026',
  
  bio: 'I\'m a data science student at the University of Delaware with a passion for machine learning and statistical analysis. I enjoy working on projects that combine data insights with practical applications. My goal is to pursue a career in data science and contribute to meaningful research in the field.',
  
  linkedin: 'https://linkedin.com/in/alex-test-user',
  github: 'https://github.com/alex-test-user',
  website: 'https://alex-test-user.dev',
  
  skills: [
    'Python',
    'R',
    'Machine Learning',
    'Data Analysis',
    'SQL',
    'Pandas',
    'NumPy',
    'Scikit-learn',
    'TensorFlow',
    'Data Visualization',
    'Statistical Modeling'
  ],
  
  interests: [
    'Machine Learning',
    'Deep Learning',
    'Data Visualization',
    'Statistical Analysis',
    'Natural Language Processing',
    'Predictive Modeling'
  ],
  
  projects: [
    {
      title: 'Customer Churn Prediction Model',
      description: 'Developed a machine learning model to predict customer churn using logistic regression and random forest classifiers. Achieved 85% accuracy and helped identify key factors contributing to customer retention.',
      technologies: ['Python', 'Scikit-learn', 'Pandas', 'Matplotlib'],
      github: 'https://github.com/alex-test-user/churn-prediction',
      link: 'https://alex-test-user.dev/projects/churn-prediction'
    },
    {
      title: 'Real Estate Price Analysis Dashboard',
      description: 'Created an interactive dashboard for analyzing real estate prices across different neighborhoods. Built using Python and Plotly for dynamic visualizations.',
      technologies: ['Python', 'Plotly', 'Dash', 'Pandas', 'Geopandas'],
      github: 'https://github.com/alex-test-user/real-estate-dashboard'
    },
    {
      title: 'Sentiment Analysis of Social Media Data',
      description: 'Built a sentiment analysis tool that processes Twitter data to classify tweets as positive, negative, or neutral. Used NLP techniques and transformer models for text classification.',
      technologies: ['Python', 'NLTK', 'Transformers', 'Pandas', 'Twitter API'],
      github: 'https://github.com/alex-test-user/sentiment-analysis'
    }
  ],
  
  experience: [
    {
      title: 'Data Science Intern',
      company: 'DataTech Solutions',
      location: 'Wilmington, DE',
      startDate: 'June 2024',
      endDate: 'August 2024',
      description: 'Worked on data cleaning, analysis, and model development for client projects. Collaborated with a team of data scientists to deliver insights and recommendations.',
      responsibilities: [
        'Cleaned and preprocessed large datasets using Python and SQL',
        'Developed predictive models for customer behavior analysis',
        'Created data visualizations and reports for stakeholders',
        'Assisted in model deployment and performance monitoring'
      ],
      achievements: [
        'Improved model accuracy by 12% through feature engineering',
        'Presented findings to executive team, leading to new project initiatives'
      ]
    },
    {
      title: 'Research Assistant',
      company: 'University of Delaware - Data Science Lab',
      location: 'Newark, DE',
      startDate: 'September 2024',
      endDate: 'Present',
      description: 'Assisting with research projects focusing on machine learning applications in healthcare data.',
      responsibilities: [
        'Literature review and data collection for research papers',
        'Implementation of machine learning algorithms',
        'Statistical analysis and interpretation of results',
        'Documentation and code maintenance for research repositories'
      ]
    }
  ],
  
  education: [
    {
      degree: 'Master of Science in Data Science',
      institution: 'University of Delaware',
      location: 'Newark, DE',
      startDate: '2024',
      endDate: '2026',
      fieldOfStudy: 'Data Science',
      gpa: '3.7',
      honors: [
        'Dean\'s List Fall 2024'
      ],
      relevantCoursework: [
        'Machine Learning',
        'Statistical Methods',
        'Data Mining',
        'Big Data Analytics',
        'Deep Learning',
        'Time Series Analysis'
      ]
    },
    {
      degree: 'Bachelor of Science in Computer Science',
      institution: 'University of Delaware',
      location: 'Newark, DE',
      startDate: '2020',
      endDate: '2024',
      fieldOfStudy: 'Computer Science',
      gpa: '3.6',
      relevantCoursework: [
        'Data Structures',
        'Algorithms',
        'Database Systems',
        'Software Engineering',
        'Statistics'
      ]
    }
  ],
  
  achievements: [
    {
      title: 'Best Data Visualization Project',
      organization: 'UD Data Science Hackathon 2024',
      date: 'November 2024',
      description: 'Won first place for creating an innovative interactive visualization of climate change data.'
    },
    {
      title: 'Outstanding Academic Achievement',
      organization: 'University of Delaware',
      date: 'Spring 2024',
      description: 'Recognized for academic excellence in data science coursework.'
    }
  ],
  
  clubs: ['1'],
  role: 'member',
  featured: false
};

