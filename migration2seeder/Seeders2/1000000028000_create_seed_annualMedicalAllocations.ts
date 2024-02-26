import BaseSeeder from '@ioc:Adonis/Lucid/Seeder';
import { DateTime } from 'luxon';
import { Faker, en } from '@faker-js/faker';
import AnnualMedicalAllocation from 'App/Models/AnnualMedicalAllocation';
import Employee from 'App/Models/Employee';

export default class extends BaseSeeder {

	public async run () {
		const employees = await Employee.all();
		const faker = new Faker({ locale: [en] });
		await AnnualMedicalAllocation.createMany([
			{
				employeeId: employees![Math.floor(Math.random() * 10)].id,
				month: faker.number.int({ max: 10 }),
				year: faker.number.int({ max: 10 }),
				allocatedAmount: faker.number.float({ precision: 0.01 }),
				totalClaimed: faker.number.float({ precision: 0.01 }),
				active: true,
				createdBy: 'Admin'
			},
			{
				employeeId: employees![Math.floor(Math.random() * 10)].id,
				month: faker.number.int({ max: 10 }),
				year: faker.number.int({ max: 10 }),
				allocatedAmount: faker.number.float({ precision: 0.01 }),
				totalClaimed: faker.number.float({ precision: 0.01 }),
				active: true,
				createdBy: 'Admin'
			},
			{
				employeeId: employees![Math.floor(Math.random() * 10)].id,
				month: faker.number.int({ max: 10 }),
				year: faker.number.int({ max: 10 }),
				allocatedAmount: faker.number.float({ precision: 0.01 }),
				totalClaimed: faker.number.float({ precision: 0.01 }),
				active: true,
				createdBy: 'Admin'
			},
			{
				employeeId: employees![Math.floor(Math.random() * 10)].id,
				month: faker.number.int({ max: 10 }),
				year: faker.number.int({ max: 10 }),
				allocatedAmount: faker.number.float({ precision: 0.01 }),
				totalClaimed: faker.number.float({ precision: 0.01 }),
				active: true,
				createdBy: 'Admin'
			},
			{
				employeeId: employees![Math.floor(Math.random() * 10)].id,
				month: faker.number.int({ max: 10 }),
				year: faker.number.int({ max: 10 }),
				allocatedAmount: faker.number.float({ precision: 0.01 }),
				totalClaimed: faker.number.float({ precision: 0.01 }),
				active: true,
				createdBy: 'Admin'
			},
			{
				employeeId: employees![Math.floor(Math.random() * 10)].id,
				month: faker.number.int({ max: 10 }),
				year: faker.number.int({ max: 10 }),
				allocatedAmount: faker.number.float({ precision: 0.01 }),
				totalClaimed: faker.number.float({ precision: 0.01 }),
				active: true,
				createdBy: 'Admin'
			},
			{
				employeeId: employees![Math.floor(Math.random() * 10)].id,
				month: faker.number.int({ max: 10 }),
				year: faker.number.int({ max: 10 }),
				allocatedAmount: faker.number.float({ precision: 0.01 }),
				totalClaimed: faker.number.float({ precision: 0.01 }),
				active: true,
				createdBy: 'Admin'
			},
			{
				employeeId: employees![Math.floor(Math.random() * 10)].id,
				month: faker.number.int({ max: 10 }),
				year: faker.number.int({ max: 10 }),
				allocatedAmount: faker.number.float({ precision: 0.01 }),
				totalClaimed: faker.number.float({ precision: 0.01 }),
				active: true,
				createdBy: 'Admin'
			},
			{
				employeeId: employees![Math.floor(Math.random() * 10)].id,
				month: faker.number.int({ max: 10 }),
				year: faker.number.int({ max: 10 }),
				allocatedAmount: faker.number.float({ precision: 0.01 }),
				totalClaimed: faker.number.float({ precision: 0.01 }),
				active: true,
				createdBy: 'Admin'
			},
			{
				employeeId: employees![Math.floor(Math.random() * 10)].id,
				month: faker.number.int({ max: 10 }),
				year: faker.number.int({ max: 10 }),
				allocatedAmount: faker.number.float({ precision: 0.01 }),
				totalClaimed: faker.number.float({ precision: 0.01 }),
				active: true,
				createdBy: 'Admin'
			},
		])
	}
}
