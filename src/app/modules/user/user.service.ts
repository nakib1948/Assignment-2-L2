import User from '../models/user.model';
import { Iuser } from './user.interface';

const createUser = async (userData: Iuser): Promise<Iuser> => {
  const result = await User.create(userData);

  return result;
};

const getAllUsers = async (): Promise<Iuser[]> => {
  const result = await User.find(
    {},
    { username: 1, fullName: 1, age: 1, email: 1, address: 1 },
  );
  return result;
};

export const UserManagementService = {
  createUser,
  getAllUsers,
};
