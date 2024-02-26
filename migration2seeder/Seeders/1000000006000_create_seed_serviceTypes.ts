import BaseSeeder from '@ioc:Adonis/Lucid/Seeder';
import ServiceType from 'App/Models/ServiceType';

export default class ServiceTypeSeeder extends BaseSeeder {
    public async run() {
        await ServiceType.createMany([
            {
                name: 'TETAP',
                active: true,
                createdBy: 'Admin',
            },
            {
                name: 'PERCUBAAN',
                active: true,
                createdBy: 'Admin',
            },
            {
                name: 'SEMENTARA',
                active: true,
                createdBy: 'Admin',
            },
            {
                name: 'KONTRAK',
                active: true,
                createdBy: 'Admin',
            },
            {
                name: 'PROJEK',
                active: true,
                createdBy: 'Admin',
            },
            {
                name: 'SAMBILAN',
                active: true,
                createdBy: 'Admin',
            },
            {
                name: 'PINJAMAN',
                active: true,
                createdBy: 'Admin',
            },
            {
                name: 'LAIN-LAIN',
                active: true,
                createdBy: 'Admin',
            },
        ]);
    }
}
