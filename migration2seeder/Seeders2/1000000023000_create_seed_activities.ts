import BaseSeeder from '@ioc:Adonis/Lucid/Seeder';
import { DateTime } from 'luxon';
import { Faker, en } from '@faker-js/faker';
import Activity from 'App/Models/Activity';
import PersonalDetail from 'App/Models/PersonalDetail';

export default class extends BaseSeeder {

	public async run () {
		const personalDetails = await PersonalDetail.all();
		const faker = new Faker({ locale: [en] });
		await Activity.createMany([
			{
				name: faker.person.fullName(),
				personalDetailsId: personalDetails![Math.floor(Math.random() * 10)].id,
				joiningDate: DateTime.fromJSDate(faker.date.past()),
				description: faker.person.fullName(),
				active: true,
				createdBy: 'Admin'
			},
			{
				name: faker.person.fullName(),
				personalDetailsId: personalDetails![Math.floor(Math.random() * 10)].id,
				joiningDate: DateTime.fromJSDate(faker.date.past()),
				description: faker.person.fullName(),
				active: true,
				createdBy: 'Admin'
			},
			{
				name: faker.person.fullName(),
				personalDetailsId: personalDetails![Math.floor(Math.random() * 10)].id,
				joiningDate: DateTime.fromJSDate(faker.date.past()),
				description: faker.person.fullName(),
				active: true,
				createdBy: 'Admin'
			},
			{
				name: faker.person.fullName(),
				personalDetailsId: personalDetails![Math.floor(Math.random() * 10)].id,
				joiningDate: DateTime.fromJSDate(faker.date.past()),
				description: faker.person.fullName(),
				active: true,
				createdBy: 'Admin'
			},
			{
				name: faker.person.fullName(),
				personalDetailsId: personalDetails![Math.floor(Math.random() * 10)].id,
				joiningDate: DateTime.fromJSDate(faker.date.past()),
				description: faker.person.fullName(),
				active: true,
				createdBy: 'Admin'
			},
			{
				name: faker.person.fullName(),
				personalDetailsId: personalDetails![Math.floor(Math.random() * 10)].id,
				joiningDate: DateTime.fromJSDate(faker.date.past()),
				description: faker.person.fullName(),
				active: true,
				createdBy: 'Admin'
			},
			{
				name: faker.person.fullName(),
				personalDetailsId: personalDetails![Math.floor(Math.random() * 10)].id,
				joiningDate: DateTime.fromJSDate(faker.date.past()),
				description: faker.person.fullName(),
				active: true,
				createdBy: 'Admin'
			},
			{
				name: faker.person.fullName(),
				personalDetailsId: personalDetails![Math.floor(Math.random() * 10)].id,
				joiningDate: DateTime.fromJSDate(faker.date.past()),
				description: faker.person.fullName(),
				active: true,
				createdBy: 'Admin'
			},
			{
				name: faker.person.fullName(),
				personalDetailsId: personalDetails![Math.floor(Math.random() * 10)].id,
				joiningDate: DateTime.fromJSDate(faker.date.past()),
				description: faker.person.fullName(),
				active: true,
				createdBy: 'Admin'
			},
			{
				name: faker.person.fullName(),
				personalDetailsId: personalDetails![Math.floor(Math.random() * 10)].id,
				joiningDate: DateTime.fromJSDate(faker.date.past()),
				description: faker.person.fullName(),
				active: true,
				createdBy: 'Admin'
			},
		])
	}
}
