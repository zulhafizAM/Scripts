import { z } from 'zod';

const ListMedicalClinicAllocationSchema = z
    .object({
        pageNum: z.number().int().nonnegative(),
        pageSize: z.number().int().nonnegative(),
        orderBy: z.string().max(75).nullable(),
        orderType: z.string().max(75).nullable(),
        filter: z.object({
        }),
    })

export default ListMedicalClinicAllocationSchema;
