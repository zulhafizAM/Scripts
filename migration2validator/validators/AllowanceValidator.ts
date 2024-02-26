import { z } from 'zod';

const AllowanceSchema = z.object({
	salaryDetailId: z.number().int().nonnegative(),
	interim: z.number().optional(),
	acting: z.number().optional(),
	transfer: z.number().optional(),
	houseAllowanceType: z.string().max(75).optional(),
	houseAllowance: z.number().optional(),
	transferAllowance: z.number().optional(),
	active: z.boolean().optional(),
	createdBy: z.string().max(75).optional(),
	createdAt: z.date().optional(),
	modifiedBy: z.string().max(75).optional(),
	modifiedAt: z.date().optional(),
});

export default AllowanceSchema;