import { z } from 'zod';

const AddMedicalPatientSchema = z
    .object({
        claimId: z.number().int().nonnegative(),
        relationshipId: z.number().int().nonnegative(),
        placementId: z.number().int().nonnegative(),
    name: z.string(),
    identityDocumentCard: z.string(),
    status: z.string(),
    remark: z.string(),
    })

export default AddMedicalPatientSchema;
