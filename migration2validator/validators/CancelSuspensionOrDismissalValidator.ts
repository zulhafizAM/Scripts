import { z } from 'zod';

const CancelSuspensionOrDismissalSchema = z.object({
	integrityId: z.number().int().nonnegative(),
	effectiveDate: z.string().datetime(),
	isReturningDuty: z.boolean().optional(),
	active: z.boolean().optional(),
	createdBy: z.string().max(75).optional(),
	createdAt: z.date().optional(),
	modifiedBy: z.string().max(75).optional(),
	modifiedAt: z.date().optional(),
});

export default CancelSuspensionOrDismissalSchema;