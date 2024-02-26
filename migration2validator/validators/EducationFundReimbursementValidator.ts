import { z } from 'zod';

const EducationFundReimbursementSchema = z.object({
	employeeId: z.number().int().nonnegative(),
	academicLevel: z.string().max(75).optional(),
	courseName: z.string().max(75).optional(),
	institution: z.string().max(75).optional(),
	learningInstitution: z.string().max(75).optional(),
	studyDuration: z.number().int().optional(),
	entryDateToInstituition: z.string().datetime(),
	educationType: z.string().max(75).optional(),
	applicationType: z.string().max(75).optional(),
	status: z.string().max(75).optional(),
	active: z.boolean().optional(),
	createdBy: z.string().max(75).optional(),
	createdAt: z.date().optional(),
	modifiedBy: z.string().max(75).optional(),
	modifiedAt: z.date().optional(),
});

export default EducationFundReimbursementSchema;