import { z } from 'zod';

const PenaltyTypeSchema = z.object({
	name: z.string().max(75).optional(),
	description: z.string().optional(),
	active: z.boolean().optional(),
	createdBy: z.string().max(75).optional(),
	createdAt: z.date().optional(),
	modifiedBy: z.string().max(75).optional(),
	modifiedAt: z.date().optional(),
});

export default PenaltyTypeSchema;