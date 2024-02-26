import { z } from 'zod';

const EditMedicalTreatmentSchema = z
    .object({
        id: z.number().int().nonnegative(),
        patientId: z.number().int().nonnegative(),
        description: z.string(),
        amount: z.number(),
        status: z.string(),
        remark: z.string(),
    })

export default EditMedicalTreatmentSchema;
