import BaseSeeder from '@ioc:Adonis/Lucid/Seeder';
import Gender from 'App/Models/Gender';

export default class extends BaseSeeder {
    public async run() {
        const uniqueKey = 'description';
        await Gender.updateOrCreateMany(uniqueKey, [
            {
                code: `L`,
                description: `Lelaki`,
                active: true,
                createdBy: 'Admin',
            },
            {
                code: `P`,
                description: `Perempuan`,
                active: true,
                createdBy: 'Admin',
            },
            {
                code: `Z`,
                description: `Ragu`,
                active: true,
                createdBy: 'Admin',
            },
        ]);
    }
}
