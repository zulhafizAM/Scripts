import BaseSeeder from '@ioc:Adonis/Lucid/Seeder';
import { DateTime } from 'luxon';
import { Faker, en } from '@faker-js/faker';
import Accussation from 'App/Models/Accussation';
import IntegrityProceeding from 'App/Models/IntegrityProceeding';

export default class extends BaseSeeder {

	public async run () {
		const integrityProceedings = await IntegrityProceeding.all();
		const faker = new Faker({ locale: [en] });
		await Accussation.createMany([
			{
				integrityId: integrityProceedings![Math.floor(Math.random() * 10)].id,
				accussationList: faker.person.fullName(),
				receivedChargeLetterDate: DateTime.fromJSDate(faker.date.past()),
				active: true,
				createdBy: 'Admin'
			},
			{
				integrityId: integrityProceedings![Math.floor(Math.random() * 10)].id,
				accussationList: faker.person.fullName(),
				receivedChargeLetterDate: DateTime.fromJSDate(faker.date.past()),
				active: true,
				createdBy: 'Admin'
			},
			{
				integrityId: integrityProceedings![Math.floor(Math.random() * 10)].id,
				accussationList: faker.person.fullName(),
				receivedChargeLetterDate: DateTime.fromJSDate(faker.date.past()),
				active: true,
				createdBy: 'Admin'
			},
			{
				integrityId: integrityProceedings![Math.floor(Math.random() * 10)].id,
				accussationList: faker.person.fullName(),
				receivedChargeLetterDate: DateTime.fromJSDate(faker.date.past()),
				active: true,
				createdBy: 'Admin'
			},
			{
				integrityId: integrityProceedings![Math.floor(Math.random() * 10)].id,
				accussationList: faker.person.fullName(),
				receivedChargeLetterDate: DateTime.fromJSDate(faker.date.past()),
				active: true,
				createdBy: 'Admin'
			},
			{
				integrityId: integrityProceedings![Math.floor(Math.random() * 10)].id,
				accussationList: faker.person.fullName(),
				receivedChargeLetterDate: DateTime.fromJSDate(faker.date.past()),
				active: true,
				createdBy: 'Admin'
			},
			{
				integrityId: integrityProceedings![Math.floor(Math.random() * 10)].id,
				accussationList: faker.person.fullName(),
				receivedChargeLetterDate: DateTime.fromJSDate(faker.date.past()),
				active: true,
				createdBy: 'Admin'
			},
			{
				integrityId: integrityProceedings![Math.floor(Math.random() * 10)].id,
				accussationList: faker.person.fullName(),
				receivedChargeLetterDate: DateTime.fromJSDate(faker.date.past()),
				active: true,
				createdBy: 'Admin'
			},
			{
				integrityId: integrityProceedings![Math.floor(Math.random() * 10)].id,
				accussationList: faker.person.fullName(),
				receivedChargeLetterDate: DateTime.fromJSDate(faker.date.past()),
				active: true,
				createdBy: 'Admin'
			},
			{
				integrityId: integrityProceedings![Math.floor(Math.random() * 10)].id,
				accussationList: faker.person.fullName(),
				receivedChargeLetterDate: DateTime.fromJSDate(faker.date.past()),
				active: true,
				createdBy: 'Admin'
			},
		])
	}
}
