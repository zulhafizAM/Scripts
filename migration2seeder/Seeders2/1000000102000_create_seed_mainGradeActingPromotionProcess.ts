import BaseSeeder from '@ioc:Adonis/Lucid/Seeder';
import { DateTime } from 'luxon';
import { Faker, en } from '@faker-js/faker';
import MainGradeActingPromotionProcess from 'App/Models/MainGradeActingPromotionProcess';
import MainGradeActingPromotion from 'App/Models/MainGradeActingPromotion';
import Employee from 'App/Models/Employee';

export default class extends BaseSeeder {

	public async run () {
		const mainGradeActingPromotions = await MainGradeActingPromotion.all();
		const employees = await Employee.all();
		const faker = new Faker({ locale: [en] });
		await MainGradeActingPromotionProcess.createMany([
			{
				actingId: mainGradeActingPromotions![Math.floor(Math.random() * 10)].id,
				certifierId: employees![Math.floor(Math.random() * 10)].id,
				certifiedStatus: faker.person.firstName(),
				certifiedRemark: faker.commerce.productDescription(),
				certifiedDate: DateTime.fromJSDate(faker.date.past()),
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
				actingId: mainGradeActingPromotions![Math.floor(Math.random() * 10)].id,
				certifierId: employees![Math.floor(Math.random() * 10)].id,
				certifiedStatus: faker.person.firstName(),
				certifiedRemark: faker.commerce.productDescription(),
				certifiedDate: DateTime.fromJSDate(faker.date.past()),
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
				actingId: mainGradeActingPromotions![Math.floor(Math.random() * 10)].id,
				certifierId: employees![Math.floor(Math.random() * 10)].id,
				certifiedStatus: faker.person.firstName(),
				certifiedRemark: faker.commerce.productDescription(),
				certifiedDate: DateTime.fromJSDate(faker.date.past()),
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
				actingId: mainGradeActingPromotions![Math.floor(Math.random() * 10)].id,
				certifierId: employees![Math.floor(Math.random() * 10)].id,
				certifiedStatus: faker.person.firstName(),
				certifiedRemark: faker.commerce.productDescription(),
				certifiedDate: DateTime.fromJSDate(faker.date.past()),
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
				actingId: mainGradeActingPromotions![Math.floor(Math.random() * 10)].id,
				certifierId: employees![Math.floor(Math.random() * 10)].id,
				certifiedStatus: faker.person.firstName(),
				certifiedRemark: faker.commerce.productDescription(),
				certifiedDate: DateTime.fromJSDate(faker.date.past()),
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
				actingId: mainGradeActingPromotions![Math.floor(Math.random() * 10)].id,
				certifierId: employees![Math.floor(Math.random() * 10)].id,
				certifiedStatus: faker.person.firstName(),
				certifiedRemark: faker.commerce.productDescription(),
				certifiedDate: DateTime.fromJSDate(faker.date.past()),
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
				actingId: mainGradeActingPromotions![Math.floor(Math.random() * 10)].id,
				certifierId: employees![Math.floor(Math.random() * 10)].id,
				certifiedStatus: faker.person.firstName(),
				certifiedRemark: faker.commerce.productDescription(),
				certifiedDate: DateTime.fromJSDate(faker.date.past()),
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
				actingId: mainGradeActingPromotions![Math.floor(Math.random() * 10)].id,
				certifierId: employees![Math.floor(Math.random() * 10)].id,
				certifiedStatus: faker.person.firstName(),
				certifiedRemark: faker.commerce.productDescription(),
				certifiedDate: DateTime.fromJSDate(faker.date.past()),
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
				actingId: mainGradeActingPromotions![Math.floor(Math.random() * 10)].id,
				certifierId: employees![Math.floor(Math.random() * 10)].id,
				certifiedStatus: faker.person.firstName(),
				certifiedRemark: faker.commerce.productDescription(),
				certifiedDate: DateTime.fromJSDate(faker.date.past()),
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
				actingId: mainGradeActingPromotions![Math.floor(Math.random() * 10)].id,
				certifierId: employees![Math.floor(Math.random() * 10)].id,
				certifiedStatus: faker.person.firstName(),
				certifiedRemark: faker.commerce.productDescription(),
				certifiedDate: DateTime.fromJSDate(faker.date.past()),
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
