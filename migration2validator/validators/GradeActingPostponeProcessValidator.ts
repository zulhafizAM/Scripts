import { z } from 'zod';

const GradeActingPostponeProcessSchema = z.object({
	actingId: z.number().int().nonnegative(),
	meetingId: z.number().int().nonnegative(),
	placementId: z.number().int().nonnegative(),
	newReportDutyDate: z.string().datetime(),
	postponeReason: z.string().optional(),
	meetingResult: z.string().optional(),
	meetingRemark: z.string().optional(),
	active: z.boolean().optional(),
	createdBy: z.string().max(75).optional(),
	createdAt: z.date().optional(),
	modifiedBy: z.string().max(75).optional(),
	modifiedAt: z.date().optional(),
});

export default GradeActingPostponeProcessSchema;