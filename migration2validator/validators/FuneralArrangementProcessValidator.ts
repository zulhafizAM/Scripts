import { z } from 'zod';

const FuneralArrangementProcessSchema = z.object({
	funeralArrangementId: z.number().int().nonnegative(),
	secretaryVerifierId: z.number().int().nonnegative().optional(),
	secretaryVerifiedStatus: z.string().max(75).optional(),
	secretaryVerifiedRemark: z.string().optional(),
	secretaryVerifiedDate: z.string().datetime(),
	supporterId: z.number().int().nonnegative().optional(),
	supportedStatus: z.string().max(75).optional(),
	supportedRemark: z.string().optional(),
	supportedDate: z.string().datetime(),
	approverId: z.number().int().nonnegative().optional(),
	approvedStatus: z.string().max(75).optional(),
	approvedRemark: z.string().optional(),
	approvedDate: z.string().datetime(),
	verifierId: z.number().int().nonnegative().optional(),
	verifiedStatus: z.string().max(75).optional(),
	verifiedRemark: z.string().optional(),
	verifiedDate: z.string().datetime(),
	confirmerId: z.number().int().nonnegative().optional(),
	confirmedStatus: z.string().max(75).optional(),
	confirmedRemark: z.string().optional(),
	confirmedDate: z.string().datetime(),
	active: z.boolean().optional(),
	createdBy: z.string().max(75).optional(),
	createdAt: z.date().optional(),
	modifiedBy: z.string().max(75).optional(),
	modifiedAt: z.date().optional(),
});

export default FuneralArrangementProcessSchema;