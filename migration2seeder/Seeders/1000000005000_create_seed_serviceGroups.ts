import BaseSeeder from '@ioc:Adonis/Lucid/Seeder';
import ServiceGroup from 'App/Models/ServiceGroup';
export default class ServiceGroupSeeder extends BaseSeeder {
    public async run() {
        
        await ServiceGroup.createMany([
            {
                name: 'Kumpulan Pengurusan dan Professional',
                active: true,
                createdBy: 'Admin',
            },
            {
                name: 'Kumpulan Perkhidmatan Sokongan I',
                active: true,
                createdBy: 'Admin',
            },
            {
                name: 'Kumpulan Perkhidmatan Sokongan II',
                active: true,
                createdBy: 'Admin',
            },
            {
                name: 'Kumpulan Perkhidmatan Sokongan III',
                active: true,
                createdBy: 'Admin',
            },
        ]);
    }
}
