import BaseSeeder from '@ioc:Adonis/Lucid/Seeder';
import MaritalStatus from 'App/Models/MaritalStatus';

export default class extends BaseSeeder {
    public async run() {
        const uniqueKey = 'description';
        await MaritalStatus.updateOrCreateMany(uniqueKey, [
            {
                code: `0`,
                description: `Tiada Maklumat`,
                active: true,
                createdBy: 'Admin',
            },
            {
                code: `1`,
                description: `Belum Berkahwin`,
                active: true,
                createdBy: 'Admin',
            },
            {
                code: `2`,
                description: `Berkahwin`,
                active: true,
                createdBy: 'Admin',
            },
            {
                code: `3`,
                description: `Duda`,
                active: true,
                createdBy: 'Admin',
            },
            {
                code: `4`,
                description: `Janda`,
                active: true,
                createdBy: 'Admin',
            },
            {
                code: `5`,
                description: `Balu`,
                active: true,
                createdBy: 'Admin',
            },
        ]);
    }
}
