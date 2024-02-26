import { z } from 'zod';

const AccruedAnnualLeaveSchema = z.object({
	employeeId: z.number().int().nonnegative(),
	applicationDate: z.string().datetime(),
	currentYear: z.number().int(),
	totalLeaveEntitlement: z.number().int(),
	leaveBalance: z.number().int(),
	acummulatedLeave: z.number().int(),
	maxReplacementLeave: z.number().int(),
	forwardedLeaveTotal: z.number().int(),
	status: z.string().max(255),
	remark: z.string().optional(),
	active: z.boolean().optional(),
	createdBy: z.string().max(75).optional(),
	createdAt: z.date().optional(),
	modifiedBy: z.string().max(75).optional(),
	modifiedAt: z.date().optional(),
});

export default AccruedAnnualLeaveSchema;