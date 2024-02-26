import { BaseModel,belongsTo, BelongsTo } from '@ioc:Adonis/Lucid/Orm';
import Employee from 'App/Models/Employee';
import MovingOut from 'App/Models/MovingOut';

export default class MovingOutProcessRelationship extends BaseModel {
    @belongsTo(() => MovingOut, { foreignKey: 'movingInId' })
    public MovingOutAsmovingOut: BelongsTo<typeof MovingOut>;
    
    @belongsTo(() => Employee, { foreignKey: 'verifierId' })
    public EmployeeAsverifier: BelongsTo<typeof Employee>;

    @belongsTo(() => Employee, { foreignKey: 'directorApproverId' })
    public EmployeeAsdirectorApprover: BelongsTo<typeof Employee>;
}
