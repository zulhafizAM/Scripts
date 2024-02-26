import { z } from 'zod';

const MajorMinorAddSchema = z
    .object({
        code: z.string().max(255).optional(),
        description: z.string().max(255).optional(),
        active: z.boolean().optional(),
    })
    .strict();

export default MajorMinorAddSchema;
