import { BaseModel, hasOne, HasOne, belongsTo, BelongsTo } from '@ioc:Adonis/Lucid/Orm';
import Employee from 'App/Models/Employee';
import WithdrawalAnnualLeaveProcess from 'App/Models/WithdrawalAnnualLeaveProcess';

export default class WithdrawalAnnualLeaveRelationship extends BaseModel {
	@hasOne(() => WithdrawalAnnualLeaveProcess, { foreignKey: 'withdrawalLeaveId' })
    public WithdrawalAnnualLeaveProcessAswithdrawalLeave: HasOne<typeof WithdrawalAnnualLeaveProcess>;

    @belongsTo(() => Employee, { foreignKey: 'employeeId' })
    public EmployeeAsemployee: BelongsTo<typeof Employee>;
    }
