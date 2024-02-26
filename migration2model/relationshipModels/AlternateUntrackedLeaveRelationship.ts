import { BaseModel,hasOne,HasOne, belongsTo, BelongsTo } from '@ioc:Adonis/Lucid/Orm';
import Employee from 'App/Models/Employee';
import AlternateUntrackedLeaveProcess from 'App/Models/AlternateUntrackedLeaveProcess';

export default class AlternateUntrackedLeaveRelationship extends BaseModel {
	@hasOne(() => AlternateUntrackedLeaveProcess, { foreignKey: 'leaveId' })
    public AlternateUntrackedLeaveProcessAsleave: HasOne<typeof AlternateUntrackedLeaveProcess>;

    @belongsTo(() => Employee, { foreignKey: 'employeeId' })
    public EmployeeAsemployee: BelongsTo<typeof Employee>;

}
