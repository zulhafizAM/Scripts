import { z } from 'zod';

const ServiceConfirmationSchema = z.object({
	employeeId: z.number().int().nonnegative(),
	meetingId: z.number().int().nonnegative(),
	isCompleted: z.boolean().optional(),
	isNewGrade: z.boolean().optional(),
	meetingResult: z.string().max(75).optional(),
	status: z.string().max(75).optional(),
	remark: z.string().optional(),
	active: z.boolean().optional(),
	createdBy: z.string().max(75).optional(),
	createdAt: z.date().optional(),
	modifiedBy: z.string().max(75).optional(),
	modifiedAt: z.date().optional(),
});

export default ServiceConfirmationSchema;