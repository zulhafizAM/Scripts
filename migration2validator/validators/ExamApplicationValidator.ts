import { z } from 'zod';

const ExamApplicationSchema = z.object({
	employeeId: z.number().int().nonnegative(),
	examId: z.number().int().nonnegative(),
	applicationDate: z.string().datetime(),
	remark: z.string().optional(),
	active: z.boolean().optional(),
	createdBy: z.string().max(75).optional(),
	createdAt: z.date().optional(),
	modifiedBy: z.string().max(75).optional(),
	modifiedAt: z.date().optional(),
});

export default ExamApplicationSchema;