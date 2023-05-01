export interface AppState {
  auth: AuthState;
}

export interface AuthState {
  currentUser: User | null;
}

export interface Trainer extends User {
  image: string;
  location: string;
  rating?: number;
  description?: string;
  linkedinLink?: string;
  instagramLink?: string;
  reviews: Review[];
  categories: Category[];
}

export interface Workout {
  id: string;
  name: string;
  exercises: Exercise[];
}

export interface Exercise {
  id: string;
  name: string;
  sets: number;
  reps: number;
}

export interface User {
  id: string;
  name: string;
  surname: string;
  email: string;
  isTrainer: boolean;
  accessToken: string;
}

export interface Category {
  id: string;
  name: string;
}

export interface Client extends User {
  trainers: Trainer[];
}

export interface Review {
  id: string;
  rating: number;
  description: string;
  createdAt: Date;
  user: Client;
}

export interface ApiResponseUser {
  data: {
    user: Omit<User, "accessToken">;
    accessToken: string;
  },
  message: string;
  status: number;
}

export interface ApiResponseTrainer {
  data: {
    user: Omit<Trainer, "accessToken">;
    accessToken: string;
  },
  message: string;
  status: number;
}

export interface TrainerCreateData {
  name: string;
  surname: string;
  username: string;
  email: string;
  password: string;
  image: string;
  location: string;
  description: string | null;
}
