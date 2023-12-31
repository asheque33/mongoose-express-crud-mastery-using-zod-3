import { z } from 'zod';

const categoryValidationSchema = z.object({
  name: z.string(),
  createdBy: z.string(),
});

export default categoryValidationSchema;
