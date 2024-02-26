import { z } from 'zod';

const UnitSchema = z.object({
	name: z.string().max(75),
	departmentId: z.number().int().nonnegative(),
	sectionId: z.number().int().nonnegative(),
	active: z.boolean().optional(),
	createdBy: z.string().max(75).optional(),
	createdAt: z.date().optional(),
	modifiedBy: z.string().max(75).optional(),
	modifiedAt: z.date().optional(),
});

export default UnitSchema;