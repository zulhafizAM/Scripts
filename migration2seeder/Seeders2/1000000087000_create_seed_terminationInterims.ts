import BaseSeeder from '@ioc:Adonis/Lucid/Seeder';
import { DateTime } from 'luxon';
import { Faker, en } from '@faker-js/faker';
import TerminationInterim from 'App/Models/TerminationInterim';

export default class extends BaseSeeder {

	public async run () {
		const faker = new Faker({ locale: [en] });
		await TerminationInterim.createMany([
			{
				isInterimCompleted: true,
				active: true,
				createdBy: 'Admin'
			},
			{
				isInterimCompleted: true,
				active: true,
				createdBy: 'Admin'
			},
			{
				isInterimCompleted: true,
				active: true,
				createdBy: 'Admin'
			},
			{
				isInterimCompleted: true,
				active: true,
				createdBy: 'Admin'
			},
			{
				isInterimCompleted: true,
				active: true,
				createdBy: 'Admin'
			},
			{
				isInterimCompleted: true,
				active: true,
				createdBy: 'Admin'
			},
			{
				isInterimCompleted: true,
				active: true,
				createdBy: 'Admin'
			},
			{
				isInterimCompleted: true,
				active: true,
				createdBy: 'Admin'
			},
			{
				isInterimCompleted: true,
				active: true,
				createdBy: 'Admin'
			},
			{
				isInterimCompleted: true,
				active: true,
				createdBy: 'Admin'
			},
		])
	}
}
