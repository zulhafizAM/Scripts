import { z } from 'zod';

const FuneralArrangementRequestSchema = z.object({
	allowanceId: z.number().int().nonnegative(),
	nextOfKinId: z.number().int().nonnegative(),
	deathDate: z.string().datetime(),
	active: z.boolean().optional(),
	createdBy: z.string().max(75).optional(),
	createdAt: z.date().optional(),
	modifiedBy: z.string().max(75).optional(),
	modifiedAt: z.date().optional(),
});

export default FuneralArrangementRequestSchema;