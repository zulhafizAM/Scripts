import BaseSeeder from '@ioc:Adonis/Lucid/Seeder';
import { DateTime } from 'luxon';
import { Faker, en } from '@faker-js/faker';
import ExamApplicationProcess from 'App/Models/ExamApplicationProcess';
import ExamApplication from 'App/Models/ExamApplication';
import Employee from 'App/Models/Employee';

export default class extends BaseSeeder {

	public async run () {
		const examApplications = await ExamApplication.all();
		const employees = await Employee.all();
		const faker = new Faker({ locale: [en] });
		await ExamApplicationProcess.createMany([
			{
				applicantId: examApplications![Math.floor(Math.random() * 10)].id,
				verifierId: employees![Math.floor(Math.random() * 10)].id,
				verifiedStatus: faker.person.firstName(),
				verifiedRemark: faker.commerce.productDescription(),
				verifiedDate: DateTime.fromJSDate(faker.date.past()),
				comfirmerId: employees![Math.floor(Math.random() * 10)].id,
				comfirmedStatus: faker.person.firstName(),
				comfirmedRemark: faker.commerce.productDescription(),
				comfirmedDate: DateTime.fromJSDate(faker.date.past()),
				active: true,
				createdBy: 'Admin'
			},
			{
				applicantId: examApplications![Math.floor(Math.random() * 10)].id,
				verifierId: employees![Math.floor(Math.random() * 10)].id,
				verifiedStatus: faker.person.firstName(),
				verifiedRemark: faker.commerce.productDescription(),
				verifiedDate: DateTime.fromJSDate(faker.date.past()),
				comfirmerId: employees![Math.floor(Math.random() * 10)].id,
				comfirmedStatus: faker.person.firstName(),
				comfirmedRemark: faker.commerce.productDescription(),
				comfirmedDate: DateTime.fromJSDate(faker.date.past()),
				active: true,
				createdBy: 'Admin'
			},
			{
				applicantId: examApplications![Math.floor(Math.random() * 10)].id,
				verifierId: employees![Math.floor(Math.random() * 10)].id,
				verifiedStatus: faker.person.firstName(),
				verifiedRemark: faker.commerce.productDescription(),
				verifiedDate: DateTime.fromJSDate(faker.date.past()),
				comfirmerId: employees![Math.floor(Math.random() * 10)].id,
				comfirmedStatus: faker.person.firstName(),
				comfirmedRemark: faker.commerce.productDescription(),
				comfirmedDate: DateTime.fromJSDate(faker.date.past()),
				active: true,
				createdBy: 'Admin'
			},
			{
				applicantId: examApplications![Math.floor(Math.random() * 10)].id,
				verifierId: employees![Math.floor(Math.random() * 10)].id,
				verifiedStatus: faker.person.firstName(),
				verifiedRemark: faker.commerce.productDescription(),
				verifiedDate: DateTime.fromJSDate(faker.date.past()),
				comfirmerId: employees![Math.floor(Math.random() * 10)].id,
				comfirmedStatus: faker.person.firstName(),
				comfirmedRemark: faker.commerce.productDescription(),
				comfirmedDate: DateTime.fromJSDate(faker.date.past()),
				active: true,
				createdBy: 'Admin'
			},
			{
				applicantId: examApplications![Math.floor(Math.random() * 10)].id,
				verifierId: employees![Math.floor(Math.random() * 10)].id,
				verifiedStatus: faker.person.firstName(),
				verifiedRemark: faker.commerce.productDescription(),
				verifiedDate: DateTime.fromJSDate(faker.date.past()),
				comfirmerId: employees![Math.floor(Math.random() * 10)].id,
				comfirmedStatus: faker.person.firstName(),
				comfirmedRemark: faker.commerce.productDescription(),
				comfirmedDate: DateTime.fromJSDate(faker.date.past()),
				active: true,
				createdBy: 'Admin'
			},
			{
				applicantId: examApplications![Math.floor(Math.random() * 10)].id,
				verifierId: employees![Math.floor(Math.random() * 10)].id,
				verifiedStatus: faker.person.firstName(),
				verifiedRemark: faker.commerce.productDescription(),
				verifiedDate: DateTime.fromJSDate(faker.date.past()),
				comfirmerId: employees![Math.floor(Math.random() * 10)].id,
				comfirmedStatus: faker.person.firstName(),
				comfirmedRemark: faker.commerce.productDescription(),
				comfirmedDate: DateTime.fromJSDate(faker.date.past()),
				active: true,
				createdBy: 'Admin'
			},
			{
				applicantId: examApplications![Math.floor(Math.random() * 10)].id,
				verifierId: employees![Math.floor(Math.random() * 10)].id,
				verifiedStatus: faker.person.firstName(),
				verifiedRemark: faker.commerce.productDescription(),
				verifiedDate: DateTime.fromJSDate(faker.date.past()),
				comfirmerId: employees![Math.floor(Math.random() * 10)].id,
				comfirmedStatus: faker.person.firstName(),
				comfirmedRemark: faker.commerce.productDescription(),
				comfirmedDate: DateTime.fromJSDate(faker.date.past()),
				active: true,
				createdBy: 'Admin'
			},
			{
				applicantId: examApplications![Math.floor(Math.random() * 10)].id,
				verifierId: employees![Math.floor(Math.random() * 10)].id,
				verifiedStatus: faker.person.firstName(),
				verifiedRemark: faker.commerce.productDescription(),
				verifiedDate: DateTime.fromJSDate(faker.date.past()),
				comfirmerId: employees![Math.floor(Math.random() * 10)].id,
				comfirmedStatus: faker.person.firstName(),
				comfirmedRemark: faker.commerce.productDescription(),
				comfirmedDate: DateTime.fromJSDate(faker.date.past()),
				active: true,
				createdBy: 'Admin'
			},
			{
				applicantId: examApplications![Math.floor(Math.random() * 10)].id,
				verifierId: employees![Math.floor(Math.random() * 10)].id,
				verifiedStatus: faker.person.firstName(),
				verifiedRemark: faker.commerce.productDescription(),
				verifiedDate: DateTime.fromJSDate(faker.date.past()),
				comfirmerId: employees![Math.floor(Math.random() * 10)].id,
				comfirmedStatus: faker.person.firstName(),
				comfirmedRemark: faker.commerce.productDescription(),
				comfirmedDate: DateTime.fromJSDate(faker.date.past()),
				active: true,
				createdBy: 'Admin'
			},
			{
				applicantId: examApplications![Math.floor(Math.random() * 10)].id,
				verifierId: employees![Math.floor(Math.random() * 10)].id,
				verifiedStatus: faker.person.firstName(),
				verifiedRemark: faker.commerce.productDescription(),
				verifiedDate: DateTime.fromJSDate(faker.date.past()),
				comfirmerId: employees![Math.floor(Math.random() * 10)].id,
				comfirmedStatus: faker.person.firstName(),
				comfirmedRemark: faker.commerce.productDescription(),
				comfirmedDate: DateTime.fromJSDate(faker.date.past()),
				active: true,
				createdBy: 'Admin'
			},
		])
	}
}
