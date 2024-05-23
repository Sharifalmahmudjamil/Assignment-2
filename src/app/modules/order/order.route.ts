import express from 'express';
import { OrderController } from './order.controllar';

const router = express.Router();

router.post('/', OrderController.createOrder);

router.get('/', OrderController.getAllOrder);

export const OrderRoute = router;
