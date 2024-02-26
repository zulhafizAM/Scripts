import BaseSeeder from '@ioc:Adonis/Lucid/Seeder';
import { DateTime } from 'luxon';
import { Faker, en } from '@faker-js/faker';
import AppealApplication from 'App/Models/AppealApplication';
import Employee from 'App/Models/Employee';
import Meeting from 'App/Models/Meeting';

export default class extends BaseSeeder {

	public async run () {
		const employees = await Employee.all();
		const meetings = await Meeting.all();
		const faker = new Faker({ locale: [en] });
		await AppealApplication.createMany([
			{
				employeeId: employees![Math.floor(Math.random() * 10)].id,
				meetingId: meetings![Math.floor(Math.random() * 10)].id,
				applicationDate: DateTime.fromJSDate(faker.date.past()),
				reason: faker.person.fullName(),
				status: faker.person.fullName(),
				meetingResult: faker.person.fullName(),
				penaltyName: faker.person.fullName(),
				penaltyDescription: faker.person.fullName(),
				active: true,
				createdBy: 'Admin'
			},
			{
				employeeId: employees![Math.floor(Math.random() * 10)].id,
				meetingId: meetings![Math.floor(Math.random() * 10)].id,
				applicationDate: DateTime.fromJSDate(faker.date.past()),
				reason: faker.person.fullName(),
				status: faker.person.fullName(),
				meetingResult: faker.person.fullName(),
				penaltyName: faker.person.fullName(),
				penaltyDescription: faker.person.fullName(),
				active: true,
				createdBy: 'Admin'
			},
			{
				employeeId: employees![Math.floor(Math.random() * 10)].id,
				meetingId: meetings![Math.floor(Math.random() * 10)].id,
				applicationDate: DateTime.fromJSDate(faker.date.past()),
				reason: faker.person.fullName(),
				status: faker.person.fullName(),
				meetingResult: faker.person.fullName(),
				penaltyName: faker.person.fullName(),
				penaltyDescription: faker.person.fullName(),
				active: true,
				createdBy: 'Admin'
			},
			{
				employeeId: employees![Math.floor(Math.random() * 10)].id,
				meetingId: meetings![Math.floor(Math.random() * 10)].id,
				applicationDate: DateTime.fromJSDate(faker.date.past()),
				reason: faker.person.fullName(),
				status: faker.person.fullName(),
				meetingResult: faker.person.fullName(),
				penaltyName: faker.person.fullName(),
				penaltyDescription: faker.person.fullName(),
				active: true,
				createdBy: 'Admin'
			},
			{
				employeeId: employees![Math.floor(Math.random() * 10)].id,
				meetingId: meetings![Math.floor(Math.random() * 10)].id,
				applicationDate: DateTime.fromJSDate(faker.date.past()),
				reason: faker.person.fullName(),
				status: faker.person.fullName(),
				meetingResult: faker.person.fullName(),
				penaltyName: faker.person.fullName(),
				penaltyDescription: faker.person.fullName(),
				active: true,
				createdBy: 'Admin'
			},
			{
				employeeId: employees![Math.floor(Math.random() * 10)].id,
				meetingId: meetings![Math.floor(Math.random() * 10)].id,
				applicationDate: DateTime.fromJSDate(faker.date.past()),
				reason: faker.person.fullName(),
				status: faker.person.fullName(),
				meetingResult: faker.person.fullName(),
				penaltyName: faker.person.fullName(),
				penaltyDescription: faker.person.fullName(),
				active: true,
				createdBy: 'Admin'
			},
			{
				employeeId: employees![Math.floor(Math.random() * 10)].id,
				meetingId: meetings![Math.floor(Math.random() * 10)].id,
				applicationDate: DateTime.fromJSDate(faker.date.past()),
				reason: faker.person.fullName(),
				status: faker.person.fullName(),
				meetingResult: faker.person.fullName(),
				penaltyName: faker.person.fullName(),
				penaltyDescription: faker.person.fullName(),
				active: true,
				createdBy: 'Admin'
			},
			{
				employeeId: employees![Math.floor(Math.random() * 10)].id,
				meetingId: meetings![Math.floor(Math.random() * 10)].id,
				applicationDate: DateTime.fromJSDate(faker.date.past()),
				reason: faker.person.fullName(),
				status: faker.person.fullName(),
				meetingResult: faker.person.fullName(),
				penaltyName: faker.person.fullName(),
				penaltyDescription: faker.person.fullName(),
				active: true,
				createdBy: 'Admin'
			},
			{
				employeeId: employees![Math.floor(Math.random() * 10)].id,
				meetingId: meetings![Math.floor(Math.random() * 10)].id,
				applicationDate: DateTime.fromJSDate(faker.date.past()),
				reason: faker.person.fullName(),
				status: faker.person.fullName(),
				meetingResult: faker.person.fullName(),
				penaltyName: faker.person.fullName(),
				penaltyDescription: faker.person.fullName(),
				active: true,
				createdBy: 'Admin'
			},
			{
				employeeId: employees![Math.floor(Math.random() * 10)].id,
				meetingId: meetings![Math.floor(Math.random() * 10)].id,
				applicationDate: DateTime.fromJSDate(faker.date.past()),
				reason: faker.person.fullName(),
				status: faker.person.fullName(),
				meetingResult: faker.person.fullName(),
				penaltyName: faker.person.fullName(),
				penaltyDescription: faker.person.fullName(),
				active: true,
				createdBy: 'Admin'
			},
		])
	}
}
