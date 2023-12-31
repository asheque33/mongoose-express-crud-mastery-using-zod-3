import { Schema, model } from 'mongoose';
import { ICategory } from './category.interface';

const categorySchema = new Schema<ICategory>({
  name: { type: String, unique: true, required: [true, 'name is required'] },
  createdBy: { type: Schema.Types.ObjectId, ref: 'User', required: true },
});

export const Category = model<ICategory>('Category', categorySchema);
