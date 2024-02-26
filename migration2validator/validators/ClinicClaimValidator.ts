import { z } from 'zod';

const ClinicClaimSchema = z.object({
	clinicId: z.number().int().nonnegative(),
	invoiceDate: z.string().datetime(),
	invoiceNumber: z.string().max(255).optional(),
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

export default ClinicClaimSchema;