import BaseSeeder from '@ioc:Adonis/Lucid/Seeder';
import { DateTime } from 'luxon';
import { Faker, en } from '@faker-js/faker';
import ExcellenceAwardHistory from 'App/Models/ExcellenceAwardHistory';
import Employee from 'App/Models/Employee';

export default class extends BaseSeeder {

	public async run () {
		const employees = await Employee.all();
		const faker = new Faker({ locale: [en] });
		await ExcellenceAwardHistory.createMany([
			{
				employeeId: employees![Math.floor(Math.random() * 10)].id,
				excellenceAwardYear: faker.number.int({ max: 10 }),
				active: true,
				createdBy: 'Admin'
			},
			{
				employeeId: employees![Math.floor(Math.random() * 10)].id,
				excellenceAwardYear: faker.number.int({ max: 10 }),
				active: true,
				createdBy: 'Admin'
			},
			{
				employeeId: employees![Math.floor(Math.random() * 10)].id,
				excellenceAwardYear: faker.number.int({ max: 10 }),
				active: true,
				createdBy: 'Admin'
			},
			{
				employeeId: employees![Math.floor(Math.random() * 10)].id,
				excellenceAwardYear: faker.number.int({ max: 10 }),
				active: true,
				createdBy: 'Admin'
			},
			{
				employeeId: employees![Math.floor(Math.random() * 10)].id,
				excellenceAwardYear: faker.number.int({ max: 10 }),
				active: true,
				createdBy: 'Admin'
			},
			{
				employeeId: employees![Math.floor(Math.random() * 10)].id,
				excellenceAwardYear: faker.number.int({ max: 10 }),
				active: true,
				createdBy: 'Admin'
			},
			{
				employeeId: employees![Math.floor(Math.random() * 10)].id,
				excellenceAwardYear: faker.number.int({ max: 10 }),
				active: true,
				createdBy: 'Admin'
			},
			{
				employeeId: employees![Math.floor(Math.random() * 10)].id,
				excellenceAwardYear: faker.number.int({ max: 10 }),
				active: true,
				createdBy: 'Admin'
			},
			{
				employeeId: employees![Math.floor(Math.random() * 10)].id,
				excellenceAwardYear: faker.number.int({ max: 10 }),
				active: true,
				createdBy: 'Admin'
			},
			{
				employeeId: employees![Math.floor(Math.random() * 10)].id,
				excellenceAwardYear: faker.number.int({ max: 10 }),
				active: true,
				createdBy: 'Admin'
			},
		])
	}
}
