import { z } from 'zod';

const SurchargeSchema = z.object({
	employeeId: z.number().int().nonnegative(),
	meetingId: z.number().int().nonnegative(),
	reportDate: z.string().datetime(),
	surchargeAction: z.string().max(75).optional(),
	surchargeRemark: z.string().optional(),
	amount: z.number().optional(),
	paymentType: z.string().max(75).optional(),
	duration: z.number().int().optional(),
	effectiveDate: z.string().datetime(),
	meetingResult: z.string().max(75).optional(),
	active: z.boolean().optional(),
	createdBy: z.string().max(75).optional(),
	createdAt: z.date().optional(),
	modifiedBy: z.string().max(75).optional(),
	modifiedAt: z.date().optional(),
});

export default SurchargeSchema;