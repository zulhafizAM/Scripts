import { BaseModel, belongsTo, BelongsTo } from '@ioc:Adonis/Lucid/Orm';
import Employee from 'App/Models/Employee';
import OtherLeave from 'App/Models/OtherLeave';

export default class OtherLeaveProcessRelationship extends BaseModel {
	@belongsTo(() => OtherLeave, { foreignKey: 'leaveId' })
    public OtherLeaveAsleave: BelongsTo<typeof OtherLeave>;

    @belongsTo(() => Employee, { foreignKey: 'supporterid' })
    public EmployeeAssupporter: BelongsTo<typeof Employee>;

    @belongsTo(() => Employee, { foreignKey: 'verifierId' })
    public EmployeeAsverifier: BelongsTo<typeof Employee>;

    @belongsTo(() => Employee, { foreignKey: 'confirmerId' })
    public EmployeeAsconfirmer: BelongsTo<typeof Employee>;

    @belongsTo(() => Employee, { foreignKey: 'approverId' })
    public EmployeeAsapprover: BelongsTo<typeof Employee>;
}
