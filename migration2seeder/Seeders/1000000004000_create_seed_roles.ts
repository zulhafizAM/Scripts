import BaseSeeder from '@ioc:Adonis/Lucid/Seeder';
import Role from 'App/Models/Role';

export default class RoleSeeder extends BaseSeeder {
    public async run() {
        await Role.createMany([
            {
                name: 'Admin',
                active: true,
                createdBy: 'Admin',
            },
            {
                name: 'Super Admin',
                active: true,
                createdBy: 'Admin',
            },
            {
                name: 'Kakitangan',
                active: true,
                createdBy: 'Admin',
            },
            {
                name: 'Urusetia Penjawatan',
                active: true,
                createdBy: 'Admin',
            },
            {
                name: 'Urusetia Cuti',
                active: true,
                createdBy: 'Admin',
            },
            {
                name: 'Urusetia Gaji',
                active: true,
                createdBy: 'Admin',
            },
            {
                name: 'Urusetia Integriti',
                active: true,
                createdBy: 'Admin',
            },
            {
                name: 'Urusetia LNPT',
                active: true,
                createdBy: 'Admin',
            },
            {
                name: 'Urusetia Latihan',
                active: true,
                createdBy: 'Admin',
            },
            {
                name: 'Urusetia Kakitangan Kontrak',
                active: true,
                createdBy: 'Admin',
            },
            {
                name: 'Urusetia Pinjaman & Kuarters',
                active: true,
                createdBy: 'Admin',
            },
            {
                name: 'Urusetia Perubatan',
                active: true,
                createdBy: 'Admin',
            },
            {
                name: 'Urusetia Elaun-elaun Perkhidmatan',
                active: true,
                createdBy: 'Admin',
            },
            {
                name: 'Penyokong',
                active: true,
                createdBy: 'Admin',
            },
            {
                name: 'Pelulus',
                active: true,
                createdBy: 'Admin',
            },
            {
                name: 'Pengarah Bahagian/Negeri',
                active: true,
                createdBy: 'Admin',
            },
            {
                name: 'Pengarah Khidmat Pengurusan',
                active: true,
                createdBy: 'Admin',
            },
            {
                name: 'Ketua Seksyen',
                active: true,
                createdBy: 'Admin',
            },
            {
                name: 'Ketua Pengarah',
                active: true,
                createdBy: 'Admin',
            },
            {
                name: 'Audit',
                active: true,
                createdBy: 'Admin',
            },
            {
                name: 'Calon',
                active: true,
                createdBy: 'Admin',
            },
            {
                name: 'Klinik Panel',
                active: true,
                createdBy: 'Admin',
            },
        ]);
    }
}
