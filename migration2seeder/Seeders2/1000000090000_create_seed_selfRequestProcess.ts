import BaseSeeder from '@ioc:Adonis/Lucid/Seeder';
import { DateTime } from 'luxon';
import { Faker, en } from '@faker-js/faker';
import SelfRequestProcess from 'App/Models/SelfRequestProcess';
import Employee from 'App/Models/Employee';

export default class extends BaseSeeder {

	public async run () {
		const employees = await Employee.all();
		const faker = new Faker({ locale: [en] });
		await SelfRequestProcess.createMany([
			{
				directorSupporterId: employees![Math.floor(Math.random() * 10)].id,
				directorSupportedStatus: faker.person.firstName(),
				directorSupportedRemark: faker.commerce.productDescription(),
				directorSupportedDate: DateTime.fromJSDate(faker.date.past()),
				appointedSupporterId: employees![Math.floor(Math.random() * 10)].id,
				appointedSupportedStatus: faker.person.firstName(),
				appointedSupportedRemark: faker.commerce.productDescription(),
				appointedSupportedDate: DateTime.fromJSDate(faker.date.past()),
				appointedApproverId: employees![Math.floor(Math.random() * 10)].id,
				appointedApprovedStatus: faker.person.firstName(),
				appointedApprovedRemark: faker.commerce.productDescription(),
				appointedApprovedDate: DateTime.fromJSDate(faker.date.past()),
				active: true,
				createdBy: 'Admin'
			},
			{
				directorSupporterId: employees![Math.floor(Math.random() * 10)].id,
				directorSupportedStatus: faker.person.firstName(),
				directorSupportedRemark: faker.commerce.productDescription(),
				directorSupportedDate: DateTime.fromJSDate(faker.date.past()),
				appointedSupporterId: employees![Math.floor(Math.random() * 10)].id,
				appointedSupportedStatus: faker.person.firstName(),
				appointedSupportedRemark: faker.commerce.productDescription(),
				appointedSupportedDate: DateTime.fromJSDate(faker.date.past()),
				appointedApproverId: employees![Math.floor(Math.random() * 10)].id,
				appointedApprovedStatus: faker.person.firstName(),
				appointedApprovedRemark: faker.commerce.productDescription(),
				appointedApprovedDate: DateTime.fromJSDate(faker.date.past()),
				active: true,
				createdBy: 'Admin'
			},
			{
				directorSupporterId: employees![Math.floor(Math.random() * 10)].id,
				directorSupportedStatus: faker.person.firstName(),
				directorSupportedRemark: faker.commerce.productDescription(),
				directorSupportedDate: DateTime.fromJSDate(faker.date.past()),
				appointedSupporterId: employees![Math.floor(Math.random() * 10)].id,
				appointedSupportedStatus: faker.person.firstName(),
				appointedSupportedRemark: faker.commerce.productDescription(),
				appointedSupportedDate: DateTime.fromJSDate(faker.date.past()),
				appointedApproverId: employees![Math.floor(Math.random() * 10)].id,
				appointedApprovedStatus: faker.person.firstName(),
				appointedApprovedRemark: faker.commerce.productDescription(),
				appointedApprovedDate: DateTime.fromJSDate(faker.date.past()),
				active: true,
				createdBy: 'Admin'
			},
			{
				directorSupporterId: employees![Math.floor(Math.random() * 10)].id,
				directorSupportedStatus: faker.person.firstName(),
				directorSupportedRemark: faker.commerce.productDescription(),
				directorSupportedDate: DateTime.fromJSDate(faker.date.past()),
				appointedSupporterId: employees![Math.floor(Math.random() * 10)].id,
				appointedSupportedStatus: faker.person.firstName(),
				appointedSupportedRemark: faker.commerce.productDescription(),
				appointedSupportedDate: DateTime.fromJSDate(faker.date.past()),
				appointedApproverId: employees![Math.floor(Math.random() * 10)].id,
				appointedApprovedStatus: faker.person.firstName(),
				appointedApprovedRemark: faker.commerce.productDescription(),
				appointedApprovedDate: DateTime.fromJSDate(faker.date.past()),
				active: true,
				createdBy: 'Admin'
			},
			{
				directorSupporterId: employees![Math.floor(Math.random() * 10)].id,
				directorSupportedStatus: faker.person.firstName(),
				directorSupportedRemark: faker.commerce.productDescription(),
				directorSupportedDate: DateTime.fromJSDate(faker.date.past()),
				appointedSupporterId: employees![Math.floor(Math.random() * 10)].id,
				appointedSupportedStatus: faker.person.firstName(),
				appointedSupportedRemark: faker.commerce.productDescription(),
				appointedSupportedDate: DateTime.fromJSDate(faker.date.past()),
				appointedApproverId: employees![Math.floor(Math.random() * 10)].id,
				appointedApprovedStatus: faker.person.firstName(),
				appointedApprovedRemark: faker.commerce.productDescription(),
				appointedApprovedDate: DateTime.fromJSDate(faker.date.past()),
				active: true,
				createdBy: 'Admin'
			},
			{
				directorSupporterId: employees![Math.floor(Math.random() * 10)].id,
				directorSupportedStatus: faker.person.firstName(),
				directorSupportedRemark: faker.commerce.productDescription(),
				directorSupportedDate: DateTime.fromJSDate(faker.date.past()),
				appointedSupporterId: employees![Math.floor(Math.random() * 10)].id,
				appointedSupportedStatus: faker.person.firstName(),
				appointedSupportedRemark: faker.commerce.productDescription(),
				appointedSupportedDate: DateTime.fromJSDate(faker.date.past()),
				appointedApproverId: employees![Math.floor(Math.random() * 10)].id,
				appointedApprovedStatus: faker.person.firstName(),
				appointedApprovedRemark: faker.commerce.productDescription(),
				appointedApprovedDate: DateTime.fromJSDate(faker.date.past()),
				active: true,
				createdBy: 'Admin'
			},
			{
				directorSupporterId: employees![Math.floor(Math.random() * 10)].id,
				directorSupportedStatus: faker.person.firstName(),
				directorSupportedRemark: faker.commerce.productDescription(),
				directorSupportedDate: DateTime.fromJSDate(faker.date.past()),
				appointedSupporterId: employees![Math.floor(Math.random() * 10)].id,
				appointedSupportedStatus: faker.person.firstName(),
				appointedSupportedRemark: faker.commerce.productDescription(),
				appointedSupportedDate: DateTime.fromJSDate(faker.date.past()),
				appointedApproverId: employees![Math.floor(Math.random() * 10)].id,
				appointedApprovedStatus: faker.person.firstName(),
				appointedApprovedRemark: faker.commerce.productDescription(),
				appointedApprovedDate: DateTime.fromJSDate(faker.date.past()),
				active: true,
				createdBy: 'Admin'
			},
			{
				directorSupporterId: employees![Math.floor(Math.random() * 10)].id,
				directorSupportedStatus: faker.person.firstName(),
				directorSupportedRemark: faker.commerce.productDescription(),
				directorSupportedDate: DateTime.fromJSDate(faker.date.past()),
				appointedSupporterId: employees![Math.floor(Math.random() * 10)].id,
				appointedSupportedStatus: faker.person.firstName(),
				appointedSupportedRemark: faker.commerce.productDescription(),
				appointedSupportedDate: DateTime.fromJSDate(faker.date.past()),
				appointedApproverId: employees![Math.floor(Math.random() * 10)].id,
				appointedApprovedStatus: faker.person.firstName(),
				appointedApprovedRemark: faker.commerce.productDescription(),
				appointedApprovedDate: DateTime.fromJSDate(faker.date.past()),
				active: true,
				createdBy: 'Admin'
			},
			{
				directorSupporterId: employees![Math.floor(Math.random() * 10)].id,
				directorSupportedStatus: faker.person.firstName(),
				directorSupportedRemark: faker.commerce.productDescription(),
				directorSupportedDate: DateTime.fromJSDate(faker.date.past()),
				appointedSupporterId: employees![Math.floor(Math.random() * 10)].id,
				appointedSupportedStatus: faker.person.firstName(),
				appointedSupportedRemark: faker.commerce.productDescription(),
				appointedSupportedDate: DateTime.fromJSDate(faker.date.past()),
				appointedApproverId: employees![Math.floor(Math.random() * 10)].id,
				appointedApprovedStatus: faker.person.firstName(),
				appointedApprovedRemark: faker.commerce.productDescription(),
				appointedApprovedDate: DateTime.fromJSDate(faker.date.past()),
				active: true,
				createdBy: 'Admin'
			},
			{
				directorSupporterId: employees![Math.floor(Math.random() * 10)].id,
				directorSupportedStatus: faker.person.firstName(),
				directorSupportedRemark: faker.commerce.productDescription(),
				directorSupportedDate: DateTime.fromJSDate(faker.date.past()),
				appointedSupporterId: employees![Math.floor(Math.random() * 10)].id,
				appointedSupportedStatus: faker.person.firstName(),
				appointedSupportedRemark: faker.commerce.productDescription(),
				appointedSupportedDate: DateTime.fromJSDate(faker.date.past()),
				appointedApproverId: employees![Math.floor(Math.random() * 10)].id,
				appointedApprovedStatus: faker.person.firstName(),
				appointedApprovedRemark: faker.commerce.productDescription(),
				appointedApprovedDate: DateTime.fromJSDate(faker.date.past()),
				active: true,
				createdBy: 'Admin'
			},
		])
	}
}
