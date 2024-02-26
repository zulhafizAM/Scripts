import BaseSeeder from '@ioc:Adonis/Lucid/Seeder';
import { DateTime } from 'luxon';
import { Faker, en } from '@faker-js/faker';
import MedicalClaimProcess from 'App/Models/MedicalClaimProcess';
import MedicalClaim from 'App/Models/MedicalClaim';
import Employee from 'App/Models/Employee';

export default class extends BaseSeeder {

	public async run () {
		const medicalClaims = await MedicalClaim.all();
		const employees = await Employee.all();
		const faker = new Faker({ locale: [en] });
		await MedicalClaimProcess.createMany([
			{
				claimId: medicalClaims![Math.floor(Math.random() * 10)].id,
				secretaryApproverId: employees![Math.floor(Math.random() * 10)].id,
				secretaryApprovedStatus: faker.person.firstName(),
				secretaryApprovedRemark: faker.commerce.productDescription(),
				secretaryApprovedDate: DateTime.fromJSDate(faker.date.past()),
				supporterId: employees![Math.floor(Math.random() * 10)].id,
				supportedStatus: faker.person.firstName(),
				supportedRemark: faker.commerce.productDescription(),
				supportedDate: DateTime.fromJSDate(faker.date.past()),
				appointedApproverId: employees![Math.floor(Math.random() * 10)].id,
				appointedApprovedStatus: faker.person.firstName(),
				appointedApprovedRemark: faker.commerce.productDescription(),
				appointedApprovedDate: DateTime.fromJSDate(faker.date.past()),
				active: true,
				createdBy: 'Admin'
			},
			{
				claimId: medicalClaims![Math.floor(Math.random() * 10)].id,
				secretaryApproverId: employees![Math.floor(Math.random() * 10)].id,
				secretaryApprovedStatus: faker.person.firstName(),
				secretaryApprovedRemark: faker.commerce.productDescription(),
				secretaryApprovedDate: DateTime.fromJSDate(faker.date.past()),
				supporterId: employees![Math.floor(Math.random() * 10)].id,
				supportedStatus: faker.person.firstName(),
				supportedRemark: faker.commerce.productDescription(),
				supportedDate: DateTime.fromJSDate(faker.date.past()),
				appointedApproverId: employees![Math.floor(Math.random() * 10)].id,
				appointedApprovedStatus: faker.person.firstName(),
				appointedApprovedRemark: faker.commerce.productDescription(),
				appointedApprovedDate: DateTime.fromJSDate(faker.date.past()),
				active: true,
				createdBy: 'Admin'
			},
			{
				claimId: medicalClaims![Math.floor(Math.random() * 10)].id,
				secretaryApproverId: employees![Math.floor(Math.random() * 10)].id,
				secretaryApprovedStatus: faker.person.firstName(),
				secretaryApprovedRemark: faker.commerce.productDescription(),
				secretaryApprovedDate: DateTime.fromJSDate(faker.date.past()),
				supporterId: employees![Math.floor(Math.random() * 10)].id,
				supportedStatus: faker.person.firstName(),
				supportedRemark: faker.commerce.productDescription(),
				supportedDate: DateTime.fromJSDate(faker.date.past()),
				appointedApproverId: employees![Math.floor(Math.random() * 10)].id,
				appointedApprovedStatus: faker.person.firstName(),
				appointedApprovedRemark: faker.commerce.productDescription(),
				appointedApprovedDate: DateTime.fromJSDate(faker.date.past()),
				active: true,
				createdBy: 'Admin'
			},
			{
				claimId: medicalClaims![Math.floor(Math.random() * 10)].id,
				secretaryApproverId: employees![Math.floor(Math.random() * 10)].id,
				secretaryApprovedStatus: faker.person.firstName(),
				secretaryApprovedRemark: faker.commerce.productDescription(),
				secretaryApprovedDate: DateTime.fromJSDate(faker.date.past()),
				supporterId: employees![Math.floor(Math.random() * 10)].id,
				supportedStatus: faker.person.firstName(),
				supportedRemark: faker.commerce.productDescription(),
				supportedDate: DateTime.fromJSDate(faker.date.past()),
				appointedApproverId: employees![Math.floor(Math.random() * 10)].id,
				appointedApprovedStatus: faker.person.firstName(),
				appointedApprovedRemark: faker.commerce.productDescription(),
				appointedApprovedDate: DateTime.fromJSDate(faker.date.past()),
				active: true,
				createdBy: 'Admin'
			},
			{
				claimId: medicalClaims![Math.floor(Math.random() * 10)].id,
				secretaryApproverId: employees![Math.floor(Math.random() * 10)].id,
				secretaryApprovedStatus: faker.person.firstName(),
				secretaryApprovedRemark: faker.commerce.productDescription(),
				secretaryApprovedDate: DateTime.fromJSDate(faker.date.past()),
				supporterId: employees![Math.floor(Math.random() * 10)].id,
				supportedStatus: faker.person.firstName(),
				supportedRemark: faker.commerce.productDescription(),
				supportedDate: DateTime.fromJSDate(faker.date.past()),
				appointedApproverId: employees![Math.floor(Math.random() * 10)].id,
				appointedApprovedStatus: faker.person.firstName(),
				appointedApprovedRemark: faker.commerce.productDescription(),
				appointedApprovedDate: DateTime.fromJSDate(faker.date.past()),
				active: true,
				createdBy: 'Admin'
			},
			{
				claimId: medicalClaims![Math.floor(Math.random() * 10)].id,
				secretaryApproverId: employees![Math.floor(Math.random() * 10)].id,
				secretaryApprovedStatus: faker.person.firstName(),
				secretaryApprovedRemark: faker.commerce.productDescription(),
				secretaryApprovedDate: DateTime.fromJSDate(faker.date.past()),
				supporterId: employees![Math.floor(Math.random() * 10)].id,
				supportedStatus: faker.person.firstName(),
				supportedRemark: faker.commerce.productDescription(),
				supportedDate: DateTime.fromJSDate(faker.date.past()),
				appointedApproverId: employees![Math.floor(Math.random() * 10)].id,
				appointedApprovedStatus: faker.person.firstName(),
				appointedApprovedRemark: faker.commerce.productDescription(),
				appointedApprovedDate: DateTime.fromJSDate(faker.date.past()),
				active: true,
				createdBy: 'Admin'
			},
			{
				claimId: medicalClaims![Math.floor(Math.random() * 10)].id,
				secretaryApproverId: employees![Math.floor(Math.random() * 10)].id,
				secretaryApprovedStatus: faker.person.firstName(),
				secretaryApprovedRemark: faker.commerce.productDescription(),
				secretaryApprovedDate: DateTime.fromJSDate(faker.date.past()),
				supporterId: employees![Math.floor(Math.random() * 10)].id,
				supportedStatus: faker.person.firstName(),
				supportedRemark: faker.commerce.productDescription(),
				supportedDate: DateTime.fromJSDate(faker.date.past()),
				appointedApproverId: employees![Math.floor(Math.random() * 10)].id,
				appointedApprovedStatus: faker.person.firstName(),
				appointedApprovedRemark: faker.commerce.productDescription(),
				appointedApprovedDate: DateTime.fromJSDate(faker.date.past()),
				active: true,
				createdBy: 'Admin'
			},
			{
				claimId: medicalClaims![Math.floor(Math.random() * 10)].id,
				secretaryApproverId: employees![Math.floor(Math.random() * 10)].id,
				secretaryApprovedStatus: faker.person.firstName(),
				secretaryApprovedRemark: faker.commerce.productDescription(),
				secretaryApprovedDate: DateTime.fromJSDate(faker.date.past()),
				supporterId: employees![Math.floor(Math.random() * 10)].id,
				supportedStatus: faker.person.firstName(),
				supportedRemark: faker.commerce.productDescription(),
				supportedDate: DateTime.fromJSDate(faker.date.past()),
				appointedApproverId: employees![Math.floor(Math.random() * 10)].id,
				appointedApprovedStatus: faker.person.firstName(),
				appointedApprovedRemark: faker.commerce.productDescription(),
				appointedApprovedDate: DateTime.fromJSDate(faker.date.past()),
				active: true,
				createdBy: 'Admin'
			},
			{
				claimId: medicalClaims![Math.floor(Math.random() * 10)].id,
				secretaryApproverId: employees![Math.floor(Math.random() * 10)].id,
				secretaryApprovedStatus: faker.person.firstName(),
				secretaryApprovedRemark: faker.commerce.productDescription(),
				secretaryApprovedDate: DateTime.fromJSDate(faker.date.past()),
				supporterId: employees![Math.floor(Math.random() * 10)].id,
				supportedStatus: faker.person.firstName(),
				supportedRemark: faker.commerce.productDescription(),
				supportedDate: DateTime.fromJSDate(faker.date.past()),
				appointedApproverId: employees![Math.floor(Math.random() * 10)].id,
				appointedApprovedStatus: faker.person.firstName(),
				appointedApprovedRemark: faker.commerce.productDescription(),
				appointedApprovedDate: DateTime.fromJSDate(faker.date.past()),
				active: true,
				createdBy: 'Admin'
			},
			{
				claimId: medicalClaims![Math.floor(Math.random() * 10)].id,
				secretaryApproverId: employees![Math.floor(Math.random() * 10)].id,
				secretaryApprovedStatus: faker.person.firstName(),
				secretaryApprovedRemark: faker.commerce.productDescription(),
				secretaryApprovedDate: DateTime.fromJSDate(faker.date.past()),
				supporterId: employees![Math.floor(Math.random() * 10)].id,
				supportedStatus: faker.person.firstName(),
				supportedRemark: faker.commerce.productDescription(),
				supportedDate: DateTime.fromJSDate(faker.date.past()),
				appointedApproverId: employees![Math.floor(Math.random() * 10)].id,
				appointedApprovedStatus: faker.person.firstName(),
				appointedApprovedRemark: faker.commerce.productDescription(),
				appointedApprovedDate: DateTime.fromJSDate(faker.date.past()),
				active: true,
				createdBy: 'Admin'
			},
		])
	}
}
