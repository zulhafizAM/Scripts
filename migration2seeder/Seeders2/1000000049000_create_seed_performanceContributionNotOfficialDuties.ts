import BaseSeeder from '@ioc:Adonis/Lucid/Seeder';
import { DateTime } from 'luxon';
import { Faker, en } from '@faker-js/faker';
import PerformanceContributionNotOfficialDuty from 'App/Models/PerformanceContributionNotOfficialDuty';
import Performance from 'App/Models/Performance';

export default class extends BaseSeeder {

	public async run () {
		const performances = await Performance.all();
		const faker = new Faker({ locale: [en] });
		await PerformanceContributionNotOfficialDuty.createMany([
			{
				performanceId: performances![Math.floor(Math.random() * 10)].id,
				name: faker.person.fullName(),
				active: true,
				createdBy: 'Admin'
			},
			{
				performanceId: performances![Math.floor(Math.random() * 10)].id,
				name: faker.person.fullName(),
				active: true,
				createdBy: 'Admin'
			},
			{
				performanceId: performances![Math.floor(Math.random() * 10)].id,
				name: faker.person.fullName(),
				active: true,
				createdBy: 'Admin'
			},
			{
				performanceId: performances![Math.floor(Math.random() * 10)].id,
				name: faker.person.fullName(),
				active: true,
				createdBy: 'Admin'
			},
			{
				performanceId: performances![Math.floor(Math.random() * 10)].id,
				name: faker.person.fullName(),
				active: true,
				createdBy: 'Admin'
			},
			{
				performanceId: performances![Math.floor(Math.random() * 10)].id,
				name: faker.person.fullName(),
				active: true,
				createdBy: 'Admin'
			},
			{
				performanceId: performances![Math.floor(Math.random() * 10)].id,
				name: faker.person.fullName(),
				active: true,
				createdBy: 'Admin'
			},
			{
				performanceId: performances![Math.floor(Math.random() * 10)].id,
				name: faker.person.fullName(),
				active: true,
				createdBy: 'Admin'
			},
			{
				performanceId: performances![Math.floor(Math.random() * 10)].id,
				name: faker.person.fullName(),
				active: true,
				createdBy: 'Admin'
			},
			{
				performanceId: performances![Math.floor(Math.random() * 10)].id,
				name: faker.person.fullName(),
				active: true,
				createdBy: 'Admin'
			},
		])
	}
}
