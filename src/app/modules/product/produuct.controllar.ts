import { Request, Response } from 'express';
import { ProductServices } from './product.service';

// create product
const createProduct = async (req: Request, res: Response) => {
  try {
    const { product: ProductData } = req.body;

    const result = await ProductServices.createProductIntoDb(ProductData);

    //   send response
    res.status(200).json({
      success: true,
      message: 'Product is create successfully',
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

// get all product

const getAllProduct = async (req: Request, res: Response) => {
  try {
    const result = await ProductServices.getAllProductIntoDb();
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
    const { productId } = req.params;

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

export const ProductController = {
  createProduct,
  getAllProduct,
  getSingleProduct,
};
