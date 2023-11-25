import express from 'express';
import { userController } from './user.controller';

const router = express.Router();

router.post('/', userController.createUser);
router.get('/', userController.getAllUsers);
router.get('/:id', userController.specificUserById);
router.patch('/:id', userController.updateUser);

export const userRoutes = router;
