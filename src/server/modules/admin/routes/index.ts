import { Router } from 'express';

import { autoRenewToken } from '../middlewares/renewToken';
import { router as authRouter } from './auth';
import { router as orderRouter } from './orders';
import { router as userRouter } from './user';

export const router = Router();

router.use('/auth', authRouter);

router.use(autoRenewToken);

router.use('/user', userRouter);
router.use('/orders', orderRouter);