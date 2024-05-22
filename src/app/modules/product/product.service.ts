import { Product } from './product.interface';
import { ProductModel } from './product.model';

const createProductIntoDb = async (product: Product) => {
  const result = await ProductModel.create(product);
  return result;
};

const getAllProductIntoDb = async () => {
  const result = await ProductModel.find();
  return result;
};

const getSingleProductIntoDb = async (id: string) => {
  const result = await ProductModel.findOne({ id });
  return result;
};

export const ProductServices = {
  createProductIntoDb,
  getAllProductIntoDb,
  getSingleProductIntoDb,
};
