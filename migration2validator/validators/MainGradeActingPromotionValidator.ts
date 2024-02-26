import { z } from 'zod';

const MainGradeActingPromotionSchema = z.object({
	employeeId: z.number().int().nonnegative(),
	meetingId: z.number().int().nonnegative(),
	isActing: z.boolean().optional(),
	meetingResult: z.string().optional(),
	meetingRemark: z.string().optional(),
	status: z.string().max(75).optional(),
	remark: z.string().optional(),
	active: z.boolean().optional(),
	createdBy: z.string().max(75).optional(),
	createdAt: z.date().optional(),
	modifiedBy: z.string().max(75).optional(),
	modifiedAt: z.date().optional(),
});

export default MainGradeActingPromotionSchema;