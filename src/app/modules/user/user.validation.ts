import { z } from 'zod';

const userValidationSchema = z.object({
  userId: z.number().positive('userId must be a positive number'),
  username: z.string().min(1, 'username must not be empty'),
  password: z.string().min(1, 'password must not be empty'),
  fullName: z.object({
    firstName: z.string().min(1, 'firstName must not be empty'),
    lastName: z.string().min(1, 'lastName must not be empty'),
  }),
  age: z.number().positive('age must be a positive number'),
  email: z.string().email('Invalid email format'),
  isActive: z.boolean(),
  hobbies: z.array(z.string()).default([]),
  address: z.object({
    street: z.string().min(1, 'Street address must not be empty'),
    city: z.string().min(1, 'City address must not be empty'),
    country: z.string().min(1, 'Country address must not be empty'),
  }),
});

export default userValidationSchema;
