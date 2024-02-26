import BaseSeeder from '@ioc:Adonis/Lucid/Seeder';
import State from 'App/Models/State';

export default class StateSeeder extends BaseSeeder {
    public async run() {
        await State.createMany([
            {
                name: 'Perlis',
                active: true,
                createdBy: 'Admin',
            },
            {
                name: 'Kedah',
                active: true,
                createdBy: 'Admin',
            },
            {
                name: 'Pulau Pinang',
                active: true,
                createdBy: 'Admin',
            },
            {
                name: 'Perak',
                active: true,
                createdBy: 'Admin',
            },
            {
                name: 'Selangor',
                active: true,
                createdBy: 'Admin',
            },
            {
                name: 'Negeri Sembilan',
                active: true,
                createdBy: 'Admin',
            },
            {
                name: 'Melaka',
                active: true,
                createdBy: 'Admin',
            },
            {
                name: 'Johor',
                active: true,
                createdBy: 'Admin',
            },
            {
                name: 'Kelantan',
                active: true,
                createdBy: 'Admin',
            },
            {
                name: 'Terengganu',
                active: true,
                createdBy: 'Admin',
            },
            {
                name: 'Pahang',
                active: true,
                createdBy: 'Admin',
            },
            {
                name: 'Sabah',
                active: true,
                createdBy: 'Admin',
            },
            {
                name: 'Sarawak',
                active: true,
                createdBy: 'Admin',
            },
            {
                name: 'Wilayah Persekutuan Kuala Lumpur',
                active: true,
                createdBy: 'Admin',
            },
            {
                name: 'Wilayah Persekutuan Labuan',
                active: true,
                createdBy: 'Admin',
            },
            {
                name: 'Wilayah Persekutuan Putrajaya',
                active: true,
                createdBy: 'Admin',
            },
        ]);
    }
}
