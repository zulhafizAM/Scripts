import { BaseModel, belongsTo, BelongsTo } from '@ioc:Adonis/Lucid/Orm';
import Employee from 'App/Models/Employee';
import MovingIn from 'App/Models/MovingIn';

export default class MovingInProcessRelationship extends BaseModel {
	@belongsTo(() => MovingIn, { foreignKey: 'movingInId' })
    public MovingInAsmovingIn: BelongsTo<typeof MovingIn>;

    @belongsTo(() => Employee, { foreignKey: 'verifierId' })
    public EmployeeAsverifier: BelongsTo<typeof Employee>;

    @belongsTo(() => Employee, { foreignKey: 'secretaryApproverId' })
    public EmployeeAssecretaryApprover: BelongsTo<typeof Employee>;

    @belongsTo(() => Employee, { foreignKey: 'directorApproverId' })
    public EmployeeAsdirectorApprover: BelongsTo<typeof Employee>;
}
