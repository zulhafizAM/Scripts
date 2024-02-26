import { BaseModel, belongsTo, BelongsTo } from '@ioc:Adonis/Lucid/Orm';
import Employee from 'App/Models/Employee';
import MedicalClaim from 'App/Models/MedicalClaim';

export class medicalClaimProcessRelationship extends BaseModel{
    @belongsTo(() => MedicalClaim, { foreignKey: 'claimId' })
    public MedicalClaimsAsclaim: BelongsTo<typeof MedicalClaim>;

    @belongsTo(() => Employee, { foreignKey: 'secretaryApproverId' })
    public EmployeeAssecretaryApprover: BelongsTo<typeof Employee>;

    @belongsTo(() => Employee, { foreignKey: 'supporterId' })
    public EmployeeAssupporter: BelongsTo<typeof Employee>;

    @belongsTo(() => Employee, { foreignKey: 'appointedApproverId' })
    public EmployeeAsappointedApprover: BelongsTo<typeof Employee>;
}