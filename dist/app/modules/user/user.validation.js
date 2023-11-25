"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.orderValidationSchema = exports.userUpdateValidationSchema = exports.createUserValidationSchema = void 0;
const zod_1 = require("zod");
exports.createUserValidationSchema = zod_1.z.object({
    userId: zod_1.z.number().positive('userId must be a positive number'),
    username: zod_1.z.string().min(1, 'username must not be empty'),
    password: zod_1.z.string().min(1, 'password must not be empty'),
    fullName: zod_1.z.object({
        firstName: zod_1.z.string().min(1, 'firstName must not be empty'),
        lastName: zod_1.z.string().min(1, 'lastName must not be empty'),
    }),
    age: zod_1.z.number().positive('age must be a positive number'),
    email: zod_1.z.string().email('Invalid email format'),
    isActive: zod_1.z.boolean(),
    hobbies: zod_1.z.array(zod_1.z.string()).default([]),
    address: zod_1.z.object({
        street: zod_1.z.string().min(1, 'Street address must not be empty'),
        city: zod_1.z.string().min(1, 'City address must not be empty'),
        country: zod_1.z.string().min(1, 'Country address must not be empty'),
    }),
    orders: zod_1.z
        .array(zod_1.z.object({
        productName: zod_1.z.string(),
        price: zod_1.z.number().positive(),
        quantity: zod_1.z.number().positive(),
    }))
        .optional(),
});
exports.userUpdateValidationSchema = zod_1.z.object({
    userId: zod_1.z.number().positive('userId must be a positive number').optional(),
    username: zod_1.z.string().min(1, 'username must not be empty').optional(),
    password: zod_1.z.string().min(1, 'password must not be empty').optional(),
    fullName: zod_1.z
        .object({
        firstName: zod_1.z.string().min(1, 'firstName must not be empty').optional(),
        lastName: zod_1.z.string().min(1, 'lastName must not be empty').optional(),
    })
        .optional(),
    age: zod_1.z.number().positive('age must be a positive number').optional(),
    email: zod_1.z.string().email('Invalid email format').optional(),
    isActive: zod_1.z.boolean().optional(),
    hobbies: zod_1.z.array(zod_1.z.string()).default([]).optional(),
    address: zod_1.z
        .object({
        street: zod_1.z.string().min(1, 'Street address must not be empty').optional(),
        city: zod_1.z.string().min(1, 'City address must not be empty').optional(),
        country: zod_1.z
            .string()
            .min(1, 'Country address must not be empty')
            .optional(),
    })
        .optional(),
    orders: zod_1.z
        .array(zod_1.z.object({
        productName: zod_1.z.string(),
        price: zod_1.z.number().positive(),
        quantity: zod_1.z.number().positive(),
    }))
        .optional(),
});
exports.orderValidationSchema = zod_1.z.object({
    productName: zod_1.z.string(),
    price: zod_1.z.number(),
    quantity: zod_1.z.number(),
});
