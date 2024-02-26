import { z } from 'zod';

const NewHiredProcessSchema = z.object({
	hiredId: z.number().int().nonnegative(),
	supporterId: z.number().int().nonnegative().optional(),
	supportedStatus: z.string().max(75).optional(),
	supportedRemark: z.string().optional(),
	supportedDate: z.string().datetime(),
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

export default NewHiredProcessSchema;