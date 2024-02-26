import { z } from 'zod';

const PassportPaymentClaimSchema = z.object({
	allowanceId: z.number().int().nonnegative(),
	renewDate: z.string().datetime(),
	reason: z.string().optional(),
	active: z.boolean().optional(),
	createdBy: z.string().max(75).optional(),
	createdAt: z.date().optional(),
	modifiedBy: z.string().max(75).optional(),
	modifiedAt: z.date().optional(),
});

export default PassportPaymentClaimSchema;