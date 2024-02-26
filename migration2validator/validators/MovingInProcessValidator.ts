import { z } from 'zod';

const MovingInProcessSchema = z.object({
	movingInId: z.number().int().nonnegative(),
	verifierId: z.number().int().nonnegative().optional(),
	verifiedStatus: z.string().max(75).optional(),
	verifiedRemark: z.string().optional(),
	verifiedDate: z.string().datetime(),
	secretaryApproverId: z.number().int().nonnegative().optional(),
	secretaryApprovedStatus: z.string().max(75).optional(),
	secretaryApprovedRemark: z.string().optional(),
	secretaryApprovedDate: z.string().datetime(),
	directorApproverId: z.number().int().nonnegative().optional(),
	directorApprovedStatus: z.string().max(75).optional(),
	directorApprovedRemark: z.string().optional(),
	directorApprovedDate: z.string().datetime(),
	active: z.boolean().optional(),
	createdBy: z.string().max(75).optional(),
	createdAt: z.date().optional(),
	modifiedBy: z.string().max(75).optional(),
	modifiedAt: z.date().optional(),
});

export default MovingInProcessSchema;