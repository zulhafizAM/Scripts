import BaseSeeder from '@ioc:Adonis/Lucid/Seeder';
import { DateTime } from 'luxon';
import { Faker, en } from '@faker-js/faker';
import Employee from 'App/Models/Employee';
import PersonalDetail from 'App/Models/PersonalDetail';
import Role from 'App/Models/Role';
import Position from 'App/Models/Position';
import Grade from 'App/Models/Grade';
import ServiceType from 'App/Models/ServiceType';
import ServiceGroup from 'App/Models/ServiceGroup';
import Unit from 'App/Models/Unit';

export default class extends BaseSeeder {

	public async run () {
		const personalDetails = await PersonalDetail.all();
		const roles = await Role.all();
		const positions = await Position.all();
		const grades = await Grade.all();
		const serviceTypes = await ServiceType.all();
		const serviceGroups = await ServiceGroup.all();
		const units = await Unit.all();
		const faker = new Faker({ locale: [en] });
		await Employee.createMany([
			{
				personalDetailId: personalDetails![Math.floor(Math.random() * 10)].id,
				roleId: roles![Math.floor(Math.random() * 10)].id,
				positionId: positions![Math.floor(Math.random() * 10)].id,
				gradeId: grades![Math.floor(Math.random() * 10)].id,
				serviceTypeId: serviceTypes![Math.floor(Math.random() * 10)].id,
				serviceGroupId: serviceGroups![Math.floor(Math.random() * 10)].id,
				unitId: units![Math.floor(Math.random() * 10)].id,
				employeeNumber: faker.person.fullName(),
				firstServiceDate: DateTime.fromJSDate(faker.date.past()),
				currentServiceDate: DateTime.fromJSDate(faker.date.past()),
				placement: faker.person.fullName(),
				officeNumber: faker.person.fullName(),
				active: true,
				createdBy: 'Admin'
			},
			{
				personalDetailId: personalDetails![Math.floor(Math.random() * 10)].id,
				roleId: roles![Math.floor(Math.random() * 10)].id,
				positionId: positions![Math.floor(Math.random() * 10)].id,
				gradeId: grades![Math.floor(Math.random() * 10)].id,
				serviceTypeId: serviceTypes![Math.floor(Math.random() * 10)].id,
				serviceGroupId: serviceGroups![Math.floor(Math.random() * 10)].id,
				unitId: units![Math.floor(Math.random() * 10)].id,
				employeeNumber: faker.person.fullName(),
				firstServiceDate: DateTime.fromJSDate(faker.date.past()),
				currentServiceDate: DateTime.fromJSDate(faker.date.past()),
				placement: faker.person.fullName(),
				officeNumber: faker.person.fullName(),
				active: true,
				createdBy: 'Admin'
			},
			{
				personalDetailId: personalDetails![Math.floor(Math.random() * 10)].id,
				roleId: roles![Math.floor(Math.random() * 10)].id,
				positionId: positions![Math.floor(Math.random() * 10)].id,
				gradeId: grades![Math.floor(Math.random() * 10)].id,
				serviceTypeId: serviceTypes![Math.floor(Math.random() * 10)].id,
				serviceGroupId: serviceGroups![Math.floor(Math.random() * 10)].id,
				unitId: units![Math.floor(Math.random() * 10)].id,
				employeeNumber: faker.person.fullName(),
				firstServiceDate: DateTime.fromJSDate(faker.date.past()),
				currentServiceDate: DateTime.fromJSDate(faker.date.past()),
				placement: faker.person.fullName(),
				officeNumber: faker.person.fullName(),
				active: true,
				createdBy: 'Admin'
			},
			{
				personalDetailId: personalDetails![Math.floor(Math.random() * 10)].id,
				roleId: roles![Math.floor(Math.random() * 10)].id,
				positionId: positions![Math.floor(Math.random() * 10)].id,
				gradeId: grades![Math.floor(Math.random() * 10)].id,
				serviceTypeId: serviceTypes![Math.floor(Math.random() * 10)].id,
				serviceGroupId: serviceGroups![Math.floor(Math.random() * 10)].id,
				unitId: units![Math.floor(Math.random() * 10)].id,
				employeeNumber: faker.person.fullName(),
				firstServiceDate: DateTime.fromJSDate(faker.date.past()),
				currentServiceDate: DateTime.fromJSDate(faker.date.past()),
				placement: faker.person.fullName(),
				officeNumber: faker.person.fullName(),
				active: true,
				createdBy: 'Admin'
			},
			{
				personalDetailId: personalDetails![Math.floor(Math.random() * 10)].id,
				roleId: roles![Math.floor(Math.random() * 10)].id,
				positionId: positions![Math.floor(Math.random() * 10)].id,
				gradeId: grades![Math.floor(Math.random() * 10)].id,
				serviceTypeId: serviceTypes![Math.floor(Math.random() * 10)].id,
				serviceGroupId: serviceGroups![Math.floor(Math.random() * 10)].id,
				unitId: units![Math.floor(Math.random() * 10)].id,
				employeeNumber: faker.person.fullName(),
				firstServiceDate: DateTime.fromJSDate(faker.date.past()),
				currentServiceDate: DateTime.fromJSDate(faker.date.past()),
				placement: faker.person.fullName(),
				officeNumber: faker.person.fullName(),
				active: true,
				createdBy: 'Admin'
			},
			{
				personalDetailId: personalDetails![Math.floor(Math.random() * 10)].id,
				roleId: roles![Math.floor(Math.random() * 10)].id,
				positionId: positions![Math.floor(Math.random() * 10)].id,
				gradeId: grades![Math.floor(Math.random() * 10)].id,
				serviceTypeId: serviceTypes![Math.floor(Math.random() * 10)].id,
				serviceGroupId: serviceGroups![Math.floor(Math.random() * 10)].id,
				unitId: units![Math.floor(Math.random() * 10)].id,
				employeeNumber: faker.person.fullName(),
				firstServiceDate: DateTime.fromJSDate(faker.date.past()),
				currentServiceDate: DateTime.fromJSDate(faker.date.past()),
				placement: faker.person.fullName(),
				officeNumber: faker.person.fullName(),
				active: true,
				createdBy: 'Admin'
			},
			{
				personalDetailId: personalDetails![Math.floor(Math.random() * 10)].id,
				roleId: roles![Math.floor(Math.random() * 10)].id,
				positionId: positions![Math.floor(Math.random() * 10)].id,
				gradeId: grades![Math.floor(Math.random() * 10)].id,
				serviceTypeId: serviceTypes![Math.floor(Math.random() * 10)].id,
				serviceGroupId: serviceGroups![Math.floor(Math.random() * 10)].id,
				unitId: units![Math.floor(Math.random() * 10)].id,
				employeeNumber: faker.person.fullName(),
				firstServiceDate: DateTime.fromJSDate(faker.date.past()),
				currentServiceDate: DateTime.fromJSDate(faker.date.past()),
				placement: faker.person.fullName(),
				officeNumber: faker.person.fullName(),
				active: true,
				createdBy: 'Admin'
			},
			{
				personalDetailId: personalDetails![Math.floor(Math.random() * 10)].id,
				roleId: roles![Math.floor(Math.random() * 10)].id,
				positionId: positions![Math.floor(Math.random() * 10)].id,
				gradeId: grades![Math.floor(Math.random() * 10)].id,
				serviceTypeId: serviceTypes![Math.floor(Math.random() * 10)].id,
				serviceGroupId: serviceGroups![Math.floor(Math.random() * 10)].id,
				unitId: units![Math.floor(Math.random() * 10)].id,
				employeeNumber: faker.person.fullName(),
				firstServiceDate: DateTime.fromJSDate(faker.date.past()),
				currentServiceDate: DateTime.fromJSDate(faker.date.past()),
				placement: faker.person.fullName(),
				officeNumber: faker.person.fullName(),
				active: true,
				createdBy: 'Admin'
			},
			{
				personalDetailId: personalDetails![Math.floor(Math.random() * 10)].id,
				roleId: roles![Math.floor(Math.random() * 10)].id,
				positionId: positions![Math.floor(Math.random() * 10)].id,
				gradeId: grades![Math.floor(Math.random() * 10)].id,
				serviceTypeId: serviceTypes![Math.floor(Math.random() * 10)].id,
				serviceGroupId: serviceGroups![Math.floor(Math.random() * 10)].id,
				unitId: units![Math.floor(Math.random() * 10)].id,
				employeeNumber: faker.person.fullName(),
				firstServiceDate: DateTime.fromJSDate(faker.date.past()),
				currentServiceDate: DateTime.fromJSDate(faker.date.past()),
				placement: faker.person.fullName(),
				officeNumber: faker.person.fullName(),
				active: true,
				createdBy: 'Admin'
			},
			{
				personalDetailId: personalDetails![Math.floor(Math.random() * 10)].id,
				roleId: roles![Math.floor(Math.random() * 10)].id,
				positionId: positions![Math.floor(Math.random() * 10)].id,
				gradeId: grades![Math.floor(Math.random() * 10)].id,
				serviceTypeId: serviceTypes![Math.floor(Math.random() * 10)].id,
				serviceGroupId: serviceGroups![Math.floor(Math.random() * 10)].id,
				unitId: units![Math.floor(Math.random() * 10)].id,
				employeeNumber: faker.person.fullName(),
				firstServiceDate: DateTime.fromJSDate(faker.date.past()),
				currentServiceDate: DateTime.fromJSDate(faker.date.past()),
				placement: faker.person.fullName(),
				officeNumber: faker.person.fullName(),
				active: true,
				createdBy: 'Admin'
			},
		])
	}
}
