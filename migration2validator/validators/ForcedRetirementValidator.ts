import { z } from 'zod';

const ForcedRetirementSchema = z.object({
	employeeId: z.number().int().nonnegative(),
	status: z.string().max(75).optional(),
	remark: z.string().optional(),
	applicationDate: z.string().datetime(),
	sendDate: z.string().datetime(),
	newRetirementDate: z.string().datetime(),
	reason: z.string().optional(),
	active: z.boolean().optional(),
	createdBy: z.string().max(75).optional(),
	createdAt: z.date().optional(),
	modifiedBy: z.string().max(75).optional(),
	modifiedAt: z.date().optional(),
});

export default ForcedRetirementSchema;