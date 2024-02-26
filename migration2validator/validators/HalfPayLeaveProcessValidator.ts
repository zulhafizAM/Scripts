import { z } from 'zod';

const HalfPayLeaveProcessSchema = z.object({
	halfPayLeaveId: z.number().int().nonnegative(),
	directorSupporterId: z.number().int().nonnegative().optional(),
	directorSupportedStatus: z.string().max(75).optional(),
	directorSupportedRemark: z.string().optional(),
	directorSupportedDate: z.string().datetime(),
	verifierId: z.number().int().nonnegative().optional(),
	verifiedStatus: z.string().max(75).optional(),
	verifiedRemark: z.string().optional(),
	verifiedDate: z.string().datetime(),
	confirmerId: z.number().int().nonnegative().optional(),
	confirmedStatus: z.string().max(75).optional(),
	confirmedRemark: z.string().optional(),
	confirmedDate: z.string().datetime(),
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

export default HalfPayLeaveProcessSchema;