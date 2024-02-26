import BaseSeeder from '@ioc:Adonis/Lucid/Seeder';
import { DateTime } from 'luxon';
import { Faker, en } from '@faker-js/faker';
import Education from 'App/Models/Education';
import PersonalDetail from 'App/Models/PersonalDetail';

export default class extends BaseSeeder {

	public async run () {
		const personalDetails = await PersonalDetail.all();
		const faker = new Faker({ locale: [en] });
		await Education.createMany([
			{
				name: faker.person.fullName(),
				personalDetailId: personalDetails![Math.floor(Math.random() * 10)].id,
				type: faker.person.fullName(),
				year: faker.number.int({ max: 10 }),
				finalGrade: faker.person.fullName(),
				active: true,
				createdBy: 'Admin'
			},
			{
				name: faker.person.fullName(),
				personalDetailId: personalDetails![Math.floor(Math.random() * 10)].id,
				type: faker.person.fullName(),
				year: faker.number.int({ max: 10 }),
				finalGrade: faker.person.fullName(),
				active: true,
				createdBy: 'Admin'
			},
			{
				name: faker.person.fullName(),
				personalDetailId: personalDetails![Math.floor(Math.random() * 10)].id,
				type: faker.person.fullName(),
				year: faker.number.int({ max: 10 }),
				finalGrade: faker.person.fullName(),
				active: true,
				createdBy: 'Admin'
			},
			{
				name: faker.person.fullName(),
				personalDetailId: personalDetails![Math.floor(Math.random() * 10)].id,
				type: faker.person.fullName(),
				year: faker.number.int({ max: 10 }),
				finalGrade: faker.person.fullName(),
				active: true,
				createdBy: 'Admin'
			},
			{
				name: faker.person.fullName(),
				personalDetailId: personalDetails![Math.floor(Math.random() * 10)].id,
				type: faker.person.fullName(),
				year: faker.number.int({ max: 10 }),
				finalGrade: faker.person.fullName(),
				active: true,
				createdBy: 'Admin'
			},
			{
				name: faker.person.fullName(),
				personalDetailId: personalDetails![Math.floor(Math.random() * 10)].id,
				type: faker.person.fullName(),
				year: faker.number.int({ max: 10 }),
				finalGrade: faker.person.fullName(),
				active: true,
				createdBy: 'Admin'
			},
			{
				name: faker.person.fullName(),
				personalDetailId: personalDetails![Math.floor(Math.random() * 10)].id,
				type: faker.person.fullName(),
				year: faker.number.int({ max: 10 }),
				finalGrade: faker.person.fullName(),
				active: true,
				createdBy: 'Admin'
			},
			{
				name: faker.person.fullName(),
				personalDetailId: personalDetails![Math.floor(Math.random() * 10)].id,
				type: faker.person.fullName(),
				year: faker.number.int({ max: 10 }),
				finalGrade: faker.person.fullName(),
				active: true,
				createdBy: 'Admin'
			},
			{
				name: faker.person.fullName(),
				personalDetailId: personalDetails![Math.floor(Math.random() * 10)].id,
				type: faker.person.fullName(),
				year: faker.number.int({ max: 10 }),
				finalGrade: faker.person.fullName(),
				active: true,
				createdBy: 'Admin'
			},
			{
				name: faker.person.fullName(),
				personalDetailId: personalDetails![Math.floor(Math.random() * 10)].id,
				type: faker.person.fullName(),
				year: faker.number.int({ max: 10 }),
				finalGrade: faker.person.fullName(),
				active: true,
				createdBy: 'Admin'
			},
		])
	}
}
