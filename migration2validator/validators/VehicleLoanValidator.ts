import { z } from 'zod';

const VehicleLoanSchema = z.object({
	loanId: z.number().int().nonnegative(),
	maxLoanEligibility: z.number().optional(),
	requestedAmount: z.number().optional(),
	nettPrice: z.number().optional(),
	paymentPeriod: z.number().int().optional(),
	reason: z.string().optional(),
	vehicleCondition: z.string().max(75).optional(),
	vehicleType: z.string().max(75).optional(),
	vehicleBrandModel: z.string().max(75).optional(),
	vehicleDetails: z.string().optional(),
	registrationNumber: z.string().max(75).optional(),
	registrationDate: z.string().datetime(),
	active: z.boolean().optional(),
	createdBy: z.string().max(75).optional(),
	createdAt: z.date().optional(),
	modifiedBy: z.string().max(75).optional(),
	modifiedAt: z.date().optional(),
});

export default VehicleLoanSchema;