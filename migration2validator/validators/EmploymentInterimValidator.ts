import { z } from 'zod';

const EmploymentInterimSchema = z.object({
	employeeId: z.number().int().nonnegative(),
	positionId: z.number().int().nonnegative(),
	gradeId: z.number().int().nonnegative(),
	departmentId: z.number().int().nonnegative(),
	placementId: z.number().int().nonnegative(),
	applicationDate: z.string().datetime(),
	referenceNumber: z.string().max(75).optional(),
	startDate: z.string().datetime(),
	endDate: z.string().datetime(),
	duration: z.number().int().optional(),
	status: z.string().max(75).optional(),
	remark: z.string().optional(),
	reason: z.string().optional(),
	active: z.boolean().optional(),
	createdBy: z.string().max(75).optional(),
	createdAt: z.date().optional(),
	modifiedBy: z.string().max(75).optional(),
	modifiedAt: z.date().optional(),
});

export default EmploymentInterimSchema;