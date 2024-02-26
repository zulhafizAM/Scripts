import { z } from 'zod';

const EditMedicalClinicAllocationSchema = z
    .object({
        id: z.number().int().nonnegative(),
        current: z.number(),
        remainder: z.number(),
        newAllocation: z.number(),
        status: z.string(),
        remark: z.string(),
    })

export default EditMedicalClinicAllocationSchema;
