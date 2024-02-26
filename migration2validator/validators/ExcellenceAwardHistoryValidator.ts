import { z } from 'zod';

const ExcellenceAwardHistorySchema = z.object({
	employeeId: z.number().int().nonnegative(),
	excellenceAwardYear: z.number().int().optional(),
	active: z.boolean().optional(),
	createdBy: z.string().max(75).optional(),
	createdAt: z.date().optional(),
	modifiedBy: z.string().max(75).optional(),
	modifiedAt: z.date().optional(),
});

export default ExcellenceAwardHistorySchema;