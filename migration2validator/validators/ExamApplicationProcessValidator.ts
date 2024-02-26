import { z } from 'zod';

const ExamApplicationProcessSchema = z.object({
	applicantId: z.number().int().nonnegative(),
	verifierId: z.number().int().nonnegative().optional(),
	verifiedStatus: z.string().max(75).optional(),
	verifiedRemark: z.string().optional(),
	verifiedDate: z.string().datetime(),
	comfirmerId: z.number().int().nonnegative().optional(),
	comfirmedStatus: z.string().max(75).optional(),
	comfirmedRemark: z.string().optional(),
	comfirmedDate: z.string().datetime(),
	active: z.boolean().optional(),
	createdBy: z.string().max(75).optional(),
	createdAt: z.date().optional(),
	modifiedBy: z.string().max(75).optional(),
	modifiedAt: z.date().optional(),
});

export default ExamApplicationProcessSchema;