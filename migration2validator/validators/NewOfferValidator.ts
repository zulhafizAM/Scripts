import { z } from 'zod';

const NewOfferSchema = z.object({
	employeeId: z.number().int().nonnegative(),
	meetingId: z.number().int().nonnegative(),
	meetingResult: z.string().max(75).optional(),
	meetingRemark: z.string().optional(),
	active: z.boolean().optional(),
	createdBy: z.string().max(75).optional(),
	createdAt: z.date().optional(),
	modifiedBy: z.string().max(75).optional(),
	modifiedAt: z.date().optional(),
});

export default NewOfferSchema;