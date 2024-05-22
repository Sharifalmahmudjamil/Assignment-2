import express from 'express';
import { ProductController } from './produuct.controllar';

const router = express.Router();

router.post('/create-product', ProductController.createProduct);

router.get('/', ProductController.getAllProduct);

router.get('/:productId', ProductController.getSingleProduct);
router.put('/:productId', ProductController.updateSingleProduct);
router.delete('/:productId', ProductController.deleteSingleProduct);

export const ProductRoutes = router;
