import { z } from 'zod';

const EditMedicalEmployeeAllocationSchema = z
    .object({
        id: z.number().int().nonnegative(),
        employeeId: z.number().int().nonnegative(),
        covered: z.number(),
        remainder: z.number(),
        status: z.string(),
        remark: z.string(),
    })

export default EditMedicalEmployeeAllocationSchema;
