import BaseSeeder from '@ioc:Adonis/Lucid/Seeder';
import { DateTime } from 'luxon';
import { Faker, en } from '@faker-js/faker';
import ClinicApproveProcess from 'App/Models/ClinicApproveProcess';
import Clinic from 'App/Models/Clinic';
import Employee from 'App/Models/Employee';

export default class extends BaseSeeder {

	public async run () {
		const clinics = await Clinic.all();
		const employees = await Employee.all();
		const faker = new Faker({ locale: [en] });
		await ClinicApproveProcess.createMany([
			{
				clinicId: clinics![Math.floor(Math.random() * 10)].id,
				comfirmerId: employees![Math.floor(Math.random() * 10)].id,
				comfirmedStatus: faker.person.firstName(),
				comfirmedRemark: faker.commerce.productDescription(),
				comfirmedDate: DateTime.fromJSDate(faker.date.past()),
				supporterId: employees![Math.floor(Math.random() * 10)].id,
				supportedStatus: faker.person.firstName(),
				supportedRemark: faker.commerce.productDescription(),
				supportedDate: DateTime.fromJSDate(faker.date.past()),
				approverId: employees![Math.floor(Math.random() * 10)].id,
				approvedStatus: faker.person.firstName(),
				approvedRemark: faker.commerce.productDescription(),
				approvedDate: DateTime.fromJSDate(faker.date.past()),
				active: true,
				createdBy: 'Admin'
			},
			{
				clinicId: clinics![Math.floor(Math.random() * 10)].id,
				comfirmerId: employees![Math.floor(Math.random() * 10)].id,
				comfirmedStatus: faker.person.firstName(),
				comfirmedRemark: faker.commerce.productDescription(),
				comfirmedDate: DateTime.fromJSDate(faker.date.past()),
				supporterId: employees![Math.floor(Math.random() * 10)].id,
				supportedStatus: faker.person.firstName(),
				supportedRemark: faker.commerce.productDescription(),
				supportedDate: DateTime.fromJSDate(faker.date.past()),
				approverId: employees![Math.floor(Math.random() * 10)].id,
				approvedStatus: faker.person.firstName(),
				approvedRemark: faker.commerce.productDescription(),
				approvedDate: DateTime.fromJSDate(faker.date.past()),
				active: true,
				createdBy: 'Admin'
			},
			{
				clinicId: clinics![Math.floor(Math.random() * 10)].id,
				comfirmerId: employees![Math.floor(Math.random() * 10)].id,
				comfirmedStatus: faker.person.firstName(),
				comfirmedRemark: faker.commerce.productDescription(),
				comfirmedDate: DateTime.fromJSDate(faker.date.past()),
				supporterId: employees![Math.floor(Math.random() * 10)].id,
				supportedStatus: faker.person.firstName(),
				supportedRemark: faker.commerce.productDescription(),
				supportedDate: DateTime.fromJSDate(faker.date.past()),
				approverId: employees![Math.floor(Math.random() * 10)].id,
				approvedStatus: faker.person.firstName(),
				approvedRemark: faker.commerce.productDescription(),
				approvedDate: DateTime.fromJSDate(faker.date.past()),
				active: true,
				createdBy: 'Admin'
			},
			{
				clinicId: clinics![Math.floor(Math.random() * 10)].id,
				comfirmerId: employees![Math.floor(Math.random() * 10)].id,
				comfirmedStatus: faker.person.firstName(),
				comfirmedRemark: faker.commerce.productDescription(),
				comfirmedDate: DateTime.fromJSDate(faker.date.past()),
				supporterId: employees![Math.floor(Math.random() * 10)].id,
				supportedStatus: faker.person.firstName(),
				supportedRemark: faker.commerce.productDescription(),
				supportedDate: DateTime.fromJSDate(faker.date.past()),
				approverId: employees![Math.floor(Math.random() * 10)].id,
				approvedStatus: faker.person.firstName(),
				approvedRemark: faker.commerce.productDescription(),
				approvedDate: DateTime.fromJSDate(faker.date.past()),
				active: true,
				createdBy: 'Admin'
			},
			{
				clinicId: clinics![Math.floor(Math.random() * 10)].id,
				comfirmerId: employees![Math.floor(Math.random() * 10)].id,
				comfirmedStatus: faker.person.firstName(),
				comfirmedRemark: faker.commerce.productDescription(),
				comfirmedDate: DateTime.fromJSDate(faker.date.past()),
				supporterId: employees![Math.floor(Math.random() * 10)].id,
				supportedStatus: faker.person.firstName(),
				supportedRemark: faker.commerce.productDescription(),
				supportedDate: DateTime.fromJSDate(faker.date.past()),
				approverId: employees![Math.floor(Math.random() * 10)].id,
				approvedStatus: faker.person.firstName(),
				approvedRemark: faker.commerce.productDescription(),
				approvedDate: DateTime.fromJSDate(faker.date.past()),
				active: true,
				createdBy: 'Admin'
			},
			{
				clinicId: clinics![Math.floor(Math.random() * 10)].id,
				comfirmerId: employees![Math.floor(Math.random() * 10)].id,
				comfirmedStatus: faker.person.firstName(),
				comfirmedRemark: faker.commerce.productDescription(),
				comfirmedDate: DateTime.fromJSDate(faker.date.past()),
				supporterId: employees![Math.floor(Math.random() * 10)].id,
				supportedStatus: faker.person.firstName(),
				supportedRemark: faker.commerce.productDescription(),
				supportedDate: DateTime.fromJSDate(faker.date.past()),
				approverId: employees![Math.floor(Math.random() * 10)].id,
				approvedStatus: faker.person.firstName(),
				approvedRemark: faker.commerce.productDescription(),
				approvedDate: DateTime.fromJSDate(faker.date.past()),
				active: true,
				createdBy: 'Admin'
			},
			{
				clinicId: clinics![Math.floor(Math.random() * 10)].id,
				comfirmerId: employees![Math.floor(Math.random() * 10)].id,
				comfirmedStatus: faker.person.firstName(),
				comfirmedRemark: faker.commerce.productDescription(),
				comfirmedDate: DateTime.fromJSDate(faker.date.past()),
				supporterId: employees![Math.floor(Math.random() * 10)].id,
				supportedStatus: faker.person.firstName(),
				supportedRemark: faker.commerce.productDescription(),
				supportedDate: DateTime.fromJSDate(faker.date.past()),
				approverId: employees![Math.floor(Math.random() * 10)].id,
				approvedStatus: faker.person.firstName(),
				approvedRemark: faker.commerce.productDescription(),
				approvedDate: DateTime.fromJSDate(faker.date.past()),
				active: true,
				createdBy: 'Admin'
			},
			{
				clinicId: clinics![Math.floor(Math.random() * 10)].id,
				comfirmerId: employees![Math.floor(Math.random() * 10)].id,
				comfirmedStatus: faker.person.firstName(),
				comfirmedRemark: faker.commerce.productDescription(),
				comfirmedDate: DateTime.fromJSDate(faker.date.past()),
				supporterId: employees![Math.floor(Math.random() * 10)].id,
				supportedStatus: faker.person.firstName(),
				supportedRemark: faker.commerce.productDescription(),
				supportedDate: DateTime.fromJSDate(faker.date.past()),
				approverId: employees![Math.floor(Math.random() * 10)].id,
				approvedStatus: faker.person.firstName(),
				approvedRemark: faker.commerce.productDescription(),
				approvedDate: DateTime.fromJSDate(faker.date.past()),
				active: true,
				createdBy: 'Admin'
			},
			{
				clinicId: clinics![Math.floor(Math.random() * 10)].id,
				comfirmerId: employees![Math.floor(Math.random() * 10)].id,
				comfirmedStatus: faker.person.firstName(),
				comfirmedRemark: faker.commerce.productDescription(),
				comfirmedDate: DateTime.fromJSDate(faker.date.past()),
				supporterId: employees![Math.floor(Math.random() * 10)].id,
				supportedStatus: faker.person.firstName(),
				supportedRemark: faker.commerce.productDescription(),
				supportedDate: DateTime.fromJSDate(faker.date.past()),
				approverId: employees![Math.floor(Math.random() * 10)].id,
				approvedStatus: faker.person.firstName(),
				approvedRemark: faker.commerce.productDescription(),
				approvedDate: DateTime.fromJSDate(faker.date.past()),
				active: true,
				createdBy: 'Admin'
			},
			{
				clinicId: clinics![Math.floor(Math.random() * 10)].id,
				comfirmerId: employees![Math.floor(Math.random() * 10)].id,
				comfirmedStatus: faker.person.firstName(),
				comfirmedRemark: faker.commerce.productDescription(),
				comfirmedDate: DateTime.fromJSDate(faker.date.past()),
				supporterId: employees![Math.floor(Math.random() * 10)].id,
				supportedStatus: faker.person.firstName(),
				supportedRemark: faker.commerce.productDescription(),
				supportedDate: DateTime.fromJSDate(faker.date.past()),
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
