import { z } from 'zod';

const EducationSchema = z.object({
	name: z.string().max(75),
	personalDetailId: z.number().int().nonnegative(),
	type: z.string().max(75).optional(),
	year: z.number().int().optional(),
	finalGrade: z.string().max(75).optional(),
	active: z.boolean().optional(),
	createdBy: z.string().max(75).optional(),
	createdAt: z.date().optional(),
	modifiedBy: z.string().max(75).optional(),
	modifiedAt: z.date().optional(),
});

export default EducationSchema;