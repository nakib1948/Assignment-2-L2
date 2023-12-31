import { z } from 'zod';

export const createUserValidationSchema = z.object({
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
  orders: z
    .array(
      z.object({
        productName: z.string(),
        price: z.number().positive(),
        quantity: z.number().positive(),
      }),
    )
    .optional(),
});

export const userUpdateValidationSchema = z.object({
  userId: z.number().positive('userId must be a positive number').optional(),
  username: z.string().min(1, 'username must not be empty').optional(),
  password: z.string().min(1, 'password must not be empty').optional(),
  fullName: z
    .object({
      firstName: z.string().min(1, 'firstName must not be empty').optional(),
      lastName: z.string().min(1, 'lastName must not be empty').optional(),
    })
    .optional(),
  age: z.number().positive('age must be a positive number').optional(),
  email: z.string().email('Invalid email format').optional(),
  isActive: z.boolean().optional(),
  hobbies: z.array(z.string()).default([]).optional(),
  address: z
    .object({
      street: z.string().min(1, 'Street address must not be empty').optional(),
      city: z.string().min(1, 'City address must not be empty').optional(),
      country: z
        .string()
        .min(1, 'Country address must not be empty')
        .optional(),
    })
    .optional(),
  orders: z
    .array(
      z.object({
        productName: z.string(),
        price: z.number().positive(),
        quantity: z.number().positive(),
      }),
    )
    .optional(),
});

export const orderValidationSchema = z.object({
  productName: z.string(),
  price: z.number(),
  quantity: z.number(),
});
