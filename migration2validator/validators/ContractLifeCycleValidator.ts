import { z } from 'zod';

const ContractLifeCycleSchema = z.object({
	contractId: z.number().int().nonnegative(),
	meetingId: z.number().int().nonnegative(),
	workPerformanceRating: z.number().optional(),
	individualMark: z.number().optional(),
	overallMark: z.number().optional(),
	meetingResult: z.string().max(75).optional(),
	meetingRemark: z.string().optional(),
	meetingResultDate: z.string().datetime(),
	status: z.string().max(75).optional(),
	remark: z.string().optional(),
	active: z.boolean().optional(),
	createdBy: z.string().max(75).optional(),
	createdAt: z.date().optional(),
	modifiedBy: z.string().max(75).optional(),
	modifiedAt: z.date().optional(),
});

export default ContractLifeCycleSchema;