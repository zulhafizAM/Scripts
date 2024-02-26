import { z } from 'zod';

const AppealApplicationSchema = z.object({
	employeeId: z.number().int().nonnegative(),
	meetingId: z.number().int().nonnegative(),
	applicationDate: z.string().datetime(),
	reason: z.string().optional(),
	status: z.string().max(75).optional(),
	meetingResult: z.string().max(75).optional(),
	penaltyName: z.string().max(75).optional(),
	penaltyDescription: z.string().optional(),
	active: z.boolean().optional(),
	createdBy: z.string().max(75).optional(),
	createdAt: z.date().optional(),
	modifiedBy: z.string().max(75).optional(),
	modifiedAt: z.date().optional(),
});

export default AppealApplicationSchema;