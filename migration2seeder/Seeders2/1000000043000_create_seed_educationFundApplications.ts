import BaseSeeder from '@ioc:Adonis/Lucid/Seeder';
import { DateTime } from 'luxon';
import { Faker, en } from '@faker-js/faker';
import EducationFundApplication from 'App/Models/EducationFundApplication';
import Employee from 'App/Models/Employee';

export default class extends BaseSeeder {

	public async run () {
		const employees = await Employee.all();
		const faker = new Faker({ locale: [en] });
		await EducationFundApplication.createMany([
			{
				employeeId: employees![Math.floor(Math.random() * 10)].id,
				academicLevel: faker.person.fullName(),
				courseName: faker.person.fullName(),
				institution: faker.person.fullName(),
				learningInstitution: faker.person.fullName(),
				studyDuration: faker.number.int({ max: 10 }),
				entryDateToInstituition: DateTime.fromJSDate(faker.date.past()),
				educationType: faker.person.fullName(),
				applicationType: faker.person.fullName(),
				active: true,
				createdBy: 'Admin'
			},
			{
				employeeId: employees![Math.floor(Math.random() * 10)].id,
				academicLevel: faker.person.fullName(),
				courseName: faker.person.fullName(),
				institution: faker.person.fullName(),
				learningInstitution: faker.person.fullName(),
				studyDuration: faker.number.int({ max: 10 }),
				entryDateToInstituition: DateTime.fromJSDate(faker.date.past()),
				educationType: faker.person.fullName(),
				applicationType: faker.person.fullName(),
				active: true,
				createdBy: 'Admin'
			},
			{
				employeeId: employees![Math.floor(Math.random() * 10)].id,
				academicLevel: faker.person.fullName(),
				courseName: faker.person.fullName(),
				institution: faker.person.fullName(),
				learningInstitution: faker.person.fullName(),
				studyDuration: faker.number.int({ max: 10 }),
				entryDateToInstituition: DateTime.fromJSDate(faker.date.past()),
				educationType: faker.person.fullName(),
				applicationType: faker.person.fullName(),
				active: true,
				createdBy: 'Admin'
			},
			{
				employeeId: employees![Math.floor(Math.random() * 10)].id,
				academicLevel: faker.person.fullName(),
				courseName: faker.person.fullName(),
				institution: faker.person.fullName(),
				learningInstitution: faker.person.fullName(),
				studyDuration: faker.number.int({ max: 10 }),
				entryDateToInstituition: DateTime.fromJSDate(faker.date.past()),
				educationType: faker.person.fullName(),
				applicationType: faker.person.fullName(),
				active: true,
				createdBy: 'Admin'
			},
			{
				employeeId: employees![Math.floor(Math.random() * 10)].id,
				academicLevel: faker.person.fullName(),
				courseName: faker.person.fullName(),
				institution: faker.person.fullName(),
				learningInstitution: faker.person.fullName(),
				studyDuration: faker.number.int({ max: 10 }),
				entryDateToInstituition: DateTime.fromJSDate(faker.date.past()),
				educationType: faker.person.fullName(),
				applicationType: faker.person.fullName(),
				active: true,
				createdBy: 'Admin'
			},
			{
				employeeId: employees![Math.floor(Math.random() * 10)].id,
				academicLevel: faker.person.fullName(),
				courseName: faker.person.fullName(),
				institution: faker.person.fullName(),
				learningInstitution: faker.person.fullName(),
				studyDuration: faker.number.int({ max: 10 }),
				entryDateToInstituition: DateTime.fromJSDate(faker.date.past()),
				educationType: faker.person.fullName(),
				applicationType: faker.person.fullName(),
				active: true,
				createdBy: 'Admin'
			},
			{
				employeeId: employees![Math.floor(Math.random() * 10)].id,
				academicLevel: faker.person.fullName(),
				courseName: faker.person.fullName(),
				institution: faker.person.fullName(),
				learningInstitution: faker.person.fullName(),
				studyDuration: faker.number.int({ max: 10 }),
				entryDateToInstituition: DateTime.fromJSDate(faker.date.past()),
				educationType: faker.person.fullName(),
				applicationType: faker.person.fullName(),
				active: true,
				createdBy: 'Admin'
			},
			{
				employeeId: employees![Math.floor(Math.random() * 10)].id,
				academicLevel: faker.person.fullName(),
				courseName: faker.person.fullName(),
				institution: faker.person.fullName(),
				learningInstitution: faker.person.fullName(),
				studyDuration: faker.number.int({ max: 10 }),
				entryDateToInstituition: DateTime.fromJSDate(faker.date.past()),
				educationType: faker.person.fullName(),
				applicationType: faker.person.fullName(),
				active: true,
				createdBy: 'Admin'
			},
			{
				employeeId: employees![Math.floor(Math.random() * 10)].id,
				academicLevel: faker.person.fullName(),
				courseName: faker.person.fullName(),
				institution: faker.person.fullName(),
				learningInstitution: faker.person.fullName(),
				studyDuration: faker.number.int({ max: 10 }),
				entryDateToInstituition: DateTime.fromJSDate(faker.date.past()),
				educationType: faker.person.fullName(),
				applicationType: faker.person.fullName(),
				active: true,
				createdBy: 'Admin'
			},
			{
				employeeId: employees![Math.floor(Math.random() * 10)].id,
				academicLevel: faker.person.fullName(),
				courseName: faker.person.fullName(),
				institution: faker.person.fullName(),
				learningInstitution: faker.person.fullName(),
				studyDuration: faker.number.int({ max: 10 }),
				entryDateToInstituition: DateTime.fromJSDate(faker.date.past()),
				educationType: faker.person.fullName(),
				applicationType: faker.person.fullName(),
				active: true,
				createdBy: 'Admin'
			},
		])
	}
}
