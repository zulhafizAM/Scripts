import BaseSeeder from '@ioc:Adonis/Lucid/Seeder';
import { DateTime } from 'luxon';
import { Faker, en } from '@faker-js/faker';
import ContractDetail from 'App/Models/ContractDetail';
import Candidate from 'App/Models/Candidate';
import ServiceType from 'App/Models/ServiceType';
import Placement from 'App/Models/Placement';

export default class extends BaseSeeder {

	public async run () {
		const candidates = await Candidate.all();
		const serviceTypes = await ServiceType.all();
		const placements = await Placement.all();
		const faker = new Faker({ locale: [en] });
		await ContractDetail.createMany([
			{
				candidateId: candidates![Math.floor(Math.random() * 10)].id,
				serviceTypeId: serviceTypes![Math.floor(Math.random() * 10)].id,
				placementId: placements![Math.floor(Math.random() * 10)].id,
				contractEmployeeNumber: faker.person.fullName(),
				applicationDate: DateTime.fromJSDate(faker.date.past()),
				contractStartDate: DateTime.fromJSDate(faker.date.past()),
				contractDuration: faker.number.int({ max: 10 }),
				wageRate: faker.number.float({ precision: 0.01 }),
				designation: faker.person.fullName(),
				reportDutyDate: DateTime.fromJSDate(faker.date.past()),
				EPFNumber: faker.person.fullName(),
				leaveEntitlement: faker.number.int({ max: 10 }),
				status: faker.person.fullName(),
				remark: faker.person.fullName(),
				active: true,
				createdBy: 'Admin'
			},
			{
				candidateId: candidates![Math.floor(Math.random() * 10)].id,
				serviceTypeId: serviceTypes![Math.floor(Math.random() * 10)].id,
				placementId: placements![Math.floor(Math.random() * 10)].id,
				contractEmployeeNumber: faker.person.fullName(),
				applicationDate: DateTime.fromJSDate(faker.date.past()),
				contractStartDate: DateTime.fromJSDate(faker.date.past()),
				contractDuration: faker.number.int({ max: 10 }),
				wageRate: faker.number.float({ precision: 0.01 }),
				designation: faker.person.fullName(),
				reportDutyDate: DateTime.fromJSDate(faker.date.past()),
				EPFNumber: faker.person.fullName(),
				leaveEntitlement: faker.number.int({ max: 10 }),
				status: faker.person.fullName(),
				remark: faker.person.fullName(),
				active: true,
				createdBy: 'Admin'
			},
			{
				candidateId: candidates![Math.floor(Math.random() * 10)].id,
				serviceTypeId: serviceTypes![Math.floor(Math.random() * 10)].id,
				placementId: placements![Math.floor(Math.random() * 10)].id,
				contractEmployeeNumber: faker.person.fullName(),
				applicationDate: DateTime.fromJSDate(faker.date.past()),
				contractStartDate: DateTime.fromJSDate(faker.date.past()),
				contractDuration: faker.number.int({ max: 10 }),
				wageRate: faker.number.float({ precision: 0.01 }),
				designation: faker.person.fullName(),
				reportDutyDate: DateTime.fromJSDate(faker.date.past()),
				EPFNumber: faker.person.fullName(),
				leaveEntitlement: faker.number.int({ max: 10 }),
				status: faker.person.fullName(),
				remark: faker.person.fullName(),
				active: true,
				createdBy: 'Admin'
			},
			{
				candidateId: candidates![Math.floor(Math.random() * 10)].id,
				serviceTypeId: serviceTypes![Math.floor(Math.random() * 10)].id,
				placementId: placements![Math.floor(Math.random() * 10)].id,
				contractEmployeeNumber: faker.person.fullName(),
				applicationDate: DateTime.fromJSDate(faker.date.past()),
				contractStartDate: DateTime.fromJSDate(faker.date.past()),
				contractDuration: faker.number.int({ max: 10 }),
				wageRate: faker.number.float({ precision: 0.01 }),
				designation: faker.person.fullName(),
				reportDutyDate: DateTime.fromJSDate(faker.date.past()),
				EPFNumber: faker.person.fullName(),
				leaveEntitlement: faker.number.int({ max: 10 }),
				status: faker.person.fullName(),
				remark: faker.person.fullName(),
				active: true,
				createdBy: 'Admin'
			},
			{
				candidateId: candidates![Math.floor(Math.random() * 10)].id,
				serviceTypeId: serviceTypes![Math.floor(Math.random() * 10)].id,
				placementId: placements![Math.floor(Math.random() * 10)].id,
				contractEmployeeNumber: faker.person.fullName(),
				applicationDate: DateTime.fromJSDate(faker.date.past()),
				contractStartDate: DateTime.fromJSDate(faker.date.past()),
				contractDuration: faker.number.int({ max: 10 }),
				wageRate: faker.number.float({ precision: 0.01 }),
				designation: faker.person.fullName(),
				reportDutyDate: DateTime.fromJSDate(faker.date.past()),
				EPFNumber: faker.person.fullName(),
				leaveEntitlement: faker.number.int({ max: 10 }),
				status: faker.person.fullName(),
				remark: faker.person.fullName(),
				active: true,
				createdBy: 'Admin'
			},
			{
				candidateId: candidates![Math.floor(Math.random() * 10)].id,
				serviceTypeId: serviceTypes![Math.floor(Math.random() * 10)].id,
				placementId: placements![Math.floor(Math.random() * 10)].id,
				contractEmployeeNumber: faker.person.fullName(),
				applicationDate: DateTime.fromJSDate(faker.date.past()),
				contractStartDate: DateTime.fromJSDate(faker.date.past()),
				contractDuration: faker.number.int({ max: 10 }),
				wageRate: faker.number.float({ precision: 0.01 }),
				designation: faker.person.fullName(),
				reportDutyDate: DateTime.fromJSDate(faker.date.past()),
				EPFNumber: faker.person.fullName(),
				leaveEntitlement: faker.number.int({ max: 10 }),
				status: faker.person.fullName(),
				remark: faker.person.fullName(),
				active: true,
				createdBy: 'Admin'
			},
			{
				candidateId: candidates![Math.floor(Math.random() * 10)].id,
				serviceTypeId: serviceTypes![Math.floor(Math.random() * 10)].id,
				placementId: placements![Math.floor(Math.random() * 10)].id,
				contractEmployeeNumber: faker.person.fullName(),
				applicationDate: DateTime.fromJSDate(faker.date.past()),
				contractStartDate: DateTime.fromJSDate(faker.date.past()),
				contractDuration: faker.number.int({ max: 10 }),
				wageRate: faker.number.float({ precision: 0.01 }),
				designation: faker.person.fullName(),
				reportDutyDate: DateTime.fromJSDate(faker.date.past()),
				EPFNumber: faker.person.fullName(),
				leaveEntitlement: faker.number.int({ max: 10 }),
				status: faker.person.fullName(),
				remark: faker.person.fullName(),
				active: true,
				createdBy: 'Admin'
			},
			{
				candidateId: candidates![Math.floor(Math.random() * 10)].id,
				serviceTypeId: serviceTypes![Math.floor(Math.random() * 10)].id,
				placementId: placements![Math.floor(Math.random() * 10)].id,
				contractEmployeeNumber: faker.person.fullName(),
				applicationDate: DateTime.fromJSDate(faker.date.past()),
				contractStartDate: DateTime.fromJSDate(faker.date.past()),
				contractDuration: faker.number.int({ max: 10 }),
				wageRate: faker.number.float({ precision: 0.01 }),
				designation: faker.person.fullName(),
				reportDutyDate: DateTime.fromJSDate(faker.date.past()),
				EPFNumber: faker.person.fullName(),
				leaveEntitlement: faker.number.int({ max: 10 }),
				status: faker.person.fullName(),
				remark: faker.person.fullName(),
				active: true,
				createdBy: 'Admin'
			},
			{
				candidateId: candidates![Math.floor(Math.random() * 10)].id,
				serviceTypeId: serviceTypes![Math.floor(Math.random() * 10)].id,
				placementId: placements![Math.floor(Math.random() * 10)].id,
				contractEmployeeNumber: faker.person.fullName(),
				applicationDate: DateTime.fromJSDate(faker.date.past()),
				contractStartDate: DateTime.fromJSDate(faker.date.past()),
				contractDuration: faker.number.int({ max: 10 }),
				wageRate: faker.number.float({ precision: 0.01 }),
				designation: faker.person.fullName(),
				reportDutyDate: DateTime.fromJSDate(faker.date.past()),
				EPFNumber: faker.person.fullName(),
				leaveEntitlement: faker.number.int({ max: 10 }),
				status: faker.person.fullName(),
				remark: faker.person.fullName(),
				active: true,
				createdBy: 'Admin'
			},
			{
				candidateId: candidates![Math.floor(Math.random() * 10)].id,
				serviceTypeId: serviceTypes![Math.floor(Math.random() * 10)].id,
				placementId: placements![Math.floor(Math.random() * 10)].id,
				contractEmployeeNumber: faker.person.fullName(),
				applicationDate: DateTime.fromJSDate(faker.date.past()),
				contractStartDate: DateTime.fromJSDate(faker.date.past()),
				contractDuration: faker.number.int({ max: 10 }),
				wageRate: faker.number.float({ precision: 0.01 }),
				designation: faker.person.fullName(),
				reportDutyDate: DateTime.fromJSDate(faker.date.past()),
				EPFNumber: faker.person.fullName(),
				leaveEntitlement: faker.number.int({ max: 10 }),
				status: faker.person.fullName(),
				remark: faker.person.fullName(),
				active: true,
				createdBy: 'Admin'
			},
		])
	}
}
