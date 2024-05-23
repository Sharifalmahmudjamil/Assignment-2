import { ProductModel } from '../product/product.model';
import { ProductOrder } from './order.interface';
import { ProductOrderModel } from './order.model';

// create order
const createOrderIntoDb = async (order: ProductOrder) => {
  const result = await ProductOrderModel.create(order);
  const filter = await ProductModel.findById(order.productId);
  if (filter) {
    return result;
  }
};

// get all order
const getAllOrderIntoDb = async (email?: string) => {
  let query = {};
  if (email) {
    query = { email: { $regex: email, $options: 'i' } };
  }
  const result = await ProductOrderModel.find(query);
  return result;
};

export const OrderServices = {
  createOrderIntoDb,
  getAllOrderIntoDb,
};
