import { z } from 'zod';

const TerminationInterimSchema = z.object({
	isInterimCompleted: z.boolean().optional(),
	active: z.boolean().optional(),
	createdBy: z.string().max(75).optional(),
	createdAt: z.date().optional(),
	modifiedBy: z.string().max(75).optional(),
	modifiedAt: z.date().optional(),
});

export default TerminationInterimSchema;