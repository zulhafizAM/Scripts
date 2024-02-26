import BaseSeeder from '@ioc:Adonis/Lucid/Seeder';
import { DateTime } from 'luxon';
import { Faker, en } from '@faker-js/faker';
import IntegrityProceeding from 'App/Models/IntegrityProceeding';
import Employee from 'App/Models/Employee';
import Meeting from 'App/Models/Meeting';
import DisciplinaryActionType from 'App/Models/DisciplinaryActionType';

export default class extends BaseSeeder {

	public async run () {
		const employees = await Employee.all();
		const meetings = await Meeting.all();
		const disciplinaryActionTypes = await DisciplinaryActionType.all();
		const faker = new Faker({ locale: [en] });
		await IntegrityProceeding.createMany([
			{
				employeeId: employees![Math.floor(Math.random() * 10)].id,
				meetingId: meetings![Math.floor(Math.random() * 10)].id,
				disciplinaryTypeId: disciplinaryActionTypes![Math.floor(Math.random() * 10)].id,
				meetingResult: faker.person.fullName(),
				remark: faker.person.fullName(),
				active: true,
				createdBy: 'Admin'
			},
			{
				employeeId: employees![Math.floor(Math.random() * 10)].id,
				meetingId: meetings![Math.floor(Math.random() * 10)].id,
				disciplinaryTypeId: disciplinaryActionTypes![Math.floor(Math.random() * 10)].id,
				meetingResult: faker.person.fullName(),
				remark: faker.person.fullName(),
				active: true,
				createdBy: 'Admin'
			},
			{
				employeeId: employees![Math.floor(Math.random() * 10)].id,
				meetingId: meetings![Math.floor(Math.random() * 10)].id,
				disciplinaryTypeId: disciplinaryActionTypes![Math.floor(Math.random() * 10)].id,
				meetingResult: faker.person.fullName(),
				remark: faker.person.fullName(),
				active: true,
				createdBy: 'Admin'
			},
			{
				employeeId: employees![Math.floor(Math.random() * 10)].id,
				meetingId: meetings![Math.floor(Math.random() * 10)].id,
				disciplinaryTypeId: disciplinaryActionTypes![Math.floor(Math.random() * 10)].id,
				meetingResult: faker.person.fullName(),
				remark: faker.person.fullName(),
				active: true,
				createdBy: 'Admin'
			},
			{
				employeeId: employees![Math.floor(Math.random() * 10)].id,
				meetingId: meetings![Math.floor(Math.random() * 10)].id,
				disciplinaryTypeId: disciplinaryActionTypes![Math.floor(Math.random() * 10)].id,
				meetingResult: faker.person.fullName(),
				remark: faker.person.fullName(),
				active: true,
				createdBy: 'Admin'
			},
			{
				employeeId: employees![Math.floor(Math.random() * 10)].id,
				meetingId: meetings![Math.floor(Math.random() * 10)].id,
				disciplinaryTypeId: disciplinaryActionTypes![Math.floor(Math.random() * 10)].id,
				meetingResult: faker.person.fullName(),
				remark: faker.person.fullName(),
				active: true,
				createdBy: 'Admin'
			},
			{
				employeeId: employees![Math.floor(Math.random() * 10)].id,
				meetingId: meetings![Math.floor(Math.random() * 10)].id,
				disciplinaryTypeId: disciplinaryActionTypes![Math.floor(Math.random() * 10)].id,
				meetingResult: faker.person.fullName(),
				remark: faker.person.fullName(),
				active: true,
				createdBy: 'Admin'
			},
			{
				employeeId: employees![Math.floor(Math.random() * 10)].id,
				meetingId: meetings![Math.floor(Math.random() * 10)].id,
				disciplinaryTypeId: disciplinaryActionTypes![Math.floor(Math.random() * 10)].id,
				meetingResult: faker.person.fullName(),
				remark: faker.person.fullName(),
				active: true,
				createdBy: 'Admin'
			},
			{
				employeeId: employees![Math.floor(Math.random() * 10)].id,
				meetingId: meetings![Math.floor(Math.random() * 10)].id,
				disciplinaryTypeId: disciplinaryActionTypes![Math.floor(Math.random() * 10)].id,
				meetingResult: faker.person.fullName(),
				remark: faker.person.fullName(),
				active: true,
				createdBy: 'Admin'
			},
			{
				employeeId: employees![Math.floor(Math.random() * 10)].id,
				meetingId: meetings![Math.floor(Math.random() * 10)].id,
				disciplinaryTypeId: disciplinaryActionTypes![Math.floor(Math.random() * 10)].id,
				meetingResult: faker.person.fullName(),
				remark: faker.person.fullName(),
				active: true,
				createdBy: 'Admin'
			},
		])
	}
}
