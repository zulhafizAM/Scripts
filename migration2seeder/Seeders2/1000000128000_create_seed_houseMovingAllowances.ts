import BaseSeeder from '@ioc:Adonis/Lucid/Seeder';
import { DateTime } from 'luxon';
import { Faker, en } from '@faker-js/faker';
import HouseMovingAllowance from 'App/Models/HouseMovingAllowance';
import ServiceAllowance from 'App/Models/ServiceAllowance';

export default class extends BaseSeeder {

	public async run () {
		const serviceAllowances = await ServiceAllowance.all();
		const faker = new Faker({ locale: [en] });
		await HouseMovingAllowance.createMany([
			{
				allowanceId: serviceAllowances![Math.floor(Math.random() * 10)].id,
				movingDate: DateTime.fromJSDate(faker.date.past()),
				oldAddress: faker.person.fullName(),
				newAddress: faker.person.fullName(),
				active: true,
				createdBy: 'Admin'
			},
			{
				allowanceId: serviceAllowances![Math.floor(Math.random() * 10)].id,
				movingDate: DateTime.fromJSDate(faker.date.past()),
				oldAddress: faker.person.fullName(),
				newAddress: faker.person.fullName(),
				active: true,
				createdBy: 'Admin'
			},
			{
				allowanceId: serviceAllowances![Math.floor(Math.random() * 10)].id,
				movingDate: DateTime.fromJSDate(faker.date.past()),
				oldAddress: faker.person.fullName(),
				newAddress: faker.person.fullName(),
				active: true,
				createdBy: 'Admin'
			},
			{
				allowanceId: serviceAllowances![Math.floor(Math.random() * 10)].id,
				movingDate: DateTime.fromJSDate(faker.date.past()),
				oldAddress: faker.person.fullName(),
				newAddress: faker.person.fullName(),
				active: true,
				createdBy: 'Admin'
			},
			{
				allowanceId: serviceAllowances![Math.floor(Math.random() * 10)].id,
				movingDate: DateTime.fromJSDate(faker.date.past()),
				oldAddress: faker.person.fullName(),
				newAddress: faker.person.fullName(),
				active: true,
				createdBy: 'Admin'
			},
			{
				allowanceId: serviceAllowances![Math.floor(Math.random() * 10)].id,
				movingDate: DateTime.fromJSDate(faker.date.past()),
				oldAddress: faker.person.fullName(),
				newAddress: faker.person.fullName(),
				active: true,
				createdBy: 'Admin'
			},
			{
				allowanceId: serviceAllowances![Math.floor(Math.random() * 10)].id,
				movingDate: DateTime.fromJSDate(faker.date.past()),
				oldAddress: faker.person.fullName(),
				newAddress: faker.person.fullName(),
				active: true,
				createdBy: 'Admin'
			},
			{
				allowanceId: serviceAllowances![Math.floor(Math.random() * 10)].id,
				movingDate: DateTime.fromJSDate(faker.date.past()),
				oldAddress: faker.person.fullName(),
				newAddress: faker.person.fullName(),
				active: true,
				createdBy: 'Admin'
			},
			{
				allowanceId: serviceAllowances![Math.floor(Math.random() * 10)].id,
				movingDate: DateTime.fromJSDate(faker.date.past()),
				oldAddress: faker.person.fullName(),
				newAddress: faker.person.fullName(),
				active: true,
				createdBy: 'Admin'
			},
			{
				allowanceId: serviceAllowances![Math.floor(Math.random() * 10)].id,
				movingDate: DateTime.fromJSDate(faker.date.past()),
				oldAddress: faker.person.fullName(),
				newAddress: faker.person.fullName(),
				active: true,
				createdBy: 'Admin'
			},
		])
	}
}
