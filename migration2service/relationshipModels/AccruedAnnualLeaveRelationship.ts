import { BaseModel,hasOne, HasOne, belongsTo, BelongsTo } from '@ioc:Adonis/Lucid/Orm';
import Employee from 'App/Models/Employee';
import AccruedAnnualLeaveProcess from 'App/Models/AccruedAnnualLeaveProcess';

export default class AccruedAnnualLeaveRelationship extends BaseModel {
	@hasOne(() => AccruedAnnualLeaveProcess, { foreignKey: 'accruedLeaveId' })
    public AccruedAnnualLeaveProcessAsaccruedLeave: HasOne<typeof AccruedAnnualLeaveProcess>;

    @belongsTo(() => Employee, { foreignKey: 'employeeId' })
    public EmployeeAsemployee: BelongsTo<typeof Employee>;
}
