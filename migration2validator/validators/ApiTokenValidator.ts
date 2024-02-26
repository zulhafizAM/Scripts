import { z } from 'zod';

const ApiTokenSchema = z.object({
	name: z.string().max(75),
	type: z.string().max(75),
	expiresAt: z.string().datetime(),
	active: z.boolean().optional(),
	createdBy: z.string().max(75).optional(),
	createdAt: z.date().optional(),
	modifiedBy: z.string().max(75).optional(),
	modifiedAt: z.date().optional(),
});

export default ApiTokenSchema;