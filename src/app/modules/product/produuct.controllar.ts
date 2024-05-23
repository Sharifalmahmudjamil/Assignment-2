import { Request, Response } from 'express';
import { ProductServices } from './product.service';

import productValidationSchema from './product.zodValidation';
// create product
const createProduct = async (req: Request, res: Response) => {
  try {
    const { product: ProductData } = req.body;

    // data validation using zod
    const zodParseData = productValidationSchema.parse(ProductData);

    const result = await ProductServices.createProductIntoDb(zodParseData);

    //   send response
    res.status(200).json({
      success: true,
      message: 'Product is create successfully',
      data: result,
    });
    return res.status(500).json({
      success: false,
      message: `${ProductData.name} is already exists`,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: 'something went wrong',
      error: err,
    });
  }
};

// get all product

const getAllProduct = async (req: Request, res: Response) => {
  try {
    const searchTerm = req.query.searchTerm as string;
    // console.log(searchTerm);
    const result = await ProductServices.getAllProductIntoDb(searchTerm);
    //   send response
    res.status(200).json({
      success: true,
      message: 'Products fetched successfully!',
      data: result,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: 'something went wrong',
      error: err,
    });
  }
};

// get Single product

const getSingleProduct = async (req: Request, res: Response) => {
  try {
    const { productId } = req.body;

    const result = await ProductServices.getSingleProductIntoDb(productId);
    //   send response
    res.status(200).json({
      success: true,
      message: 'Products fetched successfully!',
      data: result,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: 'something went wrong',
      error: err,
    });
  }
};

// update single product
const updateSingleProduct = async (req: Request, res: Response) => {
  try {
    const { product } = req.body;
    const { productId } = req.params;

    const result = await ProductServices.getSingleProductUpdateIntoDb(
      productId,
      product,
    );
    res.status(200).json({
      success: true,
      message: 'Product updated successfully',
      data: result,
    });
  } catch (err: any) {
    res.status(500).json({
      success: false,
      message: 'Something went Wrong' || err.message,
      Error: err,
    });
  }
};

// product delete
const deleteSingleProduct = async (req: Request, res: Response) => {
  try {
    const { productId } = req.body;
    const result = await ProductServices.deleteProductIntoDB(productId);
    res.status(200).json({
      success: true,
      message: 'Product Deleted successfully',
      data: result,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: 'Something went Wrong',
      Error: err,
    });
  }
};
export const ProductController = {
  createProduct,
  getAllProduct,
  getSingleProduct,
  updateSingleProduct,
  deleteSingleProduct,
};
