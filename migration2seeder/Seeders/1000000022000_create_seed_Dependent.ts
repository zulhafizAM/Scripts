import BaseSeeder from '@ioc:Adonis/Lucid/Seeder';
import Dependent from 'App/Models/Dependent';
import { DateTime } from 'luxon';
import PersonalDetail from 'App/Models/PersonalDetail';

export default class DependentSeeder extends BaseSeeder {
    public async run() {
        const personalDetail = await PersonalDetail.all();

        await Dependent.createMany([
            {
                personalDetailsId: personalDetail![0].id,
                name: 'Rosminah binti Abdul Razak',
                alternativeName: 'Rosminah',
                isMalaysian: true,
                identityDocumentType: 'Kad Pengenalan',
                identityDocumentNumber: '690422-13-5312',
                relationship: 'Ibu',
                gender: 'Perempuan',
                marriageDate: DateTime.fromISO('1989-04-01T00:00:00.000Z'),
                inSchool: false,
                createdBy: 'Admin',
            },
            {
                personalDetailsId: personalDetail![1].id,
                name: 'Nurul Husnia binti Mohd Irfan',
                alternativeName: 'Husnia',
                isMalaysian: true,
                identityDocumentType: 'Kad Pengenalan',
                identityDocumentNumber: '200909-13-5488',
                relationship: 'Anak',
                gender: 'Perempuan',
                marriageDate: DateTime.fromISO('1989-04-01T00:00:00.000Z'),
                inSchool: true,
                createdBy: 'Admin',
            },
            {
                personalDetailsId: personalDetail![2].id,
                name: 'Rosminah binti Abdul Razak',
                alternativeName: 'Rosminah',
                isMalaysian: true,
                identityDocumentType: 'Kad Pengenalan',
                identityDocumentNumber: '690422-13-5312',
                relationship: 'Ibu',
                gender: 'Perempuan',
                marriageDate: DateTime.fromISO('1989-04-01T00:00:00.000Z'),
                inSchool: false,
                createdBy: 'Admin',
            },
            {
                personalDetailsId: personalDetail![3].id,
                name: 'Nurul Husnia binti Mohd Irfan',
                alternativeName: 'Husnia',
                isMalaysian: true,
                identityDocumentType: 'Kad Pengenalan',
                identityDocumentNumber: '200909-13-5488',
                relationship: 'Anak',
                gender: 'Perempuan',
                marriageDate: DateTime.fromISO('1989-04-01T00:00:00.000Z'),
                inSchool: true,
                createdBy: 'Admin',
            },
            {
                personalDetailsId: personalDetail![4].id,
                name: 'Damian Lee Hock Seng',
                alternativeName: 'Damian',
                isMalaysian: true,
                identityDocumentType: 'Kad Pengenalan',
                identityDocumentNumber: '220909-13-5488',
                relationship: 'Anak',
                gender: 'Lelaki',
                marriageDate: DateTime.fromISO('1989-04-01T00:00:00.000Z'),
                inSchool: false,
                createdBy: 'Admin',
            },
        ]);
    }
}
