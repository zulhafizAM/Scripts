import BaseSeeder from '@ioc:Adonis/Lucid/Seeder';
import { DateTime } from 'luxon';
import { Faker, en } from '@faker-js/faker';
import Division from 'App/Models/Division';
import State from 'App/Models/State';

export default class extends BaseSeeder {

	public async run () {
		const states = await State.all();
		const faker = new Faker({ locale: [en] });
		await Division.createMany([
			{
				name: faker.person.fullName(),
				stateId: states![Math.floor(Math.random() * 10)].id,
				active: true,
				createdBy: 'Admin'
			},
			{
				name: faker.person.fullName(),
				stateId: states![Math.floor(Math.random() * 10)].id,
				active: true,
				createdBy: 'Admin'
			},
			{
				name: faker.person.fullName(),
				stateId: states![Math.floor(Math.random() * 10)].id,
				active: true,
				createdBy: 'Admin'
			},
			{
				name: faker.person.fullName(),
				stateId: states![Math.floor(Math.random() * 10)].id,
				active: true,
				createdBy: 'Admin'
			},
			{
				name: faker.person.fullName(),
				stateId: states![Math.floor(Math.random() * 10)].id,
				active: true,
				createdBy: 'Admin'
			},
			{
				name: faker.person.fullName(),
				stateId: states![Math.floor(Math.random() * 10)].id,
				active: true,
				createdBy: 'Admin'
			},
			{
				name: faker.person.fullName(),
				stateId: states![Math.floor(Math.random() * 10)].id,
				active: true,
				createdBy: 'Admin'
			},
			{
				name: faker.person.fullName(),
				stateId: states![Math.floor(Math.random() * 10)].id,
				active: true,
				createdBy: 'Admin'
			},
			{
				name: faker.person.fullName(),
				stateId: states![Math.floor(Math.random() * 10)].id,
				active: true,
				createdBy: 'Admin'
			},
			{
				name: faker.person.fullName(),
				stateId: states![Math.floor(Math.random() * 10)].id,
				active: true,
				createdBy: 'Admin'
			},
		])
	}
}
