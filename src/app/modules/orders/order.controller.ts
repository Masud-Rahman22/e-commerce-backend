import { Request, Response } from "express";
import { orderServices } from "./order.services";
import orderValidateSchema from "./order.validate";

const createOrder = async (req: Request, res: Response) => {
    try {
        const { data: orderData } = req.body;
        const zodParseData = orderValidateSchema.parse(orderData)
        const result = await orderServices.createOrder(zodParseData);

        res.status(200).json({
            success: true,
            message: 'Order created successfully!',
            data: result,
        });
    } catch (err: any) {
        res.status(500).json({
            success: false,
            message: err.message || 'Something went wrong',
            error: err,
        });
    }
};

const getAllOrders = async (req: Request, res: Response) => {
    try {
        const { email } = req.query;
        const result = await orderServices.getAllOrders(email as string || '');

        res.status(200).json({
            success: true,
            message: 'Orders fetched successfully!',
            data: result,
        });
    } catch (error) {
        console.log(error);
    }
};

export const orderControllers = {
    createOrder,
    getAllOrders
}