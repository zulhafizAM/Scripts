import { z } from 'zod';

const EditMedicalMedicalClaimSchema = z
    .object({
        id: z.number().int().nonnegative(),
        employeeId: z.number().int().nonnegative(),
        clinicId: z.number().int().nonnegative(),
        treatmentDate: z.datetimeoffset(),
        covered: z.number(),
        remainder: z.number(),
        paymentType: z.string(),
        status: z.string(),
        remark: z.string(),
    })

export default EditMedicalMedicalClaimSchema;
