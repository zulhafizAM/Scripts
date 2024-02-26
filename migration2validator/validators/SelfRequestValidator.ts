import { z } from 'zod';

const SelfRequestSchema = z.object({
	employeeId: z.number().int().nonnegative(),
	meetingId: z.number().int().nonnegative(),
	firstChoicePlacementId: z.number().int().nonnegative(),
	secondChoicePlacementId: z.number().int().nonnegative(),
	applicationDate: z.string().datetime(),
	isPostpone: z.boolean().optional(),
	reason: z.string().optional(),
	reasonRemark: z.string().optional(),
	distanceFromWork: z.number().int().optional(),
	employerName: z.string().max(75).optional(),
	startServiceDate: z.string().datetime(),
	meetingResult: z.string().optional(),
	meetingRemark: z.string().optional(),
	status: z.string().max(75).optional(),
	remark: z.string().optional(),
	active: z.boolean().optional(),
	createdBy: z.string().max(75).optional(),
	createdAt: z.date().optional(),
	modifiedBy: z.string().max(75).optional(),
	modifiedAt: z.date().optional(),
});

export default SelfRequestSchema;