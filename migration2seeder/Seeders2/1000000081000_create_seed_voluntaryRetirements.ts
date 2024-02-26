import BaseSeeder from '@ioc:Adonis/Lucid/Seeder';
import { DateTime } from 'luxon';
import { Faker, en } from '@faker-js/faker';
import VoluntaryRetirement from 'App/Models/VoluntaryRetirement';
import Employee from 'App/Models/Employee';

export default class extends BaseSeeder {

	public async run () {
		const employees = await Employee.all();
		const faker = new Faker({ locale: [en] });
		await VoluntaryRetirement.createMany([
			{
				employeeId: employees![Math.floor(Math.random() * 10)].id,
				applicationDate: DateTime.fromJSDate(faker.date.past()),
				sendDate: DateTime.fromJSDate(faker.date.past()),
				newRetirementDate: DateTime.fromJSDate(faker.date.past()),
				status: faker.person.fullName(),
				remark: faker.person.fullName(),
				reason: faker.person.fullName(),
				active: true,
				createdBy: 'Admin'
			},
			{
				employeeId: employees![Math.floor(Math.random() * 10)].id,
				applicationDate: DateTime.fromJSDate(faker.date.past()),
				sendDate: DateTime.fromJSDate(faker.date.past()),
				newRetirementDate: DateTime.fromJSDate(faker.date.past()),
				status: faker.person.fullName(),
				remark: faker.person.fullName(),
				reason: faker.person.fullName(),
				active: true,
				createdBy: 'Admin'
			},
			{
				employeeId: employees![Math.floor(Math.random() * 10)].id,
				applicationDate: DateTime.fromJSDate(faker.date.past()),
				sendDate: DateTime.fromJSDate(faker.date.past()),
				newRetirementDate: DateTime.fromJSDate(faker.date.past()),
				status: faker.person.fullName(),
				remark: faker.person.fullName(),
				reason: faker.person.fullName(),
				active: true,
				createdBy: 'Admin'
			},
			{
				employeeId: employees![Math.floor(Math.random() * 10)].id,
				applicationDate: DateTime.fromJSDate(faker.date.past()),
				sendDate: DateTime.fromJSDate(faker.date.past()),
				newRetirementDate: DateTime.fromJSDate(faker.date.past()),
				status: faker.person.fullName(),
				remark: faker.person.fullName(),
				reason: faker.person.fullName(),
				active: true,
				createdBy: 'Admin'
			},
			{
				employeeId: employees![Math.floor(Math.random() * 10)].id,
				applicationDate: DateTime.fromJSDate(faker.date.past()),
				sendDate: DateTime.fromJSDate(faker.date.past()),
				newRetirementDate: DateTime.fromJSDate(faker.date.past()),
				status: faker.person.fullName(),
				remark: faker.person.fullName(),
				reason: faker.person.fullName(),
				active: true,
				createdBy: 'Admin'
			},
			{
				employeeId: employees![Math.floor(Math.random() * 10)].id,
				applicationDate: DateTime.fromJSDate(faker.date.past()),
				sendDate: DateTime.fromJSDate(faker.date.past()),
				newRetirementDate: DateTime.fromJSDate(faker.date.past()),
				status: faker.person.fullName(),
				remark: faker.person.fullName(),
				reason: faker.person.fullName(),
				active: true,
				createdBy: 'Admin'
			},
			{
				employeeId: employees![Math.floor(Math.random() * 10)].id,
				applicationDate: DateTime.fromJSDate(faker.date.past()),
				sendDate: DateTime.fromJSDate(faker.date.past()),
				newRetirementDate: DateTime.fromJSDate(faker.date.past()),
				status: faker.person.fullName(),
				remark: faker.person.fullName(),
				reason: faker.person.fullName(),
				active: true,
				createdBy: 'Admin'
			},
			{
				employeeId: employees![Math.floor(Math.random() * 10)].id,
				applicationDate: DateTime.fromJSDate(faker.date.past()),
				sendDate: DateTime.fromJSDate(faker.date.past()),
				newRetirementDate: DateTime.fromJSDate(faker.date.past()),
				status: faker.person.fullName(),
				remark: faker.person.fullName(),
				reason: faker.person.fullName(),
				active: true,
				createdBy: 'Admin'
			},
			{
				employeeId: employees![Math.floor(Math.random() * 10)].id,
				applicationDate: DateTime.fromJSDate(faker.date.past()),
				sendDate: DateTime.fromJSDate(faker.date.past()),
				newRetirementDate: DateTime.fromJSDate(faker.date.past()),
				status: faker.person.fullName(),
				remark: faker.person.fullName(),
				reason: faker.person.fullName(),
				active: true,
				createdBy: 'Admin'
			},
			{
				employeeId: employees![Math.floor(Math.random() * 10)].id,
				applicationDate: DateTime.fromJSDate(faker.date.past()),
				sendDate: DateTime.fromJSDate(faker.date.past()),
				newRetirementDate: DateTime.fromJSDate(faker.date.past()),
				status: faker.person.fullName(),
				remark: faker.person.fullName(),
				reason: faker.person.fullName(),
				active: true,
				createdBy: 'Admin'
			},
		])
	}
}
