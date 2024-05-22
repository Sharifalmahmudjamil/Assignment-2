import { Product } from './product.interface';
import { ProductModel } from './product.model';

const createProductIntoDb = async (product: Product) => {
  const result = await ProductModel.create(product);
  return result;
};

const getAllProductIntoDb = async (searchTerm?: string) => {
  let query = {};
  if (searchTerm) {
    query = { name: { $regex: searchTerm, $options: 'i' } };
  }
  const result = await ProductModel.find(query);
  return result;
};

const getSingleProductIntoDb = async (id: string) => {
  const result = await ProductModel.findOne({ id });
  return result;
};

const getSingleProductUpdateIntoDb = async (
  id: string,
  updateData: Product,
) => {
  const result = await ProductModel.updateOne({ id, updateData });
  return result;
};

const deleteProductIntoDB = async (id: string) => {
  const result = await ProductModel.deleteOne({ id });
  return result;
};

export const ProductServices = {
  createProductIntoDb,
  getAllProductIntoDb,
  getSingleProductIntoDb,
  getSingleProductUpdateIntoDb,
  deleteProductIntoDB,
};
