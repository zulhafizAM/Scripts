import BaseSeeder from '@ioc:Adonis/Lucid/Seeder';
import AssetDeclarationStatus from 'App/Models/AssetDeclarationStatus';

export default class extends BaseSeeder {
    public async run() {
        const uniqueKey = 'description';
        await AssetDeclarationStatus.updateOrCreateMany(uniqueKey, [
            {
                code: `A0 `,
                description: `Hantar Semula`,
                active: true,
                createdBy: 'Admin',
            },
            {
                code: `A1 `,
                description: `Baru`,
                active: true,
                createdBy: 'Admin',
            },
            {
                code: `A2 `,
                description: `Lupus`,
                active: true,
                createdBy: 'Admin',
            },
            {
                code: `A3 `,
                description: `Permohonan Disokong`,
                active: true,
                createdBy: 'Admin',
            },
            {
                code: `A4 `,
                description: `Memerlukan Maklumat Tambahan`,
                active: true,
                createdBy: 'Admin',
            },
            {
                code: `A5 `,
                description: `Permohonan Dalam Perhatian`,
                active: true,
                createdBy: 'Admin',
            },
            {
                code: `A6 `,
                description: `Permohonan Diluluskan`,
                active: true,
                createdBy: 'Admin',
            },
            {
                code: `A7 `,
                description: `Permohonan Tidak Diluluskan`,
                active: true,
                createdBy: 'Admin',
            },
            {
                code: `A8 `,
                description: `Deraf`,
                active: true,
                createdBy: 'Admin',
            },
            {
                code: `D1 `,
                description: `Perlu Isytihar`,
                active: true,
                createdBy: 'Admin',
            },
            {
                code: `D2 `,
                description: `Isytihar-Tunggu Pengesahan`,
                active: true,
                createdBy: 'Admin',
            },
            {
                code: `D3 `,
                description: `Perisytiharan Terlewat`,
                active: true,
                createdBy: 'Admin',
            },
            {
                code: `D4 `,
                description: `Disahkan -Tunggu Makluman`,
                active: true,
                createdBy: 'Admin',
            },
            {
                code: `D5 `,
                description: `Perisytiharan Diambil Maklum`,
                active: true,
                createdBy: 'Admin',
            },
            {
                code: `D6 `,
                description: `Sudah Isytihar-Tindakan Lanjut (Tatatertib)`,
                active: true,
                createdBy: 'Admin',
            },
            {
                code: `D7 `,
                description: `Memerlukan Maklumat Tambahan`,
                active: true,
                createdBy: 'Admin',
            },
            {
                code: `DD `,
                description: `Tarikh Dijangka Isytihar`,
                active: true,
                createdBy: 'Admin',
            },
            {
                code: `DM `,
                description: `Sudah Isytihar`,
                active: true,
                createdBy: 'Admin',
            },
            {
                code: `EN `,
                description: `Disahkan`,
                active: true,
                createdBy: 'Admin',
            },
            {
                code: `PE `,
                description: `Menunggu Keputusan`,
                active: true,
                createdBy: 'Admin',
            },
            {
                code: `T0 `,
                description: `Periytiharan Tidak Diluluskan`,
                active: true,
                createdBy: 'Admin',
            },
            {
                code: `T1 `,
                description: `Perisytiharan Diluluskan`,
                active: true,
                createdBy: 'Admin',
            },
        ]);
    }
}
