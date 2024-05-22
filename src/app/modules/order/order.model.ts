import { Schema, model } from 'mongoose';
import { ProductOrder } from './order.interface';

const ProductOrderSchema = new Schema<ProductOrder>({
  email: {
    type: String,
    required: true,
  },
  productId: {
    type: String,
    required: true,
    unique: true,
  },
  price: {
    type: Number,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
});

export const ProductOrderModel = model<ProductOrder>(
  'order',
  ProductOrderSchema,
);
