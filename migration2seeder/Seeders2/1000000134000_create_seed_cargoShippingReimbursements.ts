import BaseSeeder from '@ioc:Adonis/Lucid/Seeder';
import { DateTime } from 'luxon';
import { Faker, en } from '@faker-js/faker';
import CargoShippingReimbursement from 'App/Models/CargoShippingReimbursement';
import ServiceAllowance from 'App/Models/ServiceAllowance';

export default class extends BaseSeeder {

	public async run () {
		const serviceAllowances = await ServiceAllowance.all();
		const faker = new Faker({ locale: [en] });
		await CargoShippingReimbursement.createMany([
			{
				allowanceId: serviceAllowances![Math.floor(Math.random() * 10)].id,
				startShippingDate: DateTime.fromJSDate(faker.date.past()),
				endShippingDate: DateTime.fromJSDate(faker.date.past()),
				startPoint: faker.person.fullName(),
				endPoint: faker.person.fullName(),
				distance: faker.number.int({ max: 10 }),
				reason: faker.person.fullName(),
				active: true,
				createdBy: 'Admin'
			},
			{
				allowanceId: serviceAllowances![Math.floor(Math.random() * 10)].id,
				startShippingDate: DateTime.fromJSDate(faker.date.past()),
				endShippingDate: DateTime.fromJSDate(faker.date.past()),
				startPoint: faker.person.fullName(),
				endPoint: faker.person.fullName(),
				distance: faker.number.int({ max: 10 }),
				reason: faker.person.fullName(),
				active: true,
				createdBy: 'Admin'
			},
			{
				allowanceId: serviceAllowances![Math.floor(Math.random() * 10)].id,
				startShippingDate: DateTime.fromJSDate(faker.date.past()),
				endShippingDate: DateTime.fromJSDate(faker.date.past()),
				startPoint: faker.person.fullName(),
				endPoint: faker.person.fullName(),
				distance: faker.number.int({ max: 10 }),
				reason: faker.person.fullName(),
				active: true,
				createdBy: 'Admin'
			},
			{
				allowanceId: serviceAllowances![Math.floor(Math.random() * 10)].id,
				startShippingDate: DateTime.fromJSDate(faker.date.past()),
				endShippingDate: DateTime.fromJSDate(faker.date.past()),
				startPoint: faker.person.fullName(),
				endPoint: faker.person.fullName(),
				distance: faker.number.int({ max: 10 }),
				reason: faker.person.fullName(),
				active: true,
				createdBy: 'Admin'
			},
			{
				allowanceId: serviceAllowances![Math.floor(Math.random() * 10)].id,
				startShippingDate: DateTime.fromJSDate(faker.date.past()),
				endShippingDate: DateTime.fromJSDate(faker.date.past()),
				startPoint: faker.person.fullName(),
				endPoint: faker.person.fullName(),
				distance: faker.number.int({ max: 10 }),
				reason: faker.person.fullName(),
				active: true,
				createdBy: 'Admin'
			},
			{
				allowanceId: serviceAllowances![Math.floor(Math.random() * 10)].id,
				startShippingDate: DateTime.fromJSDate(faker.date.past()),
				endShippingDate: DateTime.fromJSDate(faker.date.past()),
				startPoint: faker.person.fullName(),
				endPoint: faker.person.fullName(),
				distance: faker.number.int({ max: 10 }),
				reason: faker.person.fullName(),
				active: true,
				createdBy: 'Admin'
			},
			{
				allowanceId: serviceAllowances![Math.floor(Math.random() * 10)].id,
				startShippingDate: DateTime.fromJSDate(faker.date.past()),
				endShippingDate: DateTime.fromJSDate(faker.date.past()),
				startPoint: faker.person.fullName(),
				endPoint: faker.person.fullName(),
				distance: faker.number.int({ max: 10 }),
				reason: faker.person.fullName(),
				active: true,
				createdBy: 'Admin'
			},
			{
				allowanceId: serviceAllowances![Math.floor(Math.random() * 10)].id,
				startShippingDate: DateTime.fromJSDate(faker.date.past()),
				endShippingDate: DateTime.fromJSDate(faker.date.past()),
				startPoint: faker.person.fullName(),
				endPoint: faker.person.fullName(),
				distance: faker.number.int({ max: 10 }),
				reason: faker.person.fullName(),
				active: true,
				createdBy: 'Admin'
			},
			{
				allowanceId: serviceAllowances![Math.floor(Math.random() * 10)].id,
				startShippingDate: DateTime.fromJSDate(faker.date.past()),
				endShippingDate: DateTime.fromJSDate(faker.date.past()),
				startPoint: faker.person.fullName(),
				endPoint: faker.person.fullName(),
				distance: faker.number.int({ max: 10 }),
				reason: faker.person.fullName(),
				active: true,
				createdBy: 'Admin'
			},
			{
				allowanceId: serviceAllowances![Math.floor(Math.random() * 10)].id,
				startShippingDate: DateTime.fromJSDate(faker.date.past()),
				endShippingDate: DateTime.fromJSDate(faker.date.past()),
				startPoint: faker.person.fullName(),
				endPoint: faker.person.fullName(),
				distance: faker.number.int({ max: 10 }),
				reason: faker.person.fullName(),
				active: true,
				createdBy: 'Admin'
			},
		])
	}
}
