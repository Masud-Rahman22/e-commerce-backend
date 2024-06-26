// product.model.ts
import { Schema, Document, model } from 'mongoose';
import { TProduct, TVariant, TInventory } from './products/product.interface';

// Variant Schema
const variantSchema = new Schema<TVariant>({
  type: { type: String, required: true },
  value: { type: String, required: true },
});

// Inventory Schema
const inventorySchema = new Schema<TInventory>({
  quantity: { type: Number, required: true },
  inStock: { type: Boolean, required: true },
});

// Product Schema
const productSchema = new Schema<TProduct & Document>({
  name: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  category: { type: String, required: true },
  tags: { type: [String], required: true },
  variants: { type: [variantSchema], required: true },
  inventory: { type: inventorySchema, required: true },
});

// Product Model
export const Product = model<TProduct>('Product', productSchema);
