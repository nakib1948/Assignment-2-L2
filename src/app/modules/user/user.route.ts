import express from 'express';
import { userController } from './user.controller';

const router = express.Router();

router.post('/', userController.createUser);
router.get('/', userController.getAllUsers);
router.get('/:id', userController.specificUserById);
router.put('/:id', userController.updateUser);
router.delete('/:id', userController.deleteUser);
router.put('/:userId/orders', userController.addOrder);

export const userRoutes = router;
