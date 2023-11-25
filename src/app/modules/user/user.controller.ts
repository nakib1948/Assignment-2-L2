import { Request } from 'express';
import { UserManagementService } from './user.service';
import userValidationSchema from './user.validation';

const createUser = async (req: Request, res: Response) => {
  try {
    const userData = req.body;
    const useZodvalidationData = userValidationSchema.parse(userData);
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

export const userController = {
  createUser,
  getAllUsers,
};
