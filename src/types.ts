export interface Project {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  category: string;
  description: string;
  fullDescription: string;
  image: string;
  tags: string[];
  demoUrl: string;
  githubUrl: string;
  metrics: { label: string; value: string }[];
  highlights: string[];
  role: string;
  year: string;
}

export interface WorkExperience {
  id: string;
  company: string;
  role: string;
  period: string;
  bullets: string[];
}

export interface EducationItem {
  institution: string;
  degree: string;
  period: string;
  cgpa?: string;
}

export interface LanguageItem {
  language: string;
  proficiency: string;
}

export interface ProfileInfo {
  name: string;
  title: string;
  tagline: string;
  location: string;
  availabilityStatus: string;
  bio: string;
  avatarUrl: string;
  githubUrl: string;
  linkedinUrl: string;
  twitterUrl: string;
  email: string;
  phone: string;
  yearsOfExperience: string;
  completedProjectsCount: string;
  skillsCategorized: {
    languagesAndCore: string[];
    backendAndState: string[];
    testingAndTooling: string[];
  };
  workExperiences: WorkExperience[];
  education: EducationItem[];
  certifications: string[];
  languages: LanguageItem[];
}

