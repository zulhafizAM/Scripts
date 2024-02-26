import { BaseModel,hasOne, HasOne,belongsTo, BelongsTo } from '@ioc:Adonis/Lucid/Orm';
import Employee from 'App/Models/Employee';
import OtherLeaveProcess from 'App/Models/OtherLeaveProcess';

export default class OtherLeaveRelationship extends BaseModel {
	@hasOne(() => OtherLeaveProcess, { foreignKey: 'leaveId' })
    public OtherLeaveProcessAsleave: HasOne<typeof OtherLeaveProcess>;

    @belongsTo(() => Employee, { foreignKey: 'employeeId' })
    public EmployeeAsemployee: BelongsTo<typeof Employee>;
}
