import {
    BaseModel,
    belongsTo,
    BelongsTo,
    hasMany,
    HasMany,
    hasOne,
    HasOne,
} from '@ioc:Adonis/Lucid/Orm';
import CandidateType from 'App/Models/CandidateType';
import Employee from 'App/Models/Employee';
import Meeting from 'App/Models/Meeting';
import ContractDetail from 'App/Models/ContractDetail';
import PersonalDetail from 'App/Models/PersonalDetail';
import UserAccount from 'App/Models/UserAccount';

export default class candidateRelationship extends BaseModel {
    @hasOne(() => UserAccount, { foreignKey: 'candidateId' })
    public UserAccountAscandidate: HasOne<typeof UserAccount>;

    @hasMany(() => ContractDetail, { foreignKey: 'candidateId' })
    public ContractDetailsAscandidate: HasMany<typeof ContractDetail>;

    @belongsTo(() => PersonalDetail, { foreignKey: 'personalDetailId' })
    public PersonalDetailAspersonalDetail: BelongsTo<typeof PersonalDetail>;

    @belongsTo(() => Employee, { foreignKey: 'employeeId' })
    public EmployeeAsemployee: BelongsTo<typeof Employee>;

    @belongsTo(() => Meeting, { foreignKey: 'meetingId' })
    public MeetingAsmeeting: BelongsTo<typeof Meeting>;

    @belongsTo(() => CandidateType, { foreignKey: 'candidateId' })
    public CandidateTypeAscandidate: BelongsTo<typeof CandidateType>;
}
