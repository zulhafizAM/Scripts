import BaseSeeder from '@ioc:Adonis/Lucid/Seeder';
import Religion from 'App/Models/Religion';

export default class ReligionSeeder extends BaseSeeder {
    public async run() {
        await Religion.createMany([
            {
                name: 'Islam',
                active: true,
                createdBy: 'Admin',
            },
            {
                name: 'Kristian',
                active: true,
                createdBy: 'Admin',
            },
            {
                name: 'Buddha',
                active: true,
                createdBy: 'Admin',
            },
            {
                name: 'Hindu',
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
