import BaseSeeder from '@ioc:Adonis/Lucid/Seeder';
import { DateTime } from 'luxon';
import { Faker, en } from '@faker-js/faker';
import ClothingAssistance from 'App/Models/ClothingAssistance';

export default class extends BaseSeeder {

	public async run () {
		const faker = new Faker({ locale: [en] });
		await ClothingAssistance.createMany([
			{
				reason: faker.person.fullName(),
				totalPersonalClaim: faker.number.float({ precision: 0.01 }),
				totalPartnerClaim: faker.number.float({ precision: 0.01 }),
				active: true,
				createdBy: 'Admin'
			},
			{
				reason: faker.person.fullName(),
				totalPersonalClaim: faker.number.float({ precision: 0.01 }),
				totalPartnerClaim: faker.number.float({ precision: 0.01 }),
				active: true,
				createdBy: 'Admin'
			},
			{
				reason: faker.person.fullName(),
				totalPersonalClaim: faker.number.float({ precision: 0.01 }),
				totalPartnerClaim: faker.number.float({ precision: 0.01 }),
				active: true,
				createdBy: 'Admin'
			},
			{
				reason: faker.person.fullName(),
				totalPersonalClaim: faker.number.float({ precision: 0.01 }),
				totalPartnerClaim: faker.number.float({ precision: 0.01 }),
				active: true,
				createdBy: 'Admin'
			},
			{
				reason: faker.person.fullName(),
				totalPersonalClaim: faker.number.float({ precision: 0.01 }),
				totalPartnerClaim: faker.number.float({ precision: 0.01 }),
				active: true,
				createdBy: 'Admin'
			},
			{
				reason: faker.person.fullName(),
				totalPersonalClaim: faker.number.float({ precision: 0.01 }),
				totalPartnerClaim: faker.number.float({ precision: 0.01 }),
				active: true,
				createdBy: 'Admin'
			},
			{
				reason: faker.person.fullName(),
				totalPersonalClaim: faker.number.float({ precision: 0.01 }),
				totalPartnerClaim: faker.number.float({ precision: 0.01 }),
				active: true,
				createdBy: 'Admin'
			},
			{
				reason: faker.person.fullName(),
				totalPersonalClaim: faker.number.float({ precision: 0.01 }),
				totalPartnerClaim: faker.number.float({ precision: 0.01 }),
				active: true,
				createdBy: 'Admin'
			},
			{
				reason: faker.person.fullName(),
				totalPersonalClaim: faker.number.float({ precision: 0.01 }),
				totalPartnerClaim: faker.number.float({ precision: 0.01 }),
				active: true,
				createdBy: 'Admin'
			},
			{
				reason: faker.person.fullName(),
				totalPersonalClaim: faker.number.float({ precision: 0.01 }),
				totalPartnerClaim: faker.number.float({ precision: 0.01 }),
				active: true,
				createdBy: 'Admin'
			},
		])
	}
}
