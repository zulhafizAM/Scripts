import BaseSeeder from '@ioc:Adonis/Lucid/Seeder';
import { DateTime } from 'luxon';
import { Faker, en } from '@faker-js/faker';
import UnspecifiedRetirementGroup from 'App/Models/UnspecifiedRetirementGroup';

export default class extends BaseSeeder {

	public async run () {
		const faker = new Faker({ locale: [en] });
		await UnspecifiedRetirementGroup.createMany([
			{
				name: faker.person.fullName(),
				headCount: faker.number.int({ max: 10 }),
				date: DateTime.fromJSDate(faker.date.past()),
				status: faker.person.fullName(),
				active: true,
				createdBy: 'Admin'
			},
			{
				name: faker.person.fullName(),
				headCount: faker.number.int({ max: 10 }),
				date: DateTime.fromJSDate(faker.date.past()),
				status: faker.person.fullName(),
				active: true,
				createdBy: 'Admin'
			},
			{
				name: faker.person.fullName(),
				headCount: faker.number.int({ max: 10 }),
				date: DateTime.fromJSDate(faker.date.past()),
				status: faker.person.fullName(),
				active: true,
				createdBy: 'Admin'
			},
			{
				name: faker.person.fullName(),
				headCount: faker.number.int({ max: 10 }),
				date: DateTime.fromJSDate(faker.date.past()),
				status: faker.person.fullName(),
				active: true,
				createdBy: 'Admin'
			},
			{
				name: faker.person.fullName(),
				headCount: faker.number.int({ max: 10 }),
				date: DateTime.fromJSDate(faker.date.past()),
				status: faker.person.fullName(),
				active: true,
				createdBy: 'Admin'
			},
			{
				name: faker.person.fullName(),
				headCount: faker.number.int({ max: 10 }),
				date: DateTime.fromJSDate(faker.date.past()),
				status: faker.person.fullName(),
				active: true,
				createdBy: 'Admin'
			},
			{
				name: faker.person.fullName(),
				headCount: faker.number.int({ max: 10 }),
				date: DateTime.fromJSDate(faker.date.past()),
				status: faker.person.fullName(),
				active: true,
				createdBy: 'Admin'
			},
			{
				name: faker.person.fullName(),
				headCount: faker.number.int({ max: 10 }),
				date: DateTime.fromJSDate(faker.date.past()),
				status: faker.person.fullName(),
				active: true,
				createdBy: 'Admin'
			},
			{
				name: faker.person.fullName(),
				headCount: faker.number.int({ max: 10 }),
				date: DateTime.fromJSDate(faker.date.past()),
				status: faker.person.fullName(),
				active: true,
				createdBy: 'Admin'
			},
			{
				name: faker.person.fullName(),
				headCount: faker.number.int({ max: 10 }),
				date: DateTime.fromJSDate(faker.date.past()),
				status: faker.person.fullName(),
				active: true,
				createdBy: 'Admin'
			},
		])
	}
}
