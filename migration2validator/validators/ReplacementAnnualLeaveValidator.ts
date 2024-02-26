import { z } from 'zod';

const ReplacementAnnualLeaveSchema = z.object({
	employeeId: z.number().int().nonnegative(),
	accumulatedLeave: z.number().int(),
	isDeducted: z.boolean(),
	amount: z.number(),
	endDate: z.string().datetime(),
	status: z.string().max(255),
	remark: z.string().optional(),
	active: z.boolean().optional(),
	createdBy: z.string().max(75).optional(),
	createdAt: z.date().optional(),
	modifiedBy: z.string().max(75).optional(),
	modifiedAt: z.date().optional(),
});

export default ReplacementAnnualLeaveSchema;