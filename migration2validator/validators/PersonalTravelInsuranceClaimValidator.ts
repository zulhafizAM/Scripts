import { z } from 'zod';

const PersonalTravelInsuranceClaimSchema = z.object({
	allowanceId: z.number().int().nonnegative(),
	insuranceTypes: z.string().optional(),
	startTravelDate: z.string().datetime(),
	endTravelDate: z.string().datetime(),
	reason: z.string().optional(),
	region: z.string().max(75).optional(),
	active: z.boolean().optional(),
	createdBy: z.string().max(75).optional(),
	createdAt: z.date().optional(),
	modifiedBy: z.string().max(75).optional(),
	modifiedAt: z.date().optional(),
});

export default PersonalTravelInsuranceClaimSchema;