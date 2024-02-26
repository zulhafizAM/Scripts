import { z } from 'zod';

const UserAccountSchema = z.object({
	clinicId: z.number().int().nonnegative(),
	employeeId: z.number().int().nonnegative(),
	candidateId: z.number().int().nonnegative(),
	username: z.string().max(100),
	password: z.string().max(255),
	active: z.boolean().optional(),
	createdBy: z.string().max(75).optional(),
	createdAt: z.date().optional(),
	modifiedBy: z.string().max(75).optional(),
	modifiedAt: z.date().optional(),
});

export default UserAccountSchema;