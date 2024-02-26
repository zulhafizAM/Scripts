import { BaseModel, belongsTo, BelongsTo } from '@ioc:Adonis/Lucid/Orm';
import Employee from 'App/Models/Employee';
import MaternityLeave from 'App/Models/MaternityLeave';

export default class MaternityLeaveProcessRelationship extends BaseModel {
	@belongsTo(() => MaternityLeave, { foreignKey: 'maternityLeaveId' })
    public MaternityLeaveAsmaternityLeave: BelongsTo<typeof MaternityLeave>;

    @belongsTo(() => Employee, { foreignKey: 'verifierId' })
    public EmployeeAsverifier: BelongsTo<typeof Employee>;

    @belongsTo(() => Employee, { foreignKey: 'approverId' })
    public EmployeeAsapprover: BelongsTo<typeof Employee>;
}
