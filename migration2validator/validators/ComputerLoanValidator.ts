import { z } from 'zod';

const ComputerLoanSchema = z.object({
	loanId: z.number().int().nonnegative(),
	requestedAmount: z.number().optional(),
	paymentPeriod: z.number().int().optional(),
	active: z.boolean().optional(),
	createdBy: z.string().max(75).optional(),
	createdAt: z.date().optional(),
	modifiedBy: z.string().max(75).optional(),
	modifiedAt: z.date().optional(),
});

export default ComputerLoanSchema;