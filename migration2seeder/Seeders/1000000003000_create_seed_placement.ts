import BaseSeeder from '@ioc:Adonis/Lucid/Seeder';
import Placement from 'App/Models/Placement';

export default class PlacementSeeder extends BaseSeeder {
    public async run() {
        await Placement.createMany([
            {
                name: 'LKIM Negeri Perlis',
                active: true,
                createdBy: 'Admin',
            },
            {
                name: 'LKIM Negeri Kedah',
                active: true,
                createdBy: 'Admin',
            },
            {
                name: 'LKIM Negeri Pulau Pinang',
                active: true,
                createdBy: 'Admin',
            },
            {
                name: 'LKIM Negeri Perak',
                active: true,
                createdBy: 'Admin',
            },
            {
                name: 'LKIM Negeri Selangor',
                active: true,
                createdBy: 'Admin',
            },
            {
                name: 'LKIM Negeri Sembilan',
                active: true,
                createdBy: 'Admin',
            },
            {
                name: 'LKIM Negeri Melaka',
                active: true,
                createdBy: 'Admin',
            },
            {
                name: 'LKIM Negeri Johor',
                active: true,
                createdBy: 'Admin',
            },
            {
                name: 'LKIM Negeri Pahang',
                active: true,
                createdBy: 'Admin',
            },
            {
                name: 'LKIM Negeri Terengganu',
                active: true,
                createdBy: 'Admin',
            },
            {
                name: 'LKIM Negeri Kelantan',
                active: true,
                createdBy: 'Admin',
            },
            {
                name: 'LKIM Negeri Sarawak',
                active: true,
                createdBy: 'Admin',
            },
            {
                name: 'LKIM Sarawak Wilayah II - Mukah',
                active: true,
                createdBy: 'Admin',
            },
            {
                name: 'LKIM Sarawak Wilayah III - Miri',
                active: true,
                createdBy: 'Admin',
            },
            {
                name: 'Pelabuhan Perikanan LKIM Tanjung Manis',
                active: true,
                createdBy: 'Admin',
            },
            {
                name: 'LKIM Negeri Sabah',
                active: true,
                createdBy: 'Admin',
            },
            {
                name: 'LKIM Sabah Wilayah II - Sandakan',
                active: true,
                createdBy: 'Admin',
            },
            {
                name: 'LKIM Wilayah III - Tawau',
                active: true,
                createdBy: 'Admin',
            },
            {
                name: 'LKIM Labuan',
                active: true,
                createdBy: 'Admin',
            },
        ]);
    }
}
