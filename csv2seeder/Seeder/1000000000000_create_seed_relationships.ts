import BaseSeeder from '@ioc:Adonis/Lucid/Seeder';
import Relationship from 'App/Models/Relationship';

export default class extends BaseSeeder {
    public async run() {
        const uniqueKey = 'description';
        await Relationship.updateOrCreateMany(uniqueKey, [
            {
                code: `01`,
                description: `Isteri`,
                active: true,
                createdBy: 'Admin',
            },
            {
                code: `02`,
                description: `Suami`,
                active: true,
                createdBy: 'Admin',
            },
            {
                code: `03`,
                description: `Ibu`,
                active: true,
                createdBy: 'Admin',
            },
            {
                code: `04`,
                description: `Bapa`,
                active: true,
                createdBy: 'Admin',
            },
            {
                code: `05`,
                description: `Anak Kandung`,
                active: true,
                createdBy: 'Admin',
            },
            {
                code: `06`,
                description: `Anak Tiri`,
                active: true,
                createdBy: 'Admin',
            },
            {
                code: `07`,
                description: `Anak Angkat`,
                active: true,
                createdBy: 'Admin',
            },
            {
                code: `08`,
                description: `Anak Tidak Sah Taraf`,
                active: true,
                createdBy: 'Admin',
            },
            {
                code: `09`,
                description: `Nenek`,
                active: true,
                createdBy: 'Admin',
            },
            {
                code: `10`,
                description: `Datuk`,
                active: true,
                createdBy: 'Admin',
            },
            {
                code: `11`,
                description: `Saudara Kandung`,
                active: true,
                createdBy: 'Admin',
            },
            {
                code: `12`,
                description: `Penjaga`,
                active: true,
                createdBy: 'Admin',
            },
            {
                code: `13`,
                description: `Bekas Isteri`,
                active: true,
                createdBy: 'Admin',
            },
            {
                code: `14`,
                description: `Bekas Suami`,
                active: true,
                createdBy: 'Admin',
            },
            {
                code: `15`,
                description: `Anak Tiri Tanggungan`,
                active: true,
                createdBy: 'Admin',
            },
            {
                code: `16`,
                description: `Ibu Angkat`,
                active: true,
                createdBy: 'Admin',
            },
            {
                code: `17`,
                description: `Bapa Angkat`,
                active: true,
                createdBy: 'Admin',
            },
            {
                code: `18`,
                description: `Ibu Tiri`,
                active: true,
                createdBy: 'Admin',
            },
            {
                code: `19`,
                description: `Bapa Tiri`,
                active: true,
                createdBy: 'Admin',
            },
            {
                code: `20`,
                description: `Anak Angkat De Facto`,
                active: true,
                createdBy: 'Admin',
            },
            {
                code: `21`,
                description: `Anak Pelihara`,
                active: true,
                createdBy: 'Admin',
            },
            {
                code: `22`,
                description: `Ibu Mentua`,
                active: true,
                createdBy: 'Admin',
            },
            {
                code: `23`,
                description: `Bapa Mentua`,
                active: true,
                createdBy: 'Admin',
            },
            {
                code: `99`,
                description: `Lain-lain`,
                active: true,
                createdBy: 'Admin',
            },
        ]);
    }
}
