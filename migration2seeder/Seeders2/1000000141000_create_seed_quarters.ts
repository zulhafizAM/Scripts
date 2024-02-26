import BaseSeeder from '@ioc:Adonis/Lucid/Seeder';
import { DateTime } from 'luxon';
import { Faker, en } from '@faker-js/faker';
import Quarter from 'App/Models/Quarter';
import SalaryDeduction from 'App/Models/SalaryDeduction';

export default class extends BaseSeeder {

	public async run () {
		const salaryDeduction = await SalaryDeduction.all();
		const faker = new Faker({ locale: [en] });
		await Quarter.createMany([
			{
				deductionId: salaryDeduction![Math.floor(Math.random() * 10)].id,
				applicationType: faker.person.fullName(),
				isOccupied: true,
				movingInDate: DateTime.fromJSDate(faker.date.past()),
				movingOutDate: DateTime.fromJSDate(faker.date.past()),
				rentRate: faker.number.float({ precision: 0.01 }),
				quarterDetails: faker.person.fullName(),
				active: true,
				createdBy: 'Admin'
			},
			{
				deductionId: salaryDeduction![Math.floor(Math.random() * 10)].id,
				applicationType: faker.person.fullName(),
				isOccupied: true,
				movingInDate: DateTime.fromJSDate(faker.date.past()),
				movingOutDate: DateTime.fromJSDate(faker.date.past()),
				rentRate: faker.number.float({ precision: 0.01 }),
				quarterDetails: faker.person.fullName(),
				active: true,
				createdBy: 'Admin'
			},
			{
				deductionId: salaryDeduction![Math.floor(Math.random() * 10)].id,
				applicationType: faker.person.fullName(),
				isOccupied: true,
				movingInDate: DateTime.fromJSDate(faker.date.past()),
				movingOutDate: DateTime.fromJSDate(faker.date.past()),
				rentRate: faker.number.float({ precision: 0.01 }),
				quarterDetails: faker.person.fullName(),
				active: true,
				createdBy: 'Admin'
			},
			{
				deductionId: salaryDeduction![Math.floor(Math.random() * 10)].id,
				applicationType: faker.person.fullName(),
				isOccupied: true,
				movingInDate: DateTime.fromJSDate(faker.date.past()),
				movingOutDate: DateTime.fromJSDate(faker.date.past()),
				rentRate: faker.number.float({ precision: 0.01 }),
				quarterDetails: faker.person.fullName(),
				active: true,
				createdBy: 'Admin'
			},
			{
				deductionId: salaryDeduction![Math.floor(Math.random() * 10)].id,
				applicationType: faker.person.fullName(),
				isOccupied: true,
				movingInDate: DateTime.fromJSDate(faker.date.past()),
				movingOutDate: DateTime.fromJSDate(faker.date.past()),
				rentRate: faker.number.float({ precision: 0.01 }),
				quarterDetails: faker.person.fullName(),
				active: true,
				createdBy: 'Admin'
			},
			{
				deductionId: salaryDeduction![Math.floor(Math.random() * 10)].id,
				applicationType: faker.person.fullName(),
				isOccupied: true,
				movingInDate: DateTime.fromJSDate(faker.date.past()),
				movingOutDate: DateTime.fromJSDate(faker.date.past()),
				rentRate: faker.number.float({ precision: 0.01 }),
				quarterDetails: faker.person.fullName(),
				active: true,
				createdBy: 'Admin'
			},
			{
				deductionId: salaryDeduction![Math.floor(Math.random() * 10)].id,
				applicationType: faker.person.fullName(),
				isOccupied: true,
				movingInDate: DateTime.fromJSDate(faker.date.past()),
				movingOutDate: DateTime.fromJSDate(faker.date.past()),
				rentRate: faker.number.float({ precision: 0.01 }),
				quarterDetails: faker.person.fullName(),
				active: true,
				createdBy: 'Admin'
			},
			{
				deductionId: salaryDeduction![Math.floor(Math.random() * 10)].id,
				applicationType: faker.person.fullName(),
				isOccupied: true,
				movingInDate: DateTime.fromJSDate(faker.date.past()),
				movingOutDate: DateTime.fromJSDate(faker.date.past()),
				rentRate: faker.number.float({ precision: 0.01 }),
				quarterDetails: faker.person.fullName(),
				active: true,
				createdBy: 'Admin'
			},
			{
				deductionId: salaryDeduction![Math.floor(Math.random() * 10)].id,
				applicationType: faker.person.fullName(),
				isOccupied: true,
				movingInDate: DateTime.fromJSDate(faker.date.past()),
				movingOutDate: DateTime.fromJSDate(faker.date.past()),
				rentRate: faker.number.float({ precision: 0.01 }),
				quarterDetails: faker.person.fullName(),
				active: true,
				createdBy: 'Admin'
			},
			{
				deductionId: salaryDeduction![Math.floor(Math.random() * 10)].id,
				applicationType: faker.person.fullName(),
				isOccupied: true,
				movingInDate: DateTime.fromJSDate(faker.date.past()),
				movingOutDate: DateTime.fromJSDate(faker.date.past()),
				rentRate: faker.number.float({ precision: 0.01 }),
				quarterDetails: faker.person.fullName(),
				active: true,
				createdBy: 'Admin'
			},
		])
	}
}
