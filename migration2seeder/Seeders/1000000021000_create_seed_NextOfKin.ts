import BaseSeeder from '@ioc:Adonis/Lucid/Seeder';
import NextOfKin from 'App/Models/NextOfKin';
import { DateTime } from 'luxon';
import PersonalDetail from 'App/Models/PersonalDetail';
import State from 'App/Models/State';

export default class NextOfKinSeeder extends BaseSeeder {
    public async run() {
        const personalDetail = await PersonalDetail.all();
        const state = await State.all();

        await NextOfKin.createMany([
            {
                personalDetailId: personalDetail![1].id,
                stateId: state![0].id,
                name: 'Nur Afifah Farhan',
                alternativeName: 'Afifah',
                isMalaysian: true,
                identityDocumentType: 'Kad Pengenalan',
                identityDocumentNumber: '991129-13-6122',
                relationship: 'Isteri',
                gender: 'Perempuan',
                marriageDate: DateTime.fromISO('1989-04-01T00:00:00.000Z'),
                inSchool: false,
                homeNumber: '082-799780',
                phoneNumber: '014-8435579',
                taxNumber: '123456789',
                isLKIMStaff: true,
                position: 'Pengurus',
                company: 'LKIM',
                companyAddress:
                    'Wisma LKIM, Jalan Desaria, Pulau Meranti, 47120 Puchong, Selangor Darul Ehsan.',
                address: 'Lot 113, Lorong 9C, Taman Permai, 93050 Kuching, Malaysia',
                createdBy: 'Admin',
            },
            {
                personalDetailId: personalDetail![2].id,
                stateId: state![0].id,
                name: 'Mohd Irfan bin Abu',
                alternativeName: 'Ipan',
                isMalaysian: true,
                identityDocumentType: 'Kad Pengenalan',
                identityDocumentNumber: '990909-13-5076',
                relationship: 'Suami',
                gender: 'Lelaki',
                marriageDate: DateTime.fromISO('1989-04-01T00:00:00.000Z'),
                inSchool: false,
                homeNumber: '082-799780',
                phoneNumber: '013-2647888',
                taxNumber: '123456789',
                isLKIMStaff: true,
                position: 'Pengurus',
                company: 'LKIM',
                companyAddress:
                    'Wisma LKIM, Jalan Desaria, Pulau Meranti, 47120 Puchong, Selangor Darul Ehsan.',
                address: 'Lot 113, Lorong 9C, Taman Permai, 93050 Kuching, Malaysia',
                createdBy: 'Admin',
            },
            {
                personalDetailId: personalDetail![3].id,
                stateId: state![0].id,
                name: 'Richard Lee Zhen Wei',
                alternativeName: 'Richard',
                isMalaysian: true,
                identityDocumentType: 'Kad Pengenalan',
                identityDocumentNumber: '930207-13-5499',
                relationship: 'Suami',
                gender: 'Lelaki',
                marriageDate: DateTime.fromISO('1989-04-01T00:00:00.000Z'),
                inSchool: false,
                homeNumber: '082-567223',
                phoneNumber: '016-2348763',
                taxNumber: '123456789',
                isLKIMStaff: false,
                position: 'Jurutera Minyak dan Gas',
                company: 'Petronas Carigali Sdn Bhd',
                companyAddress:
                    'Sarawak Operations, Petronas Carigali Building, Jalan Sekolah Lutong, P.O. Box. 1452, 96006, Miri, Sarawak, Malaysia.',
                address: 'Lot 301C, Lorong 5B, Taman Century Garden, 93050 Kuching, Malaysia',
                createdBy: 'Admin',
            },
        ]);
    }
}
