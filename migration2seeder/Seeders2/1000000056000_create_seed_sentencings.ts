import BaseSeeder from '@ioc:Adonis/Lucid/Seeder';
import { DateTime } from 'luxon';
import { Faker, en } from '@faker-js/faker';
import Sentencing from 'App/Models/Sentencing';
import IntegrityProceeding from 'App/Models/IntegrityProceeding';
import PenaltyType from 'App/Models/PenaltyType';

export default class extends BaseSeeder {

	public async run () {
		const integrityProceedings = await IntegrityProceeding.all();
		const penaltyTypes = await PenaltyType.all();
		const faker = new Faker({ locale: [en] });
		await Sentencing.createMany([
			{
				integrityId: integrityProceedings![Math.floor(Math.random() * 10)].id,
				penaltyTypeId: penaltyTypes![Math.floor(Math.random() * 10)].id,
				active: true,
				createdBy: 'Admin'
			},
			{
				integrityId: integrityProceedings![Math.floor(Math.random() * 10)].id,
				penaltyTypeId: penaltyTypes![Math.floor(Math.random() * 10)].id,
				active: true,
				createdBy: 'Admin'
			},
			{
				integrityId: integrityProceedings![Math.floor(Math.random() * 10)].id,
				penaltyTypeId: penaltyTypes![Math.floor(Math.random() * 10)].id,
				active: true,
				createdBy: 'Admin'
			},
			{
				integrityId: integrityProceedings![Math.floor(Math.random() * 10)].id,
				penaltyTypeId: penaltyTypes![Math.floor(Math.random() * 10)].id,
				active: true,
				createdBy: 'Admin'
			},
			{
				integrityId: integrityProceedings![Math.floor(Math.random() * 10)].id,
				penaltyTypeId: penaltyTypes![Math.floor(Math.random() * 10)].id,
				active: true,
				createdBy: 'Admin'
			},
			{
				integrityId: integrityProceedings![Math.floor(Math.random() * 10)].id,
				penaltyTypeId: penaltyTypes![Math.floor(Math.random() * 10)].id,
				active: true,
				createdBy: 'Admin'
			},
			{
				integrityId: integrityProceedings![Math.floor(Math.random() * 10)].id,
				penaltyTypeId: penaltyTypes![Math.floor(Math.random() * 10)].id,
				active: true,
				createdBy: 'Admin'
			},
			{
				integrityId: integrityProceedings![Math.floor(Math.random() * 10)].id,
				penaltyTypeId: penaltyTypes![Math.floor(Math.random() * 10)].id,
				active: true,
				createdBy: 'Admin'
			},
			{
				integrityId: integrityProceedings![Math.floor(Math.random() * 10)].id,
				penaltyTypeId: penaltyTypes![Math.floor(Math.random() * 10)].id,
				active: true,
				createdBy: 'Admin'
			},
			{
				integrityId: integrityProceedings![Math.floor(Math.random() * 10)].id,
				penaltyTypeId: penaltyTypes![Math.floor(Math.random() * 10)].id,
				active: true,
				createdBy: 'Admin'
			},
		])
	}
}
