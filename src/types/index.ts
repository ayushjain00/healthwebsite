// User Types
export interface User {
  id: string;
  email: string;
  name: string;
  role: UserRole;
  avatar?: string;
  createdAt: Date;
}

export enum UserRole {
  Researcher = 'researcher',
  Company = 'company',
  Admin = 'admin',
}

// Research Types
export interface Research {
  id: string;
  title: string;
  abstract: string;
  tags: string[];
  field: string;
  author: User;
  uploadDate: Date;
  isPremium: boolean;
  price: number;
  views: number;
  downloads: number;
  coverImage?: string;
}

export interface ResearchFilters {
  search?: string;
  field?: string;
  tags?: string[];
  date?: 'newest' | 'oldest';
  premium?: boolean;
}

// Dashboard Types
export interface ResearcherStats {
  totalUploads: number;
  totalViews: number;
  totalDownloads: number;
  totalEarnings: number;
  recentViews: { date: string; count: number }[];
  recentEarnings: { date: string; amount: number }[];
}

export interface CompanyStats {
  subscribed: number;
  accessed: number;
  favorites: number;
  recommendedTopics: string[];
  recentActivity: { date: string; type: string; paper: string }[];
}