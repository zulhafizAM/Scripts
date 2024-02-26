import BaseSeeder from '@ioc:Adonis/Lucid/Seeder';
import { DateTime } from 'luxon';
import { Faker, en } from '@faker-js/faker';
import WithdrawalAnnualLeave from 'App/Models/WithdrawalAnnualLeave';
import Employee from 'App/Models/Employee';

export default class extends BaseSeeder {

	public async run () {
		const employees = await Employee.all();
		const faker = new Faker({ locale: [en] });
		await WithdrawalAnnualLeave.createMany([
			{
				employeeId: employees![Math.floor(Math.random() * 10)].id,
				applicationDate: DateTime.fromJSDate(faker.date.past()),
				acummulatedLeave: faker.number.int({ max: 10 }),
				leaveWithdrawal: faker.number.int({ max: 10 }),
				leaveBalance: faker.number.int({ max: 10 }),
				startDate: DateTime.fromJSDate(faker.date.past()),
				status: faker.person.fullName(),
				remark: faker.person.fullName(),
				active: true,
				createdBy: 'Admin'
			},
			{
				employeeId: employees![Math.floor(Math.random() * 10)].id,
				applicationDate: DateTime.fromJSDate(faker.date.past()),
				acummulatedLeave: faker.number.int({ max: 10 }),
				leaveWithdrawal: faker.number.int({ max: 10 }),
				leaveBalance: faker.number.int({ max: 10 }),
				startDate: DateTime.fromJSDate(faker.date.past()),
				status: faker.person.fullName(),
				remark: faker.person.fullName(),
				active: true,
				createdBy: 'Admin'
			},
			{
				employeeId: employees![Math.floor(Math.random() * 10)].id,
				applicationDate: DateTime.fromJSDate(faker.date.past()),
				acummulatedLeave: faker.number.int({ max: 10 }),
				leaveWithdrawal: faker.number.int({ max: 10 }),
				leaveBalance: faker.number.int({ max: 10 }),
				startDate: DateTime.fromJSDate(faker.date.past()),
				status: faker.person.fullName(),
				remark: faker.person.fullName(),
				active: true,
				createdBy: 'Admin'
			},
			{
				employeeId: employees![Math.floor(Math.random() * 10)].id,
				applicationDate: DateTime.fromJSDate(faker.date.past()),
				acummulatedLeave: faker.number.int({ max: 10 }),
				leaveWithdrawal: faker.number.int({ max: 10 }),
				leaveBalance: faker.number.int({ max: 10 }),
				startDate: DateTime.fromJSDate(faker.date.past()),
				status: faker.person.fullName(),
				remark: faker.person.fullName(),
				active: true,
				createdBy: 'Admin'
			},
			{
				employeeId: employees![Math.floor(Math.random() * 10)].id,
				applicationDate: DateTime.fromJSDate(faker.date.past()),
				acummulatedLeave: faker.number.int({ max: 10 }),
				leaveWithdrawal: faker.number.int({ max: 10 }),
				leaveBalance: faker.number.int({ max: 10 }),
				startDate: DateTime.fromJSDate(faker.date.past()),
				status: faker.person.fullName(),
				remark: faker.person.fullName(),
				active: true,
				createdBy: 'Admin'
			},
			{
				employeeId: employees![Math.floor(Math.random() * 10)].id,
				applicationDate: DateTime.fromJSDate(faker.date.past()),
				acummulatedLeave: faker.number.int({ max: 10 }),
				leaveWithdrawal: faker.number.int({ max: 10 }),
				leaveBalance: faker.number.int({ max: 10 }),
				startDate: DateTime.fromJSDate(faker.date.past()),
				status: faker.person.fullName(),
				remark: faker.person.fullName(),
				active: true,
				createdBy: 'Admin'
			},
			{
				employeeId: employees![Math.floor(Math.random() * 10)].id,
				applicationDate: DateTime.fromJSDate(faker.date.past()),
				acummulatedLeave: faker.number.int({ max: 10 }),
				leaveWithdrawal: faker.number.int({ max: 10 }),
				leaveBalance: faker.number.int({ max: 10 }),
				startDate: DateTime.fromJSDate(faker.date.past()),
				status: faker.person.fullName(),
				remark: faker.person.fullName(),
				active: true,
				createdBy: 'Admin'
			},
			{
				employeeId: employees![Math.floor(Math.random() * 10)].id,
				applicationDate: DateTime.fromJSDate(faker.date.past()),
				acummulatedLeave: faker.number.int({ max: 10 }),
				leaveWithdrawal: faker.number.int({ max: 10 }),
				leaveBalance: faker.number.int({ max: 10 }),
				startDate: DateTime.fromJSDate(faker.date.past()),
				status: faker.person.fullName(),
				remark: faker.person.fullName(),
				active: true,
				createdBy: 'Admin'
			},
			{
				employeeId: employees![Math.floor(Math.random() * 10)].id,
				applicationDate: DateTime.fromJSDate(faker.date.past()),
				acummulatedLeave: faker.number.int({ max: 10 }),
				leaveWithdrawal: faker.number.int({ max: 10 }),
				leaveBalance: faker.number.int({ max: 10 }),
				startDate: DateTime.fromJSDate(faker.date.past()),
				status: faker.person.fullName(),
				remark: faker.person.fullName(),
				active: true,
				createdBy: 'Admin'
			},
			{
				employeeId: employees![Math.floor(Math.random() * 10)].id,
				applicationDate: DateTime.fromJSDate(faker.date.past()),
				acummulatedLeave: faker.number.int({ max: 10 }),
				leaveWithdrawal: faker.number.int({ max: 10 }),
				leaveBalance: faker.number.int({ max: 10 }),
				startDate: DateTime.fromJSDate(faker.date.past()),
				status: faker.person.fullName(),
				remark: faker.person.fullName(),
				active: true,
				createdBy: 'Admin'
			},
		])
	}
}
