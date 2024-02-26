import { z } from 'zod';

const GradePromotionTypeSchema = z.object({
	employeeId: z.number().int().nonnegative(),
	meetingId: z.number().int().nonnegative(),
	meetingResult: z.string().optional(),
	meetingRemark: z.string().optional(),
	isGrade1till54: z.boolean().optional(),
	status: z.string().max(75).optional(),
	remark: z.string().optional(),
	active: z.boolean().optional(),
	createdBy: z.string().max(75).optional(),
	createdAt: z.date().optional(),
	modifiedBy: z.string().max(75).optional(),
	modifiedAt: z.date().optional(),
});

export default GradePromotionTypeSchema;