import { z } from 'zod';

const ClothingAssistanceSchema = z.object({
	reason: z.string().optional(),
	totalPersonalClaim: z.number().optional(),
	totalPartnerClaim: z.number().optional(),
	active: z.boolean().optional(),
	createdBy: z.string().max(75).optional(),
	createdAt: z.date().optional(),
	modifiedBy: z.string().max(75).optional(),
	modifiedAt: z.date().optional(),
});

export default ClothingAssistanceSchema;