import BaseSeeder from '@ioc:Adonis/Lucid/Seeder';
import { DateTime } from 'luxon';
import { Faker, en } from '@faker-js/faker';
import UserAccount from 'App/Models/UserAccount';
import Clinic from 'App/Models/Clinic';
import Employee from 'App/Models/Employee';
import Candidate from 'App/Models/Candidate';

export default class extends BaseSeeder {

	public async run () {
		const clinics = await Clinic.all();
		const employees = await Employee.all();
		const candidates = await Candidate.all();
		const faker = new Faker({ locale: [en] });
		await UserAccount.createMany([
			{
				clinicId: clinics![Math.floor(Math.random() * 10)].id,
				employeeId: employees![Math.floor(Math.random() * 10)].id,
				candidateId: candidates![Math.floor(Math.random() * 10)].id,
				username: faker.person.fullName(),
				password: faker.person.fullName(),
				active: true,
				createdBy: 'Admin'
			},
			{
				clinicId: clinics![Math.floor(Math.random() * 10)].id,
				employeeId: employees![Math.floor(Math.random() * 10)].id,
				candidateId: candidates![Math.floor(Math.random() * 10)].id,
				username: faker.person.fullName(),
				password: faker.person.fullName(),
				active: true,
				createdBy: 'Admin'
			},
			{
				clinicId: clinics![Math.floor(Math.random() * 10)].id,
				employeeId: employees![Math.floor(Math.random() * 10)].id,
				candidateId: candidates![Math.floor(Math.random() * 10)].id,
				username: faker.person.fullName(),
				password: faker.person.fullName(),
				active: true,
				createdBy: 'Admin'
			},
			{
				clinicId: clinics![Math.floor(Math.random() * 10)].id,
				employeeId: employees![Math.floor(Math.random() * 10)].id,
				candidateId: candidates![Math.floor(Math.random() * 10)].id,
				username: faker.person.fullName(),
				password: faker.person.fullName(),
				active: true,
				createdBy: 'Admin'
			},
			{
				clinicId: clinics![Math.floor(Math.random() * 10)].id,
				employeeId: employees![Math.floor(Math.random() * 10)].id,
				candidateId: candidates![Math.floor(Math.random() * 10)].id,
				username: faker.person.fullName(),
				password: faker.person.fullName(),
				active: true,
				createdBy: 'Admin'
			},
			{
				clinicId: clinics![Math.floor(Math.random() * 10)].id,
				employeeId: employees![Math.floor(Math.random() * 10)].id,
				candidateId: candidates![Math.floor(Math.random() * 10)].id,
				username: faker.person.fullName(),
				password: faker.person.fullName(),
				active: true,
				createdBy: 'Admin'
			},
			{
				clinicId: clinics![Math.floor(Math.random() * 10)].id,
				employeeId: employees![Math.floor(Math.random() * 10)].id,
				candidateId: candidates![Math.floor(Math.random() * 10)].id,
				username: faker.person.fullName(),
				password: faker.person.fullName(),
				active: true,
				createdBy: 'Admin'
			},
			{
				clinicId: clinics![Math.floor(Math.random() * 10)].id,
				employeeId: employees![Math.floor(Math.random() * 10)].id,
				candidateId: candidates![Math.floor(Math.random() * 10)].id,
				username: faker.person.fullName(),
				password: faker.person.fullName(),
				active: true,
				createdBy: 'Admin'
			},
			{
				clinicId: clinics![Math.floor(Math.random() * 10)].id,
				employeeId: employees![Math.floor(Math.random() * 10)].id,
				candidateId: candidates![Math.floor(Math.random() * 10)].id,
				username: faker.person.fullName(),
				password: faker.person.fullName(),
				active: true,
				createdBy: 'Admin'
			},
			{
				clinicId: clinics![Math.floor(Math.random() * 10)].id,
				employeeId: employees![Math.floor(Math.random() * 10)].id,
				candidateId: candidates![Math.floor(Math.random() * 10)].id,
				username: faker.person.fullName(),
				password: faker.person.fullName(),
				active: true,
				createdBy: 'Admin'
			},
		])
	}
}
