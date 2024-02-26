import { z } from 'zod';

const SalarySchema = z.object({
	employeeId: z.number().int().nonnegative(),
	effectiveDate: z.string().datetime(),
	baseSalary: z.number().optional(),
	ITKA: z.number().optional(),
	COLA: z.number().optional(),
	status: z.string().max(75).optional(),
	remark: z.string().optional(),
	isRetiringSoon: z.boolean().optional(),
	active: z.boolean().optional(),
	createdBy: z.string().max(75).optional(),
	createdAt: z.date().optional(),
	modifiedBy: z.string().max(75).optional(),
	modifiedAt: z.date().optional(),
});

export default SalarySchema;