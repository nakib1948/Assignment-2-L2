import { Model } from 'mongoose';

interface Iuser {
  userId: number;
  username: string;
  password: string;
  fullName: {
    firstName: string;
    lastName: string;
  };
  age: number;
  email: string;
  isActive: boolean;
  hobbies: string[];
  address: {
    street: string;
    city: string;
    country: string;
  };
  orders?: {
    productName: string;
    price: number;
    quantity: number;
  }[];
}
export interface UserModel extends Model<Iuser> {
  isUserExists(id: number): Promise<Iuser | null>;
}

export { Iuser };
