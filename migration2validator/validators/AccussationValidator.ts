import { z } from 'zod';

const AccussationSchema = z.object({
	integrityId: z.number().int().nonnegative(),
	accussationList: z.string().optional(),
	receivedChargeLetterDate: z.string().datetime(),
	active: z.boolean().optional(),
	createdBy: z.string().max(75).optional(),
	createdAt: z.date().optional(),
	modifiedBy: z.string().max(75).optional(),
	modifiedAt: z.date().optional(),
});

export default AccussationSchema;