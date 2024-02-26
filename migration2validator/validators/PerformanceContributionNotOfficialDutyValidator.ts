import { z } from 'zod';

const PerformanceContributionNotOfficialDutySchema = z.object({
	performanceId: z.number().int().nonnegative(),
	name: z.string().max(75).optional(),
	active: z.boolean().optional(),
	createdBy: z.string().max(75).optional(),
	createdAt: z.date().optional(),
	modifiedBy: z.string().max(75).optional(),
	modifiedAt: z.date().optional(),
});

export default PerformanceContributionNotOfficialDutySchema;