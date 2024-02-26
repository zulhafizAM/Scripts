import { z } from 'zod';

const ForcedRetirementProcessSchema = z.object({
	forcedId: z.number().int().nonnegative(),
	certifierId: z.number().int().nonnegative().optional(),
	certifiedStatus: z.string().max(75).optional(),
	certifiedRemark: z.string().optional(),
	certifiedDate: z.string().datetime(),
	confirmerId: z.number().int().nonnegative().optional(),
	confirmedStatus: z.string().max(75).optional(),
	confirmedRemark: z.string().optional(),
	confirmedDate: z.string().datetime(),
	active: z.boolean().optional(),
	createdBy: z.string().max(75).optional(),
	createdAt: z.date().optional(),
	modifiedBy: z.string().max(75).optional(),
	modifiedAt: z.date().optional(),
});

export default ForcedRetirementProcessSchema;