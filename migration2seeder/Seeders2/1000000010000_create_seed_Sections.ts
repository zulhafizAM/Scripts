import BaseSeeder from '@ioc:Adonis/Lucid/Seeder';
import { DateTime } from 'luxon';
import { Faker, en } from '@faker-js/faker';
import Section from 'App/Models/Section';
import Department from 'App/Models/Department';

export default class extends BaseSeeder {

	public async run () {
		const departments = await Department.all();
		const faker = new Faker({ locale: [en] });
		await Section.createMany([
			{
				name: faker.person.fullName(),
				departmentId: departments![Math.floor(Math.random() * 10)].id,
				active: true,
				createdBy: 'Admin'
			},
			{
				name: faker.person.fullName(),
				departmentId: departments![Math.floor(Math.random() * 10)].id,
				active: true,
				createdBy: 'Admin'
			},
			{
				name: faker.person.fullName(),
				departmentId: departments![Math.floor(Math.random() * 10)].id,
				active: true,
				createdBy: 'Admin'
			},
			{
				name: faker.person.fullName(),
				departmentId: departments![Math.floor(Math.random() * 10)].id,
				active: true,
				createdBy: 'Admin'
			},
			{
				name: faker.person.fullName(),
				departmentId: departments![Math.floor(Math.random() * 10)].id,
				active: true,
				createdBy: 'Admin'
			},
			{
				name: faker.person.fullName(),
				departmentId: departments![Math.floor(Math.random() * 10)].id,
				active: true,
				createdBy: 'Admin'
			},
			{
				name: faker.person.fullName(),
				departmentId: departments![Math.floor(Math.random() * 10)].id,
				active: true,
				createdBy: 'Admin'
			},
			{
				name: faker.person.fullName(),
				departmentId: departments![Math.floor(Math.random() * 10)].id,
				active: true,
				createdBy: 'Admin'
			},
			{
				name: faker.person.fullName(),
				departmentId: departments![Math.floor(Math.random() * 10)].id,
				active: true,
				createdBy: 'Admin'
			},
			{
				name: faker.person.fullName(),
				departmentId: departments![Math.floor(Math.random() * 10)].id,
				active: true,
				createdBy: 'Admin'
			},
		])
	}
}
