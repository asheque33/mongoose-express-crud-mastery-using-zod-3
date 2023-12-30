import { z } from 'zod';

// using zod for Course validation
const createTagSchema = z.object({
  name: z.string(),
  isDeleted: z.boolean().default(false),
});

const createDetailsSchema = z.object({
  level: z.enum(['Beginner', 'Intermediate', 'Advanced']),
  description: z.string(),
});

// Define the main schema for ICourse
export const createCourseValidationSchema = z.object({
  title: z.string(),
  instructor: z.string(),
  categoryId: z.string(),
  price: z.number().positive({ message: 'Price must be a positive number' }),
  tags: z.array(createTagSchema),
  startDate: z.string(),
  endDate: z.string(),
  language: z.string(),
  provider: z.string(),
  durationInWeeks: z
    .number()
    .int()
    .positive({ message: 'Duration must be a positive integer.' }),
  details: createDetailsSchema,
});

// update course wit zod validator
const updateTagSchema = z.object({
  name: z.string().optional(),
  isDeleted: z.boolean().default(false).optional(),
});

const updateDetailsSchema = z.object({
  level: z.enum(['Beginner', 'Intermediate', 'Advanced']).optional(),
  description: z.string().optional(),
});

// Define the main schema for ICourse
export const updateCourseValidationSchema = z.object({
  title: z.string().optional(),
  instructor: z.string().optional(),
  categoryId: z.string().optional(),
  price: z
    .number()
    .positive({ message: 'Price must be a positive number' })
    .optional(),
  tags: z.array(updateTagSchema).optional(),
  startData: z.string().optional(),
  endData: z.string().optional(),
  language: z.string().optional(),
  provider: z.string().optional(),
  durationInWeeks: z
    .number()
    .int()
    .positive({ message: 'Duration must be a positive intger.' })
    .optional(),
  details: updateDetailsSchema.optional(),
});

export const courseValidations = {
  createCourseValidationSchema,
  updateCourseValidationSchema,
};
