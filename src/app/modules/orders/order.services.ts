import { Order } from "../order.model";
import { TOrder } from "./order.interface";

const createOrder = async (orderData: TOrder) => {
    const result = await Order.create(orderData);
    return result;
};

const getAllOrders = async (email: string) => {
    let query = {};
    if (email) {
        query = { email: { $regex: email, $options: 'i' } };
    }
    const result = await Order.find(query);
    return result;
};

export const orderServices = {
    createOrder,
    getAllOrders
}