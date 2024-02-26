import { z } from 'zod';

const AddMedicalEmployeeAllocationSchema = z
    .object({
        employeeId: z.number().int().nonnegative(),
    covered: z.number(),
    remainder: z.number(),
    status: z.string(),
    remark: z.string(),
    })

export default AddMedicalEmployeeAllocationSchema;
