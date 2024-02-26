import { BaseModel, belongsTo, BelongsTo } from '@ioc:Adonis/Lucid/Orm';
import Employee from 'App/Models/Employee';
import AccruedAnnualLeave from 'App/Models/AccruedAnnualLeave';

export default class AccruedAnnualLeaveProcessRelationship extends BaseModel {
	@belongsTo(() => AccruedAnnualLeave, { foreignKey: 'accruedLeaveId' })
    public AccruedAnnualLeaveAsaccruedLeave: BelongsTo<typeof AccruedAnnualLeave>;

    @belongsTo(() => Employee, { foreignKey: 'supporterId' })
    public EmployeeAssupporter: BelongsTo<typeof Employee>;

    @belongsTo(() => Employee, { foreignKey: 'approverId' })
    public EmployeeAsapprover: BelongsTo<typeof Employee>;

    @belongsTo(() => Employee, { foreignKey: 'verifierId' })
    public EmployeeAsverifier: BelongsTo<typeof Employee>;

    @belongsTo(() => Employee, { foreignKey: 'confirmerId' })
    public EmployeeAsconfirmer: BelongsTo<typeof Employee>;
}
