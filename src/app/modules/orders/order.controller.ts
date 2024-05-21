import { Request, Response } from "express";
import { orderServices } from "./order.services";
import orderValidateSchema from "./order.validate";
import { InsufficientQuantityError, NotFoundError } from "./order.customErrors";

// const createOrder = async (req: Request, res: Response) => {
//     try {
//         const { data: orderData } = req.body;
//         const zodParseData = orderValidateSchema.parse(orderData)
//         const result = await orderServices.createOrder(zodParseData);

//         res.status(200).json({
//             success: true,
//             message: 'Order created successfully!',
//             data: result,
//         });
//     } catch (err: any) {
//         res.status(500).json({
//             success: false,
//             message: err.message || 'Something went wrong',
//             error: err,
//         });
//     }
// };

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
    } catch (error: any) {
        if (error instanceof InsufficientQuantityError || error instanceof NotFoundError) {
            res.status(400).json({
                success: false,
                message: error.message,
            });
        } else {
            res.status(500).json({
                success: false,
                message: error.message || 'Something went wrong',
                error: error.stack,
            });
        }
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