import BaseSeeder from '@ioc:Adonis/Lucid/Seeder';
import { DateTime } from 'luxon';
import { Faker, en } from '@faker-js/faker';
import MaternityLeaveProcess from 'App/Models/MaternityLeaveProcess';
import MaternityLeave from 'App/Models/MaternityLeave';
import Employee from 'App/Models/Employee';

export default class extends BaseSeeder {

	public async run () {
		const maternityLeaves = await MaternityLeave.all();
		const employees = await Employee.all();
		const faker = new Faker({ locale: [en] });
		await MaternityLeaveProcess.createMany([
			{
				maternityLeaveId: maternityLeaves![Math.floor(Math.random() * 10)].id,
				verifierId: employees![Math.floor(Math.random() * 10)].id,
				verifiedStatus: faker.person.firstName(),
				verifiedRemark: faker.commerce.productDescription(),
				verifiedDate: DateTime.fromJSDate(faker.date.past()),
				approverId: employees![Math.floor(Math.random() * 10)].id,
				approvedStatus: faker.person.firstName(),
				approvedRemark: faker.commerce.productDescription(),
				approvedDate: DateTime.fromJSDate(faker.date.past()),
				meetingResult: faker.person.fullName(),
				meetingRemark: faker.person.fullName(),
				active: true,
				createdBy: 'Admin'
			},
			{
				maternityLeaveId: maternityLeaves![Math.floor(Math.random() * 10)].id,
				verifierId: employees![Math.floor(Math.random() * 10)].id,
				verifiedStatus: faker.person.firstName(),
				verifiedRemark: faker.commerce.productDescription(),
				verifiedDate: DateTime.fromJSDate(faker.date.past()),
				approverId: employees![Math.floor(Math.random() * 10)].id,
				approvedStatus: faker.person.firstName(),
				approvedRemark: faker.commerce.productDescription(),
				approvedDate: DateTime.fromJSDate(faker.date.past()),
				meetingResult: faker.person.fullName(),
				meetingRemark: faker.person.fullName(),
				active: true,
				createdBy: 'Admin'
			},
			{
				maternityLeaveId: maternityLeaves![Math.floor(Math.random() * 10)].id,
				verifierId: employees![Math.floor(Math.random() * 10)].id,
				verifiedStatus: faker.person.firstName(),
				verifiedRemark: faker.commerce.productDescription(),
				verifiedDate: DateTime.fromJSDate(faker.date.past()),
				approverId: employees![Math.floor(Math.random() * 10)].id,
				approvedStatus: faker.person.firstName(),
				approvedRemark: faker.commerce.productDescription(),
				approvedDate: DateTime.fromJSDate(faker.date.past()),
				meetingResult: faker.person.fullName(),
				meetingRemark: faker.person.fullName(),
				active: true,
				createdBy: 'Admin'
			},
			{
				maternityLeaveId: maternityLeaves![Math.floor(Math.random() * 10)].id,
				verifierId: employees![Math.floor(Math.random() * 10)].id,
				verifiedStatus: faker.person.firstName(),
				verifiedRemark: faker.commerce.productDescription(),
				verifiedDate: DateTime.fromJSDate(faker.date.past()),
				approverId: employees![Math.floor(Math.random() * 10)].id,
				approvedStatus: faker.person.firstName(),
				approvedRemark: faker.commerce.productDescription(),
				approvedDate: DateTime.fromJSDate(faker.date.past()),
				meetingResult: faker.person.fullName(),
				meetingRemark: faker.person.fullName(),
				active: true,
				createdBy: 'Admin'
			},
			{
				maternityLeaveId: maternityLeaves![Math.floor(Math.random() * 10)].id,
				verifierId: employees![Math.floor(Math.random() * 10)].id,
				verifiedStatus: faker.person.firstName(),
				verifiedRemark: faker.commerce.productDescription(),
				verifiedDate: DateTime.fromJSDate(faker.date.past()),
				approverId: employees![Math.floor(Math.random() * 10)].id,
				approvedStatus: faker.person.firstName(),
				approvedRemark: faker.commerce.productDescription(),
				approvedDate: DateTime.fromJSDate(faker.date.past()),
				meetingResult: faker.person.fullName(),
				meetingRemark: faker.person.fullName(),
				active: true,
				createdBy: 'Admin'
			},
			{
				maternityLeaveId: maternityLeaves![Math.floor(Math.random() * 10)].id,
				verifierId: employees![Math.floor(Math.random() * 10)].id,
				verifiedStatus: faker.person.firstName(),
				verifiedRemark: faker.commerce.productDescription(),
				verifiedDate: DateTime.fromJSDate(faker.date.past()),
				approverId: employees![Math.floor(Math.random() * 10)].id,
				approvedStatus: faker.person.firstName(),
				approvedRemark: faker.commerce.productDescription(),
				approvedDate: DateTime.fromJSDate(faker.date.past()),
				meetingResult: faker.person.fullName(),
				meetingRemark: faker.person.fullName(),
				active: true,
				createdBy: 'Admin'
			},
			{
				maternityLeaveId: maternityLeaves![Math.floor(Math.random() * 10)].id,
				verifierId: employees![Math.floor(Math.random() * 10)].id,
				verifiedStatus: faker.person.firstName(),
				verifiedRemark: faker.commerce.productDescription(),
				verifiedDate: DateTime.fromJSDate(faker.date.past()),
				approverId: employees![Math.floor(Math.random() * 10)].id,
				approvedStatus: faker.person.firstName(),
				approvedRemark: faker.commerce.productDescription(),
				approvedDate: DateTime.fromJSDate(faker.date.past()),
				meetingResult: faker.person.fullName(),
				meetingRemark: faker.person.fullName(),
				active: true,
				createdBy: 'Admin'
			},
			{
				maternityLeaveId: maternityLeaves![Math.floor(Math.random() * 10)].id,
				verifierId: employees![Math.floor(Math.random() * 10)].id,
				verifiedStatus: faker.person.firstName(),
				verifiedRemark: faker.commerce.productDescription(),
				verifiedDate: DateTime.fromJSDate(faker.date.past()),
				approverId: employees![Math.floor(Math.random() * 10)].id,
				approvedStatus: faker.person.firstName(),
				approvedRemark: faker.commerce.productDescription(),
				approvedDate: DateTime.fromJSDate(faker.date.past()),
				meetingResult: faker.person.fullName(),
				meetingRemark: faker.person.fullName(),
				active: true,
				createdBy: 'Admin'
			},
			{
				maternityLeaveId: maternityLeaves![Math.floor(Math.random() * 10)].id,
				verifierId: employees![Math.floor(Math.random() * 10)].id,
				verifiedStatus: faker.person.firstName(),
				verifiedRemark: faker.commerce.productDescription(),
				verifiedDate: DateTime.fromJSDate(faker.date.past()),
				approverId: employees![Math.floor(Math.random() * 10)].id,
				approvedStatus: faker.person.firstName(),
				approvedRemark: faker.commerce.productDescription(),
				approvedDate: DateTime.fromJSDate(faker.date.past()),
				meetingResult: faker.person.fullName(),
				meetingRemark: faker.person.fullName(),
				active: true,
				createdBy: 'Admin'
			},
			{
				maternityLeaveId: maternityLeaves![Math.floor(Math.random() * 10)].id,
				verifierId: employees![Math.floor(Math.random() * 10)].id,
				verifiedStatus: faker.person.firstName(),
				verifiedRemark: faker.commerce.productDescription(),
				verifiedDate: DateTime.fromJSDate(faker.date.past()),
				approverId: employees![Math.floor(Math.random() * 10)].id,
				approvedStatus: faker.person.firstName(),
				approvedRemark: faker.commerce.productDescription(),
				approvedDate: DateTime.fromJSDate(faker.date.past()),
				meetingResult: faker.person.fullName(),
				meetingRemark: faker.person.fullName(),
				active: true,
				createdBy: 'Admin'
			},
		])
	}
}
