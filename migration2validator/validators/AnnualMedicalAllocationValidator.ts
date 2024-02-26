import { z } from 'zod';

const AnnualMedicalAllocationSchema = z.object({
	employeeId: z.number().int().nonnegative(),
	month: z.number().int().optional(),
	year: z.number().int().optional(),
	allocatedAmount: z.number().optional(),
	totalClaimed: z.number().optional(),
	active: z.boolean().optional(),
	createdBy: z.string().max(75).optional(),
	createdAt: z.date().optional(),
	modifiedBy: z.string().max(75).optional(),
	modifiedAt: z.date().optional(),
});

export default AnnualMedicalAllocationSchema;