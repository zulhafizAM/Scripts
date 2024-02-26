import BaseSeeder from '@ioc:Adonis/Lucid/Seeder';
import Nationality from 'App/Models/Nationality';

export default class extends BaseSeeder {
    public async run() {
        const uniqueKey = 'description';
        await Nationality.updateOrCreateMany(uniqueKey, [
            {
                code: `0`,
                description: `Tiada Maklumat`,
                active: true,
                createdBy: 'Admin',
            },
            {
                code: `1`,
                description: `Warganegara`,
                active: true,
                createdBy: 'Admin',
            },
            {
                code: `2`,
                description: `Bukan Warganegara`,
                active: true,
                createdBy: 'Admin',
            },
            {
                code: `3`,
                description: `Penduduk Tetap`,
                active: true,
                createdBy: 'Admin',
            },
            {
                code: `9`,
                description: `Lain-Lain`,
                active: true,
                createdBy: 'Admin',
            },
        ]);
    }
}
