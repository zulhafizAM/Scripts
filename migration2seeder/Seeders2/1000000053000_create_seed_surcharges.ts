import BaseSeeder from '@ioc:Adonis/Lucid/Seeder';
import { DateTime } from 'luxon';
import { Faker, en } from '@faker-js/faker';
import Surcharge from 'App/Models/Surcharge';
import Employee from 'App/Models/Employee';
import Meeting from 'App/Models/Meeting';

export default class extends BaseSeeder {

	public async run () {
		const employees = await Employee.all();
		const meetings = await Meeting.all();
		const faker = new Faker({ locale: [en] });
		await Surcharge.createMany([
			{
				employeeId: employees![Math.floor(Math.random() * 10)].id,
				meetingId: meetings![Math.floor(Math.random() * 10)].id,
				reportDate: DateTime.fromJSDate(faker.date.past()),
				surchargeAction: faker.person.fullName(),
				surchargeRemark: faker.person.fullName(),
				amount: faker.number.float({ precision: 0.01 }),
				paymentType: faker.person.fullName(),
				duration: faker.number.int({ max: 10 }),
				effectiveDate: DateTime.fromJSDate(faker.date.past()),
				meetingResult: faker.person.fullName(),
				active: true,
				createdBy: 'Admin'
			},
			{
				employeeId: employees![Math.floor(Math.random() * 10)].id,
				meetingId: meetings![Math.floor(Math.random() * 10)].id,
				reportDate: DateTime.fromJSDate(faker.date.past()),
				surchargeAction: faker.person.fullName(),
				surchargeRemark: faker.person.fullName(),
				amount: faker.number.float({ precision: 0.01 }),
				paymentType: faker.person.fullName(),
				duration: faker.number.int({ max: 10 }),
				effectiveDate: DateTime.fromJSDate(faker.date.past()),
				meetingResult: faker.person.fullName(),
				active: true,
				createdBy: 'Admin'
			},
			{
				employeeId: employees![Math.floor(Math.random() * 10)].id,
				meetingId: meetings![Math.floor(Math.random() * 10)].id,
				reportDate: DateTime.fromJSDate(faker.date.past()),
				surchargeAction: faker.person.fullName(),
				surchargeRemark: faker.person.fullName(),
				amount: faker.number.float({ precision: 0.01 }),
				paymentType: faker.person.fullName(),
				duration: faker.number.int({ max: 10 }),
				effectiveDate: DateTime.fromJSDate(faker.date.past()),
				meetingResult: faker.person.fullName(),
				active: true,
				createdBy: 'Admin'
			},
			{
				employeeId: employees![Math.floor(Math.random() * 10)].id,
				meetingId: meetings![Math.floor(Math.random() * 10)].id,
				reportDate: DateTime.fromJSDate(faker.date.past()),
				surchargeAction: faker.person.fullName(),
				surchargeRemark: faker.person.fullName(),
				amount: faker.number.float({ precision: 0.01 }),
				paymentType: faker.person.fullName(),
				duration: faker.number.int({ max: 10 }),
				effectiveDate: DateTime.fromJSDate(faker.date.past()),
				meetingResult: faker.person.fullName(),
				active: true,
				createdBy: 'Admin'
			},
			{
				employeeId: employees![Math.floor(Math.random() * 10)].id,
				meetingId: meetings![Math.floor(Math.random() * 10)].id,
				reportDate: DateTime.fromJSDate(faker.date.past()),
				surchargeAction: faker.person.fullName(),
				surchargeRemark: faker.person.fullName(),
				amount: faker.number.float({ precision: 0.01 }),
				paymentType: faker.person.fullName(),
				duration: faker.number.int({ max: 10 }),
				effectiveDate: DateTime.fromJSDate(faker.date.past()),
				meetingResult: faker.person.fullName(),
				active: true,
				createdBy: 'Admin'
			},
			{
				employeeId: employees![Math.floor(Math.random() * 10)].id,
				meetingId: meetings![Math.floor(Math.random() * 10)].id,
				reportDate: DateTime.fromJSDate(faker.date.past()),
				surchargeAction: faker.person.fullName(),
				surchargeRemark: faker.person.fullName(),
				amount: faker.number.float({ precision: 0.01 }),
				paymentType: faker.person.fullName(),
				duration: faker.number.int({ max: 10 }),
				effectiveDate: DateTime.fromJSDate(faker.date.past()),
				meetingResult: faker.person.fullName(),
				active: true,
				createdBy: 'Admin'
			},
			{
				employeeId: employees![Math.floor(Math.random() * 10)].id,
				meetingId: meetings![Math.floor(Math.random() * 10)].id,
				reportDate: DateTime.fromJSDate(faker.date.past()),
				surchargeAction: faker.person.fullName(),
				surchargeRemark: faker.person.fullName(),
				amount: faker.number.float({ precision: 0.01 }),
				paymentType: faker.person.fullName(),
				duration: faker.number.int({ max: 10 }),
				effectiveDate: DateTime.fromJSDate(faker.date.past()),
				meetingResult: faker.person.fullName(),
				active: true,
				createdBy: 'Admin'
			},
			{
				employeeId: employees![Math.floor(Math.random() * 10)].id,
				meetingId: meetings![Math.floor(Math.random() * 10)].id,
				reportDate: DateTime.fromJSDate(faker.date.past()),
				surchargeAction: faker.person.fullName(),
				surchargeRemark: faker.person.fullName(),
				amount: faker.number.float({ precision: 0.01 }),
				paymentType: faker.person.fullName(),
				duration: faker.number.int({ max: 10 }),
				effectiveDate: DateTime.fromJSDate(faker.date.past()),
				meetingResult: faker.person.fullName(),
				active: true,
				createdBy: 'Admin'
			},
			{
				employeeId: employees![Math.floor(Math.random() * 10)].id,
				meetingId: meetings![Math.floor(Math.random() * 10)].id,
				reportDate: DateTime.fromJSDate(faker.date.past()),
				surchargeAction: faker.person.fullName(),
				surchargeRemark: faker.person.fullName(),
				amount: faker.number.float({ precision: 0.01 }),
				paymentType: faker.person.fullName(),
				duration: faker.number.int({ max: 10 }),
				effectiveDate: DateTime.fromJSDate(faker.date.past()),
				meetingResult: faker.person.fullName(),
				active: true,
				createdBy: 'Admin'
			},
			{
				employeeId: employees![Math.floor(Math.random() * 10)].id,
				meetingId: meetings![Math.floor(Math.random() * 10)].id,
				reportDate: DateTime.fromJSDate(faker.date.past()),
				surchargeAction: faker.person.fullName(),
				surchargeRemark: faker.person.fullName(),
				amount: faker.number.float({ precision: 0.01 }),
				paymentType: faker.person.fullName(),
				duration: faker.number.int({ max: 10 }),
				effectiveDate: DateTime.fromJSDate(faker.date.past()),
				meetingResult: faker.person.fullName(),
				active: true,
				createdBy: 'Admin'
			},
		])
	}
}
