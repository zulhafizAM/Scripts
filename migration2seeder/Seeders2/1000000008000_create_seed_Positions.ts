import BaseSeeder from '@ioc:Adonis/Lucid/Seeder';
import { DateTime } from 'luxon';
import { Faker, en } from '@faker-js/faker';
import Position from 'App/Models/Position';
import Grade from 'App/Models/Grade';

export default class extends BaseSeeder {

	public async run () {
		const grades = await Grade.all();
		const faker = new Faker({ locale: [en] });
		await Position.createMany([
			{
				name: faker.person.fullName(),
				gradeId: grades![Math.floor(Math.random() * 10)].id,
				active: true,
				createdBy: 'Admin'
			},
			{
				name: faker.person.fullName(),
				gradeId: grades![Math.floor(Math.random() * 10)].id,
				active: true,
				createdBy: 'Admin'
			},
			{
				name: faker.person.fullName(),
				gradeId: grades![Math.floor(Math.random() * 10)].id,
				active: true,
				createdBy: 'Admin'
			},
			{
				name: faker.person.fullName(),
				gradeId: grades![Math.floor(Math.random() * 10)].id,
				active: true,
				createdBy: 'Admin'
			},
			{
				name: faker.person.fullName(),
				gradeId: grades![Math.floor(Math.random() * 10)].id,
				active: true,
				createdBy: 'Admin'
			},
			{
				name: faker.person.fullName(),
				gradeId: grades![Math.floor(Math.random() * 10)].id,
				active: true,
				createdBy: 'Admin'
			},
			{
				name: faker.person.fullName(),
				gradeId: grades![Math.floor(Math.random() * 10)].id,
				active: true,
				createdBy: 'Admin'
			},
			{
				name: faker.person.fullName(),
				gradeId: grades![Math.floor(Math.random() * 10)].id,
				active: true,
				createdBy: 'Admin'
			},
			{
				name: faker.person.fullName(),
				gradeId: grades![Math.floor(Math.random() * 10)].id,
				active: true,
				createdBy: 'Admin'
			},
			{
				name: faker.person.fullName(),
				gradeId: grades![Math.floor(Math.random() * 10)].id,
				active: true,
				createdBy: 'Admin'
			},
		])
	}
}
