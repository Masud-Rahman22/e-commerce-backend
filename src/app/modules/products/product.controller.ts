import { Request, Response } from 'express';
import productValidationSchema from './product.validate';
import { productServices } from './product.service';

const createProduct = async (req: Request, res: Response) => {
    try {
        const { product: productData } = req.body;
        const zodParseData = productValidationSchema.parse(productData)
        const result = await productServices.createProduct(zodParseData);

        res.status(200).json({
            success: true,
            message: 'Product created successfully!',
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

const getAllProducts = async (req: Request, res: Response) => {
    try {
        const { searchTerm } = req.query;
        const result = await productServices.getAllProducts(searchTerm as string || '');

        res.status(200).json({
            success: true,
            message: 'Products fetched successfully!',
            data: result,
        });
    } catch (error) {
        console.log(error);
    }
};

const getASingleProduct = async (req: Request, res: Response) => {
    try {
        const { productId } = req.params;
        const result = await productServices.getASingleProduct(productId);

        res.status(200).json({
            success: true,
            message: 'Product fetched successfully',
            data: result,
        });
    } catch (error) {
        console.log(error);
    }
};

const updateASingleProduct = async (req: Request, res: Response) => {
    try {
        const { productId } = req.params;
        const result = await productServices.updateASingleProduct(productId);

        res.status(200).json({
            success: true,
            message: 'Product updated successfully',
            data: result,
        });
    } catch (error) {
        console.log(error);
    }
};

const deleteASingleProduct = async (req: Request, res: Response) => {
    try {
        const { productId } = req.params;
        const result = await productServices.deleteASingleProduct(productId);

        res.status(200).json({
            success: true,
            message: 'Product deleted successfully',
            data: null,
        });
    } catch (error) {
        console.log(error);
    }
};

export const productControllers = {
    createProduct,
    getAllProducts,
    getASingleProduct,
    updateASingleProduct,
    deleteASingleProduct,
};