export interface MemberProject {
  title: string;
  description: string;
  technologies?: string[];
  link?: string;
  github?: string;
  image?: string;
  startDate?: string;
  endDate?: string;
  status?: 'active' | 'completed' | 'on-hold';
}

export interface MemberExperience {
  title: string;
  company: string;
  location?: string;
  startDate: string;
  endDate?: string; // If not provided, assume current
  description?: string;
  responsibilities?: string[];
  achievements?: string[];
}

export interface MemberEducation {
  degree: string;
  institution: string;
  location?: string;
  startDate?: string;
  endDate?: string;
  fieldOfStudy?: string;
  gpa?: string;
  honors?: string[];
  relevantCoursework?: string[];
}

export interface MemberAchievement {
  title: string;
  organization?: string;
  date?: string;
  description?: string;
  link?: string;
}

export interface Member {
  id: string;
  fullName: string;
  email?: string;
  major: string;
  graduationMonth?: string;
  graduationYear?: string;
  bio?: string;
  image?: string;
  linkedin?: string;
  github?: string;
  website?: string;
  projects?: MemberProject[];
  experience?: MemberExperience[];
  education?: MemberEducation[];
  achievements?: MemberAchievement[];
  skills?: string[];
  interests?: string[];
  clubs?: string[];
  role?: 'member' | 'officer' | 'alumni';
  featured?: boolean; // Featured members shown first
}

