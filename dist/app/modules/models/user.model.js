"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const userSchema = new mongoose_1.Schema({
    userId: {
        type: Number,
        unique: true,
        required: [true, 'userId is required'],
    },
    username: {
        type: String,
        required: [true, 'username is required'],
    },
    password: {
        type: String,
        required: [true, 'password is required'],
    },
    fullName: {
        firstName: {
            type: String,
            required: [true, 'firstName is required'],
        },
        lastName: {
            type: String,
            required: [true, 'lastName is required'],
        },
    },
    age: {
        type: Number,
        required: [true, 'age is required'],
    },
    email: {
        type: String,
        unique: true,
        required: [true, 'email is required'],
        lowercase: true,
    },
    isActive: {
        type: Boolean,
        required: [true, 'true or false required'],
    },
    hobbies: [String],
    address: {
        street: {
            type: String,
            required: [true, 'Street address is required'],
        },
        city: {
            type: String,
            required: [true, 'City address is required'],
        },
        country: {
            type: String,
            required: [true, 'Conutry address id required'],
        },
    },
    orders: {
        type: [
            {
                productName: String,
                price: Number,
                quantity: Number,
            },
        ],
        default: [],
    },
});
userSchema.statics.isUserExists = function (id) {
    return __awaiter(this, void 0, void 0, function* () {
        const existingUser = yield User.findOne({ userId: id });
        return existingUser;
    });
};
const User = (0, mongoose_1.model)('User', userSchema);
exports.default = User;
