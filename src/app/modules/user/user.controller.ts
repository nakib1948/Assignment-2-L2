import { Request } from 'express';
import { UserManagementService } from './user.service';
import {
  createUserValidationSchema,
  userUpdateValidationSchema,
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
    console.log(error);
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
    const id = parseInt(req.params.id);

    const result1 = await UserManagementService.specificUserById(id);
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
    const userId = parseInt(req.params.id);
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

export const userController = {
  createUser,
  getAllUsers,
  specificUserById,
  updateUser,
};
