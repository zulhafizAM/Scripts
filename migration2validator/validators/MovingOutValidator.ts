import { z } from 'zod';

const MovingOutSchema = z.object({
	quartersId: z.number().int().nonnegative(),
	applicationDate: z.string().datetime(),
	status: z.string().max(75).optional(),
	remark: z.string().optional(),
	active: z.boolean().optional(),
	createdBy: z.string().max(75).optional(),
	createdAt: z.date().optional(),
	modifiedBy: z.string().max(75).optional(),
	modifiedAt: z.date().optional(),
});

export default MovingOutSchema;