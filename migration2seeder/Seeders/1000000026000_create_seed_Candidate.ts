import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Candidate from 'App/Models/Candidate';
import PersonalDetail from 'App/Models/PersonalDetail';
import { Faker, en } from '@faker-js/faker';

export default class extends BaseSeeder {
  public async run () {
    const personalDetail = await PersonalDetail.all();
    const faker = new Faker({ locale: [en] });

    await Candidate.createMany([
      {
        personalDetailId: personalDetail![2].id,
        active:true,
        candidateNumber:"C00001",
        createdBy:"Admin",
        modifiedBy:"Admin"
      },
      {
        personalDetailId: personalDetail![3].id,
        active:true,
        candidateNumber:"C00002",
        createdBy:"Admin",
        modifiedBy:"Admin"
      },
      {
        personalDetailId: personalDetail![4].id,
        active:true,
        candidateNumber:"C00003",
        createdBy:"Admin",
        modifiedBy:"Admin"
      },
    ]);
  }
}
