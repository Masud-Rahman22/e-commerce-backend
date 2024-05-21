import { z } from 'zod';

const orderValidateSchema = z.object({
  email: z.string().email(),
  productId: z.string(),
  price: z.number(),
  quantity: z.number().int().positive(),
});

export default orderValidateSchema;
