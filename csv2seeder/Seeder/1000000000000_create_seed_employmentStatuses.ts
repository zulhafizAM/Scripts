import BaseSeeder from '@ioc:Adonis/Lucid/Seeder';
import EmploymentStatus from 'App/Models/EmploymentStatus';

export default class extends BaseSeeder {
    public async run() {
        const uniqueKey = 'description';
        await EmploymentStatus.updateOrCreateMany(uniqueKey, [
            {
                occSectorCode: `0`,
                occSectorName: `Tiada Maklumat`,
                active: true,
                createdBy: 'Admin',
            },
            {
                occSectorCode: `1`,
                occSectorName: `Pembuatan (Manufacturing)`,
                active: true,
                createdBy: 'Admin',
            },
            {
                occSectorCode: `2`,
                occSectorName: `Teknologi Maklumat (Information Technology)`,
                active: true,
                createdBy: 'Admin',
            },
            {
                occSectorCode: `3`,
                occSectorName: `Perkhidmatan (Service)`,
                active: true,
                createdBy: 'Admin',
            },
            {
                occSectorCode: `4`,
                occSectorName: `Telekomunikasi (Telecommunication)`,
                active: true,
                createdBy: 'Admin',
            },
            {
                occSectorCode: `5`,
                occSectorName: `Minyak dan Gas (Oil and Gas)`,
                active: true,
                createdBy: 'Admin',
            },
            {
                occSectorCode: `6`,
                occSectorName: `Pengangkutan (Transportation)`,
                active: true,
                createdBy: 'Admin',
            },
            {
                occSectorCode: `7`,
                occSectorName: `Bangunan dan Pembinaan (Building and Construction)`,
                active: true,
                createdBy: 'Admin',
            },
            {
                occSectorCode: `8`,
                occSectorName: `Pendidikan (Education)`,
                active: true,
                createdBy: 'Admin',
            },
            {
                occSectorCode: `9`,
                occSectorName: `Perniagaan`,
                active: true,
                createdBy: 'Admin',
            },
            {
                occSectorCode: `10`,
                occSectorName: `Perbankan`,
                active: true,
                createdBy: 'Admin',
            },
            {
                occSectorCode: `11`,
                occSectorName: `Perubatan`,
                active: true,
                createdBy: 'Admin',
            },
            {
                occSectorCode: `12`,
                occSectorName: `Perundangan`,
                active: true,
                createdBy: 'Admin',
            },
            {
                occSectorCode: `13`,
                occSectorName: `Bahasa`,
                active: true,
                createdBy: 'Admin',
            },
            {
                occSectorCode: `14`,
                occSectorName: `Persekitaran`,
                active: true,
                createdBy: 'Admin',
            },
            {
                occSectorCode: `15`,
                occSectorName: `Radiasi`,
                active: true,
                createdBy: 'Admin',
            },
            {
                occSectorCode: `16`,
                occSectorName: `Keselamatan dan Kesihatan`,
                active: true,
                createdBy: 'Admin',
            },
            {
                occSectorCode: `17`,
                occSectorName: `Kejuruteraan`,
                active: true,
                createdBy: 'Admin',
            },
            {
                occSectorCode: `18`,
                occSectorName: `Sumber Manusia`,
                active: true,
                createdBy: 'Admin',
            },
            {
                occSectorCode: `19`,
                occSectorName: `Pengurusan Perubahan`,
                active: true,
                createdBy: 'Admin',
            },
            {
                occSectorCode: `20`,
                occSectorName: `Teknologi Pembuatan dan Perindustrian`,
                active: true,
                createdBy: 'Admin',
            },
            {
                occSectorCode: `21`,
                occSectorName: `Teknologi Kimia`,
                active: true,
                createdBy: 'Admin',
            },
            {
                occSectorCode: `22`,
                occSectorName: `Pengurusan Projek`,
                active: true,
                createdBy: 'Admin',
            },
            {
                occSectorCode: `23`,
                occSectorName: `Audit`,
                active: true,
                createdBy: 'Admin',
            },
            {
                occSectorCode: `24`,
                occSectorName: `Penilai dan Pentaksir (Valuers and Appraisers)`,
                active: true,
                createdBy: 'Admin',
            },
            {
                occSectorCode: `25`,
                occSectorName: `Ejen Harta Tanah (Real Estate Agent)`,
                active: true,
                createdBy: 'Admin',
            },
            {
                occSectorCode: `26`,
                occSectorName: `Pengurus Harta`,
                active: true,
                createdBy: 'Admin',
            },
            {
                occSectorCode: `27`,
                occSectorName: `Pengurusan (Management)`,
                active: true,
                createdBy: 'Admin',
            },
            {
                occSectorCode: `28`,
                occSectorName: `Pengurusan Perniagaan (Business Management)`,
                active: true,
                createdBy: 'Admin',
            },
            {
                occSectorCode: `29`,
                occSectorName: `Penilaian/Pengurusan Aset (Valuation/Asset Management)`,
                active: true,
                createdBy: 'Admin',
            },
            {
                occSectorCode: `30`,
                occSectorName: `Information & Communication Technology (IT)`,
                active: true,
                createdBy: 'Admin',
            },
            {
                occSectorCode: `31`,
                occSectorName: `Perakaunan Pengurusan (Management Accounting)`,
                active: true,
                createdBy: 'Admin',
            },
            {
                occSectorCode: `32`,
                occSectorName: `Psikologi`,
                active: true,
                createdBy: 'Admin',
            },
            {
                occSectorCode: `33`,
                occSectorName: `Tadbir Urus Organisasi`,
                active: true,
                createdBy: 'Admin',
            },
            {
                occSectorCode: `34`,
                occSectorName: `Aerospace And Aviation Technology (AV)`,
                active: true,
                createdBy: 'Admin',
            },
            {
                occSectorCode: `35`,
                occSectorName: `Electrical and Electronic Technology (EE)`,
                active: true,
                createdBy: 'Admin',
            },
            {
                occSectorCode: `37`,
                occSectorName: `"Resource Based, Survey and Geomatics Technology (RB)"`,
                active: true,
                createdBy: 'Admin',
            },
            {
                occSectorCode: `38`,
                occSectorName: `Telecommunication and Broadcasting Technology (TB)`,
                active: true,
                createdBy: 'Admin',
            },
            {
                occSectorCode: `39`,
                occSectorName: `Bioteknologi (BT)`,
                active: true,
                createdBy: 'Admin',
            },
            {
                occSectorCode: `40`,
                occSectorName: `Kaunseling`,
                active: true,
                createdBy: 'Admin',
            },
            {
                occSectorCode: `99`,
                occSectorName: `Lain-Lain`,
                active: true,
                createdBy: 'Admin',
            },
        ]);
    }
}
