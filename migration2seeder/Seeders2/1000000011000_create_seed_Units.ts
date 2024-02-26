import BaseSeeder from '@ioc:Adonis/Lucid/Seeder';
import { DateTime } from 'luxon';
import { Faker, en } from '@faker-js/faker';
import Unit from 'App/Models/Unit';
import Department from 'App/Models/Department';
import Section from 'App/Models/Section';

export default class extends BaseSeeder {

	public async run () {
		const departments = await Department.all();
		const sections = await Section.all();
		const faker = new Faker({ locale: [en] });
		await Unit.createMany([
			{
				name: faker.person.fullName(),
				departmentId: departments![Math.floor(Math.random() * 10)].id,
				sectionId: sections![Math.floor(Math.random() * 10)].id,
				active: true,
				createdBy: 'Admin'
			},
			{
				name: faker.person.fullName(),
				departmentId: departments![Math.floor(Math.random() * 10)].id,
				sectionId: sections![Math.floor(Math.random() * 10)].id,
				active: true,
				createdBy: 'Admin'
			},
			{
				name: faker.person.fullName(),
				departmentId: departments![Math.floor(Math.random() * 10)].id,
				sectionId: sections![Math.floor(Math.random() * 10)].id,
				active: true,
				createdBy: 'Admin'
			},
			{
				name: faker.person.fullName(),
				departmentId: departments![Math.floor(Math.random() * 10)].id,
				sectionId: sections![Math.floor(Math.random() * 10)].id,
				active: true,
				createdBy: 'Admin'
			},
			{
				name: faker.person.fullName(),
				departmentId: departments![Math.floor(Math.random() * 10)].id,
				sectionId: sections![Math.floor(Math.random() * 10)].id,
				active: true,
				createdBy: 'Admin'
			},
			{
				name: faker.person.fullName(),
				departmentId: departments![Math.floor(Math.random() * 10)].id,
				sectionId: sections![Math.floor(Math.random() * 10)].id,
				active: true,
				createdBy: 'Admin'
			},
			{
				name: faker.person.fullName(),
				departmentId: departments![Math.floor(Math.random() * 10)].id,
				sectionId: sections![Math.floor(Math.random() * 10)].id,
				active: true,
				createdBy: 'Admin'
			},
			{
				name: faker.person.fullName(),
				departmentId: departments![Math.floor(Math.random() * 10)].id,
				sectionId: sections![Math.floor(Math.random() * 10)].id,
				active: true,
				createdBy: 'Admin'
			},
			{
				name: faker.person.fullName(),
				departmentId: departments![Math.floor(Math.random() * 10)].id,
				sectionId: sections![Math.floor(Math.random() * 10)].id,
				active: true,
				createdBy: 'Admin'
			},
			{
				name: faker.person.fullName(),
				departmentId: departments![Math.floor(Math.random() * 10)].id,
				sectionId: sections![Math.floor(Math.random() * 10)].id,
				active: true,
				createdBy: 'Admin'
			},
		])
	}
}
