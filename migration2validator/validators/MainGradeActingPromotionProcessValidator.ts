import { z } from 'zod';

const MainGradeActingPromotionProcessSchema = z.object({
	actingId: z.number().int().nonnegative(),
	certifierId: z.number().int().nonnegative().optional(),
	certifiedStatus: z.string().max(75).optional(),
	certifiedRemark: z.string().optional(),
	certifiedDate: z.string().datetime(),
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

export default MainGradeActingPromotionProcessSchema;