import BaseSeeder from '@ioc:Adonis/Lucid/Seeder';
import { DateTime } from 'luxon';
import { Faker, en } from '@faker-js/faker';
import NewHire from 'App/Models/NewHire';
import Employee from 'App/Models/Employee';
import Candidate from 'App/Models/Candidate';

export default class extends BaseSeeder {

	public async run () {
		const employees = await Employee.all();
		const candidates = await Candidate.all();
		const faker = new Faker({ locale: [en] });
		await NewHire.createMany([
			{
				employeeId: employees![Math.floor(Math.random() * 10)].id,
				candidateId: candidates![Math.floor(Math.random() * 10)].id,
				isFitCriteria: true,
				remark: faker.person.fullName(),
				active: true,
				createdBy: 'Admin'
			},
			{
				employeeId: employees![Math.floor(Math.random() * 10)].id,
				candidateId: candidates![Math.floor(Math.random() * 10)].id,
				isFitCriteria: true,
				remark: faker.person.fullName(),
				active: true,
				createdBy: 'Admin'
			},
			{
				employeeId: employees![Math.floor(Math.random() * 10)].id,
				candidateId: candidates![Math.floor(Math.random() * 10)].id,
				isFitCriteria: true,
				remark: faker.person.fullName(),
				active: true,
				createdBy: 'Admin'
			},
			{
				employeeId: employees![Math.floor(Math.random() * 10)].id,
				candidateId: candidates![Math.floor(Math.random() * 10)].id,
				isFitCriteria: true,
				remark: faker.person.fullName(),
				active: true,
				createdBy: 'Admin'
			},
			{
				employeeId: employees![Math.floor(Math.random() * 10)].id,
				candidateId: candidates![Math.floor(Math.random() * 10)].id,
				isFitCriteria: true,
				remark: faker.person.fullName(),
				active: true,
				createdBy: 'Admin'
			},
			{
				employeeId: employees![Math.floor(Math.random() * 10)].id,
				candidateId: candidates![Math.floor(Math.random() * 10)].id,
				isFitCriteria: true,
				remark: faker.person.fullName(),
				active: true,
				createdBy: 'Admin'
			},
			{
				employeeId: employees![Math.floor(Math.random() * 10)].id,
				candidateId: candidates![Math.floor(Math.random() * 10)].id,
				isFitCriteria: true,
				remark: faker.person.fullName(),
				active: true,
				createdBy: 'Admin'
			},
			{
				employeeId: employees![Math.floor(Math.random() * 10)].id,
				candidateId: candidates![Math.floor(Math.random() * 10)].id,
				isFitCriteria: true,
				remark: faker.person.fullName(),
				active: true,
				createdBy: 'Admin'
			},
			{
				employeeId: employees![Math.floor(Math.random() * 10)].id,
				candidateId: candidates![Math.floor(Math.random() * 10)].id,
				isFitCriteria: true,
				remark: faker.person.fullName(),
				active: true,
				createdBy: 'Admin'
			},
			{
				employeeId: employees![Math.floor(Math.random() * 10)].id,
				candidateId: candidates![Math.floor(Math.random() * 10)].id,
				isFitCriteria: true,
				remark: faker.person.fullName(),
				active: true,
				createdBy: 'Admin'
			},
		])
	}
}
