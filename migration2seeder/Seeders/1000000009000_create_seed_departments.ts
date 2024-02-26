import BaseSeeder from '@ioc:Adonis/Lucid/Seeder';
import Department from 'App/Models/Department';

export default class DepartmentSeeder extends BaseSeeder {
    public async run() {
        await Department.createMany([
            {
                name: 'Bahagian Kewangan & Akaun',
                active: true,
                createdBy: 'Admin',
            },
            {
                name: 'Bahagian Kawalsetia Pendaratan Ikan dan Penguatkuasaan',
                active: true,
                createdBy: 'Admin',
            },
            {
                name: 'Bahagian Pengurusan Maklumat',
                active: true,
                createdBy: 'Admin',
            },
            {
                name: 'Bahagian Kejuruteraan',
                active: true,
                createdBy: 'Admin',
            },
            {
                name: 'Bahagian Khidmat Pengurusan',
                active: true,
                createdBy: 'Admin',
            },
            {
                name: 'Bahagian Infrastruktur',
                active: true,
                createdBy: 'Admin',
            },
            {
                name: 'Bahagian Pemasaran dan Pelesenan',
                active: true,
                createdBy: 'Admin',
            },
            {
                name: 'Bahagian Industri Asas Tini',
                active: true,
                createdBy: 'Admin',
            },
            {
                name: 'Bahagian Pembangunan Masyarakat dan Pertubuhan Nelayan',
                active: true,
                createdBy: 'Admin',
            },
            {
                name: 'Bahagian Perancangan dan Pembangunan',
                active: true,
                createdBy: 'Admin',
            },
            {
                name: 'Unit Undang-Undang',
                active: true,
                createdBy: 'Admin',
            },
            {
                name: 'Unit Komunikasi Korporat',
                active: true,
                createdBy: 'Admin',
            },
            {
                name: 'Unit Integriti',
                active: true,
                createdBy: 'Admin',
            },
            {
                name: 'Unit Audit Dalam',
                active: true,
                createdBy: 'Admin',
            },
            {
                name: 'Pejabat Pendaftar Persatuan Nelayan',
                active: true,
                createdBy: 'Admin',
            },
        ]);
    }
}
