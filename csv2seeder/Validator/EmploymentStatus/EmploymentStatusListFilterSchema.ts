import { z } from 'zod';

const EmploymentStatusListFilterSchema = z
    .object({
        pageNum: z.number().int().nonnegative(),
        pageSize: z.number().int().nonnegative(),
        orderBy: z.string().max(75).nullable(),
        orderType: z.string().max(75).nullable(),
        filter: z.object({
            occSectorCode: z.string().optional(),
            occSectorName: z.string().optional(),
        }),
    })
    .strict();

export default EmploymentStatusListFilterSchema;
