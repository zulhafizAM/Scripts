import BaseSeeder from '@ioc:Adonis/Lucid/Seeder';
import { DateTime } from 'luxon';
import { Faker, en } from '@faker-js/faker';
import ForceTransferByDirector from 'App/Models/ForceTransferByDirector';
import Employee from 'App/Models/Employee';
import Meeting from 'App/Models/Meeting';
import Placement from 'App/Models/Placement';

export default class extends BaseSeeder {

	public async run () {
		const employees = await Employee.all();
		const meetings = await Meeting.all();
		const placements = await Placement.all();
		const faker = new Faker({ locale: [en] });
		await ForceTransferByDirector.createMany([
			{
				employeeId: employees![Math.floor(Math.random() * 10)].id,
				meetingId: meetings![Math.floor(Math.random() * 10)].id,
				newPlacementId: placements![Math.floor(Math.random() * 10)].id,
				isPostpone: true,
				reason: faker.person.fullName(),
				transferDate: DateTime.fromJSDate(faker.date.past()),
				meetingResult: faker.person.fullName(),
				meetingRemark: faker.person.fullName(),
				status: faker.person.fullName(),
				remark: faker.person.fullName(),
				active: true,
				createdBy: 'Admin'
			},
			{
				employeeId: employees![Math.floor(Math.random() * 10)].id,
				meetingId: meetings![Math.floor(Math.random() * 10)].id,
				newPlacementId: placements![Math.floor(Math.random() * 10)].id,
				isPostpone: true,
				reason: faker.person.fullName(),
				transferDate: DateTime.fromJSDate(faker.date.past()),
				meetingResult: faker.person.fullName(),
				meetingRemark: faker.person.fullName(),
				status: faker.person.fullName(),
				remark: faker.person.fullName(),
				active: true,
				createdBy: 'Admin'
			},
			{
				employeeId: employees![Math.floor(Math.random() * 10)].id,
				meetingId: meetings![Math.floor(Math.random() * 10)].id,
				newPlacementId: placements![Math.floor(Math.random() * 10)].id,
				isPostpone: true,
				reason: faker.person.fullName(),
				transferDate: DateTime.fromJSDate(faker.date.past()),
				meetingResult: faker.person.fullName(),
				meetingRemark: faker.person.fullName(),
				status: faker.person.fullName(),
				remark: faker.person.fullName(),
				active: true,
				createdBy: 'Admin'
			},
			{
				employeeId: employees![Math.floor(Math.random() * 10)].id,
				meetingId: meetings![Math.floor(Math.random() * 10)].id,
				newPlacementId: placements![Math.floor(Math.random() * 10)].id,
				isPostpone: true,
				reason: faker.person.fullName(),
				transferDate: DateTime.fromJSDate(faker.date.past()),
				meetingResult: faker.person.fullName(),
				meetingRemark: faker.person.fullName(),
				status: faker.person.fullName(),
				remark: faker.person.fullName(),
				active: true,
				createdBy: 'Admin'
			},
			{
				employeeId: employees![Math.floor(Math.random() * 10)].id,
				meetingId: meetings![Math.floor(Math.random() * 10)].id,
				newPlacementId: placements![Math.floor(Math.random() * 10)].id,
				isPostpone: true,
				reason: faker.person.fullName(),
				transferDate: DateTime.fromJSDate(faker.date.past()),
				meetingResult: faker.person.fullName(),
				meetingRemark: faker.person.fullName(),
				status: faker.person.fullName(),
				remark: faker.person.fullName(),
				active: true,
				createdBy: 'Admin'
			},
			{
				employeeId: employees![Math.floor(Math.random() * 10)].id,
				meetingId: meetings![Math.floor(Math.random() * 10)].id,
				newPlacementId: placements![Math.floor(Math.random() * 10)].id,
				isPostpone: true,
				reason: faker.person.fullName(),
				transferDate: DateTime.fromJSDate(faker.date.past()),
				meetingResult: faker.person.fullName(),
				meetingRemark: faker.person.fullName(),
				status: faker.person.fullName(),
				remark: faker.person.fullName(),
				active: true,
				createdBy: 'Admin'
			},
			{
				employeeId: employees![Math.floor(Math.random() * 10)].id,
				meetingId: meetings![Math.floor(Math.random() * 10)].id,
				newPlacementId: placements![Math.floor(Math.random() * 10)].id,
				isPostpone: true,
				reason: faker.person.fullName(),
				transferDate: DateTime.fromJSDate(faker.date.past()),
				meetingResult: faker.person.fullName(),
				meetingRemark: faker.person.fullName(),
				status: faker.person.fullName(),
				remark: faker.person.fullName(),
				active: true,
				createdBy: 'Admin'
			},
			{
				employeeId: employees![Math.floor(Math.random() * 10)].id,
				meetingId: meetings![Math.floor(Math.random() * 10)].id,
				newPlacementId: placements![Math.floor(Math.random() * 10)].id,
				isPostpone: true,
				reason: faker.person.fullName(),
				transferDate: DateTime.fromJSDate(faker.date.past()),
				meetingResult: faker.person.fullName(),
				meetingRemark: faker.person.fullName(),
				status: faker.person.fullName(),
				remark: faker.person.fullName(),
				active: true,
				createdBy: 'Admin'
			},
			{
				employeeId: employees![Math.floor(Math.random() * 10)].id,
				meetingId: meetings![Math.floor(Math.random() * 10)].id,
				newPlacementId: placements![Math.floor(Math.random() * 10)].id,
				isPostpone: true,
				reason: faker.person.fullName(),
				transferDate: DateTime.fromJSDate(faker.date.past()),
				meetingResult: faker.person.fullName(),
				meetingRemark: faker.person.fullName(),
				status: faker.person.fullName(),
				remark: faker.person.fullName(),
				active: true,
				createdBy: 'Admin'
			},
			{
				employeeId: employees![Math.floor(Math.random() * 10)].id,
				meetingId: meetings![Math.floor(Math.random() * 10)].id,
				newPlacementId: placements![Math.floor(Math.random() * 10)].id,
				isPostpone: true,
				reason: faker.person.fullName(),
				transferDate: DateTime.fromJSDate(faker.date.past()),
				meetingResult: faker.person.fullName(),
				meetingRemark: faker.person.fullName(),
				status: faker.person.fullName(),
				remark: faker.person.fullName(),
				active: true,
				createdBy: 'Admin'
			},
		])
	}
}
