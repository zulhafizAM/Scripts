import { z } from 'zod';

const HalfPayLeaveSchema = z.object({
	employeeId: z.number().int().nonnegative(),
	meetingId: z.number().int().nonnegative(),
	reason: z.string(),
	applicationDate: z.string().datetime(),
	startDate: z.string().datetime(),
	endDate: z.string().datetime(),
	status: z.string().max(255),
	remark: z.string().optional(),
	active: z.boolean().optional(),
	createdBy: z.string().max(75).optional(),
	createdAt: z.date().optional(),
	modifiedBy: z.string().max(75).optional(),
	modifiedAt: z.date().optional(),
});

export default HalfPayLeaveSchema;