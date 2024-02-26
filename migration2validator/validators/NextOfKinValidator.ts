import { z } from 'zod';

const NextOfKinSchema = z.object({
	name: z.string().max(75),
	personalDetailId: z.number().int().nonnegative(),
	stateId: z.number().int().nonnegative(),
	alternativeName: z.string().max(75).optional(),
	isMalaysian: z.boolean().optional(),
	identityDocumentType: z.string().max(75).optional(),
	identityDocumentNumber: z.string().max(75).optional(),
	relationship: z.string().max(75).optional(),
	gender: z.string().max(75).optional(),
	phoneNumber: z.string().max(75).optional(),
	marriageDate: z.string().datetime(),
	inSchool: z.boolean().optional(),
	homeNumber: z.string().max(75).optional(),
	isLKIMStaff: z.boolean().optional(),
	position: z.string().max(75).optional(),
	taxNumber: z.string().max(75).optional(),
	occupation: z.string().max(75).optional(),
	company: z.string().max(75).optional(),
	companyAddress: z.string(),
	address: z.string().optional(),
	active: z.boolean().optional(),
	createdBy: z.string().max(75).optional(),
	createdAt: z.date().optional(),
	modifiedBy: z.string().max(75).optional(),
	modifiedAt: z.date().optional(),
});

export default NextOfKinSchema;