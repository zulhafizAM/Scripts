import BaseSeeder from '@ioc:Adonis/Lucid/Seeder';
import { DateTime } from 'luxon';
import { Faker, en } from '@faker-js/faker';
import ComputerLoan from 'App/Models/ComputerLoan';
import Loan from 'App/Models/Loan';

export default class extends BaseSeeder {

	public async run () {
		const loans = await Loan.all();
		const faker = new Faker({ locale: [en] });
		await ComputerLoan.createMany([
			{
				loanId: loans![Math.floor(Math.random() * 10)].id,
				requestedAmount: faker.number.float({ precision: 0.01 }),
				paymentPeriod: faker.number.int({ max: 10 }),
				active: true,
				createdBy: 'Admin'
			},
			{
				loanId: loans![Math.floor(Math.random() * 10)].id,
				requestedAmount: faker.number.float({ precision: 0.01 }),
				paymentPeriod: faker.number.int({ max: 10 }),
				active: true,
				createdBy: 'Admin'
			},
			{
				loanId: loans![Math.floor(Math.random() * 10)].id,
				requestedAmount: faker.number.float({ precision: 0.01 }),
				paymentPeriod: faker.number.int({ max: 10 }),
				active: true,
				createdBy: 'Admin'
			},
			{
				loanId: loans![Math.floor(Math.random() * 10)].id,
				requestedAmount: faker.number.float({ precision: 0.01 }),
				paymentPeriod: faker.number.int({ max: 10 }),
				active: true,
				createdBy: 'Admin'
			},
			{
				loanId: loans![Math.floor(Math.random() * 10)].id,
				requestedAmount: faker.number.float({ precision: 0.01 }),
				paymentPeriod: faker.number.int({ max: 10 }),
				active: true,
				createdBy: 'Admin'
			},
			{
				loanId: loans![Math.floor(Math.random() * 10)].id,
				requestedAmount: faker.number.float({ precision: 0.01 }),
				paymentPeriod: faker.number.int({ max: 10 }),
				active: true,
				createdBy: 'Admin'
			},
			{
				loanId: loans![Math.floor(Math.random() * 10)].id,
				requestedAmount: faker.number.float({ precision: 0.01 }),
				paymentPeriod: faker.number.int({ max: 10 }),
				active: true,
				createdBy: 'Admin'
			},
			{
				loanId: loans![Math.floor(Math.random() * 10)].id,
				requestedAmount: faker.number.float({ precision: 0.01 }),
				paymentPeriod: faker.number.int({ max: 10 }),
				active: true,
				createdBy: 'Admin'
			},
			{
				loanId: loans![Math.floor(Math.random() * 10)].id,
				requestedAmount: faker.number.float({ precision: 0.01 }),
				paymentPeriod: faker.number.int({ max: 10 }),
				active: true,
				createdBy: 'Admin'
			},
			{
				loanId: loans![Math.floor(Math.random() * 10)].id,
				requestedAmount: faker.number.float({ precision: 0.01 }),
				paymentPeriod: faker.number.int({ max: 10 }),
				active: true,
				createdBy: 'Admin'
			},
		])
	}
}
