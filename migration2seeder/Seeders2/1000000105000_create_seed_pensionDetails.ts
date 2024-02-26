import BaseSeeder from '@ioc:Adonis/Lucid/Seeder';
import { DateTime } from 'luxon';
import { Faker, en } from '@faker-js/faker';
import PensionDetail from 'App/Models/PensionDetail';
import Employee from 'App/Models/Employee';

export default class extends BaseSeeder {

	public async run () {
		const employees = await Employee.all();
		const faker = new Faker({ locale: [en] });
		await PensionDetail.createMany([
			{
				employeeId: employees![Math.floor(Math.random() * 10)].id,
				applicationDate: DateTime.fromJSDate(faker.date.past()),
				PTBDate: DateTime.fromJSDate(faker.date.past()),
				referenceNumber: faker.person.fullName(),
				referenceDate: DateTime.fromJSDate(faker.date.past()),
				status: faker.person.fullName(),
				remark: faker.person.fullName(),
				active: true,
				createdBy: 'Admin'
			},
			{
				employeeId: employees![Math.floor(Math.random() * 10)].id,
				applicationDate: DateTime.fromJSDate(faker.date.past()),
				PTBDate: DateTime.fromJSDate(faker.date.past()),
				referenceNumber: faker.person.fullName(),
				referenceDate: DateTime.fromJSDate(faker.date.past()),
				status: faker.person.fullName(),
				remark: faker.person.fullName(),
				active: true,
				createdBy: 'Admin'
			},
			{
				employeeId: employees![Math.floor(Math.random() * 10)].id,
				applicationDate: DateTime.fromJSDate(faker.date.past()),
				PTBDate: DateTime.fromJSDate(faker.date.past()),
				referenceNumber: faker.person.fullName(),
				referenceDate: DateTime.fromJSDate(faker.date.past()),
				status: faker.person.fullName(),
				remark: faker.person.fullName(),
				active: true,
				createdBy: 'Admin'
			},
			{
				employeeId: employees![Math.floor(Math.random() * 10)].id,
				applicationDate: DateTime.fromJSDate(faker.date.past()),
				PTBDate: DateTime.fromJSDate(faker.date.past()),
				referenceNumber: faker.person.fullName(),
				referenceDate: DateTime.fromJSDate(faker.date.past()),
				status: faker.person.fullName(),
				remark: faker.person.fullName(),
				active: true,
				createdBy: 'Admin'
			},
			{
				employeeId: employees![Math.floor(Math.random() * 10)].id,
				applicationDate: DateTime.fromJSDate(faker.date.past()),
				PTBDate: DateTime.fromJSDate(faker.date.past()),
				referenceNumber: faker.person.fullName(),
				referenceDate: DateTime.fromJSDate(faker.date.past()),
				status: faker.person.fullName(),
				remark: faker.person.fullName(),
				active: true,
				createdBy: 'Admin'
			},
			{
				employeeId: employees![Math.floor(Math.random() * 10)].id,
				applicationDate: DateTime.fromJSDate(faker.date.past()),
				PTBDate: DateTime.fromJSDate(faker.date.past()),
				referenceNumber: faker.person.fullName(),
				referenceDate: DateTime.fromJSDate(faker.date.past()),
				status: faker.person.fullName(),
				remark: faker.person.fullName(),
				active: true,
				createdBy: 'Admin'
			},
			{
				employeeId: employees![Math.floor(Math.random() * 10)].id,
				applicationDate: DateTime.fromJSDate(faker.date.past()),
				PTBDate: DateTime.fromJSDate(faker.date.past()),
				referenceNumber: faker.person.fullName(),
				referenceDate: DateTime.fromJSDate(faker.date.past()),
				status: faker.person.fullName(),
				remark: faker.person.fullName(),
				active: true,
				createdBy: 'Admin'
			},
			{
				employeeId: employees![Math.floor(Math.random() * 10)].id,
				applicationDate: DateTime.fromJSDate(faker.date.past()),
				PTBDate: DateTime.fromJSDate(faker.date.past()),
				referenceNumber: faker.person.fullName(),
				referenceDate: DateTime.fromJSDate(faker.date.past()),
				status: faker.person.fullName(),
				remark: faker.person.fullName(),
				active: true,
				createdBy: 'Admin'
			},
			{
				employeeId: employees![Math.floor(Math.random() * 10)].id,
				applicationDate: DateTime.fromJSDate(faker.date.past()),
				PTBDate: DateTime.fromJSDate(faker.date.past()),
				referenceNumber: faker.person.fullName(),
				referenceDate: DateTime.fromJSDate(faker.date.past()),
				status: faker.person.fullName(),
				remark: faker.person.fullName(),
				active: true,
				createdBy: 'Admin'
			},
			{
				employeeId: employees![Math.floor(Math.random() * 10)].id,
				applicationDate: DateTime.fromJSDate(faker.date.past()),
				PTBDate: DateTime.fromJSDate(faker.date.past()),
				referenceNumber: faker.person.fullName(),
				referenceDate: DateTime.fromJSDate(faker.date.past()),
				status: faker.person.fullName(),
				remark: faker.person.fullName(),
				active: true,
				createdBy: 'Admin'
			},
		])
	}
}
