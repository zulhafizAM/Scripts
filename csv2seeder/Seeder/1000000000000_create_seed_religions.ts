import BaseSeeder from '@ioc:Adonis/Lucid/Seeder';
import Religion from 'App/Models/Religion';

export default class extends BaseSeeder {
    public async run() {
        const uniqueKey = 'description';
        await Religion.updateOrCreateMany(uniqueKey, [
            {
                code: `00`,
                description: `Tiada Maklumat`,
                active: true,
                createdBy: 'Admin',
            },
            {
                code: `01`,
                description: `Islam`,
                active: true,
                createdBy: 'Admin',
            },
            {
                code: `02`,
                description: `Kristian`,
                active: true,
                createdBy: 'Admin',
            },
            {
                code: `03`,
                description: `Buddha`,
                active: true,
                createdBy: 'Admin',
            },
            {
                code: `04`,
                description: `Hindu`,
                active: true,
                createdBy: 'Admin',
            },
            {
                code: `05`,
                description: `Sikhism`,
                active: true,
                createdBy: 'Admin',
            },
            {
                code: `06`,
                description: `Tiada Agama`,
                active: true,
                createdBy: 'Admin',
            },
            {
                code: `07`,
                description: `Tao`,
                active: true,
                createdBy: 'Admin',
            },
            {
                code: `08`,
                description: `Konfusianisma`,
                active: true,
                createdBy: 'Admin',
            },
            {
                code: `09`,
                description: `Bahai`,
                active: true,
                createdBy: 'Admin',
            },
            {
                code: `10`,
                description: `Puak / Suku`,
                active: true,
                createdBy: 'Admin',
            },
            {
                code: `99`,
                description: `Lain-lain Agama`,
                active: true,
                createdBy: 'Admin',
            },
        ]);
    }
}
