import { z } from 'zod';

const InstitutionAddSchema = z
    .object({
        code: z.string().max(255).optional(),
        description: z.string().max(255).optional(),
        active: z.boolean().optional(),
    })
    .strict();

export default InstitutionAddSchema;
