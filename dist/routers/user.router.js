import { Router } from 'express';
import { UserController } from '../controllers/user.controller.js';
import { loginRequired } from '../middlewares/login.required.js';
import { userRequiredForTasks } from '../middlewares/user-required.js';
export const userController = new UserController();
export const userRouter = Router();
userRouter.get('/:id', userController.getController);
userRouter.post('/', userController.postController);
userRouter.post('/login', userController.loginController);
userRouter.delete('/delete/:id', loginRequired, userController.deleteController);
userRouter.patch('/:id', loginRequired, userRequiredForTasks, userController.patchController);
