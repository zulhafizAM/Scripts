import { z } from 'zod';

const AddMedicalClinicAllocationSchema = z
    .object({
    current: z.number(),
    remainder: z.number(),
    newAllocation: z.number(),
    status: z.string(),
    remark: z.string(),
    })

export default AddMedicalClinicAllocationSchema;
