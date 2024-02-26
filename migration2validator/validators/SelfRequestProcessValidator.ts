import { z } from 'zod';

const SelfRequestProcessSchema = z.object({
	directorSupporterId: z.number().int().nonnegative().optional(),
	directorSupportedStatus: z.string().max(75).optional(),
	directorSupportedRemark: z.string().optional(),
	directorSupportedDate: z.string().datetime(),
	appointedSupporterId: z.number().int().nonnegative().optional(),
	appointedSupportedStatus: z.string().max(75).optional(),
	appointedSupportedRemark: z.string().optional(),
	appointedSupportedDate: z.string().datetime(),
	appointedApproverId: z.number().int().nonnegative().optional(),
	appointedApprovedStatus: z.string().max(75).optional(),
	appointedApprovedRemark: z.string().optional(),
	appointedApprovedDate: z.string().datetime(),
	active: z.boolean().optional(),
	createdBy: z.string().max(75).optional(),
	createdAt: z.date().optional(),
	modifiedBy: z.string().max(75).optional(),
	modifiedAt: z.date().optional(),
});

export default SelfRequestProcessSchema;