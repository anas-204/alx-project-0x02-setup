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
export interface UserAddress {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: {
    lat: string;
    lng: string;
  };
}

export interface UserCompany {
  name: string;
  catchPhrase: string;
  bs: string;
}

export interface UserProps {
  id: number;
  name: string;
  username: string;
  email: string;
  address: UserAddress;
  phone: string;
  website: string;
  company: UserCompany;
}