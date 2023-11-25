import express from 'express';
import { userController } from './user.controller';

const router = express.Router();

router.post('/', userController.createUser);
router.get('/', userController.getAllUsers);
router.get('/:userId', userController.specificUserById);
router.put('/:userId', userController.updateUser);
router.delete('/:userId', userController.deleteUser);
router.put('/:userId/orders', userController.addOrder);
router.get('/:userId/orders', userController.singleUserOrder);
router.get('/:userId/orders/total-price', userController.userOrderPrice);

export const userRoutes = router;
