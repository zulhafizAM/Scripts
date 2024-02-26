import BaseSeeder from '@ioc:Adonis/Lucid/Seeder';
import { DateTime } from 'luxon';
import { Faker, en } from '@faker-js/faker';
import MovingOutProcess from 'App/Models/MovingOutProcess';
import MovingOut from 'App/Models/MovingOut';
import Employee from 'App/Models/Employee';

export default class extends BaseSeeder {

	public async run () {
		const movingOuts = await MovingOut.all();
		const employees = await Employee.all();
		const faker = new Faker({ locale: [en] });
		await MovingOutProcess.createMany([
			{
				movingOutId: movingOuts![Math.floor(Math.random() * 10)].id,
				verifierId: employees![Math.floor(Math.random() * 10)].id,
				verifiedStatus: faker.person.firstName(),
				verifiedRemark: faker.commerce.productDescription(),
				verifiedDate: DateTime.fromJSDate(faker.date.past()),
				directorApproverId: employees![Math.floor(Math.random() * 10)].id,
				directorApprovedStatus: faker.person.firstName(),
				directorApprovedRemark: faker.commerce.productDescription(),
				directorApprovedDate: DateTime.fromJSDate(faker.date.past()),
				active: true,
				createdBy: 'Admin'
			},
			{
				movingOutId: movingOuts![Math.floor(Math.random() * 10)].id,
				verifierId: employees![Math.floor(Math.random() * 10)].id,
				verifiedStatus: faker.person.firstName(),
				verifiedRemark: faker.commerce.productDescription(),
				verifiedDate: DateTime.fromJSDate(faker.date.past()),
				directorApproverId: employees![Math.floor(Math.random() * 10)].id,
				directorApprovedStatus: faker.person.firstName(),
				directorApprovedRemark: faker.commerce.productDescription(),
				directorApprovedDate: DateTime.fromJSDate(faker.date.past()),
				active: true,
				createdBy: 'Admin'
			},
			{
				movingOutId: movingOuts![Math.floor(Math.random() * 10)].id,
				verifierId: employees![Math.floor(Math.random() * 10)].id,
				verifiedStatus: faker.person.firstName(),
				verifiedRemark: faker.commerce.productDescription(),
				verifiedDate: DateTime.fromJSDate(faker.date.past()),
				directorApproverId: employees![Math.floor(Math.random() * 10)].id,
				directorApprovedStatus: faker.person.firstName(),
				directorApprovedRemark: faker.commerce.productDescription(),
				directorApprovedDate: DateTime.fromJSDate(faker.date.past()),
				active: true,
				createdBy: 'Admin'
			},
			{
				movingOutId: movingOuts![Math.floor(Math.random() * 10)].id,
				verifierId: employees![Math.floor(Math.random() * 10)].id,
				verifiedStatus: faker.person.firstName(),
				verifiedRemark: faker.commerce.productDescription(),
				verifiedDate: DateTime.fromJSDate(faker.date.past()),
				directorApproverId: employees![Math.floor(Math.random() * 10)].id,
				directorApprovedStatus: faker.person.firstName(),
				directorApprovedRemark: faker.commerce.productDescription(),
				directorApprovedDate: DateTime.fromJSDate(faker.date.past()),
				active: true,
				createdBy: 'Admin'
			},
			{
				movingOutId: movingOuts![Math.floor(Math.random() * 10)].id,
				verifierId: employees![Math.floor(Math.random() * 10)].id,
				verifiedStatus: faker.person.firstName(),
				verifiedRemark: faker.commerce.productDescription(),
				verifiedDate: DateTime.fromJSDate(faker.date.past()),
				directorApproverId: employees![Math.floor(Math.random() * 10)].id,
				directorApprovedStatus: faker.person.firstName(),
				directorApprovedRemark: faker.commerce.productDescription(),
				directorApprovedDate: DateTime.fromJSDate(faker.date.past()),
				active: true,
				createdBy: 'Admin'
			},
			{
				movingOutId: movingOuts![Math.floor(Math.random() * 10)].id,
				verifierId: employees![Math.floor(Math.random() * 10)].id,
				verifiedStatus: faker.person.firstName(),
				verifiedRemark: faker.commerce.productDescription(),
				verifiedDate: DateTime.fromJSDate(faker.date.past()),
				directorApproverId: employees![Math.floor(Math.random() * 10)].id,
				directorApprovedStatus: faker.person.firstName(),
				directorApprovedRemark: faker.commerce.productDescription(),
				directorApprovedDate: DateTime.fromJSDate(faker.date.past()),
				active: true,
				createdBy: 'Admin'
			},
			{
				movingOutId: movingOuts![Math.floor(Math.random() * 10)].id,
				verifierId: employees![Math.floor(Math.random() * 10)].id,
				verifiedStatus: faker.person.firstName(),
				verifiedRemark: faker.commerce.productDescription(),
				verifiedDate: DateTime.fromJSDate(faker.date.past()),
				directorApproverId: employees![Math.floor(Math.random() * 10)].id,
				directorApprovedStatus: faker.person.firstName(),
				directorApprovedRemark: faker.commerce.productDescription(),
				directorApprovedDate: DateTime.fromJSDate(faker.date.past()),
				active: true,
				createdBy: 'Admin'
			},
			{
				movingOutId: movingOuts![Math.floor(Math.random() * 10)].id,
				verifierId: employees![Math.floor(Math.random() * 10)].id,
				verifiedStatus: faker.person.firstName(),
				verifiedRemark: faker.commerce.productDescription(),
				verifiedDate: DateTime.fromJSDate(faker.date.past()),
				directorApproverId: employees![Math.floor(Math.random() * 10)].id,
				directorApprovedStatus: faker.person.firstName(),
				directorApprovedRemark: faker.commerce.productDescription(),
				directorApprovedDate: DateTime.fromJSDate(faker.date.past()),
				active: true,
				createdBy: 'Admin'
			},
			{
				movingOutId: movingOuts![Math.floor(Math.random() * 10)].id,
				verifierId: employees![Math.floor(Math.random() * 10)].id,
				verifiedStatus: faker.person.firstName(),
				verifiedRemark: faker.commerce.productDescription(),
				verifiedDate: DateTime.fromJSDate(faker.date.past()),
				directorApproverId: employees![Math.floor(Math.random() * 10)].id,
				directorApprovedStatus: faker.person.firstName(),
				directorApprovedRemark: faker.commerce.productDescription(),
				directorApprovedDate: DateTime.fromJSDate(faker.date.past()),
				active: true,
				createdBy: 'Admin'
			},
			{
				movingOutId: movingOuts![Math.floor(Math.random() * 10)].id,
				verifierId: employees![Math.floor(Math.random() * 10)].id,
				verifiedStatus: faker.person.firstName(),
				verifiedRemark: faker.commerce.productDescription(),
				verifiedDate: DateTime.fromJSDate(faker.date.past()),
				directorApproverId: employees![Math.floor(Math.random() * 10)].id,
				directorApprovedStatus: faker.person.firstName(),
				directorApprovedRemark: faker.commerce.productDescription(),
				directorApprovedDate: DateTime.fromJSDate(faker.date.past()),
				active: true,
				createdBy: 'Admin'
			},
		])
	}
}
