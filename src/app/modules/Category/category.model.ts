import { Schema, model } from 'mongoose';
import { ICategory } from './category.interface';

const categorySchema = new Schema<ICategory>({
  name: { type: String, unique: true, required: [true, 'name is required'] },
});

export const Category = model<ICategory>('Category', categorySchema);
