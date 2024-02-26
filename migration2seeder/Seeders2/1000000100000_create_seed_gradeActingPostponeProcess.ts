import BaseSeeder from '@ioc:Adonis/Lucid/Seeder';
import { DateTime } from 'luxon';
import { Faker, en } from '@faker-js/faker';
import GradeActingPostponeProcess from 'App/Models/GradeActingPostponeProcess';
import GradeActingType from 'App/Models/GradeActingType';
import Meeting from 'App/Models/Meeting';
import Placement from 'App/Models/Placement';

export default class extends BaseSeeder {

	public async run () {
		const gradeActingTypes = await GradeActingType.all();
		const meetings = await Meeting.all();
		const placements = await Placement.all();
		const faker = new Faker({ locale: [en] });
		await GradeActingPostponeProcess.createMany([
			{
				actingId: gradeActingTypes![Math.floor(Math.random() * 10)].id,
				meetingId: meetings![Math.floor(Math.random() * 10)].id,
				placementId: placements![Math.floor(Math.random() * 10)].id,
				newReportDutyDate: DateTime.fromJSDate(faker.date.past()),
				postponeReason: faker.person.fullName(),
				meetingResult: faker.person.fullName(),
				meetingRemark: faker.person.fullName(),
				active: true,
				createdBy: 'Admin'
			},
			{
				actingId: gradeActingTypes![Math.floor(Math.random() * 10)].id,
				meetingId: meetings![Math.floor(Math.random() * 10)].id,
				placementId: placements![Math.floor(Math.random() * 10)].id,
				newReportDutyDate: DateTime.fromJSDate(faker.date.past()),
				postponeReason: faker.person.fullName(),
				meetingResult: faker.person.fullName(),
				meetingRemark: faker.person.fullName(),
				active: true,
				createdBy: 'Admin'
			},
			{
				actingId: gradeActingTypes![Math.floor(Math.random() * 10)].id,
				meetingId: meetings![Math.floor(Math.random() * 10)].id,
				placementId: placements![Math.floor(Math.random() * 10)].id,
				newReportDutyDate: DateTime.fromJSDate(faker.date.past()),
				postponeReason: faker.person.fullName(),
				meetingResult: faker.person.fullName(),
				meetingRemark: faker.person.fullName(),
				active: true,
				createdBy: 'Admin'
			},
			{
				actingId: gradeActingTypes![Math.floor(Math.random() * 10)].id,
				meetingId: meetings![Math.floor(Math.random() * 10)].id,
				placementId: placements![Math.floor(Math.random() * 10)].id,
				newReportDutyDate: DateTime.fromJSDate(faker.date.past()),
				postponeReason: faker.person.fullName(),
				meetingResult: faker.person.fullName(),
				meetingRemark: faker.person.fullName(),
				active: true,
				createdBy: 'Admin'
			},
			{
				actingId: gradeActingTypes![Math.floor(Math.random() * 10)].id,
				meetingId: meetings![Math.floor(Math.random() * 10)].id,
				placementId: placements![Math.floor(Math.random() * 10)].id,
				newReportDutyDate: DateTime.fromJSDate(faker.date.past()),
				postponeReason: faker.person.fullName(),
				meetingResult: faker.person.fullName(),
				meetingRemark: faker.person.fullName(),
				active: true,
				createdBy: 'Admin'
			},
			{
				actingId: gradeActingTypes![Math.floor(Math.random() * 10)].id,
				meetingId: meetings![Math.floor(Math.random() * 10)].id,
				placementId: placements![Math.floor(Math.random() * 10)].id,
				newReportDutyDate: DateTime.fromJSDate(faker.date.past()),
				postponeReason: faker.person.fullName(),
				meetingResult: faker.person.fullName(),
				meetingRemark: faker.person.fullName(),
				active: true,
				createdBy: 'Admin'
			},
			{
				actingId: gradeActingTypes![Math.floor(Math.random() * 10)].id,
				meetingId: meetings![Math.floor(Math.random() * 10)].id,
				placementId: placements![Math.floor(Math.random() * 10)].id,
				newReportDutyDate: DateTime.fromJSDate(faker.date.past()),
				postponeReason: faker.person.fullName(),
				meetingResult: faker.person.fullName(),
				meetingRemark: faker.person.fullName(),
				active: true,
				createdBy: 'Admin'
			},
			{
				actingId: gradeActingTypes![Math.floor(Math.random() * 10)].id,
				meetingId: meetings![Math.floor(Math.random() * 10)].id,
				placementId: placements![Math.floor(Math.random() * 10)].id,
				newReportDutyDate: DateTime.fromJSDate(faker.date.past()),
				postponeReason: faker.person.fullName(),
				meetingResult: faker.person.fullName(),
				meetingRemark: faker.person.fullName(),
				active: true,
				createdBy: 'Admin'
			},
			{
				actingId: gradeActingTypes![Math.floor(Math.random() * 10)].id,
				meetingId: meetings![Math.floor(Math.random() * 10)].id,
				placementId: placements![Math.floor(Math.random() * 10)].id,
				newReportDutyDate: DateTime.fromJSDate(faker.date.past()),
				postponeReason: faker.person.fullName(),
				meetingResult: faker.person.fullName(),
				meetingRemark: faker.person.fullName(),
				active: true,
				createdBy: 'Admin'
			},
			{
				actingId: gradeActingTypes![Math.floor(Math.random() * 10)].id,
				meetingId: meetings![Math.floor(Math.random() * 10)].id,
				placementId: placements![Math.floor(Math.random() * 10)].id,
				newReportDutyDate: DateTime.fromJSDate(faker.date.past()),
				postponeReason: faker.person.fullName(),
				meetingResult: faker.person.fullName(),
				meetingRemark: faker.person.fullName(),
				active: true,
				createdBy: 'Admin'
			},
		])
	}
}
