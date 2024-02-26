import BaseSeeder from '@ioc:Adonis/Lucid/Seeder';
import AwardCategory from 'App/Models/AwardCategory';

export default class extends BaseSeeder {
    public async run() {
        const uniqueKey = 'description';
        await AwardCategory.updateOrCreateMany(uniqueKey, [
            {
                code: `01`,
                description: `Anugerah yang membawa gelaran`,
                active: true,
                createdBy: 'Admin',
            },
            {
                code: `02`,
                description: `Anugerah yang tidak membawa gelaran`,
                active: true,
                createdBy: 'Admin',
            },
            {
                code: `03`,
                description: `Anugerah dalam perkhidmatan awam`,
                active: true,
                createdBy: 'Admin',
            },
            {
                code: `04`,
                description: `Anugerah dalam perkhidmatan awam yang tidak membawa gelaran`,
                active: true,
                createdBy: 'Admin',
            },
            {
                code: `05`,
                description: `Anugerah Akademik dalam Perkhidmatan`,
                active: true,
                createdBy: 'Admin',
            },
            {
                code: `99`,
                description: `Lain-lain Anugerah`,
                active: true,
                createdBy: 'Admin',
            },
        ]);
    }
}
