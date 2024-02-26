import { z } from 'zod';

const ChecklistInterimSchema = z.object({
	preparerId: z.number().int().nonnegative(),
	checkerId: z.number().int().nonnegative(),
	applicationLetterStatus: z.boolean().optional(),
	applicationLetterCheck: z.boolean().optional(),
	certifiedFormStatus: z.boolean().optional(),
	certifiedFormCheck: z.boolean().optional(),
	organisationalChartStatus: z.boolean().optional(),
	organisationalChartCheck: z.boolean().optional(),
	jobDescriptionStatus: z.boolean().optional(),
	jobDescriptionCheck: z.boolean().optional(),
	orderLetterStatus: z.boolean().optional(),
	orderLetterCheck: z.boolean().optional(),
	leaveStatementStatus: z.boolean().optional(),
	leaveStatementCheck: z.boolean().optional(),
	documentListStatus: z.boolean().optional(),
	documentListCheck: z.boolean().optional(),
	justificationStatus: z.boolean().optional(),
	justificationCheck: z.boolean().optional(),
	active: z.boolean().optional(),
	createdBy: z.string().max(75).optional(),
	createdAt: z.date().optional(),
	modifiedBy: z.string().max(75).optional(),
	modifiedAt: z.date().optional(),
});

export default ChecklistInterimSchema;