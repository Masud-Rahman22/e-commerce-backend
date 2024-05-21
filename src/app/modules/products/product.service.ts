import { Types } from 'mongoose';
import { Product } from '../product.model';
import { TProduct } from './product.interface';

const createProduct = async (productData: TProduct) => {
    const result = await Product.create(productData);
    return result;
};

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

const updateASingleProduct = async (id: string) => {
    const result = await Product.updateOne({ _id: new Types.ObjectId(id) }, { $set: { 'inventory.quantity': 1000 } });
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