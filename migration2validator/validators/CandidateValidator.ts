import { z } from 'zod';

const CandidateSchema = z.object({
	personalDetailId: z.number().int().nonnegative(),
	candidateTypeId: z.number().int().nonnegative(),
	employeeId: z.number().int().nonnegative(),
	candidateNumber: z.string().max(75).optional(),
	category: z.string().max(75).optional(),
	link: z.string().max(255).optional(),
	applicationDate: z.string().datetime(),
	status: z.string().max(75).optional(),
	remark: z.string().optional(),
	active: z.boolean().optional(),
	createdBy: z.string().max(75).optional(),
	createdAt: z.date().optional(),
	modifiedBy: z.string().max(75).optional(),
	modifiedAt: z.date().optional(),
});

export default CandidateSchema;