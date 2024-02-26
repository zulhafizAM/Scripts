import { z } from 'zod';

const MaternityLeaveProcessSchema = z.object({
	maternityLeaveId: z.number().int().nonnegative(),
	verifierId: z.number().int().nonnegative().optional(),
	verifiedStatus: z.string().max(75).optional(),
	verifiedRemark: z.string().optional(),
	verifiedDate: z.string().datetime(),
	approverId: z.number().int().nonnegative().optional(),
	approvedStatus: z.string().max(75).optional(),
	approvedRemark: z.string().optional(),
	approvedDate: z.string().datetime(),
	meetingResult: z.string().max(255),
	meetingRemark: z.string().optional(),
	active: z.boolean().optional(),
	createdBy: z.string().max(75).optional(),
	createdAt: z.date().optional(),
	modifiedBy: z.string().max(75).optional(),
	modifiedAt: z.date().optional(),
});

export default MaternityLeaveProcessSchema;