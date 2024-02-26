import { z } from 'zod';

const ExperienceSchema = z.object({
	personalDetailId: z.number().int().nonnegative(),
	position: z.string().max(75).optional(),
	company: z.string().max(75).optional(),
	address: z.string().max(255).optional(),
	startDate: z.string().datetime(),
	endDate: z.string().datetime(),
	description: z.string().optional(),
	grade: z.string().max(75).optional(),
	active: z.boolean().optional(),
	createdBy: z.string().max(75).optional(),
	createdAt: z.date().optional(),
	modifiedBy: z.string().max(75).optional(),
	modifiedAt: z.date().optional(),
});

export default ExperienceSchema;