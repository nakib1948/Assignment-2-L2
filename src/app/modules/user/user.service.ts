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

const specificUserById = async (id: number): Promise<Iuser | null> => {
  if ((await User.isUserExists(id)) === null) {
    throw new Error('User donot exists!');
  }

  const result = await User.find({ userId: id });
  return result;
};
const updateUser = async (
  userId: number,
  userData: Iuser,
): Promise<Iuser | null> => {
  const result = await User.findOneAndUpdate({ userId: userId }, userData, {
    new: true,
  });

  return result;
};
export const UserManagementService = {
  createUser,
  getAllUsers,
  specificUserById,
  updateUser,
};
