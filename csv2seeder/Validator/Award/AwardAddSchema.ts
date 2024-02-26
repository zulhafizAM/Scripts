import { z } from 'zod';

const AwardAddSchema = z
    .object({
        code: z.string().max(255).optional(),
        description: z.string().max(255).optional(),
        categoryId: z.string().max(255).optional(),
        abbrevation: z.string().max(255).optional(),
        active: z.boolean().optional(),
    })
    .strict();

export default AwardAddSchema;
