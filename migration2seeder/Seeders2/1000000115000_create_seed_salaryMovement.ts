import BaseSeeder from '@ioc:Adonis/Lucid/Seeder';
import { DateTime } from 'luxon';
import { Faker, en } from '@faker-js/faker';
import SalaryMovement from 'App/Models/SalaryMovement';
import Salary from 'App/Models/Salary';
import Meeting from 'App/Models/Meeting';

export default class extends BaseSeeder {

	public async run () {
		const salaries = await Salary.all();
		const meetings = await Meeting.all();
		const faker = new Faker({ locale: [en] });
		await SalaryMovement.createMany([
			{
				salaryDetailId: salaries![Math.floor(Math.random() * 10)].id,
				meetingId: meetings![Math.floor(Math.random() * 10)].id,
				salaryMovementMonth: faker.number.int({ max: 10 }),
				specialAid: faker.number.float({ precision: 0.01 }),
				specialRaiseType: faker.person.fullName(),
				specialRaise: faker.number.float({ precision: 0.01 }),
				status: faker.person.fullName(),
				remark: faker.person.fullName(),
				active: true,
				createdBy: 'Admin'
			},
			{
				salaryDetailId: salaries![Math.floor(Math.random() * 10)].id,
				meetingId: meetings![Math.floor(Math.random() * 10)].id,
				salaryMovementMonth: faker.number.int({ max: 10 }),
				specialAid: faker.number.float({ precision: 0.01 }),
				specialRaiseType: faker.person.fullName(),
				specialRaise: faker.number.float({ precision: 0.01 }),
				status: faker.person.fullName(),
				remark: faker.person.fullName(),
				active: true,
				createdBy: 'Admin'
			},
			{
				salaryDetailId: salaries![Math.floor(Math.random() * 10)].id,
				meetingId: meetings![Math.floor(Math.random() * 10)].id,
				salaryMovementMonth: faker.number.int({ max: 10 }),
				specialAid: faker.number.float({ precision: 0.01 }),
				specialRaiseType: faker.person.fullName(),
				specialRaise: faker.number.float({ precision: 0.01 }),
				status: faker.person.fullName(),
				remark: faker.person.fullName(),
				active: true,
				createdBy: 'Admin'
			},
			{
				salaryDetailId: salaries![Math.floor(Math.random() * 10)].id,
				meetingId: meetings![Math.floor(Math.random() * 10)].id,
				salaryMovementMonth: faker.number.int({ max: 10 }),
				specialAid: faker.number.float({ precision: 0.01 }),
				specialRaiseType: faker.person.fullName(),
				specialRaise: faker.number.float({ precision: 0.01 }),
				status: faker.person.fullName(),
				remark: faker.person.fullName(),
				active: true,
				createdBy: 'Admin'
			},
			{
				salaryDetailId: salaries![Math.floor(Math.random() * 10)].id,
				meetingId: meetings![Math.floor(Math.random() * 10)].id,
				salaryMovementMonth: faker.number.int({ max: 10 }),
				specialAid: faker.number.float({ precision: 0.01 }),
				specialRaiseType: faker.person.fullName(),
				specialRaise: faker.number.float({ precision: 0.01 }),
				status: faker.person.fullName(),
				remark: faker.person.fullName(),
				active: true,
				createdBy: 'Admin'
			},
			{
				salaryDetailId: salaries![Math.floor(Math.random() * 10)].id,
				meetingId: meetings![Math.floor(Math.random() * 10)].id,
				salaryMovementMonth: faker.number.int({ max: 10 }),
				specialAid: faker.number.float({ precision: 0.01 }),
				specialRaiseType: faker.person.fullName(),
				specialRaise: faker.number.float({ precision: 0.01 }),
				status: faker.person.fullName(),
				remark: faker.person.fullName(),
				active: true,
				createdBy: 'Admin'
			},
			{
				salaryDetailId: salaries![Math.floor(Math.random() * 10)].id,
				meetingId: meetings![Math.floor(Math.random() * 10)].id,
				salaryMovementMonth: faker.number.int({ max: 10 }),
				specialAid: faker.number.float({ precision: 0.01 }),
				specialRaiseType: faker.person.fullName(),
				specialRaise: faker.number.float({ precision: 0.01 }),
				status: faker.person.fullName(),
				remark: faker.person.fullName(),
				active: true,
				createdBy: 'Admin'
			},
			{
				salaryDetailId: salaries![Math.floor(Math.random() * 10)].id,
				meetingId: meetings![Math.floor(Math.random() * 10)].id,
				salaryMovementMonth: faker.number.int({ max: 10 }),
				specialAid: faker.number.float({ precision: 0.01 }),
				specialRaiseType: faker.person.fullName(),
				specialRaise: faker.number.float({ precision: 0.01 }),
				status: faker.person.fullName(),
				remark: faker.person.fullName(),
				active: true,
				createdBy: 'Admin'
			},
			{
				salaryDetailId: salaries![Math.floor(Math.random() * 10)].id,
				meetingId: meetings![Math.floor(Math.random() * 10)].id,
				salaryMovementMonth: faker.number.int({ max: 10 }),
				specialAid: faker.number.float({ precision: 0.01 }),
				specialRaiseType: faker.person.fullName(),
				specialRaise: faker.number.float({ precision: 0.01 }),
				status: faker.person.fullName(),
				remark: faker.person.fullName(),
				active: true,
				createdBy: 'Admin'
			},
			{
				salaryDetailId: salaries![Math.floor(Math.random() * 10)].id,
				meetingId: meetings![Math.floor(Math.random() * 10)].id,
				salaryMovementMonth: faker.number.int({ max: 10 }),
				specialAid: faker.number.float({ precision: 0.01 }),
				specialRaiseType: faker.person.fullName(),
				specialRaise: faker.number.float({ precision: 0.01 }),
				status: faker.person.fullName(),
				remark: faker.person.fullName(),
				active: true,
				createdBy: 'Admin'
			},
		])
	}
}
