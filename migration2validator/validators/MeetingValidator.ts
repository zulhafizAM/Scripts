import { z } from 'zod';

const MeetingSchema = z.object({
	meetingTypeId: z.number().int().nonnegative(),
	positionId: z.number().int().nonnegative(),
	gradeId: z.number().int().nonnegative(),
	groupName: z.string().max(75).optional(),
	meetingCount: z.number().int().optional(),
	employeeCount: z.number().int().optional(),
	meetingDate: z.string().datetime(),
	status: z.string().max(75).optional(),
	active: z.boolean().optional(),
	createdBy: z.string().max(75).optional(),
	createdAt: z.date().optional(),
	modifiedBy: z.string().max(75).optional(),
	modifiedAt: z.date().optional(),
});

export default MeetingSchema;