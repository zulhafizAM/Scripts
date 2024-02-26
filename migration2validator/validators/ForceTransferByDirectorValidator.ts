import { z } from 'zod';

const ForceTransferByDirectorSchema = z.object({
	employeeId: z.number().int().nonnegative(),
	meetingId: z.number().int().nonnegative(),
	newPlacementId: z.number().int().nonnegative(),
	isPostpone: z.boolean().optional(),
	reason: z.string().optional(),
	transferDate: z.string().datetime(),
	meetingResult: z.string().max(75).optional(),
	meetingRemark: z.string().optional(),
	status: z.string().max(75).optional(),
	remark: z.string().optional(),
	active: z.boolean().optional(),
	createdBy: z.string().max(75).optional(),
	createdAt: z.date().optional(),
	modifiedBy: z.string().max(75).optional(),
	modifiedAt: z.date().optional(),
});

export default ForceTransferByDirectorSchema;