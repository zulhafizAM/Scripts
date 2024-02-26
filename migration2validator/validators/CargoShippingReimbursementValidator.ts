import { z } from 'zod';

const CargoShippingReimbursementSchema = z.object({
	allowanceId: z.number().int().nonnegative(),
	startShippingDate: z.string().datetime(),
	endShippingDate: z.string().datetime(),
	startPoint: z.string().max(75).optional(),
	endPoint: z.string().max(75).optional(),
	distance: z.number().int().optional(),
	reason: z.string().optional(),
	active: z.boolean().optional(),
	createdBy: z.string().max(75).optional(),
	createdAt: z.date().optional(),
	modifiedBy: z.string().max(75).optional(),
	modifiedAt: z.date().optional(),
});

export default CargoShippingReimbursementSchema;