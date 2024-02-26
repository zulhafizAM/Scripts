import { BaseModel,belongsTo, BelongsTo } from '@ioc:Adonis/Lucid/Orm';
import Clinic from 'App/Models/Clinic';
import Employee from 'App/Models/Employee';

export class clinicClaimProcessRelationship extends BaseModel{
    @belongsTo(() => Clinic, { foreignKey: 'clinicId' })
    public ClinicAsclinic: BelongsTo<typeof Clinic>;

    @belongsTo(() => Employee, { foreignKey: 'secretaryApproverId' })
    public EmployeeAssecretaryApprover: BelongsTo<typeof Employee>;

    @belongsTo(() => Employee, { foreignKey: 'supporterId' })
    public EmployeeAssupporter: BelongsTo<typeof Employee>;

    @belongsTo(() => Employee, { foreignKey: 'appointedApproverId' })
    public EmployeeAsappointedApprover: BelongsTo<typeof Employee>;
}