import { z } from 'zod';

const ExamSchema = z.object({
	examTypeId: z.number().int().nonnegative(),
	title: z.string().optional(),
	startDate: z.string().datetime(),
	endDate: z.string().datetime(),
	examDate: z.string().datetime(),
	examLocation: z.string().optional(),
	active: z.boolean().optional(),
	createdBy: z.string().max(75).optional(),
	createdAt: z.date().optional(),
	modifiedBy: z.string().max(75).optional(),
	modifiedAt: z.date().optional(),
});

export default ExamSchema;