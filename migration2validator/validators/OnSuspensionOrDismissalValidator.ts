import { z } from 'zod';

const OnSuspensionOrDismissalSchema = z.object({
	integrityId: z.number().int().nonnegative(),
	effectiveDate: z.string().datetime(),
	isEmolumenReceived: z.boolean().optional(),
	active: z.boolean().optional(),
	createdBy: z.string().max(75).optional(),
	createdAt: z.date().optional(),
	modifiedBy: z.string().max(75).optional(),
	modifiedAt: z.date().optional(),
});

export default OnSuspensionOrDismissalSchema;