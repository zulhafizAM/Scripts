import { z } from 'zod';

const ContractDetailSchema = z.object({
	candidateId: z.number().int().nonnegative(),
	serviceTypeId: z.number().int().nonnegative(),
	placementId: z.number().int().nonnegative(),
	contractEmployeeNumber: z.string().max(75).optional(),
	applicationDate: z.string().datetime(),
	contractStartDate: z.string().datetime(),
	contractDuration: z.number().int().optional(),
	wageRate: z.number().optional(),
	designation: z.string().max(75).optional(),
	reportDutyDate: z.string().datetime(),
	EPFNumber: z.string().max(75).optional(),
	leaveEntitlement: z.number().int().optional(),
	status: z.string().max(75).optional(),
	remark: z.string().optional(),
	active: z.boolean().optional(),
	createdBy: z.string().max(75).optional(),
	createdAt: z.date().optional(),
	modifiedBy: z.string().max(75).optional(),
	modifiedAt: z.date().optional(),
});

export default ContractDetailSchema;