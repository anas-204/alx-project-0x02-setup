export interface User {
  id: number;
  name: string;
}
export interface CardProps {
  title: string;
  content: string;
  className?: string; 
}
export interface PostData {
  title: string;
  content: string;
}
export interface ButtonProps {
  children: React.ReactNode;
  size?: 'small' | 'medium' | 'large';
  shape?: 'rounded-sm' | 'rounded-md' | 'rounded-full';
  className?: string;
  onClick?: () => void;
}
export interface PostProps {
  id: number;
  title: string;
  body: string;
  userId: number;
}