import { Router } from 'express';
import { enRoles } from 'interfaces/models/user';
import { authRequired } from 'middlewares/authRequired';

import { getList } from './orders';

export const router = Router();
router.use(authRequired(enRoles.admin));

router.get('/', getList);
