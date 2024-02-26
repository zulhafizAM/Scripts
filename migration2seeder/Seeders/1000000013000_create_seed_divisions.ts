import BaseSeeder from '@ioc:Adonis/Lucid/Seeder';
import Division from 'App/Models/Division';
import State from 'App/Models/State';

export default class DivisionSeeder extends BaseSeeder {
    public async run() {
        const state = await State.all()
        
        await Division.createMany([
            {
                stateId: state![0].id,
                name: 'Perlis',
                active: true,
                createdBy: 'Admin',
            },
            {
                stateId: state![1].id,
                name: 'Kedah',
                active: true,
                createdBy: 'Admin',
            },
            {
                stateId: state![2].id,
                name: 'Pulau Pinang',
                active: true,
                createdBy: 'Admin',
            },
            {
                stateId: state![3].id,
                name: 'Perak',
                active: true,
                createdBy: 'Admin',
            },
            {
                stateId: state![4].id,
                name: 'Selangor',
                active: true,
                createdBy: 'Admin',
            },
            {
                stateId: state![5].id,
                name: 'Negeri Sembilan',
                active: true,
                createdBy: 'Admin',
            },
            {
                stateId: state![6].id,
                name: 'Melaka',
                active: true,
                createdBy: 'Admin',
            },
            {
                stateId: state![7].id,
                name: 'Johor',
                active: true,
                createdBy: 'Admin',
            },
            {
                stateId: state![8].id,
                name: 'Kelantan',
                active: true,
                createdBy: 'Admin',
            },
            {
                stateId: state![9].id,
                name: 'Terengganu',
                active: true,
                createdBy: 'Admin',
            },
            {
                stateId: state![10].id,
                name: 'Pahang',
                active: true,
                createdBy: 'Admin',
            },
            {
                stateId: state![11].id,
                name: 'Interior',
                active: true,
                createdBy: 'Admin',
            },
            {
                stateId: state![11].id,
                name: 'Sandakan',
                active: true,
                createdBy: 'Admin',
            },
            {
                stateId: state![11].id,
                name: 'West Coast',
                active: true,
                createdBy: 'Admin',
            },
            {
                stateId: state![11].id,
                name: 'Kudat',
                active: true,
                createdBy: 'Admin',
            },
            {
                stateId: state![11].id,
                name: 'Tawau',
                active: true,
                createdBy: 'Admin',
            },
            {
                stateId: state![12].id,
                name: 'Kuching',
                active: true,
                createdBy: 'Admin',
            },
            {
                stateId: state![12].id,
                name: 'Samarahan',
                active: true,
                createdBy: 'Admin',
            },
            {
                stateId: state![12].id,
                name: 'Serian',
                active: true,
                createdBy: 'Admin',
            },
            {
                stateId: state![12].id,
                name: 'Sri Aman',
                active: true,
                createdBy: 'Admin',
            },
            {
                stateId: state![12].id,
                name: 'Betong',
                active: true,
                createdBy: 'Admin',
            },
            {
                stateId: state![12].id,
                name: 'Sarikei',
                active: true,
                createdBy: 'Admin',
            },
            {
                stateId: state![12].id,
                name: 'Sibu',
                active: true,
                createdBy: 'Admin',
            },
            {
                stateId: state![12].id,
                name: 'Mukah',
                active: true,
                createdBy: 'Admin',
            },
            {
                stateId: state![12].id,
                name: 'Bintulu',
                active: true,
                createdBy: 'Admin',
            },
            {
                stateId: state![12].id,
                name: 'Kapit',
                active: true,
                createdBy: 'Admin',
            },
            {
                stateId: state![12].id,
                name: 'Miri',
                active: true,
                createdBy: 'Admin',
            },
            {
                stateId: state![12].id,
                name: 'Limbang',
                active: true,
                createdBy: 'Admin',
            },
            {
                stateId: state![13].id,
                name: 'Wilayah Persekutuan Kuala Lumpur',
                active: true,
                createdBy: 'Admin',
            },
            {
                stateId: state![14].id,
                name: 'Wilayah Persekutuan Labuan',
                active: true,
                createdBy: 'Admin',
            },
            {
                stateId: state![15].id,
                name: 'Wilayah Persekutuan Putrajaya',
                active: true,
                createdBy: 'Admin',
            },
        ]);
    }
}
