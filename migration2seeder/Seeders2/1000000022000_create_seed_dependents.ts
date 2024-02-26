import BaseSeeder from '@ioc:Adonis/Lucid/Seeder';
import { DateTime } from 'luxon';
import { Faker, en } from '@faker-js/faker';
import Dependent from 'App/Models/Dependent';
import PersonalDetail from 'App/Models/PersonalDetail';

export default class extends BaseSeeder {

	public async run () {
		const personalDetails = await PersonalDetail.all();
		const faker = new Faker({ locale: [en] });
		await Dependent.createMany([
			{
				name: faker.person.fullName(),
				personalDetailsId: personalDetails![Math.floor(Math.random() * 10)].id,
				alternativeName: faker.person.fullName(),
				isMalaysian: true,
				identityDocumentType: faker.person.fullName(),
				identityDocumentNumber: faker.person.fullName(),
				relationship: faker.person.fullName(),
				gender: faker.person.fullName(),
				marriageDate: DateTime.fromJSDate(faker.date.past()),
				inSchool: true,
				active: true,
				createdBy: 'Admin'
			},
			{
				name: faker.person.fullName(),
				personalDetailsId: personalDetails![Math.floor(Math.random() * 10)].id,
				alternativeName: faker.person.fullName(),
				isMalaysian: true,
				identityDocumentType: faker.person.fullName(),
				identityDocumentNumber: faker.person.fullName(),
				relationship: faker.person.fullName(),
				gender: faker.person.fullName(),
				marriageDate: DateTime.fromJSDate(faker.date.past()),
				inSchool: true,
				active: true,
				createdBy: 'Admin'
			},
			{
				name: faker.person.fullName(),
				personalDetailsId: personalDetails![Math.floor(Math.random() * 10)].id,
				alternativeName: faker.person.fullName(),
				isMalaysian: true,
				identityDocumentType: faker.person.fullName(),
				identityDocumentNumber: faker.person.fullName(),
				relationship: faker.person.fullName(),
				gender: faker.person.fullName(),
				marriageDate: DateTime.fromJSDate(faker.date.past()),
				inSchool: true,
				active: true,
				createdBy: 'Admin'
			},
			{
				name: faker.person.fullName(),
				personalDetailsId: personalDetails![Math.floor(Math.random() * 10)].id,
				alternativeName: faker.person.fullName(),
				isMalaysian: true,
				identityDocumentType: faker.person.fullName(),
				identityDocumentNumber: faker.person.fullName(),
				relationship: faker.person.fullName(),
				gender: faker.person.fullName(),
				marriageDate: DateTime.fromJSDate(faker.date.past()),
				inSchool: true,
				active: true,
				createdBy: 'Admin'
			},
			{
				name: faker.person.fullName(),
				personalDetailsId: personalDetails![Math.floor(Math.random() * 10)].id,
				alternativeName: faker.person.fullName(),
				isMalaysian: true,
				identityDocumentType: faker.person.fullName(),
				identityDocumentNumber: faker.person.fullName(),
				relationship: faker.person.fullName(),
				gender: faker.person.fullName(),
				marriageDate: DateTime.fromJSDate(faker.date.past()),
				inSchool: true,
				active: true,
				createdBy: 'Admin'
			},
			{
				name: faker.person.fullName(),
				personalDetailsId: personalDetails![Math.floor(Math.random() * 10)].id,
				alternativeName: faker.person.fullName(),
				isMalaysian: true,
				identityDocumentType: faker.person.fullName(),
				identityDocumentNumber: faker.person.fullName(),
				relationship: faker.person.fullName(),
				gender: faker.person.fullName(),
				marriageDate: DateTime.fromJSDate(faker.date.past()),
				inSchool: true,
				active: true,
				createdBy: 'Admin'
			},
			{
				name: faker.person.fullName(),
				personalDetailsId: personalDetails![Math.floor(Math.random() * 10)].id,
				alternativeName: faker.person.fullName(),
				isMalaysian: true,
				identityDocumentType: faker.person.fullName(),
				identityDocumentNumber: faker.person.fullName(),
				relationship: faker.person.fullName(),
				gender: faker.person.fullName(),
				marriageDate: DateTime.fromJSDate(faker.date.past()),
				inSchool: true,
				active: true,
				createdBy: 'Admin'
			},
			{
				name: faker.person.fullName(),
				personalDetailsId: personalDetails![Math.floor(Math.random() * 10)].id,
				alternativeName: faker.person.fullName(),
				isMalaysian: true,
				identityDocumentType: faker.person.fullName(),
				identityDocumentNumber: faker.person.fullName(),
				relationship: faker.person.fullName(),
				gender: faker.person.fullName(),
				marriageDate: DateTime.fromJSDate(faker.date.past()),
				inSchool: true,
				active: true,
				createdBy: 'Admin'
			},
			{
				name: faker.person.fullName(),
				personalDetailsId: personalDetails![Math.floor(Math.random() * 10)].id,
				alternativeName: faker.person.fullName(),
				isMalaysian: true,
				identityDocumentType: faker.person.fullName(),
				identityDocumentNumber: faker.person.fullName(),
				relationship: faker.person.fullName(),
				gender: faker.person.fullName(),
				marriageDate: DateTime.fromJSDate(faker.date.past()),
				inSchool: true,
				active: true,
				createdBy: 'Admin'
			},
			{
				name: faker.person.fullName(),
				personalDetailsId: personalDetails![Math.floor(Math.random() * 10)].id,
				alternativeName: faker.person.fullName(),
				isMalaysian: true,
				identityDocumentType: faker.person.fullName(),
				identityDocumentNumber: faker.person.fullName(),
				relationship: faker.person.fullName(),
				gender: faker.person.fullName(),
				marriageDate: DateTime.fromJSDate(faker.date.past()),
				inSchool: true,
				active: true,
				createdBy: 'Admin'
			},
		])
	}
}
