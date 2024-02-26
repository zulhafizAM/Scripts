import { z } from 'zod';

const EmploymentStatusEditSchema = z
    .object({
        id: z.number().int().nonnegative(),
        occSectorCode: z.string().max(255).optional(),
        occSectorName: z.string().max(255).optional(),
        active: z.boolean().optional(),
    })
    .strict();

export default EmploymentStatusEditSchema;
