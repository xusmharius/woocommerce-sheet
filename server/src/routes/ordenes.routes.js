import { Router } from 'express';
const router = Router();
import * as ordenesController from '../controllers/ordenes.controllers';

router.get('/', ordenesController.getOrdenes);

export default router