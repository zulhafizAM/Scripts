import { BaseModel, belongsTo, BelongsTo } from '@ioc:Adonis/Lucid/Orm';
import Employee from 'App/Models/Employee';
import HouseMovingAllowance from 'App/Models/HouseMovingAllowance';

export default class HouseMovingProcessRelationship extends BaseModel {
	@belongsTo(() => HouseMovingAllowance, { foreignKey: 'houseMovingId' })
    public HouseMovingAllowanceAshouseMoving: BelongsTo<typeof HouseMovingAllowance>;

    @belongsTo(() => Employee, { foreignKey: 'confirmerId' })
    public EmployeeAsconfirmer: BelongsTo<typeof Employee>;

    @belongsTo(() => Employee, { foreignKey: 'verifierId' })
    public EmployeeAsverifier: BelongsTo<typeof Employee>;

    @belongsTo(() => Employee, { foreignKey: 'supporterId' })
    public EmployeeAssupporter: BelongsTo<typeof Employee>;

    @belongsTo(() => Employee, { foreignKey: 'approverId' })
    public EmployeeAsapprover: BelongsTo<typeof Employee>;

}
