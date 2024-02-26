import { BaseModel, BelongsTo, belongsTo } from '@ioc:Adonis/Lucid/Orm';
import Candidate from 'App/Models/Candidate';
import Clinic from 'App/Models/Clinic';
import Employee from 'App/Models/Employee';

export default class userAccountsRelationship extends BaseModel{

    //Many-to-One
    @belongsTo(() => Employee, { foreignKey: 'employeeId' })
    public employees: BelongsTo<typeof Employee>

    @belongsTo(() => Candidate, { foreignKey: 'candidateId' })
    public candidates: BelongsTo<typeof Candidate>

    @belongsTo(() => Clinic, { foreignKey: 'clinicId' })
    public clinics: BelongsTo<typeof Clinic>
}
