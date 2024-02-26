import { BaseModel,belongsTo, BelongsTo } from '@ioc:Adonis/Lucid/Orm';
import Employee from 'App/Models/Employee';
import HalfPayLeave from 'App/Models/HalfPayLeave';

export default class HalfPayLeaveProcessRelationship extends BaseModel {
	
    @belongsTo(() => HalfPayLeave, { foreignKey: 'halfPayLeaveId' })
    public HalfPayLeaveAshalfPayLeave: BelongsTo<typeof HalfPayLeave>;

    @belongsTo(() => Employee, { foreignKey: 'directorSupporterId' })
    public EmployeeAsdirectorSupporter: BelongsTo<typeof Employee>;

    @belongsTo(() => Employee, { foreignKey: 'verifierId' })
    public EmployeeAsverifier: BelongsTo<typeof Employee>;

    @belongsTo(() => Employee, { foreignKey: 'confirmerId' })
    public EmployeeAsconfirmer: BelongsTo<typeof Employee>;

    @belongsTo(() => Employee, { foreignKey: 'approverId' })
    public EmployeeAsapprover: BelongsTo<typeof Employee>;
}
