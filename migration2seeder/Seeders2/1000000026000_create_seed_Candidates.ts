import BaseSeeder from '@ioc:Adonis/Lucid/Seeder';
import { DateTime } from 'luxon';
import { Faker, en } from '@faker-js/faker';
import Candidate from 'App/Models/Candidate';
import PersonalDetail from 'App/Models/PersonalDetail';
import CandidateType from 'App/Models/CandidateType';
import Employee from 'App/Models/Employee';

export default class extends BaseSeeder {

	public async run () {
		const personalDetails = await PersonalDetail.all();
		const candidateTypes = await CandidateType.all();
		const employees = await Employee.all();
		const faker = new Faker({ locale: [en] });
		await Candidate.createMany([
			{
				personalDetailId: personalDetails![Math.floor(Math.random() * 10)].id,
				candidateTypeId: candidateTypes![Math.floor(Math.random() * 10)].id,
				employeeId: employees![Math.floor(Math.random() * 10)].id,
				candidateNumber: faker.person.fullName(),
				category: faker.person.fullName(),
				link: faker.person.fullName(),
				applicationDate: DateTime.fromJSDate(faker.date.past()),
				status: faker.person.fullName(),
				remark: faker.person.fullName(),
				active: true,
				createdBy: 'Admin'
			},
			{
				personalDetailId: personalDetails![Math.floor(Math.random() * 10)].id,
				candidateTypeId: candidateTypes![Math.floor(Math.random() * 10)].id,
				employeeId: employees![Math.floor(Math.random() * 10)].id,
				candidateNumber: faker.person.fullName(),
				category: faker.person.fullName(),
				link: faker.person.fullName(),
				applicationDate: DateTime.fromJSDate(faker.date.past()),
				status: faker.person.fullName(),
				remark: faker.person.fullName(),
				active: true,
				createdBy: 'Admin'
			},
			{
				personalDetailId: personalDetails![Math.floor(Math.random() * 10)].id,
				candidateTypeId: candidateTypes![Math.floor(Math.random() * 10)].id,
				employeeId: employees![Math.floor(Math.random() * 10)].id,
				candidateNumber: faker.person.fullName(),
				category: faker.person.fullName(),
				link: faker.person.fullName(),
				applicationDate: DateTime.fromJSDate(faker.date.past()),
				status: faker.person.fullName(),
				remark: faker.person.fullName(),
				active: true,
				createdBy: 'Admin'
			},
			{
				personalDetailId: personalDetails![Math.floor(Math.random() * 10)].id,
				candidateTypeId: candidateTypes![Math.floor(Math.random() * 10)].id,
				employeeId: employees![Math.floor(Math.random() * 10)].id,
				candidateNumber: faker.person.fullName(),
				category: faker.person.fullName(),
				link: faker.person.fullName(),
				applicationDate: DateTime.fromJSDate(faker.date.past()),
				status: faker.person.fullName(),
				remark: faker.person.fullName(),
				active: true,
				createdBy: 'Admin'
			},
			{
				personalDetailId: personalDetails![Math.floor(Math.random() * 10)].id,
				candidateTypeId: candidateTypes![Math.floor(Math.random() * 10)].id,
				employeeId: employees![Math.floor(Math.random() * 10)].id,
				candidateNumber: faker.person.fullName(),
				category: faker.person.fullName(),
				link: faker.person.fullName(),
				applicationDate: DateTime.fromJSDate(faker.date.past()),
				status: faker.person.fullName(),
				remark: faker.person.fullName(),
				active: true,
				createdBy: 'Admin'
			},
			{
				personalDetailId: personalDetails![Math.floor(Math.random() * 10)].id,
				candidateTypeId: candidateTypes![Math.floor(Math.random() * 10)].id,
				employeeId: employees![Math.floor(Math.random() * 10)].id,
				candidateNumber: faker.person.fullName(),
				category: faker.person.fullName(),
				link: faker.person.fullName(),
				applicationDate: DateTime.fromJSDate(faker.date.past()),
				status: faker.person.fullName(),
				remark: faker.person.fullName(),
				active: true,
				createdBy: 'Admin'
			},
			{
				personalDetailId: personalDetails![Math.floor(Math.random() * 10)].id,
				candidateTypeId: candidateTypes![Math.floor(Math.random() * 10)].id,
				employeeId: employees![Math.floor(Math.random() * 10)].id,
				candidateNumber: faker.person.fullName(),
				category: faker.person.fullName(),
				link: faker.person.fullName(),
				applicationDate: DateTime.fromJSDate(faker.date.past()),
				status: faker.person.fullName(),
				remark: faker.person.fullName(),
				active: true,
				createdBy: 'Admin'
			},
			{
				personalDetailId: personalDetails![Math.floor(Math.random() * 10)].id,
				candidateTypeId: candidateTypes![Math.floor(Math.random() * 10)].id,
				employeeId: employees![Math.floor(Math.random() * 10)].id,
				candidateNumber: faker.person.fullName(),
				category: faker.person.fullName(),
				link: faker.person.fullName(),
				applicationDate: DateTime.fromJSDate(faker.date.past()),
				status: faker.person.fullName(),
				remark: faker.person.fullName(),
				active: true,
				createdBy: 'Admin'
			},
			{
				personalDetailId: personalDetails![Math.floor(Math.random() * 10)].id,
				candidateTypeId: candidateTypes![Math.floor(Math.random() * 10)].id,
				employeeId: employees![Math.floor(Math.random() * 10)].id,
				candidateNumber: faker.person.fullName(),
				category: faker.person.fullName(),
				link: faker.person.fullName(),
				applicationDate: DateTime.fromJSDate(faker.date.past()),
				status: faker.person.fullName(),
				remark: faker.person.fullName(),
				active: true,
				createdBy: 'Admin'
			},
			{
				personalDetailId: personalDetails![Math.floor(Math.random() * 10)].id,
				candidateTypeId: candidateTypes![Math.floor(Math.random() * 10)].id,
				employeeId: employees![Math.floor(Math.random() * 10)].id,
				candidateNumber: faker.person.fullName(),
				category: faker.person.fullName(),
				link: faker.person.fullName(),
				applicationDate: DateTime.fromJSDate(faker.date.past()),
				status: faker.person.fullName(),
				remark: faker.person.fullName(),
				active: true,
				createdBy: 'Admin'
			},
		])
	}
}
