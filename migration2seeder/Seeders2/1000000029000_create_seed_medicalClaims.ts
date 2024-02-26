import BaseSeeder from '@ioc:Adonis/Lucid/Seeder';
import { DateTime } from 'luxon';
import { Faker, en } from '@faker-js/faker';
import MedicalClaim from 'App/Models/MedicalClaim';
import AnnualMedicalAllocation from 'App/Models/AnnualMedicalAllocation';
import Clinic from 'App/Models/Clinic';

export default class extends BaseSeeder {

	public async run () {
		const annualMedicalAllocations = await AnnualMedicalAllocation.all();
		const clinics = await Clinic.all();
		const faker = new Faker({ locale: [en] });
		await MedicalClaim.createMany([
			{
				employeeMedicalAllocId: annualMedicalAllocations![Math.floor(Math.random() * 10)].id,
				clinicId: clinics![Math.floor(Math.random() * 10)].id,
				leaveDay: faker.number.int({ max: 10 }),
				treatmentDate: DateTime.fromJSDate(faker.date.past()),
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
				employeeMedicalAllocId: annualMedicalAllocations![Math.floor(Math.random() * 10)].id,
				clinicId: clinics![Math.floor(Math.random() * 10)].id,
				leaveDay: faker.number.int({ max: 10 }),
				treatmentDate: DateTime.fromJSDate(faker.date.past()),
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
				employeeMedicalAllocId: annualMedicalAllocations![Math.floor(Math.random() * 10)].id,
				clinicId: clinics![Math.floor(Math.random() * 10)].id,
				leaveDay: faker.number.int({ max: 10 }),
				treatmentDate: DateTime.fromJSDate(faker.date.past()),
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
				employeeMedicalAllocId: annualMedicalAllocations![Math.floor(Math.random() * 10)].id,
				clinicId: clinics![Math.floor(Math.random() * 10)].id,
				leaveDay: faker.number.int({ max: 10 }),
				treatmentDate: DateTime.fromJSDate(faker.date.past()),
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
				employeeMedicalAllocId: annualMedicalAllocations![Math.floor(Math.random() * 10)].id,
				clinicId: clinics![Math.floor(Math.random() * 10)].id,
				leaveDay: faker.number.int({ max: 10 }),
				treatmentDate: DateTime.fromJSDate(faker.date.past()),
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
				employeeMedicalAllocId: annualMedicalAllocations![Math.floor(Math.random() * 10)].id,
				clinicId: clinics![Math.floor(Math.random() * 10)].id,
				leaveDay: faker.number.int({ max: 10 }),
				treatmentDate: DateTime.fromJSDate(faker.date.past()),
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
				employeeMedicalAllocId: annualMedicalAllocations![Math.floor(Math.random() * 10)].id,
				clinicId: clinics![Math.floor(Math.random() * 10)].id,
				leaveDay: faker.number.int({ max: 10 }),
				treatmentDate: DateTime.fromJSDate(faker.date.past()),
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
				employeeMedicalAllocId: annualMedicalAllocations![Math.floor(Math.random() * 10)].id,
				clinicId: clinics![Math.floor(Math.random() * 10)].id,
				leaveDay: faker.number.int({ max: 10 }),
				treatmentDate: DateTime.fromJSDate(faker.date.past()),
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
				employeeMedicalAllocId: annualMedicalAllocations![Math.floor(Math.random() * 10)].id,
				clinicId: clinics![Math.floor(Math.random() * 10)].id,
				leaveDay: faker.number.int({ max: 10 }),
				treatmentDate: DateTime.fromJSDate(faker.date.past()),
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
				employeeMedicalAllocId: annualMedicalAllocations![Math.floor(Math.random() * 10)].id,
				clinicId: clinics![Math.floor(Math.random() * 10)].id,
				leaveDay: faker.number.int({ max: 10 }),
				treatmentDate: DateTime.fromJSDate(faker.date.past()),
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
