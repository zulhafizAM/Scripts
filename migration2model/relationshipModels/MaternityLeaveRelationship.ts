import { BaseModel,hasOne, HasOne,belongsTo,BelongsTo } from '@ioc:Adonis/Lucid/Orm';
import Employee from 'App/Models/Employee';
import MaternityLeaveProcess from 'App/Models/MaternityLeaveProcess';

export default class MaternityLeaveRelationship extends BaseModel {
	@hasOne(() => MaternityLeaveProcess, { foreignKey: 'maternityLeaveId' })
    public MaternityLeaveProcessAsmaternityLeave: HasOne<typeof MaternityLeaveProcess>;

    @belongsTo(() => Employee, { foreignKey: 'employeeId' })
    public EmployeeAsemployee: BelongsTo<typeof Employee>;
}
