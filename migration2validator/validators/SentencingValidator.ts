import { z } from 'zod';

const SentencingSchema = z.object({
	integrityId: z.number().int().nonnegative(),
	penaltyTypeId: z.number().int().nonnegative(),
	active: z.boolean().optional(),
	createdBy: z.string().max(75).optional(),
	createdAt: z.date().optional(),
	modifiedBy: z.string().max(75).optional(),
	modifiedAt: z.date().optional(),
});

export default SentencingSchema;