import { BaseModel, belongsTo, BelongsTo } from '@ioc:Adonis/Lucid/Orm';
import Employee from 'App/Models/Employee';
import WithdrawalAnnualLeave from 'App/Models/WithdrawalAnnualLeave';

export default class WithdrawalAnnualLeaveProcessRelationship extends BaseModel {
	@belongsTo(() => WithdrawalAnnualLeave, { foreignKey: 'withdrawalLeaveId' })
    public WithdrawalAnnualLeaveAswithdrawalLeave: BelongsTo<typeof WithdrawalAnnualLeave>;

    @belongsTo(() => Employee, { foreignKey: 'supporterId' })
    public EmployeeAssupporter: BelongsTo<typeof Employee>;

    @belongsTo(() => Employee, { foreignKey: 'verifierId' })
    public EmployeeAsverifier: BelongsTo<typeof Employee>;

    @belongsTo(() => Employee, { foreignKey: 'confirmerId' })
    public EmployeeAsconfirmer: BelongsTo<typeof Employee>;

    @belongsTo(() => Employee, { foreignKey: 'certifierId' })
    public EmployeeAscertifier: BelongsTo<typeof Employee>;

    @belongsTo(() => Employee, { foreignKey: 'approverId' })
    public EmployeeAsapprover: BelongsTo<typeof Employee>;
}
