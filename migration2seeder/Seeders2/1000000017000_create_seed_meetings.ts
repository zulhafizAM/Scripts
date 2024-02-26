import BaseSeeder from '@ioc:Adonis/Lucid/Seeder';
import { DateTime } from 'luxon';
import { Faker, en } from '@faker-js/faker';
import Meeting from 'App/Models/Meeting';
import MeetingType from 'App/Models/MeetingType';
import Position from 'App/Models/Position';
import Grade from 'App/Models/Grade';

export default class extends BaseSeeder {

	public async run () {
		const meetingTypes = await MeetingType.all();
		const positions = await Position.all();
		const grades = await Grade.all();
		const faker = new Faker({ locale: [en] });
		await Meeting.createMany([
			{
				meetingTypeId: meetingTypes![Math.floor(Math.random() * 10)].id,
				positionId: positions![Math.floor(Math.random() * 10)].id,
				gradeId: grades![Math.floor(Math.random() * 10)].id,
				groupName: faker.person.fullName(),
				meetingCount: faker.number.int({ max: 10 }),
				employeeCount: faker.number.int({ max: 10 }),
				meetingDate: DateTime.fromJSDate(faker.date.past()),
				status: faker.person.fullName(),
				active: true,
				createdBy: 'Admin'
			},
			{
				meetingTypeId: meetingTypes![Math.floor(Math.random() * 10)].id,
				positionId: positions![Math.floor(Math.random() * 10)].id,
				gradeId: grades![Math.floor(Math.random() * 10)].id,
				groupName: faker.person.fullName(),
				meetingCount: faker.number.int({ max: 10 }),
				employeeCount: faker.number.int({ max: 10 }),
				meetingDate: DateTime.fromJSDate(faker.date.past()),
				status: faker.person.fullName(),
				active: true,
				createdBy: 'Admin'
			},
			{
				meetingTypeId: meetingTypes![Math.floor(Math.random() * 10)].id,
				positionId: positions![Math.floor(Math.random() * 10)].id,
				gradeId: grades![Math.floor(Math.random() * 10)].id,
				groupName: faker.person.fullName(),
				meetingCount: faker.number.int({ max: 10 }),
				employeeCount: faker.number.int({ max: 10 }),
				meetingDate: DateTime.fromJSDate(faker.date.past()),
				status: faker.person.fullName(),
				active: true,
				createdBy: 'Admin'
			},
			{
				meetingTypeId: meetingTypes![Math.floor(Math.random() * 10)].id,
				positionId: positions![Math.floor(Math.random() * 10)].id,
				gradeId: grades![Math.floor(Math.random() * 10)].id,
				groupName: faker.person.fullName(),
				meetingCount: faker.number.int({ max: 10 }),
				employeeCount: faker.number.int({ max: 10 }),
				meetingDate: DateTime.fromJSDate(faker.date.past()),
				status: faker.person.fullName(),
				active: true,
				createdBy: 'Admin'
			},
			{
				meetingTypeId: meetingTypes![Math.floor(Math.random() * 10)].id,
				positionId: positions![Math.floor(Math.random() * 10)].id,
				gradeId: grades![Math.floor(Math.random() * 10)].id,
				groupName: faker.person.fullName(),
				meetingCount: faker.number.int({ max: 10 }),
				employeeCount: faker.number.int({ max: 10 }),
				meetingDate: DateTime.fromJSDate(faker.date.past()),
				status: faker.person.fullName(),
				active: true,
				createdBy: 'Admin'
			},
			{
				meetingTypeId: meetingTypes![Math.floor(Math.random() * 10)].id,
				positionId: positions![Math.floor(Math.random() * 10)].id,
				gradeId: grades![Math.floor(Math.random() * 10)].id,
				groupName: faker.person.fullName(),
				meetingCount: faker.number.int({ max: 10 }),
				employeeCount: faker.number.int({ max: 10 }),
				meetingDate: DateTime.fromJSDate(faker.date.past()),
				status: faker.person.fullName(),
				active: true,
				createdBy: 'Admin'
			},
			{
				meetingTypeId: meetingTypes![Math.floor(Math.random() * 10)].id,
				positionId: positions![Math.floor(Math.random() * 10)].id,
				gradeId: grades![Math.floor(Math.random() * 10)].id,
				groupName: faker.person.fullName(),
				meetingCount: faker.number.int({ max: 10 }),
				employeeCount: faker.number.int({ max: 10 }),
				meetingDate: DateTime.fromJSDate(faker.date.past()),
				status: faker.person.fullName(),
				active: true,
				createdBy: 'Admin'
			},
			{
				meetingTypeId: meetingTypes![Math.floor(Math.random() * 10)].id,
				positionId: positions![Math.floor(Math.random() * 10)].id,
				gradeId: grades![Math.floor(Math.random() * 10)].id,
				groupName: faker.person.fullName(),
				meetingCount: faker.number.int({ max: 10 }),
				employeeCount: faker.number.int({ max: 10 }),
				meetingDate: DateTime.fromJSDate(faker.date.past()),
				status: faker.person.fullName(),
				active: true,
				createdBy: 'Admin'
			},
			{
				meetingTypeId: meetingTypes![Math.floor(Math.random() * 10)].id,
				positionId: positions![Math.floor(Math.random() * 10)].id,
				gradeId: grades![Math.floor(Math.random() * 10)].id,
				groupName: faker.person.fullName(),
				meetingCount: faker.number.int({ max: 10 }),
				employeeCount: faker.number.int({ max: 10 }),
				meetingDate: DateTime.fromJSDate(faker.date.past()),
				status: faker.person.fullName(),
				active: true,
				createdBy: 'Admin'
			},
			{
				meetingTypeId: meetingTypes![Math.floor(Math.random() * 10)].id,
				positionId: positions![Math.floor(Math.random() * 10)].id,
				gradeId: grades![Math.floor(Math.random() * 10)].id,
				groupName: faker.person.fullName(),
				meetingCount: faker.number.int({ max: 10 }),
				employeeCount: faker.number.int({ max: 10 }),
				meetingDate: DateTime.fromJSDate(faker.date.past()),
				status: faker.person.fullName(),
				active: true,
				createdBy: 'Admin'
			},
		])
	}
}
