import { z } from 'zod';

const AwardListFilterSchema = z
    .object({
        pageNum: z.number().int().nonnegative(),
        pageSize: z.number().int().nonnegative(),
        orderBy: z.string().max(75).nullable(),
        orderType: z.string().max(75).nullable(),
        filter: z.object({
            code: z.string().optional(),
            description: z.string().optional(),
            categoryId: z.string().optional(),
            abbrevation: z.string().optional(),
        }),
    })
    .strict();

export default AwardListFilterSchema;
