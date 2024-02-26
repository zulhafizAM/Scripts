import { z } from 'zod';

const HouseMovingAllowanceSchema = z.object({
	allowanceId: z.number().int().nonnegative(),
	movingDate: z.string().datetime(),
	oldAddress: z.string().optional(),
	newAddress: z.string().optional(),
	active: z.boolean().optional(),
	createdBy: z.string().max(75).optional(),
	createdAt: z.date().optional(),
	modifiedBy: z.string().max(75).optional(),
	modifiedAt: z.date().optional(),
});

export default HouseMovingAllowanceSchema;