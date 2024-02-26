import BaseSeeder from '@ioc:Adonis/Lucid/Seeder';
import { DateTime } from 'luxon';
import { Faker, en } from '@faker-js/faker';
import Loan from 'App/Models/Loan';
import SalaryDeduction from 'App/Models/SalaryDeduction';

export default class extends BaseSeeder {

	public async run () {
		const salaryDeduction = await SalaryDeduction.all();
		const faker = new Faker({ locale: [en] });
		await Loan.createMany([
			{
				deductionId: salaryDeduction![Math.floor(Math.random() * 10)].id,
				loanType: faker.person.fullName(),
				applicationDate: DateTime.fromJSDate(faker.date.past()),
				status: faker.person.fullName(),
				remark: faker.person.fullName(),
				active: true,
				createdBy: 'Admin'
			},
			{
				deductionId: salaryDeduction![Math.floor(Math.random() * 10)].id,
				loanType: faker.person.fullName(),
				applicationDate: DateTime.fromJSDate(faker.date.past()),
				status: faker.person.fullName(),
				remark: faker.person.fullName(),
				active: true,
				createdBy: 'Admin'
			},
			{
				deductionId: salaryDeduction![Math.floor(Math.random() * 10)].id,
				loanType: faker.person.fullName(),
				applicationDate: DateTime.fromJSDate(faker.date.past()),
				status: faker.person.fullName(),
				remark: faker.person.fullName(),
				active: true,
				createdBy: 'Admin'
			},
			{
				deductionId: salaryDeduction![Math.floor(Math.random() * 10)].id,
				loanType: faker.person.fullName(),
				applicationDate: DateTime.fromJSDate(faker.date.past()),
				status: faker.person.fullName(),
				remark: faker.person.fullName(),
				active: true,
				createdBy: 'Admin'
			},
			{
				deductionId: salaryDeduction![Math.floor(Math.random() * 10)].id,
				loanType: faker.person.fullName(),
				applicationDate: DateTime.fromJSDate(faker.date.past()),
				status: faker.person.fullName(),
				remark: faker.person.fullName(),
				active: true,
				createdBy: 'Admin'
			},
			{
				deductionId: salaryDeduction![Math.floor(Math.random() * 10)].id,
				loanType: faker.person.fullName(),
				applicationDate: DateTime.fromJSDate(faker.date.past()),
				status: faker.person.fullName(),
				remark: faker.person.fullName(),
				active: true,
				createdBy: 'Admin'
			},
			{
				deductionId: salaryDeduction![Math.floor(Math.random() * 10)].id,
				loanType: faker.person.fullName(),
				applicationDate: DateTime.fromJSDate(faker.date.past()),
				status: faker.person.fullName(),
				remark: faker.person.fullName(),
				active: true,
				createdBy: 'Admin'
			},
			{
				deductionId: salaryDeduction![Math.floor(Math.random() * 10)].id,
				loanType: faker.person.fullName(),
				applicationDate: DateTime.fromJSDate(faker.date.past()),
				status: faker.person.fullName(),
				remark: faker.person.fullName(),
				active: true,
				createdBy: 'Admin'
			},
			{
				deductionId: salaryDeduction![Math.floor(Math.random() * 10)].id,
				loanType: faker.person.fullName(),
				applicationDate: DateTime.fromJSDate(faker.date.past()),
				status: faker.person.fullName(),
				remark: faker.person.fullName(),
				active: true,
				createdBy: 'Admin'
			},
			{
				deductionId: salaryDeduction![Math.floor(Math.random() * 10)].id,
				loanType: faker.person.fullName(),
				applicationDate: DateTime.fromJSDate(faker.date.past()),
				status: faker.person.fullName(),
				remark: faker.person.fullName(),
				active: true,
				createdBy: 'Admin'
			},
		])
	}
}
