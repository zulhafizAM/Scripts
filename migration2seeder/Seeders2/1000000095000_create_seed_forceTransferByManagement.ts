import BaseSeeder from '@ioc:Adonis/Lucid/Seeder';
import { DateTime } from 'luxon';
import { Faker, en } from '@faker-js/faker';
import ForceTransferByManagement from 'App/Models/ForceTransferByManagement';
import Employee from 'App/Models/Employee';
import Placement from 'App/Models/Placement';

export default class extends BaseSeeder {

	public async run () {
		const employees = await Employee.all();
		const placements = await Placement.all();
		const faker = new Faker({ locale: [en] });
		await ForceTransferByManagement.createMany([
			{
				employeeId: employees![Math.floor(Math.random() * 10)].id,
				newPlacementId: placements![Math.floor(Math.random() * 10)].id,
				isPostpone: true,
				reason: faker.person.fullName(),
				transferDate: DateTime.fromJSDate(faker.date.past()),
				status: faker.person.fullName(),
				remark: faker.person.fullName(),
				active: true,
				createdBy: 'Admin'
			},
			{
				employeeId: employees![Math.floor(Math.random() * 10)].id,
				newPlacementId: placements![Math.floor(Math.random() * 10)].id,
				isPostpone: true,
				reason: faker.person.fullName(),
				transferDate: DateTime.fromJSDate(faker.date.past()),
				status: faker.person.fullName(),
				remark: faker.person.fullName(),
				active: true,
				createdBy: 'Admin'
			},
			{
				employeeId: employees![Math.floor(Math.random() * 10)].id,
				newPlacementId: placements![Math.floor(Math.random() * 10)].id,
				isPostpone: true,
				reason: faker.person.fullName(),
				transferDate: DateTime.fromJSDate(faker.date.past()),
				status: faker.person.fullName(),
				remark: faker.person.fullName(),
				active: true,
				createdBy: 'Admin'
			},
			{
				employeeId: employees![Math.floor(Math.random() * 10)].id,
				newPlacementId: placements![Math.floor(Math.random() * 10)].id,
				isPostpone: true,
				reason: faker.person.fullName(),
				transferDate: DateTime.fromJSDate(faker.date.past()),
				status: faker.person.fullName(),
				remark: faker.person.fullName(),
				active: true,
				createdBy: 'Admin'
			},
			{
				employeeId: employees![Math.floor(Math.random() * 10)].id,
				newPlacementId: placements![Math.floor(Math.random() * 10)].id,
				isPostpone: true,
				reason: faker.person.fullName(),
				transferDate: DateTime.fromJSDate(faker.date.past()),
				status: faker.person.fullName(),
				remark: faker.person.fullName(),
				active: true,
				createdBy: 'Admin'
			},
			{
				employeeId: employees![Math.floor(Math.random() * 10)].id,
				newPlacementId: placements![Math.floor(Math.random() * 10)].id,
				isPostpone: true,
				reason: faker.person.fullName(),
				transferDate: DateTime.fromJSDate(faker.date.past()),
				status: faker.person.fullName(),
				remark: faker.person.fullName(),
				active: true,
				createdBy: 'Admin'
			},
			{
				employeeId: employees![Math.floor(Math.random() * 10)].id,
				newPlacementId: placements![Math.floor(Math.random() * 10)].id,
				isPostpone: true,
				reason: faker.person.fullName(),
				transferDate: DateTime.fromJSDate(faker.date.past()),
				status: faker.person.fullName(),
				remark: faker.person.fullName(),
				active: true,
				createdBy: 'Admin'
			},
			{
				employeeId: employees![Math.floor(Math.random() * 10)].id,
				newPlacementId: placements![Math.floor(Math.random() * 10)].id,
				isPostpone: true,
				reason: faker.person.fullName(),
				transferDate: DateTime.fromJSDate(faker.date.past()),
				status: faker.person.fullName(),
				remark: faker.person.fullName(),
				active: true,
				createdBy: 'Admin'
			},
			{
				employeeId: employees![Math.floor(Math.random() * 10)].id,
				newPlacementId: placements![Math.floor(Math.random() * 10)].id,
				isPostpone: true,
				reason: faker.person.fullName(),
				transferDate: DateTime.fromJSDate(faker.date.past()),
				status: faker.person.fullName(),
				remark: faker.person.fullName(),
				active: true,
				createdBy: 'Admin'
			},
			{
				employeeId: employees![Math.floor(Math.random() * 10)].id,
				newPlacementId: placements![Math.floor(Math.random() * 10)].id,
				isPostpone: true,
				reason: faker.person.fullName(),
				transferDate: DateTime.fromJSDate(faker.date.past()),
				status: faker.person.fullName(),
				remark: faker.person.fullName(),
				active: true,
				createdBy: 'Admin'
			},
		])
	}
}
