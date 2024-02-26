import { z } from 'zod';

const QuarterSchema = z.object({
	deductionId: z.number().int().nonnegative(),
	applicationType: z.string().max(75).optional(),
	isOccupied: z.boolean().optional(),
	movingInDate: z.string().datetime(),
	movingOutDate: z.string().datetime(),
	rentRate: z.number().optional(),
	quarterDetails: z.string().optional(),
	active: z.boolean().optional(),
	createdBy: z.string().max(75).optional(),
	createdAt: z.date().optional(),
	modifiedBy: z.string().max(75).optional(),
	modifiedAt: z.date().optional(),
});

export default QuarterSchema;