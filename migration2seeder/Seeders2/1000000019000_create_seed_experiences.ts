import BaseSeeder from '@ioc:Adonis/Lucid/Seeder';
import { DateTime } from 'luxon';
import { Faker, en } from '@faker-js/faker';
import Experience from 'App/Models/Experience';
import PersonalDetail from 'App/Models/PersonalDetail';

export default class extends BaseSeeder {

	public async run () {
		const personalDetails = await PersonalDetail.all();
		const faker = new Faker({ locale: [en] });
		await Experience.createMany([
			{
				personalDetailId: personalDetails![Math.floor(Math.random() * 10)].id,
				position: faker.person.fullName(),
				company: faker.person.fullName(),
				address: faker.person.fullName(),
				startDate: DateTime.fromJSDate(faker.date.past()),
				endDate: DateTime.fromJSDate(faker.date.past()),
				description: faker.person.fullName(),
				grade: faker.person.fullName(),
				active: true,
				createdBy: 'Admin'
			},
			{
				personalDetailId: personalDetails![Math.floor(Math.random() * 10)].id,
				position: faker.person.fullName(),
				company: faker.person.fullName(),
				address: faker.person.fullName(),
				startDate: DateTime.fromJSDate(faker.date.past()),
				endDate: DateTime.fromJSDate(faker.date.past()),
				description: faker.person.fullName(),
				grade: faker.person.fullName(),
				active: true,
				createdBy: 'Admin'
			},
			{
				personalDetailId: personalDetails![Math.floor(Math.random() * 10)].id,
				position: faker.person.fullName(),
				company: faker.person.fullName(),
				address: faker.person.fullName(),
				startDate: DateTime.fromJSDate(faker.date.past()),
				endDate: DateTime.fromJSDate(faker.date.past()),
				description: faker.person.fullName(),
				grade: faker.person.fullName(),
				active: true,
				createdBy: 'Admin'
			},
			{
				personalDetailId: personalDetails![Math.floor(Math.random() * 10)].id,
				position: faker.person.fullName(),
				company: faker.person.fullName(),
				address: faker.person.fullName(),
				startDate: DateTime.fromJSDate(faker.date.past()),
				endDate: DateTime.fromJSDate(faker.date.past()),
				description: faker.person.fullName(),
				grade: faker.person.fullName(),
				active: true,
				createdBy: 'Admin'
			},
			{
				personalDetailId: personalDetails![Math.floor(Math.random() * 10)].id,
				position: faker.person.fullName(),
				company: faker.person.fullName(),
				address: faker.person.fullName(),
				startDate: DateTime.fromJSDate(faker.date.past()),
				endDate: DateTime.fromJSDate(faker.date.past()),
				description: faker.person.fullName(),
				grade: faker.person.fullName(),
				active: true,
				createdBy: 'Admin'
			},
			{
				personalDetailId: personalDetails![Math.floor(Math.random() * 10)].id,
				position: faker.person.fullName(),
				company: faker.person.fullName(),
				address: faker.person.fullName(),
				startDate: DateTime.fromJSDate(faker.date.past()),
				endDate: DateTime.fromJSDate(faker.date.past()),
				description: faker.person.fullName(),
				grade: faker.person.fullName(),
				active: true,
				createdBy: 'Admin'
			},
			{
				personalDetailId: personalDetails![Math.floor(Math.random() * 10)].id,
				position: faker.person.fullName(),
				company: faker.person.fullName(),
				address: faker.person.fullName(),
				startDate: DateTime.fromJSDate(faker.date.past()),
				endDate: DateTime.fromJSDate(faker.date.past()),
				description: faker.person.fullName(),
				grade: faker.person.fullName(),
				active: true,
				createdBy: 'Admin'
			},
			{
				personalDetailId: personalDetails![Math.floor(Math.random() * 10)].id,
				position: faker.person.fullName(),
				company: faker.person.fullName(),
				address: faker.person.fullName(),
				startDate: DateTime.fromJSDate(faker.date.past()),
				endDate: DateTime.fromJSDate(faker.date.past()),
				description: faker.person.fullName(),
				grade: faker.person.fullName(),
				active: true,
				createdBy: 'Admin'
			},
			{
				personalDetailId: personalDetails![Math.floor(Math.random() * 10)].id,
				position: faker.person.fullName(),
				company: faker.person.fullName(),
				address: faker.person.fullName(),
				startDate: DateTime.fromJSDate(faker.date.past()),
				endDate: DateTime.fromJSDate(faker.date.past()),
				description: faker.person.fullName(),
				grade: faker.person.fullName(),
				active: true,
				createdBy: 'Admin'
			},
			{
				personalDetailId: personalDetails![Math.floor(Math.random() * 10)].id,
				position: faker.person.fullName(),
				company: faker.person.fullName(),
				address: faker.person.fullName(),
				startDate: DateTime.fromJSDate(faker.date.past()),
				endDate: DateTime.fromJSDate(faker.date.past()),
				description: faker.person.fullName(),
				grade: faker.person.fullName(),
				active: true,
				createdBy: 'Admin'
			},
		])
	}
}
