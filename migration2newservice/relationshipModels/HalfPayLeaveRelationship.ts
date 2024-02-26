import { BaseModel,hasOne,HasOne,belongsTo, BelongsTo } from '@ioc:Adonis/Lucid/Orm';
import Employee from 'App/Models/Employee';
import HalfPayLeaveProcess from 'App/Models/HalfPayLeaveProcess';

export default class HalfPayLeaveRelationship extends BaseModel {
	@hasOne(() => HalfPayLeaveProcess, { foreignKey: 'halfPayLeaveId' })
    public HalfPayLeaveProcessAshalfPayLeave: HasOne<typeof HalfPayLeaveProcess>;

    @belongsTo(() => Employee, { foreignKey: 'employeeId' })
    public EmployeeAsemployee: BelongsTo<typeof Employee>;

}
