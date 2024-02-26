import BaseSeeder from '@ioc:Adonis/Lucid/Seeder';
import { DateTime } from 'luxon';
import { Faker, en } from '@faker-js/faker';
import CancelSuspensionOrDismissal from 'App/Models/CancelSuspensionOrDismissal';
import IntegrityProceeding from 'App/Models/IntegrityProceeding';

export default class extends BaseSeeder {

	public async run () {
		const integrityProceedings = await IntegrityProceeding.all();
		const faker = new Faker({ locale: [en] });
		await CancelSuspensionOrDismissal.createMany([
			{
				integrityId: integrityProceedings![Math.floor(Math.random() * 10)].id,
				effectiveDate: DateTime.fromJSDate(faker.date.past()),
				isReturningDuty: true,
				active: true,
				createdBy: 'Admin'
			},
			{
				integrityId: integrityProceedings![Math.floor(Math.random() * 10)].id,
				effectiveDate: DateTime.fromJSDate(faker.date.past()),
				isReturningDuty: true,
				active: true,
				createdBy: 'Admin'
			},
			{
				integrityId: integrityProceedings![Math.floor(Math.random() * 10)].id,
				effectiveDate: DateTime.fromJSDate(faker.date.past()),
				isReturningDuty: true,
				active: true,
				createdBy: 'Admin'
			},
			{
				integrityId: integrityProceedings![Math.floor(Math.random() * 10)].id,
				effectiveDate: DateTime.fromJSDate(faker.date.past()),
				isReturningDuty: true,
				active: true,
				createdBy: 'Admin'
			},
			{
				integrityId: integrityProceedings![Math.floor(Math.random() * 10)].id,
				effectiveDate: DateTime.fromJSDate(faker.date.past()),
				isReturningDuty: true,
				active: true,
				createdBy: 'Admin'
			},
			{
				integrityId: integrityProceedings![Math.floor(Math.random() * 10)].id,
				effectiveDate: DateTime.fromJSDate(faker.date.past()),
				isReturningDuty: true,
				active: true,
				createdBy: 'Admin'
			},
			{
				integrityId: integrityProceedings![Math.floor(Math.random() * 10)].id,
				effectiveDate: DateTime.fromJSDate(faker.date.past()),
				isReturningDuty: true,
				active: true,
				createdBy: 'Admin'
			},
			{
				integrityId: integrityProceedings![Math.floor(Math.random() * 10)].id,
				effectiveDate: DateTime.fromJSDate(faker.date.past()),
				isReturningDuty: true,
				active: true,
				createdBy: 'Admin'
			},
			{
				integrityId: integrityProceedings![Math.floor(Math.random() * 10)].id,
				effectiveDate: DateTime.fromJSDate(faker.date.past()),
				isReturningDuty: true,
				active: true,
				createdBy: 'Admin'
			},
			{
				integrityId: integrityProceedings![Math.floor(Math.random() * 10)].id,
				effectiveDate: DateTime.fromJSDate(faker.date.past()),
				isReturningDuty: true,
				active: true,
				createdBy: 'Admin'
			},
		])
	}
}
