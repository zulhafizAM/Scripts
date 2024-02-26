import BaseSeeder from '@ioc:Adonis/Lucid/Seeder';
import AgencyGroup from 'App/Models/AgencyGroup';

export default class extends BaseSeeder {
    public async run() {
        const uniqueKey = 'description';
        await AgencyGroup.updateOrCreateMany(uniqueKey, [
            {
                code: `BBN`,
                description: `Badan Berkanun Negeri`,
                active: true,
                createdBy: 'Admin',
            },
            {
                code: `BBP`,
                description: `Badan Berkanun Persekutuan`,
                active: true,
                createdBy: 'Admin',
            },
            {
                code: `PAN`,
                description: `Perkhidmatan Awam Negeri`,
                active: true,
                createdBy: 'Admin',
            },
            {
                code: `PAP`,
                description: `Perkhidmatan Awam Persekutuan`,
                active: true,
                createdBy: 'Admin',
            },
            {
                code: `PBT`,
                description: `Pihak Berkuasa Tempatan`,
                active: true,
                createdBy: 'Admin',
            },
        ]);
    }
}
