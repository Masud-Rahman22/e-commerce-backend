import { Product } from '../product.model';
import { TProduct } from './product.interface';

const createProduct = async (productData: TProduct) => {
    const result = await Product.create(productData);
    return result;
};

const getAllProducts = async () => {
    const result = await Product.find();
    return result;
};

const getASingleProduct = async (id: string) => {
    const result = await Product.findOne({ id });
    return result;
};

const updateASingleProduct = async (id: string) => {
    const result = await Product.updateOne({ id }, { $set: { 'inventory.quantity': 1000 } })
    return result;
}

const deleteASingleProduct = async (id: string) => {
    const result = await Product.deleteOne({ id })
    return result;
}

const searchASingleProduct = async (searchTerm: string) => {
    const result = await Product.findOne({
        $or: [
            { id: searchTerm }, { name: new RegExp(searchTerm, 'i') }
        ]
    })
    return result;
}

export const productServices = {
    createProduct,
    getAllProducts,
    getASingleProduct,
    updateASingleProduct,
    deleteASingleProduct,
    searchASingleProduct
};