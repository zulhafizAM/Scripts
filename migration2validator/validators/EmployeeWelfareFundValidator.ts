import { z } from 'zod';

const EmployeeWelfareFundSchema = z.object({
	allowanceId: z.number().int().nonnegative(),
	typeOfWelfare: z.string().max(75).optional(),
	active: z.boolean().optional(),
	createdBy: z.string().max(75).optional(),
	createdAt: z.date().optional(),
	modifiedBy: z.string().max(75).optional(),
	modifiedAt: z.date().optional(),
});

export default EmployeeWelfareFundSchema;