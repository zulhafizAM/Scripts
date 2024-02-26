import BaseSeeder from '@ioc:Adonis/Lucid/Seeder';
import { DateTime } from 'luxon';
import { Faker, en } from '@faker-js/faker';
import ReplacementAnnualLeave from 'App/Models/ReplacementAnnualLeave';
import Employee from 'App/Models/Employee';

export default class extends BaseSeeder {

	public async run () {
		const employees = await Employee.all();
		const faker = new Faker({ locale: [en] });
		await ReplacementAnnualLeave.createMany([
			{
				employeeId: employees![Math.floor(Math.random() * 10)].id,
				accumulatedLeave: faker.number.int({ max: 10 }),
				isDeducted: true,
				amount: faker.number.float({ precision: 0.01 }),
				endDate: DateTime.fromJSDate(faker.date.past()),
				status: faker.person.fullName(),
				remark: faker.person.fullName(),
				active: true,
				createdBy: 'Admin'
			},
			{
				employeeId: employees![Math.floor(Math.random() * 10)].id,
				accumulatedLeave: faker.number.int({ max: 10 }),
				isDeducted: true,
				amount: faker.number.float({ precision: 0.01 }),
				endDate: DateTime.fromJSDate(faker.date.past()),
				status: faker.person.fullName(),
				remark: faker.person.fullName(),
				active: true,
				createdBy: 'Admin'
			},
			{
				employeeId: employees![Math.floor(Math.random() * 10)].id,
				accumulatedLeave: faker.number.int({ max: 10 }),
				isDeducted: true,
				amount: faker.number.float({ precision: 0.01 }),
				endDate: DateTime.fromJSDate(faker.date.past()),
				status: faker.person.fullName(),
				remark: faker.person.fullName(),
				active: true,
				createdBy: 'Admin'
			},
			{
				employeeId: employees![Math.floor(Math.random() * 10)].id,
				accumulatedLeave: faker.number.int({ max: 10 }),
				isDeducted: true,
				amount: faker.number.float({ precision: 0.01 }),
				endDate: DateTime.fromJSDate(faker.date.past()),
				status: faker.person.fullName(),
				remark: faker.person.fullName(),
				active: true,
				createdBy: 'Admin'
			},
			{
				employeeId: employees![Math.floor(Math.random() * 10)].id,
				accumulatedLeave: faker.number.int({ max: 10 }),
				isDeducted: true,
				amount: faker.number.float({ precision: 0.01 }),
				endDate: DateTime.fromJSDate(faker.date.past()),
				status: faker.person.fullName(),
				remark: faker.person.fullName(),
				active: true,
				createdBy: 'Admin'
			},
			{
				employeeId: employees![Math.floor(Math.random() * 10)].id,
				accumulatedLeave: faker.number.int({ max: 10 }),
				isDeducted: true,
				amount: faker.number.float({ precision: 0.01 }),
				endDate: DateTime.fromJSDate(faker.date.past()),
				status: faker.person.fullName(),
				remark: faker.person.fullName(),
				active: true,
				createdBy: 'Admin'
			},
			{
				employeeId: employees![Math.floor(Math.random() * 10)].id,
				accumulatedLeave: faker.number.int({ max: 10 }),
				isDeducted: true,
				amount: faker.number.float({ precision: 0.01 }),
				endDate: DateTime.fromJSDate(faker.date.past()),
				status: faker.person.fullName(),
				remark: faker.person.fullName(),
				active: true,
				createdBy: 'Admin'
			},
			{
				employeeId: employees![Math.floor(Math.random() * 10)].id,
				accumulatedLeave: faker.number.int({ max: 10 }),
				isDeducted: true,
				amount: faker.number.float({ precision: 0.01 }),
				endDate: DateTime.fromJSDate(faker.date.past()),
				status: faker.person.fullName(),
				remark: faker.person.fullName(),
				active: true,
				createdBy: 'Admin'
			},
			{
				employeeId: employees![Math.floor(Math.random() * 10)].id,
				accumulatedLeave: faker.number.int({ max: 10 }),
				isDeducted: true,
				amount: faker.number.float({ precision: 0.01 }),
				endDate: DateTime.fromJSDate(faker.date.past()),
				status: faker.person.fullName(),
				remark: faker.person.fullName(),
				active: true,
				createdBy: 'Admin'
			},
			{
				employeeId: employees![Math.floor(Math.random() * 10)].id,
				accumulatedLeave: faker.number.int({ max: 10 }),
				isDeducted: true,
				amount: faker.number.float({ precision: 0.01 }),
				endDate: DateTime.fromJSDate(faker.date.past()),
				status: faker.person.fullName(),
				remark: faker.person.fullName(),
				active: true,
				createdBy: 'Admin'
			},
		])
	}
}
