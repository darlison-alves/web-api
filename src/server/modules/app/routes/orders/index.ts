import { Router } from 'express';
import { insertOrder } from 'modules/admin/routes/orders/orders';
import { authRequired } from 'middlewares/authRequired';

export const router = Router();

router.use(authRequired());
router.post('/', insertOrder);