import BaseSeeder from '@ioc:Adonis/Lucid/Seeder';
import { DateTime } from 'luxon';
import { Faker, en } from '@faker-js/faker';
import ForcedByDirectorPostponeProcess from 'App/Models/ForcedByDirectorPostponeProcess';
import ForceTransferByDirector from 'App/Models/ForceTransferByDirector';
import Employee from 'App/Models/Employee';

export default class extends BaseSeeder {

	public async run () {
		const forceTransferByDirectors = await ForceTransferByDirector.all();
		const employees = await Employee.all();
		const faker = new Faker({ locale: [en] });
		await ForcedByDirectorPostponeProcess.createMany([
			{
				forceId: forceTransferByDirectors![Math.floor(Math.random() * 10)].id,
				newTransferDate: DateTime.fromJSDate(faker.date.past()),
				postponeReason: faker.person.fullName(),
				approverId: employees![Math.floor(Math.random() * 10)].id,
				approvedStatus: faker.person.firstName(),
				approvedRemark: faker.commerce.productDescription(),
				approvedDate: DateTime.fromJSDate(faker.date.past()),
				active: true,
				createdBy: 'Admin'
			},
			{
				forceId: forceTransferByDirectors![Math.floor(Math.random() * 10)].id,
				newTransferDate: DateTime.fromJSDate(faker.date.past()),
				postponeReason: faker.person.fullName(),
				approverId: employees![Math.floor(Math.random() * 10)].id,
				approvedStatus: faker.person.firstName(),
				approvedRemark: faker.commerce.productDescription(),
				approvedDate: DateTime.fromJSDate(faker.date.past()),
				active: true,
				createdBy: 'Admin'
			},
			{
				forceId: forceTransferByDirectors![Math.floor(Math.random() * 10)].id,
				newTransferDate: DateTime.fromJSDate(faker.date.past()),
				postponeReason: faker.person.fullName(),
				approverId: employees![Math.floor(Math.random() * 10)].id,
				approvedStatus: faker.person.firstName(),
				approvedRemark: faker.commerce.productDescription(),
				approvedDate: DateTime.fromJSDate(faker.date.past()),
				active: true,
				createdBy: 'Admin'
			},
			{
				forceId: forceTransferByDirectors![Math.floor(Math.random() * 10)].id,
				newTransferDate: DateTime.fromJSDate(faker.date.past()),
				postponeReason: faker.person.fullName(),
				approverId: employees![Math.floor(Math.random() * 10)].id,
				approvedStatus: faker.person.firstName(),
				approvedRemark: faker.commerce.productDescription(),
				approvedDate: DateTime.fromJSDate(faker.date.past()),
				active: true,
				createdBy: 'Admin'
			},
			{
				forceId: forceTransferByDirectors![Math.floor(Math.random() * 10)].id,
				newTransferDate: DateTime.fromJSDate(faker.date.past()),
				postponeReason: faker.person.fullName(),
				approverId: employees![Math.floor(Math.random() * 10)].id,
				approvedStatus: faker.person.firstName(),
				approvedRemark: faker.commerce.productDescription(),
				approvedDate: DateTime.fromJSDate(faker.date.past()),
				active: true,
				createdBy: 'Admin'
			},
			{
				forceId: forceTransferByDirectors![Math.floor(Math.random() * 10)].id,
				newTransferDate: DateTime.fromJSDate(faker.date.past()),
				postponeReason: faker.person.fullName(),
				approverId: employees![Math.floor(Math.random() * 10)].id,
				approvedStatus: faker.person.firstName(),
				approvedRemark: faker.commerce.productDescription(),
				approvedDate: DateTime.fromJSDate(faker.date.past()),
				active: true,
				createdBy: 'Admin'
			},
			{
				forceId: forceTransferByDirectors![Math.floor(Math.random() * 10)].id,
				newTransferDate: DateTime.fromJSDate(faker.date.past()),
				postponeReason: faker.person.fullName(),
				approverId: employees![Math.floor(Math.random() * 10)].id,
				approvedStatus: faker.person.firstName(),
				approvedRemark: faker.commerce.productDescription(),
				approvedDate: DateTime.fromJSDate(faker.date.past()),
				active: true,
				createdBy: 'Admin'
			},
			{
				forceId: forceTransferByDirectors![Math.floor(Math.random() * 10)].id,
				newTransferDate: DateTime.fromJSDate(faker.date.past()),
				postponeReason: faker.person.fullName(),
				approverId: employees![Math.floor(Math.random() * 10)].id,
				approvedStatus: faker.person.firstName(),
				approvedRemark: faker.commerce.productDescription(),
				approvedDate: DateTime.fromJSDate(faker.date.past()),
				active: true,
				createdBy: 'Admin'
			},
			{
				forceId: forceTransferByDirectors![Math.floor(Math.random() * 10)].id,
				newTransferDate: DateTime.fromJSDate(faker.date.past()),
				postponeReason: faker.person.fullName(),
				approverId: employees![Math.floor(Math.random() * 10)].id,
				approvedStatus: faker.person.firstName(),
				approvedRemark: faker.commerce.productDescription(),
				approvedDate: DateTime.fromJSDate(faker.date.past()),
				active: true,
				createdBy: 'Admin'
			},
			{
				forceId: forceTransferByDirectors![Math.floor(Math.random() * 10)].id,
				newTransferDate: DateTime.fromJSDate(faker.date.past()),
				postponeReason: faker.person.fullName(),
				approverId: employees![Math.floor(Math.random() * 10)].id,
				approvedStatus: faker.person.firstName(),
				approvedRemark: faker.commerce.productDescription(),
				approvedDate: DateTime.fromJSDate(faker.date.past()),
				active: true,
				createdBy: 'Admin'
			},
		])
	}
}
