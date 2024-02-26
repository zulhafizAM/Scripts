import { z } from 'zod';

const SchemeOfServiceEditSchema = z
    .object({
        id: z.number().int().nonnegative(),
        code: z.string().max(255).optional(),
        description: z.string().max(255).optional(),
        serviceClassId: z.string().max(255).optional(),
        active: z.boolean().optional(),
    })
    .strict();

export default SchemeOfServiceEditSchema;
