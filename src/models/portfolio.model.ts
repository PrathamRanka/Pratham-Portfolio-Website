import type { IconName } from '@/data/portfolio';

export interface EducationModel {
  institution: string;
  shortName: string;
  department: string;
  degree: string;
  location: string;
  batch: string;
  years: string;
}

export interface ExperienceModel {
  company: string;
  role: string;
  date: string;
  description: string;
  current: boolean;
  logo: string;
  badge?: string;
}

export interface ProjectModel {
  name: string;
  mark: string;
  accent: string;
  description: string;
  technologies: IconName[];
  github: string;
  live?: string;
  caseStudy?: string;
  status?: 'Featured' | 'Active' | 'Completed';
  role?: string;
  date?: string;
}

export interface SkillCategoryModel {
  label: string;
  skills: { name: string; icon: IconName }[];
}

export interface HackathonModel {
  name: string;
  award?: string;
  date: string;
  location: string;
  description: string;
  projectUrl?: string;
  githubUrl?: string;
}

export interface SocialLinkModel {
  label: string;
  href: string;
}

export interface NavItemModel {
  id: string;
  label: string;
  href: string;
  iconName: 'home' | 'experience' | 'projects' | 'opensource' | 'contact';
}
