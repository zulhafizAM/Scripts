import BaseSeeder from '@ioc:Adonis/Lucid/Seeder';
import { DateTime } from 'luxon';
import { Faker, en } from '@faker-js/faker';
import ForcedRetirementProcess from 'App/Models/ForcedRetirementProcess';
import ForcedRetirement from 'App/Models/ForcedRetirement';
import Employee from 'App/Models/Employee';

export default class extends BaseSeeder {

	public async run () {
		const forcedRetirements = await ForcedRetirement.all();
		const employees = await Employee.all();
		const faker = new Faker({ locale: [en] });
		await ForcedRetirementProcess.createMany([
			{
				forcedId: forcedRetirements![Math.floor(Math.random() * 10)].id,
				certifierId: employees![Math.floor(Math.random() * 10)].id,
				certifiedStatus: faker.person.firstName(),
				certifiedRemark: faker.commerce.productDescription(),
				certifiedDate: DateTime.fromJSDate(faker.date.past()),
				confirmerId: employees![Math.floor(Math.random() * 10)].id,
				confirmedStatus: faker.person.firstName(),
				confirmedRemark: faker.commerce.productDescription(),
				confirmedDate: DateTime.fromJSDate(faker.date.past()),
				active: true,
				createdBy: 'Admin'
			},
			{
				forcedId: forcedRetirements![Math.floor(Math.random() * 10)].id,
				certifierId: employees![Math.floor(Math.random() * 10)].id,
				certifiedStatus: faker.person.firstName(),
				certifiedRemark: faker.commerce.productDescription(),
				certifiedDate: DateTime.fromJSDate(faker.date.past()),
				confirmerId: employees![Math.floor(Math.random() * 10)].id,
				confirmedStatus: faker.person.firstName(),
				confirmedRemark: faker.commerce.productDescription(),
				confirmedDate: DateTime.fromJSDate(faker.date.past()),
				active: true,
				createdBy: 'Admin'
			},
			{
				forcedId: forcedRetirements![Math.floor(Math.random() * 10)].id,
				certifierId: employees![Math.floor(Math.random() * 10)].id,
				certifiedStatus: faker.person.firstName(),
				certifiedRemark: faker.commerce.productDescription(),
				certifiedDate: DateTime.fromJSDate(faker.date.past()),
				confirmerId: employees![Math.floor(Math.random() * 10)].id,
				confirmedStatus: faker.person.firstName(),
				confirmedRemark: faker.commerce.productDescription(),
				confirmedDate: DateTime.fromJSDate(faker.date.past()),
				active: true,
				createdBy: 'Admin'
			},
			{
				forcedId: forcedRetirements![Math.floor(Math.random() * 10)].id,
				certifierId: employees![Math.floor(Math.random() * 10)].id,
				certifiedStatus: faker.person.firstName(),
				certifiedRemark: faker.commerce.productDescription(),
				certifiedDate: DateTime.fromJSDate(faker.date.past()),
				confirmerId: employees![Math.floor(Math.random() * 10)].id,
				confirmedStatus: faker.person.firstName(),
				confirmedRemark: faker.commerce.productDescription(),
				confirmedDate: DateTime.fromJSDate(faker.date.past()),
				active: true,
				createdBy: 'Admin'
			},
			{
				forcedId: forcedRetirements![Math.floor(Math.random() * 10)].id,
				certifierId: employees![Math.floor(Math.random() * 10)].id,
				certifiedStatus: faker.person.firstName(),
				certifiedRemark: faker.commerce.productDescription(),
				certifiedDate: DateTime.fromJSDate(faker.date.past()),
				confirmerId: employees![Math.floor(Math.random() * 10)].id,
				confirmedStatus: faker.person.firstName(),
				confirmedRemark: faker.commerce.productDescription(),
				confirmedDate: DateTime.fromJSDate(faker.date.past()),
				active: true,
				createdBy: 'Admin'
			},
			{
				forcedId: forcedRetirements![Math.floor(Math.random() * 10)].id,
				certifierId: employees![Math.floor(Math.random() * 10)].id,
				certifiedStatus: faker.person.firstName(),
				certifiedRemark: faker.commerce.productDescription(),
				certifiedDate: DateTime.fromJSDate(faker.date.past()),
				confirmerId: employees![Math.floor(Math.random() * 10)].id,
				confirmedStatus: faker.person.firstName(),
				confirmedRemark: faker.commerce.productDescription(),
				confirmedDate: DateTime.fromJSDate(faker.date.past()),
				active: true,
				createdBy: 'Admin'
			},
			{
				forcedId: forcedRetirements![Math.floor(Math.random() * 10)].id,
				certifierId: employees![Math.floor(Math.random() * 10)].id,
				certifiedStatus: faker.person.firstName(),
				certifiedRemark: faker.commerce.productDescription(),
				certifiedDate: DateTime.fromJSDate(faker.date.past()),
				confirmerId: employees![Math.floor(Math.random() * 10)].id,
				confirmedStatus: faker.person.firstName(),
				confirmedRemark: faker.commerce.productDescription(),
				confirmedDate: DateTime.fromJSDate(faker.date.past()),
				active: true,
				createdBy: 'Admin'
			},
			{
				forcedId: forcedRetirements![Math.floor(Math.random() * 10)].id,
				certifierId: employees![Math.floor(Math.random() * 10)].id,
				certifiedStatus: faker.person.firstName(),
				certifiedRemark: faker.commerce.productDescription(),
				certifiedDate: DateTime.fromJSDate(faker.date.past()),
				confirmerId: employees![Math.floor(Math.random() * 10)].id,
				confirmedStatus: faker.person.firstName(),
				confirmedRemark: faker.commerce.productDescription(),
				confirmedDate: DateTime.fromJSDate(faker.date.past()),
				active: true,
				createdBy: 'Admin'
			},
			{
				forcedId: forcedRetirements![Math.floor(Math.random() * 10)].id,
				certifierId: employees![Math.floor(Math.random() * 10)].id,
				certifiedStatus: faker.person.firstName(),
				certifiedRemark: faker.commerce.productDescription(),
				certifiedDate: DateTime.fromJSDate(faker.date.past()),
				confirmerId: employees![Math.floor(Math.random() * 10)].id,
				confirmedStatus: faker.person.firstName(),
				confirmedRemark: faker.commerce.productDescription(),
				confirmedDate: DateTime.fromJSDate(faker.date.past()),
				active: true,
				createdBy: 'Admin'
			},
			{
				forcedId: forcedRetirements![Math.floor(Math.random() * 10)].id,
				certifierId: employees![Math.floor(Math.random() * 10)].id,
				certifiedStatus: faker.person.firstName(),
				certifiedRemark: faker.commerce.productDescription(),
				certifiedDate: DateTime.fromJSDate(faker.date.past()),
				confirmerId: employees![Math.floor(Math.random() * 10)].id,
				confirmedStatus: faker.person.firstName(),
				confirmedRemark: faker.commerce.productDescription(),
				confirmedDate: DateTime.fromJSDate(faker.date.past()),
				active: true,
				createdBy: 'Admin'
			},
		])
	}
}
