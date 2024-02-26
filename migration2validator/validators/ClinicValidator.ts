import { z } from 'zod';

const ClinicSchema = z.object({
	districtId: z.number().int().nonnegative(),
	code: z.string().max(75).optional(),
	year: z.number().int().optional(),
	allocatedAmount: z.number().optional(),
	totalClaimed: z.number().optional(),
	applicationDate: z.string().datetime(),
	panelAppointedDate: z.string().datetime(),
	panelContractEndDate: z.string().datetime(),
	name: z.string().max(75).optional(),
	address: z.string().optional(),
	foundationDate: z.string().datetime(),
	clinicType: z.string().max(75).optional(),
	ownershipStatus: z.string().max(75).optional(),
	registeredMedicalPractitioner: z.string().max(75).optional(),
	branchCount: z.number().int().optional(),
	clinicOfficeDistance: z.number().int().optional(),
	nearestClinicDistance: z.number().int().optional(),
	operationHours: z.string().max(75).optional(),
	contactNumber: z.string().max(75).optional(),
	registerMedical: z.string().max(75).optional(),
	status: z.string().max(75).optional(),
	remark: z.string().optional(),
	active: z.boolean().optional(),
	createdBy: z.string().max(75).optional(),
	createdAt: z.date().optional(),
	modifiedBy: z.string().max(75).optional(),
	modifiedAt: z.date().optional(),
});

export default ClinicSchema;