import { BaseModel, hasOne, HasOne, belongsTo, BelongsTo } from '@ioc:Adonis/Lucid/Orm';
import Candidate from 'App/Models/Candidate';
import Employee from 'App/Models/Employee';
import NewHiredProcess from 'App/Models/NewHiredProcess';

export default class NewHireRelationship extends BaseModel {
	@hasOne(() => NewHiredProcess, { foreignKey: 'hireId' })
    public NewHiredProcessAshire: HasOne<typeof NewHiredProcess>;

    @belongsTo(() => Candidate, { foreignKey: 'candidateId' })
    public CandidateAscandidate: BelongsTo<typeof Candidate>;

    @belongsTo(() => Employee, { foreignKey: 'employeeId' })
    public EmployeeAsemployee: BelongsTo<typeof Employee>;
}
