import BaseSeeder from '@ioc:Adonis/Lucid/Seeder';
import { DateTime } from 'luxon';
import { Faker, en } from '@faker-js/faker';
import PersonalTravelInsuranceClaim from 'App/Models/PersonalTravelInsuranceClaim';
import ServiceAllowance from 'App/Models/ServiceAllowance';

export default class extends BaseSeeder {

	public async run () {
		const serviceAllowances = await ServiceAllowance.all();
		const faker = new Faker({ locale: [en] });
		await PersonalTravelInsuranceClaim.createMany([
			{
				allowanceId: serviceAllowances![Math.floor(Math.random() * 10)].id,
				insuranceTypes: faker.person.fullName(),
				startTravelDate: DateTime.fromJSDate(faker.date.past()),
				endTravelDate: DateTime.fromJSDate(faker.date.past()),
				reason: faker.person.fullName(),
				region: faker.person.fullName(),
				active: true,
				createdBy: 'Admin'
			},
			{
				allowanceId: serviceAllowances![Math.floor(Math.random() * 10)].id,
				insuranceTypes: faker.person.fullName(),
				startTravelDate: DateTime.fromJSDate(faker.date.past()),
				endTravelDate: DateTime.fromJSDate(faker.date.past()),
				reason: faker.person.fullName(),
				region: faker.person.fullName(),
				active: true,
				createdBy: 'Admin'
			},
			{
				allowanceId: serviceAllowances![Math.floor(Math.random() * 10)].id,
				insuranceTypes: faker.person.fullName(),
				startTravelDate: DateTime.fromJSDate(faker.date.past()),
				endTravelDate: DateTime.fromJSDate(faker.date.past()),
				reason: faker.person.fullName(),
				region: faker.person.fullName(),
				active: true,
				createdBy: 'Admin'
			},
			{
				allowanceId: serviceAllowances![Math.floor(Math.random() * 10)].id,
				insuranceTypes: faker.person.fullName(),
				startTravelDate: DateTime.fromJSDate(faker.date.past()),
				endTravelDate: DateTime.fromJSDate(faker.date.past()),
				reason: faker.person.fullName(),
				region: faker.person.fullName(),
				active: true,
				createdBy: 'Admin'
			},
			{
				allowanceId: serviceAllowances![Math.floor(Math.random() * 10)].id,
				insuranceTypes: faker.person.fullName(),
				startTravelDate: DateTime.fromJSDate(faker.date.past()),
				endTravelDate: DateTime.fromJSDate(faker.date.past()),
				reason: faker.person.fullName(),
				region: faker.person.fullName(),
				active: true,
				createdBy: 'Admin'
			},
			{
				allowanceId: serviceAllowances![Math.floor(Math.random() * 10)].id,
				insuranceTypes: faker.person.fullName(),
				startTravelDate: DateTime.fromJSDate(faker.date.past()),
				endTravelDate: DateTime.fromJSDate(faker.date.past()),
				reason: faker.person.fullName(),
				region: faker.person.fullName(),
				active: true,
				createdBy: 'Admin'
			},
			{
				allowanceId: serviceAllowances![Math.floor(Math.random() * 10)].id,
				insuranceTypes: faker.person.fullName(),
				startTravelDate: DateTime.fromJSDate(faker.date.past()),
				endTravelDate: DateTime.fromJSDate(faker.date.past()),
				reason: faker.person.fullName(),
				region: faker.person.fullName(),
				active: true,
				createdBy: 'Admin'
			},
			{
				allowanceId: serviceAllowances![Math.floor(Math.random() * 10)].id,
				insuranceTypes: faker.person.fullName(),
				startTravelDate: DateTime.fromJSDate(faker.date.past()),
				endTravelDate: DateTime.fromJSDate(faker.date.past()),
				reason: faker.person.fullName(),
				region: faker.person.fullName(),
				active: true,
				createdBy: 'Admin'
			},
			{
				allowanceId: serviceAllowances![Math.floor(Math.random() * 10)].id,
				insuranceTypes: faker.person.fullName(),
				startTravelDate: DateTime.fromJSDate(faker.date.past()),
				endTravelDate: DateTime.fromJSDate(faker.date.past()),
				reason: faker.person.fullName(),
				region: faker.person.fullName(),
				active: true,
				createdBy: 'Admin'
			},
			{
				allowanceId: serviceAllowances![Math.floor(Math.random() * 10)].id,
				insuranceTypes: faker.person.fullName(),
				startTravelDate: DateTime.fromJSDate(faker.date.past()),
				endTravelDate: DateTime.fromJSDate(faker.date.past()),
				reason: faker.person.fullName(),
				region: faker.person.fullName(),
				active: true,
				createdBy: 'Admin'
			},
		])
	}
}
