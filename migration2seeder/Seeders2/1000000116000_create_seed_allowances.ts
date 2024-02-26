import BaseSeeder from '@ioc:Adonis/Lucid/Seeder';
import { DateTime } from 'luxon';
import { Faker, en } from '@faker-js/faker';
import Allowance from 'App/Models/Allowance';
import Salary from 'App/Models/Salary';

export default class extends BaseSeeder {

	public async run () {
		const salaries = await Salary.all();
		const faker = new Faker({ locale: [en] });
		await Allowance.createMany([
			{
				salaryDetailId: salaries![Math.floor(Math.random() * 10)].id,
				interim: faker.number.float({ precision: 0.01 }),
				acting: faker.number.float({ precision: 0.01 }),
				transfer: faker.number.float({ precision: 0.01 }),
				houseAllowanceType: faker.person.fullName(),
				houseAllowance: faker.number.float({ precision: 0.01 }),
				transferAllowance: faker.number.float({ precision: 0.01 }),
				active: true,
				createdBy: 'Admin'
			},
			{
				salaryDetailId: salaries![Math.floor(Math.random() * 10)].id,
				interim: faker.number.float({ precision: 0.01 }),
				acting: faker.number.float({ precision: 0.01 }),
				transfer: faker.number.float({ precision: 0.01 }),
				houseAllowanceType: faker.person.fullName(),
				houseAllowance: faker.number.float({ precision: 0.01 }),
				transferAllowance: faker.number.float({ precision: 0.01 }),
				active: true,
				createdBy: 'Admin'
			},
			{
				salaryDetailId: salaries![Math.floor(Math.random() * 10)].id,
				interim: faker.number.float({ precision: 0.01 }),
				acting: faker.number.float({ precision: 0.01 }),
				transfer: faker.number.float({ precision: 0.01 }),
				houseAllowanceType: faker.person.fullName(),
				houseAllowance: faker.number.float({ precision: 0.01 }),
				transferAllowance: faker.number.float({ precision: 0.01 }),
				active: true,
				createdBy: 'Admin'
			},
			{
				salaryDetailId: salaries![Math.floor(Math.random() * 10)].id,
				interim: faker.number.float({ precision: 0.01 }),
				acting: faker.number.float({ precision: 0.01 }),
				transfer: faker.number.float({ precision: 0.01 }),
				houseAllowanceType: faker.person.fullName(),
				houseAllowance: faker.number.float({ precision: 0.01 }),
				transferAllowance: faker.number.float({ precision: 0.01 }),
				active: true,
				createdBy: 'Admin'
			},
			{
				salaryDetailId: salaries![Math.floor(Math.random() * 10)].id,
				interim: faker.number.float({ precision: 0.01 }),
				acting: faker.number.float({ precision: 0.01 }),
				transfer: faker.number.float({ precision: 0.01 }),
				houseAllowanceType: faker.person.fullName(),
				houseAllowance: faker.number.float({ precision: 0.01 }),
				transferAllowance: faker.number.float({ precision: 0.01 }),
				active: true,
				createdBy: 'Admin'
			},
			{
				salaryDetailId: salaries![Math.floor(Math.random() * 10)].id,
				interim: faker.number.float({ precision: 0.01 }),
				acting: faker.number.float({ precision: 0.01 }),
				transfer: faker.number.float({ precision: 0.01 }),
				houseAllowanceType: faker.person.fullName(),
				houseAllowance: faker.number.float({ precision: 0.01 }),
				transferAllowance: faker.number.float({ precision: 0.01 }),
				active: true,
				createdBy: 'Admin'
			},
			{
				salaryDetailId: salaries![Math.floor(Math.random() * 10)].id,
				interim: faker.number.float({ precision: 0.01 }),
				acting: faker.number.float({ precision: 0.01 }),
				transfer: faker.number.float({ precision: 0.01 }),
				houseAllowanceType: faker.person.fullName(),
				houseAllowance: faker.number.float({ precision: 0.01 }),
				transferAllowance: faker.number.float({ precision: 0.01 }),
				active: true,
				createdBy: 'Admin'
			},
			{
				salaryDetailId: salaries![Math.floor(Math.random() * 10)].id,
				interim: faker.number.float({ precision: 0.01 }),
				acting: faker.number.float({ precision: 0.01 }),
				transfer: faker.number.float({ precision: 0.01 }),
				houseAllowanceType: faker.person.fullName(),
				houseAllowance: faker.number.float({ precision: 0.01 }),
				transferAllowance: faker.number.float({ precision: 0.01 }),
				active: true,
				createdBy: 'Admin'
			},
			{
				salaryDetailId: salaries![Math.floor(Math.random() * 10)].id,
				interim: faker.number.float({ precision: 0.01 }),
				acting: faker.number.float({ precision: 0.01 }),
				transfer: faker.number.float({ precision: 0.01 }),
				houseAllowanceType: faker.person.fullName(),
				houseAllowance: faker.number.float({ precision: 0.01 }),
				transferAllowance: faker.number.float({ precision: 0.01 }),
				active: true,
				createdBy: 'Admin'
			},
			{
				salaryDetailId: salaries![Math.floor(Math.random() * 10)].id,
				interim: faker.number.float({ precision: 0.01 }),
				acting: faker.number.float({ precision: 0.01 }),
				transfer: faker.number.float({ precision: 0.01 }),
				houseAllowanceType: faker.person.fullName(),
				houseAllowance: faker.number.float({ precision: 0.01 }),
				transferAllowance: faker.number.float({ precision: 0.01 }),
				active: true,
				createdBy: 'Admin'
			},
		])
	}
}
