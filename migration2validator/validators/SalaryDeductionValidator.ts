import { z } from 'zod';

const SalaryDeductionSchema = z.object({
	salaryDetailId: z.number().int().nonnegative(),
	totalLoan: z.number().optional(),
	quarterRent: z.number().optional(),
	penaltyFee: z.number().optional(),
	unpaidDeduction: z.number().optional(),
	sickLeaveDeduction: z.number().optional(),
	medicalArrearsFee: z.number().optional(),
	others: z.number().optional(),
	active: z.boolean().optional(),
	createdBy: z.string().max(75).optional(),
	createdAt: z.date().optional(),
	modifiedBy: z.string().max(75).optional(),
	modifiedAt: z.date().optional(),
});

export default SalaryDeductionSchema;