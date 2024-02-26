import { z } from 'zod';

const ApplicationInterimSchema = z.object({
	interimId: z.number().int().nonnegative(),
	isSkipSeniority: z.boolean().optional(),
	skippingRemark: z.string().optional(),
	active: z.boolean().optional(),
	createdBy: z.string().max(75).optional(),
	createdAt: z.date().optional(),
	modifiedBy: z.string().max(75).optional(),
	modifiedAt: z.date().optional(),
});

export default ApplicationInterimSchema;