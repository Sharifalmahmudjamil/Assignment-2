import { z } from 'zod';

const inventoryValidationSchema = z.object({
  quantity: z
    .number()
    .min(0)
    .nonnegative({ message: 'Quantity must be a non-negative integer.' })
    .int({ message: 'Quantity must be used integer.' }),
  inStock: z.boolean({ message: 'InStock must be a boolean value.' }),
});

const variantValidationSchema = z.object({
  type: z.string({ message: 'Type is required and must be a string.' }),
  value: z.string({ message: 'Value is required and must be a string.' }),
});

const productValidationSchema = z.object({
  name: z.string({ message: 'Name is required and must be a string.' }),
  description: z.string({
    message: 'Description is required and must be a string.',
  }),
  price: z
    .number()
    .nonnegative({ message: 'Price must be a non-negative number.' }),
  category: z.string({ message: 'Category is required and must be a string.' }),
  tags: z.array(z.string({ message: 'Each tag must be use string.' })),
  variants: z.array(variantValidationSchema),
  inventory: inventoryValidationSchema,
});
export default productValidationSchema;
