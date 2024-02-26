import { z } from 'zod';

const ServiceConfirmationProcessSchema = z.object({
	integrityCertifierId: z.number().int().nonnegative().optional(),
	integrityCertifiedStatus: z.string().max(75).optional(),
	integrityCertifiedRemark: z.string().optional(),
	integrityCertifiedDate: z.string().datetime(),
	directorCertifierId: z.number().int().nonnegative().optional(),
	directorCertifiedStatus: z.string().max(75).optional(),
	directorCertifiedRemark: z.string().optional(),
	directorCertifiedDate: z.string().datetime(),
	active: z.boolean().optional(),
	createdBy: z.string().max(75).optional(),
	createdAt: z.date().optional(),
	modifiedBy: z.string().max(75).optional(),
	modifiedAt: z.date().optional(),
});

export default ServiceConfirmationProcessSchema;