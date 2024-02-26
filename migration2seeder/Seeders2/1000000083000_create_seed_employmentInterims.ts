import BaseSeeder from '@ioc:Adonis/Lucid/Seeder';
import { DateTime } from 'luxon';
import { Faker, en } from '@faker-js/faker';
import EmploymentInterim from 'App/Models/EmploymentInterim';
import Employee from 'App/Models/Employee';
import Position from 'App/Models/Position';
import Grade from 'App/Models/Grade';
import Department from 'App/Models/Department';
import Placement from 'App/Models/Placement';

export default class extends BaseSeeder {

	public async run () {
		const employees = await Employee.all();
		const positions = await Position.all();
		const grades = await Grade.all();
		const departments = await Department.all();
		const placements = await Placement.all();
		const faker = new Faker({ locale: [en] });
		await EmploymentInterim.createMany([
			{
				employeeId: employees![Math.floor(Math.random() * 10)].id,
				positionId: positions![Math.floor(Math.random() * 10)].id,
				gradeId: grades![Math.floor(Math.random() * 10)].id,
				departmentId: departments![Math.floor(Math.random() * 10)].id,
				placementId: placements![Math.floor(Math.random() * 10)].id,
				applicationDate: DateTime.fromJSDate(faker.date.past()),
				referenceNumber: faker.person.fullName(),
				startDate: DateTime.fromJSDate(faker.date.past()),
				endDate: DateTime.fromJSDate(faker.date.past()),
				duration: faker.number.int({ max: 10 }),
				status: faker.person.fullName(),
				remark: faker.person.fullName(),
				reason: faker.person.fullName(),
				active: true,
				createdBy: 'Admin'
			},
			{
				employeeId: employees![Math.floor(Math.random() * 10)].id,
				positionId: positions![Math.floor(Math.random() * 10)].id,
				gradeId: grades![Math.floor(Math.random() * 10)].id,
				departmentId: departments![Math.floor(Math.random() * 10)].id,
				placementId: placements![Math.floor(Math.random() * 10)].id,
				applicationDate: DateTime.fromJSDate(faker.date.past()),
				referenceNumber: faker.person.fullName(),
				startDate: DateTime.fromJSDate(faker.date.past()),
				endDate: DateTime.fromJSDate(faker.date.past()),
				duration: faker.number.int({ max: 10 }),
				status: faker.person.fullName(),
				remark: faker.person.fullName(),
				reason: faker.person.fullName(),
				active: true,
				createdBy: 'Admin'
			},
			{
				employeeId: employees![Math.floor(Math.random() * 10)].id,
				positionId: positions![Math.floor(Math.random() * 10)].id,
				gradeId: grades![Math.floor(Math.random() * 10)].id,
				departmentId: departments![Math.floor(Math.random() * 10)].id,
				placementId: placements![Math.floor(Math.random() * 10)].id,
				applicationDate: DateTime.fromJSDate(faker.date.past()),
				referenceNumber: faker.person.fullName(),
				startDate: DateTime.fromJSDate(faker.date.past()),
				endDate: DateTime.fromJSDate(faker.date.past()),
				duration: faker.number.int({ max: 10 }),
				status: faker.person.fullName(),
				remark: faker.person.fullName(),
				reason: faker.person.fullName(),
				active: true,
				createdBy: 'Admin'
			},
			{
				employeeId: employees![Math.floor(Math.random() * 10)].id,
				positionId: positions![Math.floor(Math.random() * 10)].id,
				gradeId: grades![Math.floor(Math.random() * 10)].id,
				departmentId: departments![Math.floor(Math.random() * 10)].id,
				placementId: placements![Math.floor(Math.random() * 10)].id,
				applicationDate: DateTime.fromJSDate(faker.date.past()),
				referenceNumber: faker.person.fullName(),
				startDate: DateTime.fromJSDate(faker.date.past()),
				endDate: DateTime.fromJSDate(faker.date.past()),
				duration: faker.number.int({ max: 10 }),
				status: faker.person.fullName(),
				remark: faker.person.fullName(),
				reason: faker.person.fullName(),
				active: true,
				createdBy: 'Admin'
			},
			{
				employeeId: employees![Math.floor(Math.random() * 10)].id,
				positionId: positions![Math.floor(Math.random() * 10)].id,
				gradeId: grades![Math.floor(Math.random() * 10)].id,
				departmentId: departments![Math.floor(Math.random() * 10)].id,
				placementId: placements![Math.floor(Math.random() * 10)].id,
				applicationDate: DateTime.fromJSDate(faker.date.past()),
				referenceNumber: faker.person.fullName(),
				startDate: DateTime.fromJSDate(faker.date.past()),
				endDate: DateTime.fromJSDate(faker.date.past()),
				duration: faker.number.int({ max: 10 }),
				status: faker.person.fullName(),
				remark: faker.person.fullName(),
				reason: faker.person.fullName(),
				active: true,
				createdBy: 'Admin'
			},
			{
				employeeId: employees![Math.floor(Math.random() * 10)].id,
				positionId: positions![Math.floor(Math.random() * 10)].id,
				gradeId: grades![Math.floor(Math.random() * 10)].id,
				departmentId: departments![Math.floor(Math.random() * 10)].id,
				placementId: placements![Math.floor(Math.random() * 10)].id,
				applicationDate: DateTime.fromJSDate(faker.date.past()),
				referenceNumber: faker.person.fullName(),
				startDate: DateTime.fromJSDate(faker.date.past()),
				endDate: DateTime.fromJSDate(faker.date.past()),
				duration: faker.number.int({ max: 10 }),
				status: faker.person.fullName(),
				remark: faker.person.fullName(),
				reason: faker.person.fullName(),
				active: true,
				createdBy: 'Admin'
			},
			{
				employeeId: employees![Math.floor(Math.random() * 10)].id,
				positionId: positions![Math.floor(Math.random() * 10)].id,
				gradeId: grades![Math.floor(Math.random() * 10)].id,
				departmentId: departments![Math.floor(Math.random() * 10)].id,
				placementId: placements![Math.floor(Math.random() * 10)].id,
				applicationDate: DateTime.fromJSDate(faker.date.past()),
				referenceNumber: faker.person.fullName(),
				startDate: DateTime.fromJSDate(faker.date.past()),
				endDate: DateTime.fromJSDate(faker.date.past()),
				duration: faker.number.int({ max: 10 }),
				status: faker.person.fullName(),
				remark: faker.person.fullName(),
				reason: faker.person.fullName(),
				active: true,
				createdBy: 'Admin'
			},
			{
				employeeId: employees![Math.floor(Math.random() * 10)].id,
				positionId: positions![Math.floor(Math.random() * 10)].id,
				gradeId: grades![Math.floor(Math.random() * 10)].id,
				departmentId: departments![Math.floor(Math.random() * 10)].id,
				placementId: placements![Math.floor(Math.random() * 10)].id,
				applicationDate: DateTime.fromJSDate(faker.date.past()),
				referenceNumber: faker.person.fullName(),
				startDate: DateTime.fromJSDate(faker.date.past()),
				endDate: DateTime.fromJSDate(faker.date.past()),
				duration: faker.number.int({ max: 10 }),
				status: faker.person.fullName(),
				remark: faker.person.fullName(),
				reason: faker.person.fullName(),
				active: true,
				createdBy: 'Admin'
			},
			{
				employeeId: employees![Math.floor(Math.random() * 10)].id,
				positionId: positions![Math.floor(Math.random() * 10)].id,
				gradeId: grades![Math.floor(Math.random() * 10)].id,
				departmentId: departments![Math.floor(Math.random() * 10)].id,
				placementId: placements![Math.floor(Math.random() * 10)].id,
				applicationDate: DateTime.fromJSDate(faker.date.past()),
				referenceNumber: faker.person.fullName(),
				startDate: DateTime.fromJSDate(faker.date.past()),
				endDate: DateTime.fromJSDate(faker.date.past()),
				duration: faker.number.int({ max: 10 }),
				status: faker.person.fullName(),
				remark: faker.person.fullName(),
				reason: faker.person.fullName(),
				active: true,
				createdBy: 'Admin'
			},
			{
				employeeId: employees![Math.floor(Math.random() * 10)].id,
				positionId: positions![Math.floor(Math.random() * 10)].id,
				gradeId: grades![Math.floor(Math.random() * 10)].id,
				departmentId: departments![Math.floor(Math.random() * 10)].id,
				placementId: placements![Math.floor(Math.random() * 10)].id,
				applicationDate: DateTime.fromJSDate(faker.date.past()),
				referenceNumber: faker.person.fullName(),
				startDate: DateTime.fromJSDate(faker.date.past()),
				endDate: DateTime.fromJSDate(faker.date.past()),
				duration: faker.number.int({ max: 10 }),
				status: faker.person.fullName(),
				remark: faker.person.fullName(),
				reason: faker.person.fullName(),
				active: true,
				createdBy: 'Admin'
			},
		])
	}
}
