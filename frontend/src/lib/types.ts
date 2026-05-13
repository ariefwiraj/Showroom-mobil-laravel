export interface CarImage {
  id: number;
  car_id: number;
  image_url: string;
  sort_order: number;
}

export interface Car {
  id: number;
  slug: string;
  name: string;
  brand: string;
  price: number;
  year: number;
  mileage: number;
  transmission: "Manual" | "Automatic";
  fuel: "Bensin" | "Diesel" | "Hybrid" | "Electric";
  color: string;
  description: string;
  status: "available" | "sold";
  featured: boolean;
  images: CarImage[];
  created_at: string;
  updated_at: string;
}

export interface Settings {
  showroom_name: string;
  phone: string;
  address: string;
  open_hours: string;
  meta_title: string;
  meta_description: string;
}

export interface User {
  id: number;
  name: string;
  email: string;
  role: "admin";
}

export interface LoginCredentials {
  email: string;
  password: string;
}

export interface AuthState {
  user: User | null;
  token: string | null;
  isAuthenticated: boolean;
  isLoading: boolean;
}

export interface DashboardStats {
  total: number;
  available: number;
  sold: number;
}

export interface CarFormData {
  name: string;
  brand: string;
  price: number;
  year: number;
  mileage: number;
  transmission: "Manual" | "Automatic";
  fuel: "Bensin" | "Diesel" | "Hybrid" | "Electric";
  color: string;
  description: string;
  featured: boolean;
}
