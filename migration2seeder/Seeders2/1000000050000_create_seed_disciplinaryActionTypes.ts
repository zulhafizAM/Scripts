import BaseSeeder from '@ioc:Adonis/Lucid/Seeder';
import { DateTime } from 'luxon';
import { Faker, en } from '@faker-js/faker';
import DisciplinaryActionType from 'App/Models/DisciplinaryActionType';

export default class extends BaseSeeder {

	public async run () {
		const faker = new Faker({ locale: [en] });
		await DisciplinaryActionType.createMany([
			{
				name: faker.person.fullName(),
				description: faker.person.fullName(),
				active: true,
				createdBy: 'Admin'
			},
			{
				name: faker.person.fullName(),
				description: faker.person.fullName(),
				active: true,
				createdBy: 'Admin'
			},
			{
				name: faker.person.fullName(),
				description: faker.person.fullName(),
				active: true,
				createdBy: 'Admin'
			},
			{
				name: faker.person.fullName(),
				description: faker.person.fullName(),
				active: true,
				createdBy: 'Admin'
			},
			{
				name: faker.person.fullName(),
				description: faker.person.fullName(),
				active: true,
				createdBy: 'Admin'
			},
			{
				name: faker.person.fullName(),
				description: faker.person.fullName(),
				active: true,
				createdBy: 'Admin'
			},
			{
				name: faker.person.fullName(),
				description: faker.person.fullName(),
				active: true,
				createdBy: 'Admin'
			},
			{
				name: faker.person.fullName(),
				description: faker.person.fullName(),
				active: true,
				createdBy: 'Admin'
			},
			{
				name: faker.person.fullName(),
				description: faker.person.fullName(),
				active: true,
				createdBy: 'Admin'
			},
			{
				name: faker.person.fullName(),
				description: faker.person.fullName(),
				active: true,
				createdBy: 'Admin'
			},
		])
	}
}
