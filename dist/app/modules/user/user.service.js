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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserManagementService = void 0;
const user_model_1 = __importDefault(require("../models/user.model"));
const createUser = (userData) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield user_model_1.default.create(userData);
    return result;
});
const getAllUsers = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield user_model_1.default.find({}, { username: 1, fullName: 1, age: 1, email: 1, address: 1 });
    return result;
});
const specificUserById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    if ((yield user_model_1.default.isUserExists(id)) === null) {
        throw new Error('User donot exists!');
    }
    const result = yield user_model_1.default.find({ userId: id });
    return result;
});
const updateUser = (userId, userData) => __awaiter(void 0, void 0, void 0, function* () {
    if ((yield user_model_1.default.isUserExists(userId)) === null) {
        throw new Error('User donot exists!');
    }
    const result = yield user_model_1.default.findOneAndUpdate({ userId }, userData, {
        new: true,
    });
    return result;
});
const deleteUser = (userId) => __awaiter(void 0, void 0, void 0, function* () {
    if ((yield user_model_1.default.isUserExists(userId)) === null) {
        throw new Error('User donot exists!');
    }
    const result = yield user_model_1.default.findOneAndDelete({ userId });
    return result;
});
const addOrder = (userId, orderData) => __awaiter(void 0, void 0, void 0, function* () {
    if ((yield user_model_1.default.isUserExists(userId)) === null) {
        throw new Error('User donot exists!');
    }
    const result = yield user_model_1.default.findOneAndUpdate({ userId }, { $push: { orders: orderData } }, { new: true, select: 'orders' });
    return result;
});
const singleUserOrder = (userId) => __awaiter(void 0, void 0, void 0, function* () {
    if ((yield user_model_1.default.isUserExists(userId)) === null) {
        throw new Error('User donot exists!');
    }
    const result = yield user_model_1.default.find({ userId }, { orders: 1 });
    return result;
});
const userOrderPrice = (userId) => __awaiter(void 0, void 0, void 0, function* () {
    if ((yield user_model_1.default.isUserExists(userId)) === null) {
        throw new Error('User donot exists!');
    }
    const result = yield user_model_1.default.find({ userId }, { orders: 1 });
    return result;
});
exports.UserManagementService = {
    createUser,
    getAllUsers,
    specificUserById,
    updateUser,
    deleteUser,
    addOrder,
    singleUserOrder,
    userOrderPrice,
};
