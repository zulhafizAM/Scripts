import BaseSeeder from '@ioc:Adonis/Lucid/Seeder';
import { DateTime } from 'luxon';
import { Faker, en } from '@faker-js/faker';
import SelfRequestPostponeProcess from 'App/Models/SelfRequestPostponeProcess';
import Employee from 'App/Models/Employee';
import Employee from 'App/Models/Employee';

export default class extends BaseSeeder {

	public async run () {
		const employees = await Employee.all();
		const employees = await Employee.all();
		const faker = new Faker({ locale: [en] });
		await SelfRequestPostponeProcess.createMany([
			{
				employeeId: employees![Math.floor(Math.random() * 10)].id,
				transferDate: DateTime.fromJSDate(faker.date.past()),
				newTransferDate: DateTime.fromJSDate(faker.date.past()),
				postponeReason: faker.person.fullName(),
				approverId: employees![Math.floor(Math.random() * 10)].id,
				approvedStatus: faker.person.firstName(),
				approvedRemark: faker.commerce.productDescription(),
				approvedDate: DateTime.fromJSDate(faker.date.past()),
				active: true,
				createdBy: 'Admin'
			},
			{
				employeeId: employees![Math.floor(Math.random() * 10)].id,
				transferDate: DateTime.fromJSDate(faker.date.past()),
				newTransferDate: DateTime.fromJSDate(faker.date.past()),
				postponeReason: faker.person.fullName(),
				approverId: employees![Math.floor(Math.random() * 10)].id,
				approvedStatus: faker.person.firstName(),
				approvedRemark: faker.commerce.productDescription(),
				approvedDate: DateTime.fromJSDate(faker.date.past()),
				active: true,
				createdBy: 'Admin'
			},
			{
				employeeId: employees![Math.floor(Math.random() * 10)].id,
				transferDate: DateTime.fromJSDate(faker.date.past()),
				newTransferDate: DateTime.fromJSDate(faker.date.past()),
				postponeReason: faker.person.fullName(),
				approverId: employees![Math.floor(Math.random() * 10)].id,
				approvedStatus: faker.person.firstName(),
				approvedRemark: faker.commerce.productDescription(),
				approvedDate: DateTime.fromJSDate(faker.date.past()),
				active: true,
				createdBy: 'Admin'
			},
			{
				employeeId: employees![Math.floor(Math.random() * 10)].id,
				transferDate: DateTime.fromJSDate(faker.date.past()),
				newTransferDate: DateTime.fromJSDate(faker.date.past()),
				postponeReason: faker.person.fullName(),
				approverId: employees![Math.floor(Math.random() * 10)].id,
				approvedStatus: faker.person.firstName(),
				approvedRemark: faker.commerce.productDescription(),
				approvedDate: DateTime.fromJSDate(faker.date.past()),
				active: true,
				createdBy: 'Admin'
			},
			{
				employeeId: employees![Math.floor(Math.random() * 10)].id,
				transferDate: DateTime.fromJSDate(faker.date.past()),
				newTransferDate: DateTime.fromJSDate(faker.date.past()),
				postponeReason: faker.person.fullName(),
				approverId: employees![Math.floor(Math.random() * 10)].id,
				approvedStatus: faker.person.firstName(),
				approvedRemark: faker.commerce.productDescription(),
				approvedDate: DateTime.fromJSDate(faker.date.past()),
				active: true,
				createdBy: 'Admin'
			},
			{
				employeeId: employees![Math.floor(Math.random() * 10)].id,
				transferDate: DateTime.fromJSDate(faker.date.past()),
				newTransferDate: DateTime.fromJSDate(faker.date.past()),
				postponeReason: faker.person.fullName(),
				approverId: employees![Math.floor(Math.random() * 10)].id,
				approvedStatus: faker.person.firstName(),
				approvedRemark: faker.commerce.productDescription(),
				approvedDate: DateTime.fromJSDate(faker.date.past()),
				active: true,
				createdBy: 'Admin'
			},
			{
				employeeId: employees![Math.floor(Math.random() * 10)].id,
				transferDate: DateTime.fromJSDate(faker.date.past()),
				newTransferDate: DateTime.fromJSDate(faker.date.past()),
				postponeReason: faker.person.fullName(),
				approverId: employees![Math.floor(Math.random() * 10)].id,
				approvedStatus: faker.person.firstName(),
				approvedRemark: faker.commerce.productDescription(),
				approvedDate: DateTime.fromJSDate(faker.date.past()),
				active: true,
				createdBy: 'Admin'
			},
			{
				employeeId: employees![Math.floor(Math.random() * 10)].id,
				transferDate: DateTime.fromJSDate(faker.date.past()),
				newTransferDate: DateTime.fromJSDate(faker.date.past()),
				postponeReason: faker.person.fullName(),
				approverId: employees![Math.floor(Math.random() * 10)].id,
				approvedStatus: faker.person.firstName(),
				approvedRemark: faker.commerce.productDescription(),
				approvedDate: DateTime.fromJSDate(faker.date.past()),
				active: true,
				createdBy: 'Admin'
			},
			{
				employeeId: employees![Math.floor(Math.random() * 10)].id,
				transferDate: DateTime.fromJSDate(faker.date.past()),
				newTransferDate: DateTime.fromJSDate(faker.date.past()),
				postponeReason: faker.person.fullName(),
				approverId: employees![Math.floor(Math.random() * 10)].id,
				approvedStatus: faker.person.firstName(),
				approvedRemark: faker.commerce.productDescription(),
				approvedDate: DateTime.fromJSDate(faker.date.past()),
				active: true,
				createdBy: 'Admin'
			},
			{
				employeeId: employees![Math.floor(Math.random() * 10)].id,
				transferDate: DateTime.fromJSDate(faker.date.past()),
				newTransferDate: DateTime.fromJSDate(faker.date.past()),
				postponeReason: faker.person.fullName(),
				approverId: employees![Math.floor(Math.random() * 10)].id,
				approvedStatus: faker.person.firstName(),
				approvedRemark: faker.commerce.productDescription(),
				approvedDate: DateTime.fromJSDate(faker.date.past()),
				active: true,
				createdBy: 'Admin'
			},
		])
	}
}
