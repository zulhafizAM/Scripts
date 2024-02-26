import BaseSeeder from '@ioc:Adonis/Lucid/Seeder';
import { DateTime } from 'luxon';
import { Faker, en } from '@faker-js/faker';
import Salary from 'App/Models/Salary';
import Employee from 'App/Models/Employee';

export default class extends BaseSeeder {

	public async run () {
		const employees = await Employee.all();
		const faker = new Faker({ locale: [en] });
		await Salary.createMany([
			{
				employeeId: employees![Math.floor(Math.random() * 10)].id,
				effectiveDate: DateTime.fromJSDate(faker.date.past()),
				baseSalary: faker.number.float({ precision: 0.01 }),
				ITKA: faker.number.float({ precision: 0.01 }),
				COLA: faker.number.float({ precision: 0.01 }),
				status: faker.person.fullName(),
				remark: faker.person.fullName(),
				isRetiringSoon: true,
				active: true,
				createdBy: 'Admin'
			},
			{
				employeeId: employees![Math.floor(Math.random() * 10)].id,
				effectiveDate: DateTime.fromJSDate(faker.date.past()),
				baseSalary: faker.number.float({ precision: 0.01 }),
				ITKA: faker.number.float({ precision: 0.01 }),
				COLA: faker.number.float({ precision: 0.01 }),
				status: faker.person.fullName(),
				remark: faker.person.fullName(),
				isRetiringSoon: true,
				active: true,
				createdBy: 'Admin'
			},
			{
				employeeId: employees![Math.floor(Math.random() * 10)].id,
				effectiveDate: DateTime.fromJSDate(faker.date.past()),
				baseSalary: faker.number.float({ precision: 0.01 }),
				ITKA: faker.number.float({ precision: 0.01 }),
				COLA: faker.number.float({ precision: 0.01 }),
				status: faker.person.fullName(),
				remark: faker.person.fullName(),
				isRetiringSoon: true,
				active: true,
				createdBy: 'Admin'
			},
			{
				employeeId: employees![Math.floor(Math.random() * 10)].id,
				effectiveDate: DateTime.fromJSDate(faker.date.past()),
				baseSalary: faker.number.float({ precision: 0.01 }),
				ITKA: faker.number.float({ precision: 0.01 }),
				COLA: faker.number.float({ precision: 0.01 }),
				status: faker.person.fullName(),
				remark: faker.person.fullName(),
				isRetiringSoon: true,
				active: true,
				createdBy: 'Admin'
			},
			{
				employeeId: employees![Math.floor(Math.random() * 10)].id,
				effectiveDate: DateTime.fromJSDate(faker.date.past()),
				baseSalary: faker.number.float({ precision: 0.01 }),
				ITKA: faker.number.float({ precision: 0.01 }),
				COLA: faker.number.float({ precision: 0.01 }),
				status: faker.person.fullName(),
				remark: faker.person.fullName(),
				isRetiringSoon: true,
				active: true,
				createdBy: 'Admin'
			},
			{
				employeeId: employees![Math.floor(Math.random() * 10)].id,
				effectiveDate: DateTime.fromJSDate(faker.date.past()),
				baseSalary: faker.number.float({ precision: 0.01 }),
				ITKA: faker.number.float({ precision: 0.01 }),
				COLA: faker.number.float({ precision: 0.01 }),
				status: faker.person.fullName(),
				remark: faker.person.fullName(),
				isRetiringSoon: true,
				active: true,
				createdBy: 'Admin'
			},
			{
				employeeId: employees![Math.floor(Math.random() * 10)].id,
				effectiveDate: DateTime.fromJSDate(faker.date.past()),
				baseSalary: faker.number.float({ precision: 0.01 }),
				ITKA: faker.number.float({ precision: 0.01 }),
				COLA: faker.number.float({ precision: 0.01 }),
				status: faker.person.fullName(),
				remark: faker.person.fullName(),
				isRetiringSoon: true,
				active: true,
				createdBy: 'Admin'
			},
			{
				employeeId: employees![Math.floor(Math.random() * 10)].id,
				effectiveDate: DateTime.fromJSDate(faker.date.past()),
				baseSalary: faker.number.float({ precision: 0.01 }),
				ITKA: faker.number.float({ precision: 0.01 }),
				COLA: faker.number.float({ precision: 0.01 }),
				status: faker.person.fullName(),
				remark: faker.person.fullName(),
				isRetiringSoon: true,
				active: true,
				createdBy: 'Admin'
			},
			{
				employeeId: employees![Math.floor(Math.random() * 10)].id,
				effectiveDate: DateTime.fromJSDate(faker.date.past()),
				baseSalary: faker.number.float({ precision: 0.01 }),
				ITKA: faker.number.float({ precision: 0.01 }),
				COLA: faker.number.float({ precision: 0.01 }),
				status: faker.person.fullName(),
				remark: faker.person.fullName(),
				isRetiringSoon: true,
				active: true,
				createdBy: 'Admin'
			},
			{
				employeeId: employees![Math.floor(Math.random() * 10)].id,
				effectiveDate: DateTime.fromJSDate(faker.date.past()),
				baseSalary: faker.number.float({ precision: 0.01 }),
				ITKA: faker.number.float({ precision: 0.01 }),
				COLA: faker.number.float({ precision: 0.01 }),
				status: faker.person.fullName(),
				remark: faker.person.fullName(),
				isRetiringSoon: true,
				active: true,
				createdBy: 'Admin'
			},
		])
	}
}
