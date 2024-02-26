import { z } from 'zod';

const MaritalStatusAddSchema = z
    .object({
        code: z.string().max(255).optional(),
        description: z.string().max(255).optional(),
        active: z.boolean().optional(),
    })
    .strict();

export default MaritalStatusAddSchema;
