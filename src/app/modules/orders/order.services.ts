import { Order } from '../order.model';
import { Product } from '../product.model';
import { InsufficientQuantityError, NotFoundError } from './order.customErrors';
import { TOrder } from './order.interface';

// const createOrder = async (orderData: TOrder) => {
//     const result = await Order.create(orderData);
//     return result;
// };
const createOrder = async (orderData: TOrder) => {
  const session = await Order.startSession();
  session.startTransaction();

  try {
    // Step 1: Create the order
    const order = new Order(orderData);
    await order.save({ session });

    // Step 2: Update the product quantity
    const product = await Product.findById(orderData.productId).session(
      session,
    );
    if (!product) {
      throw new NotFoundError('Product not found');
    }

    if (product.inventory.quantity < orderData.quantity) {
      throw new InsufficientQuantityError(
        'Insufficient quantity available in inventory',
      );
    }

    product.inventory.quantity -= orderData.quantity;

    // Step 3: Update the inStock property if quantity becomes zero
    if (product.inventory.quantity === 0) {
      product.inventory.inStock = false;
    }

    await product.save({ session });

    await session.commitTransaction();
    session.endSession();

    return order;
  } catch (error) {
    await session.abortTransaction();
    session.endSession();
    throw error;
  }
};
// for searching too;
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
  getAllOrders,
};
