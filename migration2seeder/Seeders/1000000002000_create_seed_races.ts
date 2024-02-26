import BaseSeeder from '@ioc:Adonis/Lucid/Seeder';
import Race from 'App/Models/Race';

export default class RaceSeeder extends BaseSeeder {
    public async run() {
        await Race.createMany([
            {
                name: 'Melayu',
                active: true,
                createdBy: 'Admin',
            },
            {
                name: 'Cina',
                active: true,
                createdBy: 'Admin',
            },
            {
                name: 'India',
                active: true,
                createdBy: 'Admin',
            },
            {
                name: 'Bumiputera Sabah',
                active: true,
                createdBy: 'Admin',
            },
            {
                name: 'Bumiputera Sarawak',
                active: true,
                createdBy: 'Admin',
            },
            {
                name: 'Lain-lain',
                active: true,
                createdBy: 'Admin',
            },
        ]);
    }
}
