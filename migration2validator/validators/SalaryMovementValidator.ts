import { z } from 'zod';

const SalaryMovementSchema = z.object({
	salaryDetailId: z.number().int().nonnegative(),
	meetingId: z.number().int().nonnegative(),
	salaryMovementMonth: z.number().int().optional(),
	specialAid: z.number().optional(),
	specialRaiseType: z.string().max(75).optional(),
	specialRaise: z.number().optional(),
	status: z.string().max(75).optional(),
	remark: z.string().optional(),
	active: z.boolean().optional(),
	createdBy: z.string().max(75).optional(),
	createdAt: z.date().optional(),
	modifiedBy: z.string().max(75).optional(),
	modifiedAt: z.date().optional(),
});

export default SalaryMovementSchema;