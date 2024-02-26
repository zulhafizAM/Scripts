import { z } from 'zod';

const UnspecifiedRetirementGroupSchema = z.object({
	name: z.string().max(75).optional(),
	headCount: z.number().int().optional(),
	date: z.string().datetime(),
	status: z.string().max(75).optional(),
	active: z.boolean().optional(),
	createdBy: z.string().max(75).optional(),
	createdAt: z.date().optional(),
	modifiedBy: z.string().max(75).optional(),
	modifiedAt: z.date().optional(),
});

export default UnspecifiedRetirementGroupSchema;