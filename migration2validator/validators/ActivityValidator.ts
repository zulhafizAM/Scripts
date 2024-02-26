import { z } from 'zod';

const ActivitySchema = z.object({
	name: z.string().max(75),
	personalDetailsId: z.number().int().nonnegative(),
	joiningDate: z.string().datetime(),
	description: z.string(),
	active: z.boolean().optional(),
	createdBy: z.string().max(75).optional(),
	createdAt: z.date().optional(),
	modifiedBy: z.string().max(75).optional(),
	modifiedAt: z.date().optional(),
});

export default ActivitySchema;