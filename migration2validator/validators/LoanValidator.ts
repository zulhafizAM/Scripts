import { z } from 'zod';

const LoanSchema = z.object({
	deductionId: z.number().int().nonnegative(),
	loanType: z.string().max(75).optional(),
	applicationDate: z.string().datetime(),
	status: z.string().max(75).optional(),
	remark: z.string().optional(),
	active: z.boolean().optional(),
	createdBy: z.string().max(75).optional(),
	createdAt: z.date().optional(),
	modifiedBy: z.string().max(75).optional(),
	modifiedAt: z.date().optional(),
});

export default LoanSchema;