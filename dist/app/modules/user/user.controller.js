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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userController = void 0;
const user_service_1 = require("./user.service");
const user_validation_1 = require("./user.validation");
const createUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const userData = req.body;
        const useZodvalidationData = user_validation_1.createUserValidationSchema.parse(userData);
        const result1 = yield user_service_1.UserManagementService.createUser(useZodvalidationData);
        const _a = yield result1.toObject(), { password } = _a, result = __rest(_a, ["password"]);
        res.status(201).json({
            success: true,
            message: 'User created successfully!',
            data: result,
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: 'User creation failed.Try again',
            error: {
                code: 404,
                description: error,
            },
        });
    }
});
const getAllUsers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield user_service_1.UserManagementService.getAllUsers();
        res.status(200).json({
            success: true,
            message: 'Users fetched successfully!',
            data: result,
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: 'failed to fatch users',
            error: {
                code: 404,
                description: error,
            },
        });
    }
});
const specificUserById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const userId = parseInt(req.params.userId);
        const result1 = yield user_service_1.UserManagementService.specificUserById(userId);
        const _b = yield result1[0].toObject(), { password } = _b, result = __rest(_b, ["password"]);
        res.status(200).json({
            success: true,
            message: 'User fetched successfully!',
            data: result,
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
            error: {
                code: 404,
                description: error,
            },
        });
    }
});
const updateUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const userData = req.body;
        const userId = parseInt(req.params.userId);
        const useZodvalidationData = user_validation_1.userUpdateValidationSchema.parse(userData);
        const result1 = yield user_service_1.UserManagementService.updateUser(userId, useZodvalidationData);
        const _c = yield result1.toObject(), { password } = _c, result = __rest(_c, ["password"]);
        res.status(200).json({
            status: true,
            message: 'User updated successfully!',
            data: result,
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
            error: {
                code: 404,
                description: error,
            },
        });
    }
});
const deleteUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const userId = parseInt(req.params.userId);
        yield user_service_1.UserManagementService.deleteUser(userId);
        res.status(200).json({
            status: true,
            message: 'User deleted successfully',
            data: null,
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
            error: {
                code: 404,
                description: error,
            },
        });
    }
});
const addOrder = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const orderData = req.body;
        const userId = parseInt(req.params.userId);
        const useZodvalidationData = yield user_validation_1.orderValidationSchema.parse(orderData);
        const result = yield user_service_1.UserManagementService.addOrder(userId, useZodvalidationData);
        res.status(200).json({
            status: true,
            message: 'Order created successfully!',
            data: null,
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
            error: {
                code: 404,
                description: error,
            },
        });
    }
});
const singleUserOrder = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const userId = parseInt(req.params.userId);
        const result = yield user_service_1.UserManagementService.singleUserOrder(userId);
        res.status(200).json({
            success: true,
            message: 'Order fetched successfully!',
            data: { orders: result[0].orders },
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
            error: {
                code: 404,
                description: error,
            },
        });
    }
});
const userOrderPrice = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const userId = parseInt(req.params.userId);
        const result = yield user_service_1.UserManagementService.userOrderPrice(userId);
        const result1 = result[0].orders;
        const totalPrice = result1.reduce((acc, order) => {
            return acc + order.price * order.quantity;
        }, 0);
        res.status(200).json({
            success: true,
            message: 'Total price calculated successfully!',
            data: { totalPrice },
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
            error: {
                code: 404,
                description: error,
            },
        });
    }
});
exports.userController = {
    createUser,
    getAllUsers,
    specificUserById,
    updateUser,
    deleteUser,
    addOrder,
    singleUserOrder,
    userOrderPrice,
};
