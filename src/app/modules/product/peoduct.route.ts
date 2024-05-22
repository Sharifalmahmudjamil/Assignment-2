import express from 'express';
import { ProductController } from './produuct.controllar';

const router = express.Router();

router.post('/create-product', ProductController.createProduct);

export const ProductRoutes = router;
