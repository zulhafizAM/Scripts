import BaseSeeder from '@ioc:Adonis/Lucid/Seeder';
import { DateTime } from 'luxon';
import { Faker, en } from '@faker-js/faker';
import StateVisitAllowance from 'App/Models/StateVisitAllowance';
import ServiceAllowance from 'App/Models/ServiceAllowance';
import State from 'App/Models/State';

export default class extends BaseSeeder {

	public async run () {
		const serviceAllowances = await ServiceAllowance.all();
		const states = await State.all();
		const faker = new Faker({ locale: [en] });
		await StateVisitAllowance.createMany([
			{
				allowanceId: serviceAllowances![Math.floor(Math.random() * 10)].id,
				stateId: states![Math.floor(Math.random() * 10)].id,
				reason: faker.person.fullName(),
				amount: faker.number.float({ precision: 0.01 }),
				active: true,
				createdBy: 'Admin'
			},
			{
				allowanceId: serviceAllowances![Math.floor(Math.random() * 10)].id,
				stateId: states![Math.floor(Math.random() * 10)].id,
				reason: faker.person.fullName(),
				amount: faker.number.float({ precision: 0.01 }),
				active: true,
				createdBy: 'Admin'
			},
			{
				allowanceId: serviceAllowances![Math.floor(Math.random() * 10)].id,
				stateId: states![Math.floor(Math.random() * 10)].id,
				reason: faker.person.fullName(),
				amount: faker.number.float({ precision: 0.01 }),
				active: true,
				createdBy: 'Admin'
			},
			{
				allowanceId: serviceAllowances![Math.floor(Math.random() * 10)].id,
				stateId: states![Math.floor(Math.random() * 10)].id,
				reason: faker.person.fullName(),
				amount: faker.number.float({ precision: 0.01 }),
				active: true,
				createdBy: 'Admin'
			},
			{
				allowanceId: serviceAllowances![Math.floor(Math.random() * 10)].id,
				stateId: states![Math.floor(Math.random() * 10)].id,
				reason: faker.person.fullName(),
				amount: faker.number.float({ precision: 0.01 }),
				active: true,
				createdBy: 'Admin'
			},
			{
				allowanceId: serviceAllowances![Math.floor(Math.random() * 10)].id,
				stateId: states![Math.floor(Math.random() * 10)].id,
				reason: faker.person.fullName(),
				amount: faker.number.float({ precision: 0.01 }),
				active: true,
				createdBy: 'Admin'
			},
			{
				allowanceId: serviceAllowances![Math.floor(Math.random() * 10)].id,
				stateId: states![Math.floor(Math.random() * 10)].id,
				reason: faker.person.fullName(),
				amount: faker.number.float({ precision: 0.01 }),
				active: true,
				createdBy: 'Admin'
			},
			{
				allowanceId: serviceAllowances![Math.floor(Math.random() * 10)].id,
				stateId: states![Math.floor(Math.random() * 10)].id,
				reason: faker.person.fullName(),
				amount: faker.number.float({ precision: 0.01 }),
				active: true,
				createdBy: 'Admin'
			},
			{
				allowanceId: serviceAllowances![Math.floor(Math.random() * 10)].id,
				stateId: states![Math.floor(Math.random() * 10)].id,
				reason: faker.person.fullName(),
				amount: faker.number.float({ precision: 0.01 }),
				active: true,
				createdBy: 'Admin'
			},
			{
				allowanceId: serviceAllowances![Math.floor(Math.random() * 10)].id,
				stateId: states![Math.floor(Math.random() * 10)].id,
				reason: faker.person.fullName(),
				amount: faker.number.float({ precision: 0.01 }),
				active: true,
				createdBy: 'Admin'
			},
		])
	}
}
