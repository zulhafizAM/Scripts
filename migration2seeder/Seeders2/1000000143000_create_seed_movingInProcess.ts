import BaseSeeder from '@ioc:Adonis/Lucid/Seeder';
import { DateTime } from 'luxon';
import { Faker, en } from '@faker-js/faker';
import MovingInProcess from 'App/Models/MovingInProcess';
import MovingIn from 'App/Models/MovingIn';
import Employee from 'App/Models/Employee';

export default class extends BaseSeeder {

	public async run () {
		const movingIn = await MovingIn.all();
		const employees = await Employee.all();
		const faker = new Faker({ locale: [en] });
		await MovingInProcess.createMany([
			{
				movingInId: movingIn![Math.floor(Math.random() * 10)].id,
				verifierId: employees![Math.floor(Math.random() * 10)].id,
				verifiedStatus: faker.person.firstName(),
				verifiedRemark: faker.commerce.productDescription(),
				verifiedDate: DateTime.fromJSDate(faker.date.past()),
				secretaryApproverId: employees![Math.floor(Math.random() * 10)].id,
				secretaryApprovedStatus: faker.person.firstName(),
				secretaryApprovedRemark: faker.commerce.productDescription(),
				secretaryApprovedDate: DateTime.fromJSDate(faker.date.past()),
				directorApproverId: employees![Math.floor(Math.random() * 10)].id,
				directorApprovedStatus: faker.person.firstName(),
				directorApprovedRemark: faker.commerce.productDescription(),
				directorApprovedDate: DateTime.fromJSDate(faker.date.past()),
				active: true,
				createdBy: 'Admin'
			},
			{
				movingInId: movingIn![Math.floor(Math.random() * 10)].id,
				verifierId: employees![Math.floor(Math.random() * 10)].id,
				verifiedStatus: faker.person.firstName(),
				verifiedRemark: faker.commerce.productDescription(),
				verifiedDate: DateTime.fromJSDate(faker.date.past()),
				secretaryApproverId: employees![Math.floor(Math.random() * 10)].id,
				secretaryApprovedStatus: faker.person.firstName(),
				secretaryApprovedRemark: faker.commerce.productDescription(),
				secretaryApprovedDate: DateTime.fromJSDate(faker.date.past()),
				directorApproverId: employees![Math.floor(Math.random() * 10)].id,
				directorApprovedStatus: faker.person.firstName(),
				directorApprovedRemark: faker.commerce.productDescription(),
				directorApprovedDate: DateTime.fromJSDate(faker.date.past()),
				active: true,
				createdBy: 'Admin'
			},
			{
				movingInId: movingIn![Math.floor(Math.random() * 10)].id,
				verifierId: employees![Math.floor(Math.random() * 10)].id,
				verifiedStatus: faker.person.firstName(),
				verifiedRemark: faker.commerce.productDescription(),
				verifiedDate: DateTime.fromJSDate(faker.date.past()),
				secretaryApproverId: employees![Math.floor(Math.random() * 10)].id,
				secretaryApprovedStatus: faker.person.firstName(),
				secretaryApprovedRemark: faker.commerce.productDescription(),
				secretaryApprovedDate: DateTime.fromJSDate(faker.date.past()),
				directorApproverId: employees![Math.floor(Math.random() * 10)].id,
				directorApprovedStatus: faker.person.firstName(),
				directorApprovedRemark: faker.commerce.productDescription(),
				directorApprovedDate: DateTime.fromJSDate(faker.date.past()),
				active: true,
				createdBy: 'Admin'
			},
			{
				movingInId: movingIn![Math.floor(Math.random() * 10)].id,
				verifierId: employees![Math.floor(Math.random() * 10)].id,
				verifiedStatus: faker.person.firstName(),
				verifiedRemark: faker.commerce.productDescription(),
				verifiedDate: DateTime.fromJSDate(faker.date.past()),
				secretaryApproverId: employees![Math.floor(Math.random() * 10)].id,
				secretaryApprovedStatus: faker.person.firstName(),
				secretaryApprovedRemark: faker.commerce.productDescription(),
				secretaryApprovedDate: DateTime.fromJSDate(faker.date.past()),
				directorApproverId: employees![Math.floor(Math.random() * 10)].id,
				directorApprovedStatus: faker.person.firstName(),
				directorApprovedRemark: faker.commerce.productDescription(),
				directorApprovedDate: DateTime.fromJSDate(faker.date.past()),
				active: true,
				createdBy: 'Admin'
			},
			{
				movingInId: movingIn![Math.floor(Math.random() * 10)].id,
				verifierId: employees![Math.floor(Math.random() * 10)].id,
				verifiedStatus: faker.person.firstName(),
				verifiedRemark: faker.commerce.productDescription(),
				verifiedDate: DateTime.fromJSDate(faker.date.past()),
				secretaryApproverId: employees![Math.floor(Math.random() * 10)].id,
				secretaryApprovedStatus: faker.person.firstName(),
				secretaryApprovedRemark: faker.commerce.productDescription(),
				secretaryApprovedDate: DateTime.fromJSDate(faker.date.past()),
				directorApproverId: employees![Math.floor(Math.random() * 10)].id,
				directorApprovedStatus: faker.person.firstName(),
				directorApprovedRemark: faker.commerce.productDescription(),
				directorApprovedDate: DateTime.fromJSDate(faker.date.past()),
				active: true,
				createdBy: 'Admin'
			},
			{
				movingInId: movingIn![Math.floor(Math.random() * 10)].id,
				verifierId: employees![Math.floor(Math.random() * 10)].id,
				verifiedStatus: faker.person.firstName(),
				verifiedRemark: faker.commerce.productDescription(),
				verifiedDate: DateTime.fromJSDate(faker.date.past()),
				secretaryApproverId: employees![Math.floor(Math.random() * 10)].id,
				secretaryApprovedStatus: faker.person.firstName(),
				secretaryApprovedRemark: faker.commerce.productDescription(),
				secretaryApprovedDate: DateTime.fromJSDate(faker.date.past()),
				directorApproverId: employees![Math.floor(Math.random() * 10)].id,
				directorApprovedStatus: faker.person.firstName(),
				directorApprovedRemark: faker.commerce.productDescription(),
				directorApprovedDate: DateTime.fromJSDate(faker.date.past()),
				active: true,
				createdBy: 'Admin'
			},
			{
				movingInId: movingIn![Math.floor(Math.random() * 10)].id,
				verifierId: employees![Math.floor(Math.random() * 10)].id,
				verifiedStatus: faker.person.firstName(),
				verifiedRemark: faker.commerce.productDescription(),
				verifiedDate: DateTime.fromJSDate(faker.date.past()),
				secretaryApproverId: employees![Math.floor(Math.random() * 10)].id,
				secretaryApprovedStatus: faker.person.firstName(),
				secretaryApprovedRemark: faker.commerce.productDescription(),
				secretaryApprovedDate: DateTime.fromJSDate(faker.date.past()),
				directorApproverId: employees![Math.floor(Math.random() * 10)].id,
				directorApprovedStatus: faker.person.firstName(),
				directorApprovedRemark: faker.commerce.productDescription(),
				directorApprovedDate: DateTime.fromJSDate(faker.date.past()),
				active: true,
				createdBy: 'Admin'
			},
			{
				movingInId: movingIn![Math.floor(Math.random() * 10)].id,
				verifierId: employees![Math.floor(Math.random() * 10)].id,
				verifiedStatus: faker.person.firstName(),
				verifiedRemark: faker.commerce.productDescription(),
				verifiedDate: DateTime.fromJSDate(faker.date.past()),
				secretaryApproverId: employees![Math.floor(Math.random() * 10)].id,
				secretaryApprovedStatus: faker.person.firstName(),
				secretaryApprovedRemark: faker.commerce.productDescription(),
				secretaryApprovedDate: DateTime.fromJSDate(faker.date.past()),
				directorApproverId: employees![Math.floor(Math.random() * 10)].id,
				directorApprovedStatus: faker.person.firstName(),
				directorApprovedRemark: faker.commerce.productDescription(),
				directorApprovedDate: DateTime.fromJSDate(faker.date.past()),
				active: true,
				createdBy: 'Admin'
			},
			{
				movingInId: movingIn![Math.floor(Math.random() * 10)].id,
				verifierId: employees![Math.floor(Math.random() * 10)].id,
				verifiedStatus: faker.person.firstName(),
				verifiedRemark: faker.commerce.productDescription(),
				verifiedDate: DateTime.fromJSDate(faker.date.past()),
				secretaryApproverId: employees![Math.floor(Math.random() * 10)].id,
				secretaryApprovedStatus: faker.person.firstName(),
				secretaryApprovedRemark: faker.commerce.productDescription(),
				secretaryApprovedDate: DateTime.fromJSDate(faker.date.past()),
				directorApproverId: employees![Math.floor(Math.random() * 10)].id,
				directorApprovedStatus: faker.person.firstName(),
				directorApprovedRemark: faker.commerce.productDescription(),
				directorApprovedDate: DateTime.fromJSDate(faker.date.past()),
				active: true,
				createdBy: 'Admin'
			},
			{
				movingInId: movingIn![Math.floor(Math.random() * 10)].id,
				verifierId: employees![Math.floor(Math.random() * 10)].id,
				verifiedStatus: faker.person.firstName(),
				verifiedRemark: faker.commerce.productDescription(),
				verifiedDate: DateTime.fromJSDate(faker.date.past()),
				secretaryApproverId: employees![Math.floor(Math.random() * 10)].id,
				secretaryApprovedStatus: faker.person.firstName(),
				secretaryApprovedRemark: faker.commerce.productDescription(),
				secretaryApprovedDate: DateTime.fromJSDate(faker.date.past()),
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
