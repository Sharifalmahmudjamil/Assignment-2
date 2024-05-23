import { z } from 'zod';

const OrderValidationSchema = z.object({
  email: z.string().email({ message: 'Invalid email address' }),
  productId: z.string({ required_error: 'Product ID is required' }),
  price: z
    .number({ required_error: 'Price is required' })
    .positive({ message: 'Price must be a positive number' }),
  quantity: z
    .number({ required_error: 'Quantity is required' })
    .int({ message: 'Quantity must be an integer' })
    .positive({ message: 'Quantity must be a positive number' }),
});

export default OrderValidationSchema;
