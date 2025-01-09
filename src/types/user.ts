export interface UserProfile {
  id: string;
  name: string;
  email: string;
  avatar: string;
  bio: string;
  location: string;
  phone: string;
  currency: string;
  language: string;
  notifications: {
    email: boolean;
    push: boolean;
    monthly: boolean;
  };
}
