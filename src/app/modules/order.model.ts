import { Schema, Document, model } from 'mongoose';

// Define the interface for the schema
interface OrderDocument extends Document {
    EMAIL: string;
    PRODUCTID: string;
    PRICE: number;
    QUANTITY: number;
}

// Define the schema
const orderSchema = new Schema<OrderDocument>({
    EMAIL: { type: String, required: true },
    PRODUCTID: { type: String, required: true },
    PRICE: { type: Number, required: true },
    QUANTITY: { type: Number, required: true },
});

// Define and export the model
export const OrderModel = model<OrderDocument>('Order', orderSchema);
