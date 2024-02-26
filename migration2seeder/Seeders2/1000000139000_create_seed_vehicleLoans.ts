import BaseSeeder from '@ioc:Adonis/Lucid/Seeder';
import { DateTime } from 'luxon';
import { Faker, en } from '@faker-js/faker';
import VehicleLoan from 'App/Models/VehicleLoan';
import Loan from 'App/Models/Loan';

export default class extends BaseSeeder {

	public async run () {
		const loans = await Loan.all();
		const faker = new Faker({ locale: [en] });
		await VehicleLoan.createMany([
			{
				loanId: loans![Math.floor(Math.random() * 10)].id,
				maxLoanEligibility: faker.number.float({ precision: 0.01 }),
				requestedAmount: faker.number.float({ precision: 0.01 }),
				nettPrice: faker.number.float({ precision: 0.01 }),
				paymentPeriod: faker.number.int({ max: 10 }),
				reason: faker.person.fullName(),
				vehicleCondition: faker.person.fullName(),
				vehicleType: faker.person.fullName(),
				vehicleBrandModel: faker.person.fullName(),
				vehicleDetails: faker.person.fullName(),
				registrationNumber: faker.person.fullName(),
				registrationDate: DateTime.fromJSDate(faker.date.past()),
				active: true,
				createdBy: 'Admin'
			},
			{
				loanId: loans![Math.floor(Math.random() * 10)].id,
				maxLoanEligibility: faker.number.float({ precision: 0.01 }),
				requestedAmount: faker.number.float({ precision: 0.01 }),
				nettPrice: faker.number.float({ precision: 0.01 }),
				paymentPeriod: faker.number.int({ max: 10 }),
				reason: faker.person.fullName(),
				vehicleCondition: faker.person.fullName(),
				vehicleType: faker.person.fullName(),
				vehicleBrandModel: faker.person.fullName(),
				vehicleDetails: faker.person.fullName(),
				registrationNumber: faker.person.fullName(),
				registrationDate: DateTime.fromJSDate(faker.date.past()),
				active: true,
				createdBy: 'Admin'
			},
			{
				loanId: loans![Math.floor(Math.random() * 10)].id,
				maxLoanEligibility: faker.number.float({ precision: 0.01 }),
				requestedAmount: faker.number.float({ precision: 0.01 }),
				nettPrice: faker.number.float({ precision: 0.01 }),
				paymentPeriod: faker.number.int({ max: 10 }),
				reason: faker.person.fullName(),
				vehicleCondition: faker.person.fullName(),
				vehicleType: faker.person.fullName(),
				vehicleBrandModel: faker.person.fullName(),
				vehicleDetails: faker.person.fullName(),
				registrationNumber: faker.person.fullName(),
				registrationDate: DateTime.fromJSDate(faker.date.past()),
				active: true,
				createdBy: 'Admin'
			},
			{
				loanId: loans![Math.floor(Math.random() * 10)].id,
				maxLoanEligibility: faker.number.float({ precision: 0.01 }),
				requestedAmount: faker.number.float({ precision: 0.01 }),
				nettPrice: faker.number.float({ precision: 0.01 }),
				paymentPeriod: faker.number.int({ max: 10 }),
				reason: faker.person.fullName(),
				vehicleCondition: faker.person.fullName(),
				vehicleType: faker.person.fullName(),
				vehicleBrandModel: faker.person.fullName(),
				vehicleDetails: faker.person.fullName(),
				registrationNumber: faker.person.fullName(),
				registrationDate: DateTime.fromJSDate(faker.date.past()),
				active: true,
				createdBy: 'Admin'
			},
			{
				loanId: loans![Math.floor(Math.random() * 10)].id,
				maxLoanEligibility: faker.number.float({ precision: 0.01 }),
				requestedAmount: faker.number.float({ precision: 0.01 }),
				nettPrice: faker.number.float({ precision: 0.01 }),
				paymentPeriod: faker.number.int({ max: 10 }),
				reason: faker.person.fullName(),
				vehicleCondition: faker.person.fullName(),
				vehicleType: faker.person.fullName(),
				vehicleBrandModel: faker.person.fullName(),
				vehicleDetails: faker.person.fullName(),
				registrationNumber: faker.person.fullName(),
				registrationDate: DateTime.fromJSDate(faker.date.past()),
				active: true,
				createdBy: 'Admin'
			},
			{
				loanId: loans![Math.floor(Math.random() * 10)].id,
				maxLoanEligibility: faker.number.float({ precision: 0.01 }),
				requestedAmount: faker.number.float({ precision: 0.01 }),
				nettPrice: faker.number.float({ precision: 0.01 }),
				paymentPeriod: faker.number.int({ max: 10 }),
				reason: faker.person.fullName(),
				vehicleCondition: faker.person.fullName(),
				vehicleType: faker.person.fullName(),
				vehicleBrandModel: faker.person.fullName(),
				vehicleDetails: faker.person.fullName(),
				registrationNumber: faker.person.fullName(),
				registrationDate: DateTime.fromJSDate(faker.date.past()),
				active: true,
				createdBy: 'Admin'
			},
			{
				loanId: loans![Math.floor(Math.random() * 10)].id,
				maxLoanEligibility: faker.number.float({ precision: 0.01 }),
				requestedAmount: faker.number.float({ precision: 0.01 }),
				nettPrice: faker.number.float({ precision: 0.01 }),
				paymentPeriod: faker.number.int({ max: 10 }),
				reason: faker.person.fullName(),
				vehicleCondition: faker.person.fullName(),
				vehicleType: faker.person.fullName(),
				vehicleBrandModel: faker.person.fullName(),
				vehicleDetails: faker.person.fullName(),
				registrationNumber: faker.person.fullName(),
				registrationDate: DateTime.fromJSDate(faker.date.past()),
				active: true,
				createdBy: 'Admin'
			},
			{
				loanId: loans![Math.floor(Math.random() * 10)].id,
				maxLoanEligibility: faker.number.float({ precision: 0.01 }),
				requestedAmount: faker.number.float({ precision: 0.01 }),
				nettPrice: faker.number.float({ precision: 0.01 }),
				paymentPeriod: faker.number.int({ max: 10 }),
				reason: faker.person.fullName(),
				vehicleCondition: faker.person.fullName(),
				vehicleType: faker.person.fullName(),
				vehicleBrandModel: faker.person.fullName(),
				vehicleDetails: faker.person.fullName(),
				registrationNumber: faker.person.fullName(),
				registrationDate: DateTime.fromJSDate(faker.date.past()),
				active: true,
				createdBy: 'Admin'
			},
			{
				loanId: loans![Math.floor(Math.random() * 10)].id,
				maxLoanEligibility: faker.number.float({ precision: 0.01 }),
				requestedAmount: faker.number.float({ precision: 0.01 }),
				nettPrice: faker.number.float({ precision: 0.01 }),
				paymentPeriod: faker.number.int({ max: 10 }),
				reason: faker.person.fullName(),
				vehicleCondition: faker.person.fullName(),
				vehicleType: faker.person.fullName(),
				vehicleBrandModel: faker.person.fullName(),
				vehicleDetails: faker.person.fullName(),
				registrationNumber: faker.person.fullName(),
				registrationDate: DateTime.fromJSDate(faker.date.past()),
				active: true,
				createdBy: 'Admin'
			},
			{
				loanId: loans![Math.floor(Math.random() * 10)].id,
				maxLoanEligibility: faker.number.float({ precision: 0.01 }),
				requestedAmount: faker.number.float({ precision: 0.01 }),
				nettPrice: faker.number.float({ precision: 0.01 }),
				paymentPeriod: faker.number.int({ max: 10 }),
				reason: faker.person.fullName(),
				vehicleCondition: faker.person.fullName(),
				vehicleType: faker.person.fullName(),
				vehicleBrandModel: faker.person.fullName(),
				vehicleDetails: faker.person.fullName(),
				registrationNumber: faker.person.fullName(),
				registrationDate: DateTime.fromJSDate(faker.date.past()),
				active: true,
				createdBy: 'Admin'
			},
		])
	}
}
