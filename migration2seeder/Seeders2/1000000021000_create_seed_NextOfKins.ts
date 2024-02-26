import BaseSeeder from '@ioc:Adonis/Lucid/Seeder';
import { DateTime } from 'luxon';
import { Faker, en } from '@faker-js/faker';
import NextOfKin from 'App/Models/NextOfKin';
import PersonalDetail from 'App/Models/PersonalDetail';
import State from 'App/Models/State';

export default class extends BaseSeeder {

	public async run () {
		const personalDetails = await PersonalDetail.all();
		const states = await State.all();
		const faker = new Faker({ locale: [en] });
		await NextOfKin.createMany([
			{
				name: faker.person.fullName(),
				personalDetailId: personalDetails![Math.floor(Math.random() * 10)].id,
				stateId: states![Math.floor(Math.random() * 10)].id,
				alternativeName: faker.person.fullName(),
				isMalaysian: true,
				identityDocumentType: faker.person.fullName(),
				identityDocumentNumber: faker.person.fullName(),
				relationship: faker.person.fullName(),
				gender: faker.person.fullName(),
				phoneNumber: faker.person.fullName(),
				marriageDate: DateTime.fromJSDate(faker.date.past()),
				inSchool: true,
				homeNumber: faker.person.fullName(),
				isLKIMStaff: true,
				position: faker.person.fullName(),
				taxNumber: faker.person.fullName(),
				occupation: faker.person.fullName(),
				company: faker.person.fullName(),
				companyAddress: faker.person.fullName(),
				address: faker.person.fullName(),
				active: true,
				createdBy: 'Admin'
			},
		])
	}
}
