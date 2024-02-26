import BaseSeeder from '@ioc:Adonis/Lucid/Seeder';
import { DateTime } from 'luxon';
import { Faker, en } from '@faker-js/faker';
import FuneralArrangementRequest from 'App/Models/FuneralArrangementRequest';
import ServiceAllowance from 'App/Models/ServiceAllowance';
import NextOfKin from 'App/Models/NextOfKin';

export default class extends BaseSeeder {

	public async run () {
		const serviceAllowances = await ServiceAllowance.all();
		const nextOfKins = await NextOfKin.all();
		const faker = new Faker({ locale: [en] });
		await FuneralArrangementRequest.createMany([
			{
				allowanceId: serviceAllowances![Math.floor(Math.random() * 10)].id,
				nextOfKinId: nextOfKins![Math.floor(Math.random() * 10)].id,
				deathDate: DateTime.fromJSDate(faker.date.past()),
				active: true,
				createdBy: 'Admin'
			},
			{
				allowanceId: serviceAllowances![Math.floor(Math.random() * 10)].id,
				nextOfKinId: nextOfKins![Math.floor(Math.random() * 10)].id,
				deathDate: DateTime.fromJSDate(faker.date.past()),
				active: true,
				createdBy: 'Admin'
			},
			{
				allowanceId: serviceAllowances![Math.floor(Math.random() * 10)].id,
				nextOfKinId: nextOfKins![Math.floor(Math.random() * 10)].id,
				deathDate: DateTime.fromJSDate(faker.date.past()),
				active: true,
				createdBy: 'Admin'
			},
			{
				allowanceId: serviceAllowances![Math.floor(Math.random() * 10)].id,
				nextOfKinId: nextOfKins![Math.floor(Math.random() * 10)].id,
				deathDate: DateTime.fromJSDate(faker.date.past()),
				active: true,
				createdBy: 'Admin'
			},
			{
				allowanceId: serviceAllowances![Math.floor(Math.random() * 10)].id,
				nextOfKinId: nextOfKins![Math.floor(Math.random() * 10)].id,
				deathDate: DateTime.fromJSDate(faker.date.past()),
				active: true,
				createdBy: 'Admin'
			},
			{
				allowanceId: serviceAllowances![Math.floor(Math.random() * 10)].id,
				nextOfKinId: nextOfKins![Math.floor(Math.random() * 10)].id,
				deathDate: DateTime.fromJSDate(faker.date.past()),
				active: true,
				createdBy: 'Admin'
			},
			{
				allowanceId: serviceAllowances![Math.floor(Math.random() * 10)].id,
				nextOfKinId: nextOfKins![Math.floor(Math.random() * 10)].id,
				deathDate: DateTime.fromJSDate(faker.date.past()),
				active: true,
				createdBy: 'Admin'
			},
			{
				allowanceId: serviceAllowances![Math.floor(Math.random() * 10)].id,
				nextOfKinId: nextOfKins![Math.floor(Math.random() * 10)].id,
				deathDate: DateTime.fromJSDate(faker.date.past()),
				active: true,
				createdBy: 'Admin'
			},
			{
				allowanceId: serviceAllowances![Math.floor(Math.random() * 10)].id,
				nextOfKinId: nextOfKins![Math.floor(Math.random() * 10)].id,
				deathDate: DateTime.fromJSDate(faker.date.past()),
				active: true,
				createdBy: 'Admin'
			},
			{
				allowanceId: serviceAllowances![Math.floor(Math.random() * 10)].id,
				nextOfKinId: nextOfKins![Math.floor(Math.random() * 10)].id,
				deathDate: DateTime.fromJSDate(faker.date.past()),
				active: true,
				createdBy: 'Admin'
			},
		])
	}
}
