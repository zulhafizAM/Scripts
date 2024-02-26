import BaseSeeder from '@ioc:Adonis/Lucid/Seeder';
import { DateTime } from 'luxon';
import { Faker, en } from '@faker-js/faker';
import CargoShippingProcess from 'App/Models/CargoShippingProcess';
import CargoShippingReimbursement from 'App/Models/CargoShippingReimbursement';
import Employee from 'App/Models/Employee';

export default class extends BaseSeeder {

	public async run () {
		const cargoShippingReimbursements = await CargoShippingReimbursement.all();
		const employees = await Employee.all();
		const faker = new Faker({ locale: [en] });
		await CargoShippingProcess.createMany([
			{
				shippingId: cargoShippingReimbursements![Math.floor(Math.random() * 10)].id,
				verifierId: employees![Math.floor(Math.random() * 10)].id,
				verifiedStatus: faker.person.firstName(),
				verifiedRemark: faker.commerce.productDescription(),
				verifiedDate: DateTime.fromJSDate(faker.date.past()),
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
				shippingId: cargoShippingReimbursements![Math.floor(Math.random() * 10)].id,
				verifierId: employees![Math.floor(Math.random() * 10)].id,
				verifiedStatus: faker.person.firstName(),
				verifiedRemark: faker.commerce.productDescription(),
				verifiedDate: DateTime.fromJSDate(faker.date.past()),
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
				shippingId: cargoShippingReimbursements![Math.floor(Math.random() * 10)].id,
				verifierId: employees![Math.floor(Math.random() * 10)].id,
				verifiedStatus: faker.person.firstName(),
				verifiedRemark: faker.commerce.productDescription(),
				verifiedDate: DateTime.fromJSDate(faker.date.past()),
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
				shippingId: cargoShippingReimbursements![Math.floor(Math.random() * 10)].id,
				verifierId: employees![Math.floor(Math.random() * 10)].id,
				verifiedStatus: faker.person.firstName(),
				verifiedRemark: faker.commerce.productDescription(),
				verifiedDate: DateTime.fromJSDate(faker.date.past()),
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
				shippingId: cargoShippingReimbursements![Math.floor(Math.random() * 10)].id,
				verifierId: employees![Math.floor(Math.random() * 10)].id,
				verifiedStatus: faker.person.firstName(),
				verifiedRemark: faker.commerce.productDescription(),
				verifiedDate: DateTime.fromJSDate(faker.date.past()),
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
				shippingId: cargoShippingReimbursements![Math.floor(Math.random() * 10)].id,
				verifierId: employees![Math.floor(Math.random() * 10)].id,
				verifiedStatus: faker.person.firstName(),
				verifiedRemark: faker.commerce.productDescription(),
				verifiedDate: DateTime.fromJSDate(faker.date.past()),
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
				shippingId: cargoShippingReimbursements![Math.floor(Math.random() * 10)].id,
				verifierId: employees![Math.floor(Math.random() * 10)].id,
				verifiedStatus: faker.person.firstName(),
				verifiedRemark: faker.commerce.productDescription(),
				verifiedDate: DateTime.fromJSDate(faker.date.past()),
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
				shippingId: cargoShippingReimbursements![Math.floor(Math.random() * 10)].id,
				verifierId: employees![Math.floor(Math.random() * 10)].id,
				verifiedStatus: faker.person.firstName(),
				verifiedRemark: faker.commerce.productDescription(),
				verifiedDate: DateTime.fromJSDate(faker.date.past()),
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
				shippingId: cargoShippingReimbursements![Math.floor(Math.random() * 10)].id,
				verifierId: employees![Math.floor(Math.random() * 10)].id,
				verifiedStatus: faker.person.firstName(),
				verifiedRemark: faker.commerce.productDescription(),
				verifiedDate: DateTime.fromJSDate(faker.date.past()),
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
				shippingId: cargoShippingReimbursements![Math.floor(Math.random() * 10)].id,
				verifierId: employees![Math.floor(Math.random() * 10)].id,
				verifiedStatus: faker.person.firstName(),
				verifiedRemark: faker.commerce.productDescription(),
				verifiedDate: DateTime.fromJSDate(faker.date.past()),
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
