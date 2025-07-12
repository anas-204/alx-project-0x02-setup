export interface User {
  id: number;
  name: string;
}
export interface CardProps {
  title: string;
  content: string;
  className?: string; // Optional for additional styling
}