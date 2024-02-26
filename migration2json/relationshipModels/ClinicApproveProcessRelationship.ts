import { BaseModel, belongsTo, BelongsTo } from '@ioc:Adonis/Lucid/Orm';
import Clinic from 'App/Models/Clinic';
import Employee from 'App/Models/Employee';

export class clinicApprovalProcessRelationship extends BaseModel{
    @belongsTo(() => Clinic, { foreignKey: 'clinicId' })
    public ClinicAsclinic: BelongsTo<typeof Clinic>;

    @belongsTo(() => Employee, { foreignKey: 'comfirmerId' })
    public EmployeeAscomfirmer: BelongsTo<typeof Employee>;

    @belongsTo(() => Employee, { foreignKey: 'supporterId' })
    public EmployeeAssupporter: BelongsTo<typeof Employee>;

    @belongsTo(() => Employee, { foreignKey: 'approverId' })
    public EmployeeAsapprover: BelongsTo<typeof Employee>;
}