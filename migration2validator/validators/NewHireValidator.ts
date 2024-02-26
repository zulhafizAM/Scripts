import { z } from 'zod';

const NewHireSchema = z.object({
	employeeId: z.number().int().nonnegative(),
	candidateId: z.number().int().nonnegative(),
	isFitCriteria: z.boolean().optional(),
	remark: z.string().optional(),
	active: z.boolean().optional(),
	createdBy: z.string().max(75).optional(),
	createdAt: z.date().optional(),
	modifiedBy: z.string().max(75).optional(),
	modifiedAt: z.date().optional(),
});

export default NewHireSchema;