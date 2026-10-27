export interface Coordinates {
  latitude: number;
  longitude: number;
}

export interface UserName {
  first: string;
  last: string;
  full: string;
}

export interface Address {
  country: string;
  division: string;
  district: string;
  city: string;
  postalCode: string;
  coordinates: Coordinates;
}

export interface Company {
  name: string;
  department: string;
  position: string;
  experienceYears: number;
}

export interface SocialMedia {
  facebook: string;
  github: string;
  linkedin: string;
}

export type OrderStatus =
  | "pending"
  | "processing"
  | "shipped"
  | "delivered"
  | "cancelled";

export interface Order {
  orderId: string;
  product: string;
  quantity: number;
  price: number;
  status: OrderStatus;
}

export type UserRole = "user" | "admin" | "moderator";

export interface Account {
  role: UserRole;
  isVerified: boolean;
  isActive: boolean;
  createdAt: string;
  lastLogin: string;
}

export interface Notifications {
  email: boolean;
  sms: boolean;
  push: boolean;
}

export interface Preferences {
  language: "bn" | "en";
  theme: "light" | "dark";
  notifications: Notifications;
}

export interface UserStats {
  totalOrders: number;
  totalSpent: number;
  loyaltyPoints: number;
}

export type Gender = "male" | "female" | "other";

export interface User {
  id: string;
  name: UserName;
  email: string;
  phone: string;
  age: number;
  gender: Gender;
  address: Address;
  company: Company;
  skills: string[];
  socialMedia: SocialMedia;
  orders: Order[];
  account: Account;
  preferences: Preferences;
  stats: UserStats;
}
