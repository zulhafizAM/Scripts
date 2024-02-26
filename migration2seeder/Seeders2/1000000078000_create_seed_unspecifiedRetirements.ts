import BaseSeeder from '@ioc:Adonis/Lucid/Seeder';
import { DateTime } from 'luxon';
import { Faker, en } from '@faker-js/faker';
import UnspecifiedRetirement from 'App/Models/UnspecifiedRetirement';
import Employee from 'App/Models/Employee';
import Employee from 'App/Models/Employee';
import RetirementType from 'App/Models/RetirementType';
import UnspecifiedRetirementGroup from 'App/Models/UnspecifiedRetirementGroup';

export default class extends BaseSeeder {

	public async run () {
		const employees = await Employee.all();
		const employees = await Employee.all();
		const retirementTypes = await RetirementType.all();
		const unspecifiedRetirementGroups = await UnspecifiedRetirementGroup.all();
		const faker = new Faker({ locale: [en] });
		await UnspecifiedRetirement.createMany([
			{
				employeeId: employees![Math.floor(Math.random() * 10)].id,
				confirmerId: employees![Math.floor(Math.random() * 10)].id,
				retirementTypeId: retirementTypes![Math.floor(Math.random() * 10)].id,
				groupId: unspecifiedRetirementGroups![Math.floor(Math.random() * 10)].id,
				remark: faker.person.fullName(),
				confirmedDate: DateTime.fromJSDate(faker.date.past()),
				status: faker.person.fullName(),
				active: true,
				createdBy: 'Admin'
			},
			{
				employeeId: employees![Math.floor(Math.random() * 10)].id,
				confirmerId: employees![Math.floor(Math.random() * 10)].id,
				retirementTypeId: retirementTypes![Math.floor(Math.random() * 10)].id,
				groupId: unspecifiedRetirementGroups![Math.floor(Math.random() * 10)].id,
				remark: faker.person.fullName(),
				confirmedDate: DateTime.fromJSDate(faker.date.past()),
				status: faker.person.fullName(),
				active: true,
				createdBy: 'Admin'
			},
			{
				employeeId: employees![Math.floor(Math.random() * 10)].id,
				confirmerId: employees![Math.floor(Math.random() * 10)].id,
				retirementTypeId: retirementTypes![Math.floor(Math.random() * 10)].id,
				groupId: unspecifiedRetirementGroups![Math.floor(Math.random() * 10)].id,
				remark: faker.person.fullName(),
				confirmedDate: DateTime.fromJSDate(faker.date.past()),
				status: faker.person.fullName(),
				active: true,
				createdBy: 'Admin'
			},
			{
				employeeId: employees![Math.floor(Math.random() * 10)].id,
				confirmerId: employees![Math.floor(Math.random() * 10)].id,
				retirementTypeId: retirementTypes![Math.floor(Math.random() * 10)].id,
				groupId: unspecifiedRetirementGroups![Math.floor(Math.random() * 10)].id,
				remark: faker.person.fullName(),
				confirmedDate: DateTime.fromJSDate(faker.date.past()),
				status: faker.person.fullName(),
				active: true,
				createdBy: 'Admin'
			},
			{
				employeeId: employees![Math.floor(Math.random() * 10)].id,
				confirmerId: employees![Math.floor(Math.random() * 10)].id,
				retirementTypeId: retirementTypes![Math.floor(Math.random() * 10)].id,
				groupId: unspecifiedRetirementGroups![Math.floor(Math.random() * 10)].id,
				remark: faker.person.fullName(),
				confirmedDate: DateTime.fromJSDate(faker.date.past()),
				status: faker.person.fullName(),
				active: true,
				createdBy: 'Admin'
			},
			{
				employeeId: employees![Math.floor(Math.random() * 10)].id,
				confirmerId: employees![Math.floor(Math.random() * 10)].id,
				retirementTypeId: retirementTypes![Math.floor(Math.random() * 10)].id,
				groupId: unspecifiedRetirementGroups![Math.floor(Math.random() * 10)].id,
				remark: faker.person.fullName(),
				confirmedDate: DateTime.fromJSDate(faker.date.past()),
				status: faker.person.fullName(),
				active: true,
				createdBy: 'Admin'
			},
			{
				employeeId: employees![Math.floor(Math.random() * 10)].id,
				confirmerId: employees![Math.floor(Math.random() * 10)].id,
				retirementTypeId: retirementTypes![Math.floor(Math.random() * 10)].id,
				groupId: unspecifiedRetirementGroups![Math.floor(Math.random() * 10)].id,
				remark: faker.person.fullName(),
				confirmedDate: DateTime.fromJSDate(faker.date.past()),
				status: faker.person.fullName(),
				active: true,
				createdBy: 'Admin'
			},
			{
				employeeId: employees![Math.floor(Math.random() * 10)].id,
				confirmerId: employees![Math.floor(Math.random() * 10)].id,
				retirementTypeId: retirementTypes![Math.floor(Math.random() * 10)].id,
				groupId: unspecifiedRetirementGroups![Math.floor(Math.random() * 10)].id,
				remark: faker.person.fullName(),
				confirmedDate: DateTime.fromJSDate(faker.date.past()),
				status: faker.person.fullName(),
				active: true,
				createdBy: 'Admin'
			},
			{
				employeeId: employees![Math.floor(Math.random() * 10)].id,
				confirmerId: employees![Math.floor(Math.random() * 10)].id,
				retirementTypeId: retirementTypes![Math.floor(Math.random() * 10)].id,
				groupId: unspecifiedRetirementGroups![Math.floor(Math.random() * 10)].id,
				remark: faker.person.fullName(),
				confirmedDate: DateTime.fromJSDate(faker.date.past()),
				status: faker.person.fullName(),
				active: true,
				createdBy: 'Admin'
			},
			{
				employeeId: employees![Math.floor(Math.random() * 10)].id,
				confirmerId: employees![Math.floor(Math.random() * 10)].id,
				retirementTypeId: retirementTypes![Math.floor(Math.random() * 10)].id,
				groupId: unspecifiedRetirementGroups![Math.floor(Math.random() * 10)].id,
				remark: faker.person.fullName(),
				confirmedDate: DateTime.fromJSDate(faker.date.past()),
				status: faker.person.fullName(),
				active: true,
				createdBy: 'Admin'
			},
		])
	}
}
