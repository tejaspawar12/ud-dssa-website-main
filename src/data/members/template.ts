// ============================================
// PORTFOLIO TEMPLATE - Just fill in your info!
// ============================================
//
// INSTRUCTIONS:
// 1. Copy this entire file and rename it to: [your-firstname-lastname].ts
//    Example: If your name is John Smith, name it: john-smith.ts
//
// 2. Replace ALL text that says "YOUR..." or "your..." with YOUR actual information
//
// 3. Keep the quotes ('' or "") around your text!
//
// 4. If a field says "OPTIONAL", you can leave it empty, remove it, or delete the entire section
//
// 5. If a field says "REQUIRED", you MUST fill it in
//
// 6. Need help? Check the README.md file in this folder or CONTRIBUTING.md in the root
//
// ============================================

import { Member } from '@/types/member';

// Export your member object - change the variable name to match your filename
export const yourFirstNameLastName: Member = {
  // ──────────────────────────────────────────
  // BASIC INFORMATION (All Required!)
  // ──────────────────────────────────────────
  
  id: 'your-firstname-lastname',  // ← REQUIRED: Replace with: your-firstname-lastname (lowercase, use hyphens)
  //    Example: If your name is John Smith, use: 'john-smith'
  
  fullName: 'Your Full Name Here',  // ← REQUIRED: Replace with your full name, like "John Smith"
  
  email: 'your.email@udel.edu',  // ← REQUIRED: Replace with your UD email address
  
  major: 'Data Science',  // ← REQUIRED: Replace with your major, like "Computer Science" or "Statistics"
  
  graduationMonth: 'May',  // ← REQUIRED: Replace with your graduation month: "May" or "December"
  
  graduationYear: '2026',  // ← REQUIRED: Replace with your graduation year, like "2025" or "2026"
  
  // ──────────────────────────────────────────
  // ABOUT YOU (Optional but Recommended)
  // ──────────────────────────────────────────
  // Write 2-3 sentences about yourself. What are you passionate about? What do you study?
  
  bio: 'Write 2-3 sentences about yourself here. What are you passionate about? What do you study? What are your research interests or career goals?',  // ← OPTIONAL: Replace with your bio
  
  // ──────────────────────────────────────────
  // SOCIAL LINKS (All Optional - but add if you have them!)
  // ──────────────────────────────────────────
  
  linkedin: 'https://linkedin.com/in/yourprofile',  // ← OPTIONAL: Replace with your LinkedIn URL (or remove this line if you don't have one)
  
  github: 'https://github.com/yourusername',  // ← OPTIONAL: Replace with your GitHub URL (or remove this line if you don't have one)
  
  website: 'https://yourwebsite.com',  // ← OPTIONAL: Replace with your personal website URL (or remove this line if you don't have one)
  
  // ──────────────────────────────────────────
  // SKILLS (Optional)
  // ──────────────────────────────────────────
  // List your technical skills. Just add skills you know, one per line.
  // If you don't want to list skills, remove this entire section.
  
  skills: [
    'Python',           // ← Add your skills here, one per line
    'Machine Learning', // ← Keep the quotes and commas!
    'Data Analysis',    // ← Add more skills below
    // Add more skills as needed - or remove lines you don't need
  ],
  
  // ──────────────────────────────────────────
  // INTERESTS (Optional)
  // ──────────────────────────────────────────
  // List your research interests or areas you're curious about.
  // If you don't want to list interests, remove this entire section.
  
  interests: [
    'Machine Learning',     // ← Add your interests here
    'Data Visualization',   // ← One per line
    // Add more interests as needed
  ],
  
  // ──────────────────────────────────────────
  // PROJECTS (Optional but Recommended!)
  // ──────────────────────────────────────────
  // Show off your work! Add projects you've worked on.
  // To add more projects, copy a project block (the part inside { }).
  
  projects: [
    {
      title: 'My First Project',  // ← REQUIRED: Name of your project
      description: 'A brief description of what this project does and why it matters. Write 1-2 sentences.',  // ← REQUIRED: Describe your project
      technologies: ['Python', 'TensorFlow'],  // ← OPTIONAL: List technologies used, like ['Python', 'React', 'SQL']
      github: 'https://github.com/yourusername/project',  // ← OPTIONAL: Link to your GitHub repo (or remove this line)
      link: 'https://project-url.com',  // ← OPTIONAL: Link to live demo/website (or remove this line)
    },
    // To add another project, copy the block above (from { to },)
    // and paste it here, then fill in the new project info
  ],
  
  // ──────────────────────────────────────────
  // EXPERIENCE (Optional)
  // ──────────────────────────────────────────
  // List your work experience, internships, research positions, etc.
  // To add more experience, copy an experience block.
  
  experience: [
    {
      title: 'Job Title or Position',  // ← REQUIRED: Your job title, like "Data Science Intern" or "Research Assistant"
      company: 'Company or Organization Name',  // ← REQUIRED: Where you worked
      location: 'City, State',  // ← OPTIONAL: Location, like "Newark, DE" (or remove this line)
      startDate: '2023',  // ← REQUIRED: When did you start? Format: "2023" or "March 2023"
      endDate: '2024',  // ← REQUIRED: When did you end? Use "Present" if still working
      description: 'Brief description of your role and what you worked on.',  // ← OPTIONAL: Overall description (or remove this line)
      responsibilities: [
        'Responsibility 1 - What did you do?',  // ← OPTIONAL: List what you did
        'Responsibility 2 - Add more details',   // ← One per line
        // Add more responsibilities as needed
      ],
      achievements: [
        'Achievement 1 - Did you win anything?',  // ← OPTIONAL: List achievements
        'Achievement 2 - What did you accomplish?',
        // Add more achievements as needed
      ],
    },
    // To add another experience, copy the block above and paste it here
  ],
  
  // ──────────────────────────────────────────
  // EDUCATION (Optional)
  // ──────────────────────────────────────────
  // List your degrees. You can add multiple degrees!
  // To add more, copy an education block.
  
  education: [
    {
      degree: 'Master of Science in Data Science',  // ← REQUIRED: Your degree name
      institution: 'University of Delaware',  // ← REQUIRED: Where did you study?
      location: 'Newark, DE',  // ← OPTIONAL: Location (or remove this line)
      startDate: '2024',  // ← OPTIONAL: Start year, like "2024"
      endDate: '2026',  // ← OPTIONAL: End year or "Present"
      fieldOfStudy: 'Data Science',  // ← OPTIONAL: Your field of study (or remove this line)
      gpa: '3.8',  // ← OPTIONAL: Your GPA if you want to share (or remove this line)
      honors: [
        'Dean\'s List',  // ← OPTIONAL: List honors/awards
        'Summa Cum Laude',
        // Add more honors as needed
      ],
      relevantCoursework: [
        'Machine Learning',  // ← OPTIONAL: List relevant courses
        'Data Structures',
        // Add more courses as needed
      ],
    },
    // To add another degree, copy the block above and paste it here
  ],
  
  // ──────────────────────────────────────────
  // ACHIEVEMENTS (Optional)
  // ──────────────────────────────────────────
  // List awards, recognitions, hackathon wins, etc.
  
  achievements: [
    {
      title: 'Award Name',  // ← REQUIRED: Name of achievement, like "Best Project Award"
      organization: 'Organization Name',  // ← OPTIONAL: Who gave the award? (or remove this line)
      date: '2025',  // ← OPTIONAL: When did you receive it? (or remove this line)
      description: 'Brief description of the achievement.',  // ← OPTIONAL: More details (or remove this line)
      link: 'https://link-to-achievement.com',  // ← OPTIONAL: Link to more info (or remove this line)
    },
    // To add another achievement, copy the block above and paste it here
  ],
  
  // ──────────────────────────────────────────
  // DON'T CHANGE THESE!
  // ──────────────────────────────────────────
  
  clubs: ['1'],  // ← DON'T CHANGE: Leave this as is (UDSSA)
  role: 'member',  // ← DON'T CHANGE: Leave as "member" (officers will be changed manually)
  featured: false,  // ← DON'T CHANGE: Leave as false (we'll set this manually if needed)
};

