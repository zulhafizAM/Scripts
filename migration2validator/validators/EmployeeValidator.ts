import { z } from 'zod';

const EmployeeSchema = z.object({
	personalDetailId: z.number().int().nonnegative(),
	positionId: z.number().int().nonnegative(),
	gradeId: z.number().int().nonnegative(),
	serviceTypeId: z.number().int().nonnegative(),
	serviceGroupId: z.number().int().nonnegative(),
	unitId: z.number().int().nonnegative(),
	employeeNumber: z.string().max(75),
	firstServiceDate: z.string().datetime(),
	currentServiceDate: z.string().datetime(),
	placement: z.string().max(75).optional(),
	officeNumber: z.string().max(75).optional(),
	active: z.boolean().optional(),
	createdBy: z.string().max(75).optional(),
	createdAt: z.date().optional(),
	modifiedBy: z.string().max(75).optional(),
	modifiedAt: z.date().optional(),
});

export default EmployeeSchema;