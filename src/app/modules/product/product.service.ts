import { ObjectId } from 'mongoose';
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

const getSingleProductIntoDb = async (productId: ObjectId) => {
  const result = await ProductModel.findOne({ productId });
  return result;
};

const getSingleProductUpdateIntoDb = async (
  productId: string,
  updateData: Product,
) => {
  const result = await ProductModel.findByIdAndUpdate(productId, updateData, {
    new: true,
  });
  return result;
};

const deleteProductIntoDB = async (productId: ObjectId) => {
  const result = await ProductModel.deleteOne({ productId });
  return result;
};

export const ProductServices = {
  createProductIntoDb,
  getAllProductIntoDb,
  getSingleProductIntoDb,
  getSingleProductUpdateIntoDb,
  deleteProductIntoDB,
};
