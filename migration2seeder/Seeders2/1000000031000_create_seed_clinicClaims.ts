import BaseSeeder from '@ioc:Adonis/Lucid/Seeder';
import { DateTime } from 'luxon';
import { Faker, en } from '@faker-js/faker';
import ClinicClaim from 'App/Models/ClinicClaim';
import Clinic from 'App/Models/Clinic';

export default class extends BaseSeeder {

	public async run () {
		const clinics = await Clinic.all();
		const faker = new Faker({ locale: [en] });
		await ClinicClaim.createMany([
			{
				clinicId: clinics![Math.floor(Math.random() * 10)].id,
				invoiceDate: DateTime.fromJSDate(faker.date.past()),
				invoiceNumber: faker.person.fullName(),
				month: faker.number.int({ max: 10 }),
				year: faker.number.int({ max: 10 }),
				amount: faker.number.float({ precision: 0.01 }),
				status: faker.person.fullName(),
				remark: faker.person.fullName(),
				active: true,
				createdBy: 'Admin'
			},
			{
				clinicId: clinics![Math.floor(Math.random() * 10)].id,
				invoiceDate: DateTime.fromJSDate(faker.date.past()),
				invoiceNumber: faker.person.fullName(),
				month: faker.number.int({ max: 10 }),
				year: faker.number.int({ max: 10 }),
				amount: faker.number.float({ precision: 0.01 }),
				status: faker.person.fullName(),
				remark: faker.person.fullName(),
				active: true,
				createdBy: 'Admin'
			},
			{
				clinicId: clinics![Math.floor(Math.random() * 10)].id,
				invoiceDate: DateTime.fromJSDate(faker.date.past()),
				invoiceNumber: faker.person.fullName(),
				month: faker.number.int({ max: 10 }),
				year: faker.number.int({ max: 10 }),
				amount: faker.number.float({ precision: 0.01 }),
				status: faker.person.fullName(),
				remark: faker.person.fullName(),
				active: true,
				createdBy: 'Admin'
			},
			{
				clinicId: clinics![Math.floor(Math.random() * 10)].id,
				invoiceDate: DateTime.fromJSDate(faker.date.past()),
				invoiceNumber: faker.person.fullName(),
				month: faker.number.int({ max: 10 }),
				year: faker.number.int({ max: 10 }),
				amount: faker.number.float({ precision: 0.01 }),
				status: faker.person.fullName(),
				remark: faker.person.fullName(),
				active: true,
				createdBy: 'Admin'
			},
			{
				clinicId: clinics![Math.floor(Math.random() * 10)].id,
				invoiceDate: DateTime.fromJSDate(faker.date.past()),
				invoiceNumber: faker.person.fullName(),
				month: faker.number.int({ max: 10 }),
				year: faker.number.int({ max: 10 }),
				amount: faker.number.float({ precision: 0.01 }),
				status: faker.person.fullName(),
				remark: faker.person.fullName(),
				active: true,
				createdBy: 'Admin'
			},
			{
				clinicId: clinics![Math.floor(Math.random() * 10)].id,
				invoiceDate: DateTime.fromJSDate(faker.date.past()),
				invoiceNumber: faker.person.fullName(),
				month: faker.number.int({ max: 10 }),
				year: faker.number.int({ max: 10 }),
				amount: faker.number.float({ precision: 0.01 }),
				status: faker.person.fullName(),
				remark: faker.person.fullName(),
				active: true,
				createdBy: 'Admin'
			},
			{
				clinicId: clinics![Math.floor(Math.random() * 10)].id,
				invoiceDate: DateTime.fromJSDate(faker.date.past()),
				invoiceNumber: faker.person.fullName(),
				month: faker.number.int({ max: 10 }),
				year: faker.number.int({ max: 10 }),
				amount: faker.number.float({ precision: 0.01 }),
				status: faker.person.fullName(),
				remark: faker.person.fullName(),
				active: true,
				createdBy: 'Admin'
			},
			{
				clinicId: clinics![Math.floor(Math.random() * 10)].id,
				invoiceDate: DateTime.fromJSDate(faker.date.past()),
				invoiceNumber: faker.person.fullName(),
				month: faker.number.int({ max: 10 }),
				year: faker.number.int({ max: 10 }),
				amount: faker.number.float({ precision: 0.01 }),
				status: faker.person.fullName(),
				remark: faker.person.fullName(),
				active: true,
				createdBy: 'Admin'
			},
			{
				clinicId: clinics![Math.floor(Math.random() * 10)].id,
				invoiceDate: DateTime.fromJSDate(faker.date.past()),
				invoiceNumber: faker.person.fullName(),
				month: faker.number.int({ max: 10 }),
				year: faker.number.int({ max: 10 }),
				amount: faker.number.float({ precision: 0.01 }),
				status: faker.person.fullName(),
				remark: faker.person.fullName(),
				active: true,
				createdBy: 'Admin'
			},
			{
				clinicId: clinics![Math.floor(Math.random() * 10)].id,
				invoiceDate: DateTime.fromJSDate(faker.date.past()),
				invoiceNumber: faker.person.fullName(),
				month: faker.number.int({ max: 10 }),
				year: faker.number.int({ max: 10 }),
				amount: faker.number.float({ precision: 0.01 }),
				status: faker.person.fullName(),
				remark: faker.person.fullName(),
				active: true,
				createdBy: 'Admin'
			},
		])
	}
}
