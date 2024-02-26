import { z } from 'zod';

const PensionDetailSchema = z.object({
	employeeId: z.number().int().nonnegative(),
	applicationDate: z.string().datetime(),
	PTBDate: z.string().datetime(),
	referenceNumber: z.string().max(75).optional(),
	referenceDate: z.string().datetime(),
	status: z.string().max(75).optional(),
	remark: z.string().optional(),
	active: z.boolean().optional(),
	createdBy: z.string().max(75).optional(),
	createdAt: z.date().optional(),
	modifiedBy: z.string().max(75).optional(),
	modifiedAt: z.date().optional(),
});

export default PensionDetailSchema;