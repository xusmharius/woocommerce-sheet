import { Router } from 'express';
const router = Router();
import * as authControllers from '../controllers/auth.controllers';

router.get('/', authControllers.sigIn);

export default router