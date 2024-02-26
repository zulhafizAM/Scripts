import BaseSeeder from '@ioc:Adonis/Lucid/Seeder';
import { DateTime } from 'luxon';
import { Faker, en } from '@faker-js/faker';
import AlternateUntrackedLeave from 'App/Models/AlternateUntrackedLeave';
import Employee from 'App/Models/Employee';

export default class extends BaseSeeder {

	public async run () {
		const employees = await Employee.all();
		const faker = new Faker({ locale: [en] });
		await AlternateUntrackedLeave.createMany([
			{
				employeeId: employees![Math.floor(Math.random() * 10)].id,
				applicationDate: DateTime.fromJSDate(faker.date.past()),
				startDate: DateTime.fromJSDate(faker.date.past()),
				endDate: DateTime.fromJSDate(faker.date.past()),
				status: faker.person.fullName(),
				remark: faker.person.fullName(),
				active: true,
				createdBy: 'Admin'
			},
			{
				employeeId: employees![Math.floor(Math.random() * 10)].id,
				applicationDate: DateTime.fromJSDate(faker.date.past()),
				startDate: DateTime.fromJSDate(faker.date.past()),
				endDate: DateTime.fromJSDate(faker.date.past()),
				status: faker.person.fullName(),
				remark: faker.person.fullName(),
				active: true,
				createdBy: 'Admin'
			},
			{
				employeeId: employees![Math.floor(Math.random() * 10)].id,
				applicationDate: DateTime.fromJSDate(faker.date.past()),
				startDate: DateTime.fromJSDate(faker.date.past()),
				endDate: DateTime.fromJSDate(faker.date.past()),
				status: faker.person.fullName(),
				remark: faker.person.fullName(),
				active: true,
				createdBy: 'Admin'
			},
			{
				employeeId: employees![Math.floor(Math.random() * 10)].id,
				applicationDate: DateTime.fromJSDate(faker.date.past()),
				startDate: DateTime.fromJSDate(faker.date.past()),
				endDate: DateTime.fromJSDate(faker.date.past()),
				status: faker.person.fullName(),
				remark: faker.person.fullName(),
				active: true,
				createdBy: 'Admin'
			},
			{
				employeeId: employees![Math.floor(Math.random() * 10)].id,
				applicationDate: DateTime.fromJSDate(faker.date.past()),
				startDate: DateTime.fromJSDate(faker.date.past()),
				endDate: DateTime.fromJSDate(faker.date.past()),
				status: faker.person.fullName(),
				remark: faker.person.fullName(),
				active: true,
				createdBy: 'Admin'
			},
			{
				employeeId: employees![Math.floor(Math.random() * 10)].id,
				applicationDate: DateTime.fromJSDate(faker.date.past()),
				startDate: DateTime.fromJSDate(faker.date.past()),
				endDate: DateTime.fromJSDate(faker.date.past()),
				status: faker.person.fullName(),
				remark: faker.person.fullName(),
				active: true,
				createdBy: 'Admin'
			},
			{
				employeeId: employees![Math.floor(Math.random() * 10)].id,
				applicationDate: DateTime.fromJSDate(faker.date.past()),
				startDate: DateTime.fromJSDate(faker.date.past()),
				endDate: DateTime.fromJSDate(faker.date.past()),
				status: faker.person.fullName(),
				remark: faker.person.fullName(),
				active: true,
				createdBy: 'Admin'
			},
			{
				employeeId: employees![Math.floor(Math.random() * 10)].id,
				applicationDate: DateTime.fromJSDate(faker.date.past()),
				startDate: DateTime.fromJSDate(faker.date.past()),
				endDate: DateTime.fromJSDate(faker.date.past()),
				status: faker.person.fullName(),
				remark: faker.person.fullName(),
				active: true,
				createdBy: 'Admin'
			},
			{
				employeeId: employees![Math.floor(Math.random() * 10)].id,
				applicationDate: DateTime.fromJSDate(faker.date.past()),
				startDate: DateTime.fromJSDate(faker.date.past()),
				endDate: DateTime.fromJSDate(faker.date.past()),
				status: faker.person.fullName(),
				remark: faker.person.fullName(),
				active: true,
				createdBy: 'Admin'
			},
			{
				employeeId: employees![Math.floor(Math.random() * 10)].id,
				applicationDate: DateTime.fromJSDate(faker.date.past()),
				startDate: DateTime.fromJSDate(faker.date.past()),
				endDate: DateTime.fromJSDate(faker.date.past()),
				status: faker.person.fullName(),
				remark: faker.person.fullName(),
				active: true,
				createdBy: 'Admin'
			},
		])
	}
}
