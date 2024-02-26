import BaseSeeder from '@ioc:Adonis/Lucid/Seeder';
import { DateTime } from 'luxon';
import { Faker, en } from '@faker-js/faker';
import ContractAppointmentsProcess from 'App/Models/ContractAppointmentsProcess';
import ContractDetail from 'App/Models/ContractDetail';
import Employee from 'App/Models/Employee';

export default class extends BaseSeeder {

	public async run () {
		const contractDetails = await ContractDetail.all();
		const employees = await Employee.all();
		const faker = new Faker({ locale: [en] });
		await ContractAppointmentsProcess.createMany([
			{
				contractId: contractDetails![Math.floor(Math.random() * 10)].id,
				isFitCritirea: true,
				supporterId: employees![Math.floor(Math.random() * 10)].id,
				supportedStatus: faker.person.firstName(),
				supportedRemark: faker.commerce.productDescription(),
				supportedDate: DateTime.fromJSDate(faker.date.past()),
				approverId: employees![Math.floor(Math.random() * 10)].id,
				approvedStatus: faker.person.firstName(),
				approvedRemark: faker.commerce.productDescription(),
				approvedDate: DateTime.fromJSDate(faker.date.past()),
				active: true,
				createdBy: 'Admin'
			},
			{
				contractId: contractDetails![Math.floor(Math.random() * 10)].id,
				isFitCritirea: true,
				supporterId: employees![Math.floor(Math.random() * 10)].id,
				supportedStatus: faker.person.firstName(),
				supportedRemark: faker.commerce.productDescription(),
				supportedDate: DateTime.fromJSDate(faker.date.past()),
				approverId: employees![Math.floor(Math.random() * 10)].id,
				approvedStatus: faker.person.firstName(),
				approvedRemark: faker.commerce.productDescription(),
				approvedDate: DateTime.fromJSDate(faker.date.past()),
				active: true,
				createdBy: 'Admin'
			},
			{
				contractId: contractDetails![Math.floor(Math.random() * 10)].id,
				isFitCritirea: true,
				supporterId: employees![Math.floor(Math.random() * 10)].id,
				supportedStatus: faker.person.firstName(),
				supportedRemark: faker.commerce.productDescription(),
				supportedDate: DateTime.fromJSDate(faker.date.past()),
				approverId: employees![Math.floor(Math.random() * 10)].id,
				approvedStatus: faker.person.firstName(),
				approvedRemark: faker.commerce.productDescription(),
				approvedDate: DateTime.fromJSDate(faker.date.past()),
				active: true,
				createdBy: 'Admin'
			},
			{
				contractId: contractDetails![Math.floor(Math.random() * 10)].id,
				isFitCritirea: true,
				supporterId: employees![Math.floor(Math.random() * 10)].id,
				supportedStatus: faker.person.firstName(),
				supportedRemark: faker.commerce.productDescription(),
				supportedDate: DateTime.fromJSDate(faker.date.past()),
				approverId: employees![Math.floor(Math.random() * 10)].id,
				approvedStatus: faker.person.firstName(),
				approvedRemark: faker.commerce.productDescription(),
				approvedDate: DateTime.fromJSDate(faker.date.past()),
				active: true,
				createdBy: 'Admin'
			},
			{
				contractId: contractDetails![Math.floor(Math.random() * 10)].id,
				isFitCritirea: true,
				supporterId: employees![Math.floor(Math.random() * 10)].id,
				supportedStatus: faker.person.firstName(),
				supportedRemark: faker.commerce.productDescription(),
				supportedDate: DateTime.fromJSDate(faker.date.past()),
				approverId: employees![Math.floor(Math.random() * 10)].id,
				approvedStatus: faker.person.firstName(),
				approvedRemark: faker.commerce.productDescription(),
				approvedDate: DateTime.fromJSDate(faker.date.past()),
				active: true,
				createdBy: 'Admin'
			},
			{
				contractId: contractDetails![Math.floor(Math.random() * 10)].id,
				isFitCritirea: true,
				supporterId: employees![Math.floor(Math.random() * 10)].id,
				supportedStatus: faker.person.firstName(),
				supportedRemark: faker.commerce.productDescription(),
				supportedDate: DateTime.fromJSDate(faker.date.past()),
				approverId: employees![Math.floor(Math.random() * 10)].id,
				approvedStatus: faker.person.firstName(),
				approvedRemark: faker.commerce.productDescription(),
				approvedDate: DateTime.fromJSDate(faker.date.past()),
				active: true,
				createdBy: 'Admin'
			},
			{
				contractId: contractDetails![Math.floor(Math.random() * 10)].id,
				isFitCritirea: true,
				supporterId: employees![Math.floor(Math.random() * 10)].id,
				supportedStatus: faker.person.firstName(),
				supportedRemark: faker.commerce.productDescription(),
				supportedDate: DateTime.fromJSDate(faker.date.past()),
				approverId: employees![Math.floor(Math.random() * 10)].id,
				approvedStatus: faker.person.firstName(),
				approvedRemark: faker.commerce.productDescription(),
				approvedDate: DateTime.fromJSDate(faker.date.past()),
				active: true,
				createdBy: 'Admin'
			},
			{
				contractId: contractDetails![Math.floor(Math.random() * 10)].id,
				isFitCritirea: true,
				supporterId: employees![Math.floor(Math.random() * 10)].id,
				supportedStatus: faker.person.firstName(),
				supportedRemark: faker.commerce.productDescription(),
				supportedDate: DateTime.fromJSDate(faker.date.past()),
				approverId: employees![Math.floor(Math.random() * 10)].id,
				approvedStatus: faker.person.firstName(),
				approvedRemark: faker.commerce.productDescription(),
				approvedDate: DateTime.fromJSDate(faker.date.past()),
				active: true,
				createdBy: 'Admin'
			},
			{
				contractId: contractDetails![Math.floor(Math.random() * 10)].id,
				isFitCritirea: true,
				supporterId: employees![Math.floor(Math.random() * 10)].id,
				supportedStatus: faker.person.firstName(),
				supportedRemark: faker.commerce.productDescription(),
				supportedDate: DateTime.fromJSDate(faker.date.past()),
				approverId: employees![Math.floor(Math.random() * 10)].id,
				approvedStatus: faker.person.firstName(),
				approvedRemark: faker.commerce.productDescription(),
				approvedDate: DateTime.fromJSDate(faker.date.past()),
				active: true,
				createdBy: 'Admin'
			},
			{
				contractId: contractDetails![Math.floor(Math.random() * 10)].id,
				isFitCritirea: true,
				supporterId: employees![Math.floor(Math.random() * 10)].id,
				supportedStatus: faker.person.firstName(),
				supportedRemark: faker.commerce.productDescription(),
				supportedDate: DateTime.fromJSDate(faker.date.past()),
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
