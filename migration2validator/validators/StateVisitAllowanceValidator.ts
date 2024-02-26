import { z } from 'zod';

const StateVisitAllowanceSchema = z.object({
	allowanceId: z.number().int().nonnegative(),
	stateId: z.number().int().nonnegative(),
	reason: z.string().optional(),
	amount: z.number().optional(),
	active: z.boolean().optional(),
	createdBy: z.string().max(75).optional(),
	createdAt: z.date().optional(),
	modifiedBy: z.string().max(75).optional(),
	modifiedAt: z.date().optional(),
});

export default StateVisitAllowanceSchema;