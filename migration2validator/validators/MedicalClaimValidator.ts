import { z } from 'zod';

const MedicalClaimSchema = z.object({
	employeeMedicalAllocId: z.number().int().nonnegative(),
	clinicId: z.number().int().nonnegative(),
	leaveDay: z.number().int().optional(),
	treatmentDate: z.string().datetime(),
	invoiceDate: z.string().datetime(),
	invoiceNumber: z.string().max(75).optional(),
	month: z.number().int().optional(),
	year: z.number().int().optional(),
	amount: z.number().optional(),
	status: z.string().max(75).optional(),
	remark: z.string().optional(),
	active: z.boolean().optional(),
	createdBy: z.string().max(75).optional(),
	createdAt: z.date().optional(),
	modifiedBy: z.string().max(75).optional(),
	modifiedAt: z.date().optional(),
});

export default MedicalClaimSchema;