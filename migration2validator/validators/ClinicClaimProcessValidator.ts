import { z } from 'zod';

const ClinicClaimProcessSchema = z.object({
	claimId: z.number().int().nonnegative(),
	secretaryApproverId: z.number().int().nonnegative().optional(),
	secretaryApprovedStatus: z.string().max(75).optional(),
	secretaryApprovedRemark: z.string().optional(),
	secretaryApprovedDate: z.string().datetime(),
	supporterId: z.number().int().nonnegative().optional(),
	supportedStatus: z.string().max(75).optional(),
	supportedRemark: z.string().optional(),
	supportedDate: z.string().datetime(),
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

export default ClinicClaimProcessSchema;