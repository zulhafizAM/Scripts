import BaseSeeder from '@ioc:Adonis/Lucid/Seeder';
import { DateTime } from 'luxon';
import { Faker, en } from '@faker-js/faker';
import Exam from 'App/Models/Exam';
import ExamsType from 'App/Models/ExamsType';

export default class extends BaseSeeder {

	public async run () {
		const examsTypes = await ExamsType.all();
		const faker = new Faker({ locale: [en] });
		await Exam.createMany([
			{
				examTypeId: examsTypes![Math.floor(Math.random() * 10)].id,
				title: faker.person.fullName(),
				startDate: DateTime.fromJSDate(faker.date.past()),
				endDate: DateTime.fromJSDate(faker.date.past()),
				examDate: DateTime.fromJSDate(faker.date.past()),
				examLocation: faker.person.fullName(),
				active: true,
				createdBy: 'Admin'
			},
			{
				examTypeId: examsTypes![Math.floor(Math.random() * 10)].id,
				title: faker.person.fullName(),
				startDate: DateTime.fromJSDate(faker.date.past()),
				endDate: DateTime.fromJSDate(faker.date.past()),
				examDate: DateTime.fromJSDate(faker.date.past()),
				examLocation: faker.person.fullName(),
				active: true,
				createdBy: 'Admin'
			},
			{
				examTypeId: examsTypes![Math.floor(Math.random() * 10)].id,
				title: faker.person.fullName(),
				startDate: DateTime.fromJSDate(faker.date.past()),
				endDate: DateTime.fromJSDate(faker.date.past()),
				examDate: DateTime.fromJSDate(faker.date.past()),
				examLocation: faker.person.fullName(),
				active: true,
				createdBy: 'Admin'
			},
			{
				examTypeId: examsTypes![Math.floor(Math.random() * 10)].id,
				title: faker.person.fullName(),
				startDate: DateTime.fromJSDate(faker.date.past()),
				endDate: DateTime.fromJSDate(faker.date.past()),
				examDate: DateTime.fromJSDate(faker.date.past()),
				examLocation: faker.person.fullName(),
				active: true,
				createdBy: 'Admin'
			},
			{
				examTypeId: examsTypes![Math.floor(Math.random() * 10)].id,
				title: faker.person.fullName(),
				startDate: DateTime.fromJSDate(faker.date.past()),
				endDate: DateTime.fromJSDate(faker.date.past()),
				examDate: DateTime.fromJSDate(faker.date.past()),
				examLocation: faker.person.fullName(),
				active: true,
				createdBy: 'Admin'
			},
			{
				examTypeId: examsTypes![Math.floor(Math.random() * 10)].id,
				title: faker.person.fullName(),
				startDate: DateTime.fromJSDate(faker.date.past()),
				endDate: DateTime.fromJSDate(faker.date.past()),
				examDate: DateTime.fromJSDate(faker.date.past()),
				examLocation: faker.person.fullName(),
				active: true,
				createdBy: 'Admin'
			},
			{
				examTypeId: examsTypes![Math.floor(Math.random() * 10)].id,
				title: faker.person.fullName(),
				startDate: DateTime.fromJSDate(faker.date.past()),
				endDate: DateTime.fromJSDate(faker.date.past()),
				examDate: DateTime.fromJSDate(faker.date.past()),
				examLocation: faker.person.fullName(),
				active: true,
				createdBy: 'Admin'
			},
			{
				examTypeId: examsTypes![Math.floor(Math.random() * 10)].id,
				title: faker.person.fullName(),
				startDate: DateTime.fromJSDate(faker.date.past()),
				endDate: DateTime.fromJSDate(faker.date.past()),
				examDate: DateTime.fromJSDate(faker.date.past()),
				examLocation: faker.person.fullName(),
				active: true,
				createdBy: 'Admin'
			},
			{
				examTypeId: examsTypes![Math.floor(Math.random() * 10)].id,
				title: faker.person.fullName(),
				startDate: DateTime.fromJSDate(faker.date.past()),
				endDate: DateTime.fromJSDate(faker.date.past()),
				examDate: DateTime.fromJSDate(faker.date.past()),
				examLocation: faker.person.fullName(),
				active: true,
				createdBy: 'Admin'
			},
			{
				examTypeId: examsTypes![Math.floor(Math.random() * 10)].id,
				title: faker.person.fullName(),
				startDate: DateTime.fromJSDate(faker.date.past()),
				endDate: DateTime.fromJSDate(faker.date.past()),
				examDate: DateTime.fromJSDate(faker.date.past()),
				examLocation: faker.person.fullName(),
				active: true,
				createdBy: 'Admin'
			},
		])
	}
}
