import BaseSeeder from '@ioc:Adonis/Lucid/Seeder';
import { DateTime } from 'luxon';
import { Faker, en } from '@faker-js/faker';
import SalaryDeduction from 'App/Models/SalaryDeduction';
import Salary from 'App/Models/Salary';

export default class extends BaseSeeder {

	public async run () {
		const salaries = await Salary.all();
		const faker = new Faker({ locale: [en] });
		await SalaryDeduction.createMany([
			{
				salaryDetailId: salaries![Math.floor(Math.random() * 10)].id,
				totalLoan: faker.number.float({ precision: 0.01 }),
				quarterRent: faker.number.float({ precision: 0.01 }),
				penaltyFee: faker.number.float({ precision: 0.01 }),
				unpaidDeduction: faker.number.float({ precision: 0.01 }),
				sickLeaveDeduction: faker.number.float({ precision: 0.01 }),
				medicalArrearsFee: faker.number.float({ precision: 0.01 }),
				others: faker.number.float({ precision: 0.01 }),
				active: true,
				createdBy: 'Admin'
			},
			{
				salaryDetailId: salaries![Math.floor(Math.random() * 10)].id,
				totalLoan: faker.number.float({ precision: 0.01 }),
				quarterRent: faker.number.float({ precision: 0.01 }),
				penaltyFee: faker.number.float({ precision: 0.01 }),
				unpaidDeduction: faker.number.float({ precision: 0.01 }),
				sickLeaveDeduction: faker.number.float({ precision: 0.01 }),
				medicalArrearsFee: faker.number.float({ precision: 0.01 }),
				others: faker.number.float({ precision: 0.01 }),
				active: true,
				createdBy: 'Admin'
			},
			{
				salaryDetailId: salaries![Math.floor(Math.random() * 10)].id,
				totalLoan: faker.number.float({ precision: 0.01 }),
				quarterRent: faker.number.float({ precision: 0.01 }),
				penaltyFee: faker.number.float({ precision: 0.01 }),
				unpaidDeduction: faker.number.float({ precision: 0.01 }),
				sickLeaveDeduction: faker.number.float({ precision: 0.01 }),
				medicalArrearsFee: faker.number.float({ precision: 0.01 }),
				others: faker.number.float({ precision: 0.01 }),
				active: true,
				createdBy: 'Admin'
			},
			{
				salaryDetailId: salaries![Math.floor(Math.random() * 10)].id,
				totalLoan: faker.number.float({ precision: 0.01 }),
				quarterRent: faker.number.float({ precision: 0.01 }),
				penaltyFee: faker.number.float({ precision: 0.01 }),
				unpaidDeduction: faker.number.float({ precision: 0.01 }),
				sickLeaveDeduction: faker.number.float({ precision: 0.01 }),
				medicalArrearsFee: faker.number.float({ precision: 0.01 }),
				others: faker.number.float({ precision: 0.01 }),
				active: true,
				createdBy: 'Admin'
			},
			{
				salaryDetailId: salaries![Math.floor(Math.random() * 10)].id,
				totalLoan: faker.number.float({ precision: 0.01 }),
				quarterRent: faker.number.float({ precision: 0.01 }),
				penaltyFee: faker.number.float({ precision: 0.01 }),
				unpaidDeduction: faker.number.float({ precision: 0.01 }),
				sickLeaveDeduction: faker.number.float({ precision: 0.01 }),
				medicalArrearsFee: faker.number.float({ precision: 0.01 }),
				others: faker.number.float({ precision: 0.01 }),
				active: true,
				createdBy: 'Admin'
			},
			{
				salaryDetailId: salaries![Math.floor(Math.random() * 10)].id,
				totalLoan: faker.number.float({ precision: 0.01 }),
				quarterRent: faker.number.float({ precision: 0.01 }),
				penaltyFee: faker.number.float({ precision: 0.01 }),
				unpaidDeduction: faker.number.float({ precision: 0.01 }),
				sickLeaveDeduction: faker.number.float({ precision: 0.01 }),
				medicalArrearsFee: faker.number.float({ precision: 0.01 }),
				others: faker.number.float({ precision: 0.01 }),
				active: true,
				createdBy: 'Admin'
			},
			{
				salaryDetailId: salaries![Math.floor(Math.random() * 10)].id,
				totalLoan: faker.number.float({ precision: 0.01 }),
				quarterRent: faker.number.float({ precision: 0.01 }),
				penaltyFee: faker.number.float({ precision: 0.01 }),
				unpaidDeduction: faker.number.float({ precision: 0.01 }),
				sickLeaveDeduction: faker.number.float({ precision: 0.01 }),
				medicalArrearsFee: faker.number.float({ precision: 0.01 }),
				others: faker.number.float({ precision: 0.01 }),
				active: true,
				createdBy: 'Admin'
			},
			{
				salaryDetailId: salaries![Math.floor(Math.random() * 10)].id,
				totalLoan: faker.number.float({ precision: 0.01 }),
				quarterRent: faker.number.float({ precision: 0.01 }),
				penaltyFee: faker.number.float({ precision: 0.01 }),
				unpaidDeduction: faker.number.float({ precision: 0.01 }),
				sickLeaveDeduction: faker.number.float({ precision: 0.01 }),
				medicalArrearsFee: faker.number.float({ precision: 0.01 }),
				others: faker.number.float({ precision: 0.01 }),
				active: true,
				createdBy: 'Admin'
			},
			{
				salaryDetailId: salaries![Math.floor(Math.random() * 10)].id,
				totalLoan: faker.number.float({ precision: 0.01 }),
				quarterRent: faker.number.float({ precision: 0.01 }),
				penaltyFee: faker.number.float({ precision: 0.01 }),
				unpaidDeduction: faker.number.float({ precision: 0.01 }),
				sickLeaveDeduction: faker.number.float({ precision: 0.01 }),
				medicalArrearsFee: faker.number.float({ precision: 0.01 }),
				others: faker.number.float({ precision: 0.01 }),
				active: true,
				createdBy: 'Admin'
			},
			{
				salaryDetailId: salaries![Math.floor(Math.random() * 10)].id,
				totalLoan: faker.number.float({ precision: 0.01 }),
				quarterRent: faker.number.float({ precision: 0.01 }),
				penaltyFee: faker.number.float({ precision: 0.01 }),
				unpaidDeduction: faker.number.float({ precision: 0.01 }),
				sickLeaveDeduction: faker.number.float({ precision: 0.01 }),
				medicalArrearsFee: faker.number.float({ precision: 0.01 }),
				others: faker.number.float({ precision: 0.01 }),
				active: true,
				createdBy: 'Admin'
			},
		])
	}
}
