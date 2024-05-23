import { Request, Response } from 'express';
import { OrderServices } from './order.service';
import OrderValidationSchema from './order.zodValidation';

// create order
const createOrder = async (req: Request, res: Response) => {
  try {
    const { order } = req.body;

    // using zod validation
    const OrderZodParseData = OrderValidationSchema.parse(order);

    const result = await OrderServices.createOrderIntoDb(OrderZodParseData);

    if (result) {
      return res.status(200).json({
        success: true,
        message: 'Order is created successfully',
        data: result,
      });
    }
    return res.status(500).json({
      success: false,
      message: 'Product is not exists',
    });
  } catch (err: any) {
    return res.status(500).json({
      success: false,
      message: 'Something went wrong',
      error: err,
    });
  }
};

// get order

const getAllOrder = async (req: Request, res: Response) => {
  try {
    const email = req.query.email as string;
    const result = await OrderServices.getAllOrderIntoDb(email);
    const data: any = result?.length;
    if (email && data > 0) {
      return res.status(200).json({
        success: true,
        message: `${email} orders data fetched successfully`,
        data: result,
      });
    } else if (data > 0) {
      return res.status(200).json({
        success: true,
        message: 'orders fetched successfully',
        data: result,
      });
    }
    return res.status(200).json({
      success: true,
      message: 'No Data Found',
      data: result,
    });
  } catch (err: any) {
    return res.status(500).json({
      success: false,
      message: 'Something went wrong',
      error: err,
    });
  }
};

export const OrderController = {
  createOrder,
  getAllOrder,
};
