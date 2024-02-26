import BaseSeeder from '@ioc:Adonis/Lucid/Seeder';
import Section from 'App/Models/Section';
import Department from 'App/Models/Department';

export default class SectionSeeder extends BaseSeeder {
    public async run() {
        const department = await Department.all();

        await Section.createMany([
            {
                departmentId: department[0]!.id,
                name: 'Seksyen Pengurusan Akaun',
                active: true,
                createdBy: 'Admin',
            },
            {
                departmentId: department[0]!.id,
                name: 'Seksyen Pengurusan Kewangan',
                active: true,
                createdBy: 'Admin',
            },
            {
                departmentId: department[0]!.id,
                name: 'Seksyen Pengurusan Belanjawan',
                active: true,
                createdBy: 'Admin',
            },
            {
                departmentId: department[0]!.id,
                name: 'Seksyen Kawalselia',
                active: true,
                createdBy: 'Admin',
            },
            {
                departmentId: department[1]!.id,
                name: 'Seksyen Kualiti',
                active: true,
                createdBy: 'Admin',
            },
            {
                departmentId: department[1]!.id,
                name: 'Seksyen Penguatkuasaan',
                active: true,
                createdBy: 'Admin',
            },
            {
                departmentId: department[1]!.id,
                name: 'Seksyen Pembangunan Aplikasi & Pangkalan Data',
                active: true,
                createdBy: 'Admin',
            },
            {
                departmentId: department[2]!.id,
                name: 'Seksyen Sokongan & Operasi',
                active: true,
                createdBy: 'Admin',
            },
            {
                departmentId: department[2]!.id,
                name: 'Unit Pentadbiran Am',
                active: true,
                createdBy: 'Admin',
            },
            {
                departmentId: department[3]!.id,
                name: 'Seksyen Kejuruteraan Sivil & Struktur',
                active: true,
                createdBy: 'Admin',
            },
            {
                departmentId: department[3]!.id,
                name: 'Seksyen Kejuruteraan Mekanikal & Elektrikal',
                active: true,
                createdBy: 'Admin',
            },
            {
                departmentId: department[3]!.id,
                name: 'Seksyen Ukur Bahan',
                active: true,
                createdBy: 'Admin',
            },
            {
                departmentId: department[3]!.id,
                name: 'Pentadbiran Am',
                active: true,
                createdBy: 'Admin',
            },
            {
                departmentId: department[4]!.id,
                name: 'Seksyen Pengurusan Sumber Manusia',
                active: true,
                createdBy: 'Admin',
            },
            {
                departmentId: department[4]!.id,
                name: 'Seksyen Pentadbiran',
                active: true,
                createdBy: 'Admin',
            },
            {
                departmentId: department[4]!.id,
                name: 'Seksyen Latihan dan Kompetensi',
                active: true,
                createdBy: 'Admin',
            },
            {
                departmentId: department[5]!.id,
                name: 'Seksyen Perancangan Strategik Dan Khidmat Am',
                active: true,
                createdBy: 'Admin',
            },
            {
                departmentId: department[5]!.id,
                name: 'Seksyen Pembangunan Infrastruktur Kompleks/Labuhan/Jeti',
                active: true,
                createdBy: 'Admin',
            },
            {
                departmentId: department[5]!.id,
                name: 'Seksyen Pengurusan Kompleks/Labuhan/PPI',
                active: true,
                createdBy: 'Admin',
            },
            {
                departmentId: department[6]!.id,
                name: 'Seksyen Pengurusan Maklumat Pemasaran',
                active: true,
                createdBy: 'Admin',
            },
            {
                departmentId: department[6]!.id,
                name: 'Seksyen Pengukuhan Pasaran',
                active: true,
                createdBy: 'Admin',
            },
            {
                departmentId: department[6]!.id,
                name: 'Seksyen Khidmat Sokongan Pemasaran',
                active: true,
                createdBy: 'Admin',
            },
            {
                departmentId: department[6]!.id,
                name: 'Seksyen Komoditi Akuakultur',
                active: true,
                createdBy: 'Admin',
            },
            {
                departmentId: department[6]!.id,
                name: 'Seksyen Pelesenan',
                active: true,
                createdBy: 'Admin',
            },
            {
                departmentId: department[7]!.id,
                name: 'Seksyen Pembangunan Usahawan, Perniagaan & Pentadbiran Am',
                active: true,
                createdBy: 'Admin',
            },
            {
                departmentId: department[7]!.id,
                name: 'Seksyen Pembangunan Industri Proses',
                active: true,
                createdBy: 'Admin',
            },
            {
                departmentId: department[7]!.id,
                name: 'Seksyen Pembangunan Perikanan Laut',
                active: true,
                createdBy: 'Admin',
            },
            {
                departmentId: department[8]!.id,
                name: 'Seksyen Pembangunan Institusi Nelayan',
                active: true,
                createdBy: 'Admin',
            },
            {
                departmentId: department[9]!.id,
                name: 'Seksyen Perancangan Strategik & Antarabangsa (PSA)',
                active: true,
                createdBy: 'Admin',
            },
            {
                departmentId: department[9]!.id,
                name: 'Seksyen Pembangunan (PEM)',
                active: true,
                createdBy: 'Admin',
            },
            {
                departmentId: department[9]!.id,
                name: 'Seksyen Hal Ehwal Korporat (HEK)',
                active: true,
                createdBy: 'Admin',
            },
            {
                departmentId: department[9]!.id,
                name: 'Seksyen Pengurusan Data (PD)',
                active: true,
                createdBy: 'Admin',
            },
            {
                departmentId: department[10]!.id,
                name: 'Unit Undang-Undang',
                active: true,
                createdBy: 'Admin',
            },
            {
                departmentId: department[11]!.id,
                name: 'Unit Komunikasi Korporat',
                active: true,
                createdBy: 'Admin',
            },
            {
                departmentId: department[12]!.id,
                name: 'Unit Integriti',
                active: true,
                createdBy: 'Admin',
            },
            {
                departmentId: department[13]!.id,
                name: 'Seksyen Audit Kewangan',
                active: true,
                createdBy: 'Admin',
            },
            {
                departmentId: department[13]!.id,
                name: 'Seksyen Audit Prestasi ',
                active: true,
                createdBy: 'Admin',
            },
            {
                departmentId: department[13]!.id,
                name: 'Unit Urusetia',
                active: true,
                createdBy: 'Admin',
            },
            {
                departmentId: department[14]!.id,
                name: 'Pejabat Pendaftaran Persatuan Nelayan',
                active: true,
                createdBy: 'Admin',
            },
        ]);
    }
}
