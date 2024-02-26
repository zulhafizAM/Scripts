import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import CandidateType from 'App/Models/CandidateType'
export default class extends BaseSeeder {
  public async run () {
    await CandidateType.createMany([
      {
        name:'Calon Perlantikan Tetap',
        active:true,
        createdBy:"Admin",
        modifiedBy:"Admin"
      },
      {
        name:'Calon Kenaikan Pangkat',
        active:true,
        createdBy:"Admin",
        modifiedBy:"Admin"
      },
      {
        name:'Calon Perlantikan Kontrak',
        active:true,
        createdBy:"Admin",
        modifiedBy:"Admin"
      },
    ]);
  }
}
