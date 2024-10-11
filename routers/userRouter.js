import { Router } from 'express';
import { createUser, deleteUser, getUserById, getUsers, updateUser } from '../controllers/users.js';
import { validateUserSchema } from '../middleware/validateSchema.js';

const userRouter = Router();

userRouter.route('/').get(getUsers).post(validateUserSchema, createUser);
userRouter.route('/:id').get(getUserById).put(validateUserSchema, updateUser).delete(deleteUser);

export default userRouter;
