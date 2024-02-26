import BaseSeeder from '@ioc:Adonis/Lucid/Seeder';
import { DateTime } from 'luxon';
import { Faker, en } from '@faker-js/faker';
import ApplicationInterim from 'App/Models/ApplicationInterim';
import EmploymentInterim from 'App/Models/EmploymentInterim';

export default class extends BaseSeeder {

	public async run () {
		const employmentInterims = await EmploymentInterim.all();
		const faker = new Faker({ locale: [en] });
		await ApplicationInterim.createMany([
			{
				interimId: employmentInterims![Math.floor(Math.random() * 10)].id,
				isSkipSeniority: true,
				skippingRemark: faker.person.fullName(),
				active: true,
				createdBy: 'Admin'
			},
			{
				interimId: employmentInterims![Math.floor(Math.random() * 10)].id,
				isSkipSeniority: true,
				skippingRemark: faker.person.fullName(),
				active: true,
				createdBy: 'Admin'
			},
			{
				interimId: employmentInterims![Math.floor(Math.random() * 10)].id,
				isSkipSeniority: true,
				skippingRemark: faker.person.fullName(),
				active: true,
				createdBy: 'Admin'
			},
			{
				interimId: employmentInterims![Math.floor(Math.random() * 10)].id,
				isSkipSeniority: true,
				skippingRemark: faker.person.fullName(),
				active: true,
				createdBy: 'Admin'
			},
			{
				interimId: employmentInterims![Math.floor(Math.random() * 10)].id,
				isSkipSeniority: true,
				skippingRemark: faker.person.fullName(),
				active: true,
				createdBy: 'Admin'
			},
			{
				interimId: employmentInterims![Math.floor(Math.random() * 10)].id,
				isSkipSeniority: true,
				skippingRemark: faker.person.fullName(),
				active: true,
				createdBy: 'Admin'
			},
			{
				interimId: employmentInterims![Math.floor(Math.random() * 10)].id,
				isSkipSeniority: true,
				skippingRemark: faker.person.fullName(),
				active: true,
				createdBy: 'Admin'
			},
			{
				interimId: employmentInterims![Math.floor(Math.random() * 10)].id,
				isSkipSeniority: true,
				skippingRemark: faker.person.fullName(),
				active: true,
				createdBy: 'Admin'
			},
			{
				interimId: employmentInterims![Math.floor(Math.random() * 10)].id,
				isSkipSeniority: true,
				skippingRemark: faker.person.fullName(),
				active: true,
				createdBy: 'Admin'
			},
			{
				interimId: employmentInterims![Math.floor(Math.random() * 10)].id,
				isSkipSeniority: true,
				skippingRemark: faker.person.fullName(),
				active: true,
				createdBy: 'Admin'
			},
		])
	}
}
