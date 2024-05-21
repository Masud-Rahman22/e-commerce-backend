import mongoose, { Types } from 'mongoose';
import { Product } from '../product.model';
import { TProduct } from './product.interface';

const createProduct = async (productData: TProduct) => {
  const result = await Product.create(productData);
  return result;
};
// for searching too;
const getAllProducts = async (searchTerm: string) => {
  let query = {};
  if (searchTerm) {
    query = { name: { $regex: searchTerm, $options: 'i' } };
  }
  const result = await Product.find(query);
  return result;
};

const getASingleProduct = async (id: string) => {
  const result = await Product.findOne({ _id: new Types.ObjectId(id) });
  return result;
};

//Update Product Information

const updateASingleProduct = async (id: string, updateData: any) => {
  const objectId = new mongoose.Types.ObjectId(id);
  const result = await Product.findByIdAndUpdate(objectId, updateData, {
    new: true,
    runValidators: true,
  });
  return result;
};

const deleteASingleProduct = async (id: string) => {
  const result = await Product.deleteOne({ _id: new Types.ObjectId(id) });
  return result;
};

export const productServices = {
  createProduct,
  getAllProducts,
  getASingleProduct,
  updateASingleProduct,
  deleteASingleProduct,
};
