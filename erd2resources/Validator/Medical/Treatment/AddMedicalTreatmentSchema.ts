import { z } from 'zod';

const AddMedicalTreatmentSchema = z
    .object({
        patientId: z.number().int().nonnegative(),
    description: z.string(),
    amount: z.number(),
    status: z.string(),
    remark: z.string(),
    })

export default AddMedicalTreatmentSchema;
