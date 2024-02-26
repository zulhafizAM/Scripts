import BaseSeeder from '@ioc:Adonis/Lucid/Seeder';
import { DateTime } from 'luxon';
import { Faker, en } from '@faker-js/faker';
import District from 'App/Models/District';
import State from 'App/Models/State';
import Division from 'App/Models/Division';

export default class extends BaseSeeder {

	public async run () {
		const states = await State.all();
		const divisions = await Division.all();
		const faker = new Faker({ locale: [en] });
		await District.createMany([
			{
				name: faker.person.fullName(),
				stateId: states![Math.floor(Math.random() * 10)].id,
				divisionId: divisions![Math.floor(Math.random() * 10)].id,
				active: true,
				createdBy: 'Admin'
			},
			{
				name: faker.person.fullName(),
				stateId: states![Math.floor(Math.random() * 10)].id,
				divisionId: divisions![Math.floor(Math.random() * 10)].id,
				active: true,
				createdBy: 'Admin'
			},
			{
				name: faker.person.fullName(),
				stateId: states![Math.floor(Math.random() * 10)].id,
				divisionId: divisions![Math.floor(Math.random() * 10)].id,
				active: true,
				createdBy: 'Admin'
			},
			{
				name: faker.person.fullName(),
				stateId: states![Math.floor(Math.random() * 10)].id,
				divisionId: divisions![Math.floor(Math.random() * 10)].id,
				active: true,
				createdBy: 'Admin'
			},
			{
				name: faker.person.fullName(),
				stateId: states![Math.floor(Math.random() * 10)].id,
				divisionId: divisions![Math.floor(Math.random() * 10)].id,
				active: true,
				createdBy: 'Admin'
			},
			{
				name: faker.person.fullName(),
				stateId: states![Math.floor(Math.random() * 10)].id,
				divisionId: divisions![Math.floor(Math.random() * 10)].id,
				active: true,
				createdBy: 'Admin'
			},
			{
				name: faker.person.fullName(),
				stateId: states![Math.floor(Math.random() * 10)].id,
				divisionId: divisions![Math.floor(Math.random() * 10)].id,
				active: true,
				createdBy: 'Admin'
			},
			{
				name: faker.person.fullName(),
				stateId: states![Math.floor(Math.random() * 10)].id,
				divisionId: divisions![Math.floor(Math.random() * 10)].id,
				active: true,
				createdBy: 'Admin'
			},
			{
				name: faker.person.fullName(),
				stateId: states![Math.floor(Math.random() * 10)].id,
				divisionId: divisions![Math.floor(Math.random() * 10)].id,
				active: true,
				createdBy: 'Admin'
			},
			{
				name: faker.person.fullName(),
				stateId: states![Math.floor(Math.random() * 10)].id,
				divisionId: divisions![Math.floor(Math.random() * 10)].id,
				active: true,
				createdBy: 'Admin'
			},
		])
	}
}
