import { Schema, model } from 'mongoose';
import { TOrder } from './orders/order.interface';

// Define the schema
const orderSchema = new Schema<TOrder>({
  email: { type: String, required: true },
  productId: { type: String, required: true },
  price: { type: Number, required: true },
  quantity: { type: Number, required: true },
});

// Define and export the model
export const Order = model<TOrder>('Order', orderSchema);
