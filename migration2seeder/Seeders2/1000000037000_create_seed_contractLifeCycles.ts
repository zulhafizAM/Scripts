import BaseSeeder from '@ioc:Adonis/Lucid/Seeder';
import { DateTime } from 'luxon';
import { Faker, en } from '@faker-js/faker';
import ContractLifeCycle from 'App/Models/ContractLifeCycle';
import ContractDetail from 'App/Models/ContractDetail';
import Meeting from 'App/Models/Meeting';

export default class extends BaseSeeder {

	public async run () {
		const contractDetails = await ContractDetail.all();
		const meetings = await Meeting.all();
		const faker = new Faker({ locale: [en] });
		await ContractLifeCycle.createMany([
			{
				contractId: contractDetails![Math.floor(Math.random() * 10)].id,
				meetingId: meetings![Math.floor(Math.random() * 10)].id,
				workPerformanceRating: faker.number.float({ precision: 0.01 }),
				individualMark: faker.number.float({ precision: 0.01 }),
				overallMark: faker.number.float({ precision: 0.01 }),
				meetingResult: faker.person.fullName(),
				meetingRemark: faker.person.fullName(),
				meetingResultDate: DateTime.fromJSDate(faker.date.past()),
				status: faker.person.fullName(),
				remark: faker.person.fullName(),
				active: true,
				createdBy: 'Admin'
			},
			{
				contractId: contractDetails![Math.floor(Math.random() * 10)].id,
				meetingId: meetings![Math.floor(Math.random() * 10)].id,
				workPerformanceRating: faker.number.float({ precision: 0.01 }),
				individualMark: faker.number.float({ precision: 0.01 }),
				overallMark: faker.number.float({ precision: 0.01 }),
				meetingResult: faker.person.fullName(),
				meetingRemark: faker.person.fullName(),
				meetingResultDate: DateTime.fromJSDate(faker.date.past()),
				status: faker.person.fullName(),
				remark: faker.person.fullName(),
				active: true,
				createdBy: 'Admin'
			},
			{
				contractId: contractDetails![Math.floor(Math.random() * 10)].id,
				meetingId: meetings![Math.floor(Math.random() * 10)].id,
				workPerformanceRating: faker.number.float({ precision: 0.01 }),
				individualMark: faker.number.float({ precision: 0.01 }),
				overallMark: faker.number.float({ precision: 0.01 }),
				meetingResult: faker.person.fullName(),
				meetingRemark: faker.person.fullName(),
				meetingResultDate: DateTime.fromJSDate(faker.date.past()),
				status: faker.person.fullName(),
				remark: faker.person.fullName(),
				active: true,
				createdBy: 'Admin'
			},
			{
				contractId: contractDetails![Math.floor(Math.random() * 10)].id,
				meetingId: meetings![Math.floor(Math.random() * 10)].id,
				workPerformanceRating: faker.number.float({ precision: 0.01 }),
				individualMark: faker.number.float({ precision: 0.01 }),
				overallMark: faker.number.float({ precision: 0.01 }),
				meetingResult: faker.person.fullName(),
				meetingRemark: faker.person.fullName(),
				meetingResultDate: DateTime.fromJSDate(faker.date.past()),
				status: faker.person.fullName(),
				remark: faker.person.fullName(),
				active: true,
				createdBy: 'Admin'
			},
			{
				contractId: contractDetails![Math.floor(Math.random() * 10)].id,
				meetingId: meetings![Math.floor(Math.random() * 10)].id,
				workPerformanceRating: faker.number.float({ precision: 0.01 }),
				individualMark: faker.number.float({ precision: 0.01 }),
				overallMark: faker.number.float({ precision: 0.01 }),
				meetingResult: faker.person.fullName(),
				meetingRemark: faker.person.fullName(),
				meetingResultDate: DateTime.fromJSDate(faker.date.past()),
				status: faker.person.fullName(),
				remark: faker.person.fullName(),
				active: true,
				createdBy: 'Admin'
			},
			{
				contractId: contractDetails![Math.floor(Math.random() * 10)].id,
				meetingId: meetings![Math.floor(Math.random() * 10)].id,
				workPerformanceRating: faker.number.float({ precision: 0.01 }),
				individualMark: faker.number.float({ precision: 0.01 }),
				overallMark: faker.number.float({ precision: 0.01 }),
				meetingResult: faker.person.fullName(),
				meetingRemark: faker.person.fullName(),
				meetingResultDate: DateTime.fromJSDate(faker.date.past()),
				status: faker.person.fullName(),
				remark: faker.person.fullName(),
				active: true,
				createdBy: 'Admin'
			},
			{
				contractId: contractDetails![Math.floor(Math.random() * 10)].id,
				meetingId: meetings![Math.floor(Math.random() * 10)].id,
				workPerformanceRating: faker.number.float({ precision: 0.01 }),
				individualMark: faker.number.float({ precision: 0.01 }),
				overallMark: faker.number.float({ precision: 0.01 }),
				meetingResult: faker.person.fullName(),
				meetingRemark: faker.person.fullName(),
				meetingResultDate: DateTime.fromJSDate(faker.date.past()),
				status: faker.person.fullName(),
				remark: faker.person.fullName(),
				active: true,
				createdBy: 'Admin'
			},
			{
				contractId: contractDetails![Math.floor(Math.random() * 10)].id,
				meetingId: meetings![Math.floor(Math.random() * 10)].id,
				workPerformanceRating: faker.number.float({ precision: 0.01 }),
				individualMark: faker.number.float({ precision: 0.01 }),
				overallMark: faker.number.float({ precision: 0.01 }),
				meetingResult: faker.person.fullName(),
				meetingRemark: faker.person.fullName(),
				meetingResultDate: DateTime.fromJSDate(faker.date.past()),
				status: faker.person.fullName(),
				remark: faker.person.fullName(),
				active: true,
				createdBy: 'Admin'
			},
			{
				contractId: contractDetails![Math.floor(Math.random() * 10)].id,
				meetingId: meetings![Math.floor(Math.random() * 10)].id,
				workPerformanceRating: faker.number.float({ precision: 0.01 }),
				individualMark: faker.number.float({ precision: 0.01 }),
				overallMark: faker.number.float({ precision: 0.01 }),
				meetingResult: faker.person.fullName(),
				meetingRemark: faker.person.fullName(),
				meetingResultDate: DateTime.fromJSDate(faker.date.past()),
				status: faker.person.fullName(),
				remark: faker.person.fullName(),
				active: true,
				createdBy: 'Admin'
			},
			{
				contractId: contractDetails![Math.floor(Math.random() * 10)].id,
				meetingId: meetings![Math.floor(Math.random() * 10)].id,
				workPerformanceRating: faker.number.float({ precision: 0.01 }),
				individualMark: faker.number.float({ precision: 0.01 }),
				overallMark: faker.number.float({ precision: 0.01 }),
				meetingResult: faker.person.fullName(),
				meetingRemark: faker.person.fullName(),
				meetingResultDate: DateTime.fromJSDate(faker.date.past()),
				status: faker.person.fullName(),
				remark: faker.person.fullName(),
				active: true,
				createdBy: 'Admin'
			},
		])
	}
}
