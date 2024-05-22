import express from 'express';
import { ProductController } from './produuct.controllar';

const router = express.Router();

router.post('/create-product', ProductController.createProduct);

router.get('/', ProductController.getAllProduct);

router.get('/:productId', ProductController.getSingleProduct);

export const ProductRoutes = router;
