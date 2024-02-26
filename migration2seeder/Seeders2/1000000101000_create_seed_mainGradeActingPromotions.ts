import BaseSeeder from '@ioc:Adonis/Lucid/Seeder';
import { DateTime } from 'luxon';
import { Faker, en } from '@faker-js/faker';
import MainGradeActingPromotion from 'App/Models/MainGradeActingPromotion';
import Employee from 'App/Models/Employee';
import Meeting from 'App/Models/Meeting';

export default class extends BaseSeeder {

	public async run () {
		const employees = await Employee.all();
		const meetings = await Meeting.all();
		const faker = new Faker({ locale: [en] });
		await MainGradeActingPromotion.createMany([
			{
				employeeId: employees![Math.floor(Math.random() * 10)].id,
				meetingId: meetings![Math.floor(Math.random() * 10)].id,
				isActing: true,
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
				isActing: true,
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
				isActing: true,
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
				isActing: true,
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
				isActing: true,
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
				isActing: true,
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
				isActing: true,
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
				isActing: true,
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
				isActing: true,
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
				isActing: true,
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
