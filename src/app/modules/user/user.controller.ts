import { Request } from 'express';
import { UserManagementService } from './user.service';
import {
  createUserValidationSchema,
  userUpdateValidationSchema,
  orderValidationSchema,
} from './user.validation';

const createUser = async (req: Request, res: Response) => {
  try {
    const userData = req.body;
    const useZodvalidationData = createUserValidationSchema.parse(userData);
    const result1 =
      await UserManagementService.createUser(useZodvalidationData);
    const { password, ...result } = await result1.toObject();

    res.status(201).json({
      success: true,
      message: 'User created successfully!',
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'User creation failed.Try again',
      error: {
        code: 404,
        description: error,
      },
    });
  }
};

const getAllUsers = async (req: Request, res: Response) => {
  try {
    const result = await UserManagementService.getAllUsers();

    res.status(200).json({
      success: true,
      message: 'Users fetched successfully!',
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'failed to fatch users',
      error: {
        code: 404,
        description: error,
      },
    });
  }
};
const specificUserById = async (req: Request, res: Response) => {
  try {
    const userId = parseInt(req.params.userId);

    const result1 = await UserManagementService.specificUserById(userId);
    const { password, ...result } = await result1[0].toObject();

    res.status(200).json({
      success: true,
      message: 'User fetched successfully!',
      data: result,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message,
      error: {
        code: 404,
        description: error,
      },
    });
  }
};

const updateUser = async (req: Request, res: Response) => {
  try {
    const userData = req.body;
    const userId = parseInt(req.params.userId);
    const useZodvalidationData = userUpdateValidationSchema.parse(userData);
    const result1 = await UserManagementService.updateUser(
      userId,
      useZodvalidationData,
    );
    const { password, ...result } = await result1.toObject();
    res.status(200).json({
      status: true,
      message: 'User updated successfully',
      data: result,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message,
      error: {
        code: 404,
        description: error,
      },
    });
  }
};

const deleteUser = async (req: Request, res: Response) => {
  try {
    const userId = parseInt(req.params.userId);
    await UserManagementService.deleteUser(userId);
    res.status(200).json({
      status: true,
      message: 'User deleted successfully',
      data: null,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message,
      error: {
        code: 404,
        description: error,
      },
    });
  }
};

const addOrder = async (req: Request, res: Response) => {
  try {
    const orderData = req.body;
    const userId = parseInt(req.params.userId);
    const useZodvalidationData = await orderValidationSchema.parse(orderData);
    const result = await UserManagementService.addOrder(
      userId,
      useZodvalidationData,
    );

    res.status(200).json({
      status: true,
      message: 'Order created successfully!',
      data: null,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message,
      error: {
        code: 404,
        description: error,
      },
    });
  }
};

const singleUserOrder = async (req: Request, res: Response) => {
  try {
    const userId = parseInt(req.params.userId);

    const result = await UserManagementService.singleUserOrder(userId);

    res.status(200).json({
      success: true,
      message: 'Order fetched successfully!',
      data: { orders: result[0].orders },
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message,
      error: {
        code: 404,
        description: error,
      },
    });
  }
};

const userOrderPrice = async (req: Request, res: Response) => {
  try {
    const userId = parseInt(req.params.userId);

    const result = await UserManagementService.userOrderPrice(userId);
    const result1 = result[0].orders;

    const totalPrice: number = result1.reduce((acc, order: number): number => {
      return acc + order.price * order.quantity;
    }, 0);

    res.status(200).json({
      success: true,
      message: 'Total price calculated successfully!',
      data: { totalPrice },
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message,
      error: {
        code: 404,
        description: error,
      },
    });
  }
};

export const userController = {
  createUser,
  getAllUsers,
  specificUserById,
  updateUser,
  deleteUser,
  addOrder,
  singleUserOrder,
  userOrderPrice,
};
