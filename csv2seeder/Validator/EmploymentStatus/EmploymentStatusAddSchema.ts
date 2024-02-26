import { z } from 'zod';

const EmploymentStatusAddSchema = z
    .object({
        occSectorCode: z.string().max(255).optional(),
        occSectorName: z.string().max(255).optional(),
        active: z.boolean().optional(),
    })
    .strict();

export default EmploymentStatusAddSchema;
