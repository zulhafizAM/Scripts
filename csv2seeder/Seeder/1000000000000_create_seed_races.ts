import BaseSeeder from '@ioc:Adonis/Lucid/Seeder';
import Race from 'App/Models/Race';

export default class extends BaseSeeder {
    public async run() {
        const uniqueKey = 'description';
        await Race.updateOrCreateMany(uniqueKey, [
            {
                code: `00`,
                description: `Tiada Maklumat`,
                active: true,
                createdBy: 'Admin',
            },
            {
                code: `01`,
                description: `Melayu`,
                active: true,
                createdBy: 'Admin',
            },
            {
                code: `02`,
                description: `Cina`,
                active: true,
                createdBy: 'Admin',
            },
            {
                code: `03`,
                description: `India`,
                active: true,
                createdBy: 'Admin',
            },
            {
                code: `04`,
                description: `Bangladesh`,
                active: true,
                createdBy: 'Admin',
            },
            {
                code: `05`,
                description: `Pakistan`,
                active: true,
                createdBy: 'Admin',
            },
            {
                code: `06`,
                description: `Sri Lanka`,
                active: true,
                createdBy: 'Admin',
            },
            {
                code: `07`,
                description: `Indonesia`,
                active: true,
                createdBy: 'Admin',
            },
            {
                code: `08`,
                description: `Bumiputera Sabah`,
                active: true,
                createdBy: 'Admin',
            },
            {
                code: `09`,
                description: `Sabah Lain-lain`,
                active: true,
                createdBy: 'Admin',
            },
            {
                code: `10`,
                description: `Bumiputera Sarawak`,
                active: true,
                createdBy: 'Admin',
            },
            {
                code: `11`,
                description: `Sarawak Lain-lain`,
                active: true,
                createdBy: 'Admin',
            },
            {
                code: `12`,
                description: `Orang Asli (Semenanjung)`,
                active: true,
                createdBy: 'Admin',
            },
            {
                code: `13`,
                description: `Lain-lain Asia`,
                active: true,
                createdBy: 'Admin',
            },
            {
                code: `14`,
                description: `Eropah`,
                active: true,
                createdBy: 'Admin',
            },
            {
                code: `16`,
                description: `Siam`,
                active: true,
                createdBy: 'Admin',
            },
            {
                code: `17`,
                description: `Sikh`,
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
