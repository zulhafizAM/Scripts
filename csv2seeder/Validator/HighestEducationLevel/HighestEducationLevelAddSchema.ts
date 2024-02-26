import { z } from 'zod';

const HighestEducationLevelAddSchema = z
    .object({
        code: z.string().max(255).optional(),
        description: z.string().max(255).optional(),
        active: z.boolean().optional(),
    })
    .strict();

export default HighestEducationLevelAddSchema;
