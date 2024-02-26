import BaseSeeder from '@ioc:Adonis/Lucid/Seeder';
import { DateTime } from 'luxon';
import { Faker, en } from '@faker-js/faker';
import FundReimbursementProcess from 'App/Models/FundReimbursementProcess';
import EducationFundReimbursement from 'App/Models/EducationFundReimbursement';
import Employee from 'App/Models/Employee';

export default class extends BaseSeeder {

	public async run () {
		const educationFundReimbursements = await EducationFundReimbursement.all();
		const employees = await Employee.all();
		const faker = new Faker({ locale: [en] });
		await FundReimbursementProcess.createMany([
			{
				fundId: educationFundReimbursements![Math.floor(Math.random() * 10)].id,
				confirmerId: employees![Math.floor(Math.random() * 10)].id,
				confirmedStatus: faker.person.firstName(),
				confirmedRemark: faker.commerce.productDescription(),
				confirmedDate: DateTime.fromJSDate(faker.date.past()),
				verifierId: employees![Math.floor(Math.random() * 10)].id,
				verifiedStatus: faker.person.firstName(),
				verifiedRemark: faker.commerce.productDescription(),
				verifiedDate: DateTime.fromJSDate(faker.date.past()),
				active: true,
				createdBy: 'Admin'
			},
			{
				fundId: educationFundReimbursements![Math.floor(Math.random() * 10)].id,
				confirmerId: employees![Math.floor(Math.random() * 10)].id,
				confirmedStatus: faker.person.firstName(),
				confirmedRemark: faker.commerce.productDescription(),
				confirmedDate: DateTime.fromJSDate(faker.date.past()),
				verifierId: employees![Math.floor(Math.random() * 10)].id,
				verifiedStatus: faker.person.firstName(),
				verifiedRemark: faker.commerce.productDescription(),
				verifiedDate: DateTime.fromJSDate(faker.date.past()),
				active: true,
				createdBy: 'Admin'
			},
			{
				fundId: educationFundReimbursements![Math.floor(Math.random() * 10)].id,
				confirmerId: employees![Math.floor(Math.random() * 10)].id,
				confirmedStatus: faker.person.firstName(),
				confirmedRemark: faker.commerce.productDescription(),
				confirmedDate: DateTime.fromJSDate(faker.date.past()),
				verifierId: employees![Math.floor(Math.random() * 10)].id,
				verifiedStatus: faker.person.firstName(),
				verifiedRemark: faker.commerce.productDescription(),
				verifiedDate: DateTime.fromJSDate(faker.date.past()),
				active: true,
				createdBy: 'Admin'
			},
			{
				fundId: educationFundReimbursements![Math.floor(Math.random() * 10)].id,
				confirmerId: employees![Math.floor(Math.random() * 10)].id,
				confirmedStatus: faker.person.firstName(),
				confirmedRemark: faker.commerce.productDescription(),
				confirmedDate: DateTime.fromJSDate(faker.date.past()),
				verifierId: employees![Math.floor(Math.random() * 10)].id,
				verifiedStatus: faker.person.firstName(),
				verifiedRemark: faker.commerce.productDescription(),
				verifiedDate: DateTime.fromJSDate(faker.date.past()),
				active: true,
				createdBy: 'Admin'
			},
			{
				fundId: educationFundReimbursements![Math.floor(Math.random() * 10)].id,
				confirmerId: employees![Math.floor(Math.random() * 10)].id,
				confirmedStatus: faker.person.firstName(),
				confirmedRemark: faker.commerce.productDescription(),
				confirmedDate: DateTime.fromJSDate(faker.date.past()),
				verifierId: employees![Math.floor(Math.random() * 10)].id,
				verifiedStatus: faker.person.firstName(),
				verifiedRemark: faker.commerce.productDescription(),
				verifiedDate: DateTime.fromJSDate(faker.date.past()),
				active: true,
				createdBy: 'Admin'
			},
			{
				fundId: educationFundReimbursements![Math.floor(Math.random() * 10)].id,
				confirmerId: employees![Math.floor(Math.random() * 10)].id,
				confirmedStatus: faker.person.firstName(),
				confirmedRemark: faker.commerce.productDescription(),
				confirmedDate: DateTime.fromJSDate(faker.date.past()),
				verifierId: employees![Math.floor(Math.random() * 10)].id,
				verifiedStatus: faker.person.firstName(),
				verifiedRemark: faker.commerce.productDescription(),
				verifiedDate: DateTime.fromJSDate(faker.date.past()),
				active: true,
				createdBy: 'Admin'
			},
			{
				fundId: educationFundReimbursements![Math.floor(Math.random() * 10)].id,
				confirmerId: employees![Math.floor(Math.random() * 10)].id,
				confirmedStatus: faker.person.firstName(),
				confirmedRemark: faker.commerce.productDescription(),
				confirmedDate: DateTime.fromJSDate(faker.date.past()),
				verifierId: employees![Math.floor(Math.random() * 10)].id,
				verifiedStatus: faker.person.firstName(),
				verifiedRemark: faker.commerce.productDescription(),
				verifiedDate: DateTime.fromJSDate(faker.date.past()),
				active: true,
				createdBy: 'Admin'
			},
			{
				fundId: educationFundReimbursements![Math.floor(Math.random() * 10)].id,
				confirmerId: employees![Math.floor(Math.random() * 10)].id,
				confirmedStatus: faker.person.firstName(),
				confirmedRemark: faker.commerce.productDescription(),
				confirmedDate: DateTime.fromJSDate(faker.date.past()),
				verifierId: employees![Math.floor(Math.random() * 10)].id,
				verifiedStatus: faker.person.firstName(),
				verifiedRemark: faker.commerce.productDescription(),
				verifiedDate: DateTime.fromJSDate(faker.date.past()),
				active: true,
				createdBy: 'Admin'
			},
			{
				fundId: educationFundReimbursements![Math.floor(Math.random() * 10)].id,
				confirmerId: employees![Math.floor(Math.random() * 10)].id,
				confirmedStatus: faker.person.firstName(),
				confirmedRemark: faker.commerce.productDescription(),
				confirmedDate: DateTime.fromJSDate(faker.date.past()),
				verifierId: employees![Math.floor(Math.random() * 10)].id,
				verifiedStatus: faker.person.firstName(),
				verifiedRemark: faker.commerce.productDescription(),
				verifiedDate: DateTime.fromJSDate(faker.date.past()),
				active: true,
				createdBy: 'Admin'
			},
			{
				fundId: educationFundReimbursements![Math.floor(Math.random() * 10)].id,
				confirmerId: employees![Math.floor(Math.random() * 10)].id,
				confirmedStatus: faker.person.firstName(),
				confirmedRemark: faker.commerce.productDescription(),
				confirmedDate: DateTime.fromJSDate(faker.date.past()),
				verifierId: employees![Math.floor(Math.random() * 10)].id,
				verifiedStatus: faker.person.firstName(),
				verifiedRemark: faker.commerce.productDescription(),
				verifiedDate: DateTime.fromJSDate(faker.date.past()),
				active: true,
				createdBy: 'Admin'
			},
		])
	}
}
