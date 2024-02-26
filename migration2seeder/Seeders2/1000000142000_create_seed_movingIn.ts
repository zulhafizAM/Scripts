import BaseSeeder from '@ioc:Adonis/Lucid/Seeder';
import { DateTime } from 'luxon';
import { Faker, en } from '@faker-js/faker';
import MovingIn from 'App/Models/MovingIn';
import Quarter from 'App/Models/Quarter';

export default class extends BaseSeeder {

	public async run () {
		const quarters = await Quarter.all();
		const faker = new Faker({ locale: [en] });
		await MovingIn.createMany([
			{
				quartersId: quarters![Math.floor(Math.random() * 10)].id,
				applicationDate: DateTime.fromJSDate(faker.date.past()),
				status: faker.person.fullName(),
				remark: faker.person.fullName(),
				active: true,
				createdBy: 'Admin'
			},
			{
				quartersId: quarters![Math.floor(Math.random() * 10)].id,
				applicationDate: DateTime.fromJSDate(faker.date.past()),
				status: faker.person.fullName(),
				remark: faker.person.fullName(),
				active: true,
				createdBy: 'Admin'
			},
			{
				quartersId: quarters![Math.floor(Math.random() * 10)].id,
				applicationDate: DateTime.fromJSDate(faker.date.past()),
				status: faker.person.fullName(),
				remark: faker.person.fullName(),
				active: true,
				createdBy: 'Admin'
			},
			{
				quartersId: quarters![Math.floor(Math.random() * 10)].id,
				applicationDate: DateTime.fromJSDate(faker.date.past()),
				status: faker.person.fullName(),
				remark: faker.person.fullName(),
				active: true,
				createdBy: 'Admin'
			},
			{
				quartersId: quarters![Math.floor(Math.random() * 10)].id,
				applicationDate: DateTime.fromJSDate(faker.date.past()),
				status: faker.person.fullName(),
				remark: faker.person.fullName(),
				active: true,
				createdBy: 'Admin'
			},
			{
				quartersId: quarters![Math.floor(Math.random() * 10)].id,
				applicationDate: DateTime.fromJSDate(faker.date.past()),
				status: faker.person.fullName(),
				remark: faker.person.fullName(),
				active: true,
				createdBy: 'Admin'
			},
			{
				quartersId: quarters![Math.floor(Math.random() * 10)].id,
				applicationDate: DateTime.fromJSDate(faker.date.past()),
				status: faker.person.fullName(),
				remark: faker.person.fullName(),
				active: true,
				createdBy: 'Admin'
			},
			{
				quartersId: quarters![Math.floor(Math.random() * 10)].id,
				applicationDate: DateTime.fromJSDate(faker.date.past()),
				status: faker.person.fullName(),
				remark: faker.person.fullName(),
				active: true,
				createdBy: 'Admin'
			},
			{
				quartersId: quarters![Math.floor(Math.random() * 10)].id,
				applicationDate: DateTime.fromJSDate(faker.date.past()),
				status: faker.person.fullName(),
				remark: faker.person.fullName(),
				active: true,
				createdBy: 'Admin'
			},
			{
				quartersId: quarters![Math.floor(Math.random() * 10)].id,
				applicationDate: DateTime.fromJSDate(faker.date.past()),
				status: faker.person.fullName(),
				remark: faker.person.fullName(),
				active: true,
				createdBy: 'Admin'
			},
		])
	}
}
