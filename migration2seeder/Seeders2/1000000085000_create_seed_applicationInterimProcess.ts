import BaseSeeder from '@ioc:Adonis/Lucid/Seeder';
import { DateTime } from 'luxon';
import { Faker, en } from '@faker-js/faker';
import ApplicationInterimProcess from 'App/Models/ApplicationInterimProcess';
import ApplicationInterim from 'App/Models/ApplicationInterim';
import Employee from 'App/Models/Employee';

export default class extends BaseSeeder {

	public async run () {
		const applicationInterims = await ApplicationInterim.all();
		const employees = await Employee.all();
		const faker = new Faker({ locale: [en] });
		await ApplicationInterimProcess.createMany([
			{
				applicationId: applicationInterims![Math.floor(Math.random() * 10)].id,
				supporterId: employees![Math.floor(Math.random() * 10)].id,
				supportedStatus: faker.person.firstName(),
				supportedRemark: faker.commerce.productDescription(),
				supportedDate: DateTime.fromJSDate(faker.date.past()),
				verifierId: employees![Math.floor(Math.random() * 10)].id,
				verifiedStatus: faker.person.firstName(),
				verifiedRemark: faker.commerce.productDescription(),
				verifiedDate: DateTime.fromJSDate(faker.date.past()),
				approverId: employees![Math.floor(Math.random() * 10)].id,
				approvedStatus: faker.person.firstName(),
				approvedRemark: faker.commerce.productDescription(),
				approvedDate: DateTime.fromJSDate(faker.date.past()),
				active: true,
				createdBy: 'Admin'
			},
			{
				applicationId: applicationInterims![Math.floor(Math.random() * 10)].id,
				supporterId: employees![Math.floor(Math.random() * 10)].id,
				supportedStatus: faker.person.firstName(),
				supportedRemark: faker.commerce.productDescription(),
				supportedDate: DateTime.fromJSDate(faker.date.past()),
				verifierId: employees![Math.floor(Math.random() * 10)].id,
				verifiedStatus: faker.person.firstName(),
				verifiedRemark: faker.commerce.productDescription(),
				verifiedDate: DateTime.fromJSDate(faker.date.past()),
				approverId: employees![Math.floor(Math.random() * 10)].id,
				approvedStatus: faker.person.firstName(),
				approvedRemark: faker.commerce.productDescription(),
				approvedDate: DateTime.fromJSDate(faker.date.past()),
				active: true,
				createdBy: 'Admin'
			},
			{
				applicationId: applicationInterims![Math.floor(Math.random() * 10)].id,
				supporterId: employees![Math.floor(Math.random() * 10)].id,
				supportedStatus: faker.person.firstName(),
				supportedRemark: faker.commerce.productDescription(),
				supportedDate: DateTime.fromJSDate(faker.date.past()),
				verifierId: employees![Math.floor(Math.random() * 10)].id,
				verifiedStatus: faker.person.firstName(),
				verifiedRemark: faker.commerce.productDescription(),
				verifiedDate: DateTime.fromJSDate(faker.date.past()),
				approverId: employees![Math.floor(Math.random() * 10)].id,
				approvedStatus: faker.person.firstName(),
				approvedRemark: faker.commerce.productDescription(),
				approvedDate: DateTime.fromJSDate(faker.date.past()),
				active: true,
				createdBy: 'Admin'
			},
			{
				applicationId: applicationInterims![Math.floor(Math.random() * 10)].id,
				supporterId: employees![Math.floor(Math.random() * 10)].id,
				supportedStatus: faker.person.firstName(),
				supportedRemark: faker.commerce.productDescription(),
				supportedDate: DateTime.fromJSDate(faker.date.past()),
				verifierId: employees![Math.floor(Math.random() * 10)].id,
				verifiedStatus: faker.person.firstName(),
				verifiedRemark: faker.commerce.productDescription(),
				verifiedDate: DateTime.fromJSDate(faker.date.past()),
				approverId: employees![Math.floor(Math.random() * 10)].id,
				approvedStatus: faker.person.firstName(),
				approvedRemark: faker.commerce.productDescription(),
				approvedDate: DateTime.fromJSDate(faker.date.past()),
				active: true,
				createdBy: 'Admin'
			},
			{
				applicationId: applicationInterims![Math.floor(Math.random() * 10)].id,
				supporterId: employees![Math.floor(Math.random() * 10)].id,
				supportedStatus: faker.person.firstName(),
				supportedRemark: faker.commerce.productDescription(),
				supportedDate: DateTime.fromJSDate(faker.date.past()),
				verifierId: employees![Math.floor(Math.random() * 10)].id,
				verifiedStatus: faker.person.firstName(),
				verifiedRemark: faker.commerce.productDescription(),
				verifiedDate: DateTime.fromJSDate(faker.date.past()),
				approverId: employees![Math.floor(Math.random() * 10)].id,
				approvedStatus: faker.person.firstName(),
				approvedRemark: faker.commerce.productDescription(),
				approvedDate: DateTime.fromJSDate(faker.date.past()),
				active: true,
				createdBy: 'Admin'
			},
			{
				applicationId: applicationInterims![Math.floor(Math.random() * 10)].id,
				supporterId: employees![Math.floor(Math.random() * 10)].id,
				supportedStatus: faker.person.firstName(),
				supportedRemark: faker.commerce.productDescription(),
				supportedDate: DateTime.fromJSDate(faker.date.past()),
				verifierId: employees![Math.floor(Math.random() * 10)].id,
				verifiedStatus: faker.person.firstName(),
				verifiedRemark: faker.commerce.productDescription(),
				verifiedDate: DateTime.fromJSDate(faker.date.past()),
				approverId: employees![Math.floor(Math.random() * 10)].id,
				approvedStatus: faker.person.firstName(),
				approvedRemark: faker.commerce.productDescription(),
				approvedDate: DateTime.fromJSDate(faker.date.past()),
				active: true,
				createdBy: 'Admin'
			},
			{
				applicationId: applicationInterims![Math.floor(Math.random() * 10)].id,
				supporterId: employees![Math.floor(Math.random() * 10)].id,
				supportedStatus: faker.person.firstName(),
				supportedRemark: faker.commerce.productDescription(),
				supportedDate: DateTime.fromJSDate(faker.date.past()),
				verifierId: employees![Math.floor(Math.random() * 10)].id,
				verifiedStatus: faker.person.firstName(),
				verifiedRemark: faker.commerce.productDescription(),
				verifiedDate: DateTime.fromJSDate(faker.date.past()),
				approverId: employees![Math.floor(Math.random() * 10)].id,
				approvedStatus: faker.person.firstName(),
				approvedRemark: faker.commerce.productDescription(),
				approvedDate: DateTime.fromJSDate(faker.date.past()),
				active: true,
				createdBy: 'Admin'
			},
			{
				applicationId: applicationInterims![Math.floor(Math.random() * 10)].id,
				supporterId: employees![Math.floor(Math.random() * 10)].id,
				supportedStatus: faker.person.firstName(),
				supportedRemark: faker.commerce.productDescription(),
				supportedDate: DateTime.fromJSDate(faker.date.past()),
				verifierId: employees![Math.floor(Math.random() * 10)].id,
				verifiedStatus: faker.person.firstName(),
				verifiedRemark: faker.commerce.productDescription(),
				verifiedDate: DateTime.fromJSDate(faker.date.past()),
				approverId: employees![Math.floor(Math.random() * 10)].id,
				approvedStatus: faker.person.firstName(),
				approvedRemark: faker.commerce.productDescription(),
				approvedDate: DateTime.fromJSDate(faker.date.past()),
				active: true,
				createdBy: 'Admin'
			},
			{
				applicationId: applicationInterims![Math.floor(Math.random() * 10)].id,
				supporterId: employees![Math.floor(Math.random() * 10)].id,
				supportedStatus: faker.person.firstName(),
				supportedRemark: faker.commerce.productDescription(),
				supportedDate: DateTime.fromJSDate(faker.date.past()),
				verifierId: employees![Math.floor(Math.random() * 10)].id,
				verifiedStatus: faker.person.firstName(),
				verifiedRemark: faker.commerce.productDescription(),
				verifiedDate: DateTime.fromJSDate(faker.date.past()),
				approverId: employees![Math.floor(Math.random() * 10)].id,
				approvedStatus: faker.person.firstName(),
				approvedRemark: faker.commerce.productDescription(),
				approvedDate: DateTime.fromJSDate(faker.date.past()),
				active: true,
				createdBy: 'Admin'
			},
			{
				applicationId: applicationInterims![Math.floor(Math.random() * 10)].id,
				supporterId: employees![Math.floor(Math.random() * 10)].id,
				supportedStatus: faker.person.firstName(),
				supportedRemark: faker.commerce.productDescription(),
				supportedDate: DateTime.fromJSDate(faker.date.past()),
				verifierId: employees![Math.floor(Math.random() * 10)].id,
				verifiedStatus: faker.person.firstName(),
				verifiedRemark: faker.commerce.productDescription(),
				verifiedDate: DateTime.fromJSDate(faker.date.past()),
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
