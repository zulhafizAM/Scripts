import { z } from 'zod';

const UnspecifiedRetirementSchema = z.object({
	employeeId: z.number().int().nonnegative(),
	confirmerId: z.number().int().nonnegative(),
	retirementTypeId: z.number().int().nonnegative(),
	groupId: z.number().int().nonnegative(),
	remark: z.string().optional(),
	confirmedDate: z.string().datetime(),
	status: z.string().max(75).optional(),
	active: z.boolean().optional(),
	createdBy: z.string().max(75).optional(),
	createdAt: z.date().optional(),
	modifiedBy: z.string().max(75).optional(),
	modifiedAt: z.date().optional(),
});

export default UnspecifiedRetirementSchema;