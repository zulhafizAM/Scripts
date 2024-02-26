import { z } from 'zod';

const SelfRequestPostponeProcessSchema = z.object({
	employeeId: z.number().int().nonnegative(),
	transferDate: z.string().datetime(),
	newTransferDate: z.string().datetime(),
	postponeReason: z.string().optional(),
	approverId: z.number().int().nonnegative().optional(),
	approvedStatus: z.string().max(75).optional(),
	approvedRemark: z.string().optional(),
	approvedDate: z.string().datetime(),
	active: z.boolean().optional(),
	createdBy: z.string().max(75).optional(),
	createdAt: z.date().optional(),
	modifiedBy: z.string().max(75).optional(),
	modifiedAt: z.date().optional(),
});

export default SelfRequestPostponeProcessSchema;