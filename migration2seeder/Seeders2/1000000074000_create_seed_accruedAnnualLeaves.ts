import BaseSeeder from '@ioc:Adonis/Lucid/Seeder';
import { DateTime } from 'luxon';
import { Faker, en } from '@faker-js/faker';
import AccruedAnnualLeave from 'App/Models/AccruedAnnualLeave';
import Employee from 'App/Models/Employee';

export default class extends BaseSeeder {

	public async run () {
		const employees = await Employee.all();
		const faker = new Faker({ locale: [en] });
		await AccruedAnnualLeave.createMany([
			{
				employeeId: employees![Math.floor(Math.random() * 10)].id,
				applicationDate: DateTime.fromJSDate(faker.date.past()),
				currentYear: faker.number.int({ max: 10 }),
				totalLeaveEntitlement: faker.number.int({ max: 10 }),
				leaveBalance: faker.number.int({ max: 10 }),
				acummulatedLeave: faker.number.int({ max: 10 }),
				maxReplacementLeave: faker.number.int({ max: 10 }),
				forwardedLeaveTotal: faker.number.int({ max: 10 }),
				status: faker.person.fullName(),
				remark: faker.person.fullName(),
				active: true,
				createdBy: 'Admin'
			},
			{
				employeeId: employees![Math.floor(Math.random() * 10)].id,
				applicationDate: DateTime.fromJSDate(faker.date.past()),
				currentYear: faker.number.int({ max: 10 }),
				totalLeaveEntitlement: faker.number.int({ max: 10 }),
				leaveBalance: faker.number.int({ max: 10 }),
				acummulatedLeave: faker.number.int({ max: 10 }),
				maxReplacementLeave: faker.number.int({ max: 10 }),
				forwardedLeaveTotal: faker.number.int({ max: 10 }),
				status: faker.person.fullName(),
				remark: faker.person.fullName(),
				active: true,
				createdBy: 'Admin'
			},
			{
				employeeId: employees![Math.floor(Math.random() * 10)].id,
				applicationDate: DateTime.fromJSDate(faker.date.past()),
				currentYear: faker.number.int({ max: 10 }),
				totalLeaveEntitlement: faker.number.int({ max: 10 }),
				leaveBalance: faker.number.int({ max: 10 }),
				acummulatedLeave: faker.number.int({ max: 10 }),
				maxReplacementLeave: faker.number.int({ max: 10 }),
				forwardedLeaveTotal: faker.number.int({ max: 10 }),
				status: faker.person.fullName(),
				remark: faker.person.fullName(),
				active: true,
				createdBy: 'Admin'
			},
			{
				employeeId: employees![Math.floor(Math.random() * 10)].id,
				applicationDate: DateTime.fromJSDate(faker.date.past()),
				currentYear: faker.number.int({ max: 10 }),
				totalLeaveEntitlement: faker.number.int({ max: 10 }),
				leaveBalance: faker.number.int({ max: 10 }),
				acummulatedLeave: faker.number.int({ max: 10 }),
				maxReplacementLeave: faker.number.int({ max: 10 }),
				forwardedLeaveTotal: faker.number.int({ max: 10 }),
				status: faker.person.fullName(),
				remark: faker.person.fullName(),
				active: true,
				createdBy: 'Admin'
			},
			{
				employeeId: employees![Math.floor(Math.random() * 10)].id,
				applicationDate: DateTime.fromJSDate(faker.date.past()),
				currentYear: faker.number.int({ max: 10 }),
				totalLeaveEntitlement: faker.number.int({ max: 10 }),
				leaveBalance: faker.number.int({ max: 10 }),
				acummulatedLeave: faker.number.int({ max: 10 }),
				maxReplacementLeave: faker.number.int({ max: 10 }),
				forwardedLeaveTotal: faker.number.int({ max: 10 }),
				status: faker.person.fullName(),
				remark: faker.person.fullName(),
				active: true,
				createdBy: 'Admin'
			},
			{
				employeeId: employees![Math.floor(Math.random() * 10)].id,
				applicationDate: DateTime.fromJSDate(faker.date.past()),
				currentYear: faker.number.int({ max: 10 }),
				totalLeaveEntitlement: faker.number.int({ max: 10 }),
				leaveBalance: faker.number.int({ max: 10 }),
				acummulatedLeave: faker.number.int({ max: 10 }),
				maxReplacementLeave: faker.number.int({ max: 10 }),
				forwardedLeaveTotal: faker.number.int({ max: 10 }),
				status: faker.person.fullName(),
				remark: faker.person.fullName(),
				active: true,
				createdBy: 'Admin'
			},
			{
				employeeId: employees![Math.floor(Math.random() * 10)].id,
				applicationDate: DateTime.fromJSDate(faker.date.past()),
				currentYear: faker.number.int({ max: 10 }),
				totalLeaveEntitlement: faker.number.int({ max: 10 }),
				leaveBalance: faker.number.int({ max: 10 }),
				acummulatedLeave: faker.number.int({ max: 10 }),
				maxReplacementLeave: faker.number.int({ max: 10 }),
				forwardedLeaveTotal: faker.number.int({ max: 10 }),
				status: faker.person.fullName(),
				remark: faker.person.fullName(),
				active: true,
				createdBy: 'Admin'
			},
			{
				employeeId: employees![Math.floor(Math.random() * 10)].id,
				applicationDate: DateTime.fromJSDate(faker.date.past()),
				currentYear: faker.number.int({ max: 10 }),
				totalLeaveEntitlement: faker.number.int({ max: 10 }),
				leaveBalance: faker.number.int({ max: 10 }),
				acummulatedLeave: faker.number.int({ max: 10 }),
				maxReplacementLeave: faker.number.int({ max: 10 }),
				forwardedLeaveTotal: faker.number.int({ max: 10 }),
				status: faker.person.fullName(),
				remark: faker.person.fullName(),
				active: true,
				createdBy: 'Admin'
			},
			{
				employeeId: employees![Math.floor(Math.random() * 10)].id,
				applicationDate: DateTime.fromJSDate(faker.date.past()),
				currentYear: faker.number.int({ max: 10 }),
				totalLeaveEntitlement: faker.number.int({ max: 10 }),
				leaveBalance: faker.number.int({ max: 10 }),
				acummulatedLeave: faker.number.int({ max: 10 }),
				maxReplacementLeave: faker.number.int({ max: 10 }),
				forwardedLeaveTotal: faker.number.int({ max: 10 }),
				status: faker.person.fullName(),
				remark: faker.person.fullName(),
				active: true,
				createdBy: 'Admin'
			},
			{
				employeeId: employees![Math.floor(Math.random() * 10)].id,
				applicationDate: DateTime.fromJSDate(faker.date.past()),
				currentYear: faker.number.int({ max: 10 }),
				totalLeaveEntitlement: faker.number.int({ max: 10 }),
				leaveBalance: faker.number.int({ max: 10 }),
				acummulatedLeave: faker.number.int({ max: 10 }),
				maxReplacementLeave: faker.number.int({ max: 10 }),
				forwardedLeaveTotal: faker.number.int({ max: 10 }),
				status: faker.person.fullName(),
				remark: faker.person.fullName(),
				active: true,
				createdBy: 'Admin'
			},
		])
	}
}
