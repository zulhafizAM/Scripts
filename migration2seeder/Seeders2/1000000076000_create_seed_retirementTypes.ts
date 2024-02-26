import BaseSeeder from '@ioc:Adonis/Lucid/Seeder';
import { DateTime } from 'luxon';
import { Faker, en } from '@faker-js/faker';
import RetirementType from 'App/Models/RetirementType';

export default class extends BaseSeeder {

	public async run () {
		const faker = new Faker({ locale: [en] });
		await RetirementType.createMany([
			{
				name: faker.person.fullName(),
				active: true,
				createdBy: 'Admin'
			},
			{
				name: faker.person.fullName(),
				active: true,
				createdBy: 'Admin'
			},
			{
				name: faker.person.fullName(),
				active: true,
				createdBy: 'Admin'
			},
			{
				name: faker.person.fullName(),
				active: true,
				createdBy: 'Admin'
			},
			{
				name: faker.person.fullName(),
				active: true,
				createdBy: 'Admin'
			},
			{
				name: faker.person.fullName(),
				active: true,
				createdBy: 'Admin'
			},
			{
				name: faker.person.fullName(),
				active: true,
				createdBy: 'Admin'
			},
			{
				name: faker.person.fullName(),
				active: true,
				createdBy: 'Admin'
			},
			{
				name: faker.person.fullName(),
				active: true,
				createdBy: 'Admin'
			},
			{
				name: faker.person.fullName(),
				active: true,
				createdBy: 'Admin'
			},
		])
	}
}
