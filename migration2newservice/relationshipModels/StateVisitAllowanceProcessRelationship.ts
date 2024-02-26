import { BaseModel, belongsTo, BelongsTo } from '@ioc:Adonis/Lucid/Orm';
import Employee from 'App/Models/Employee';
import StateVisitAllowance from 'App/Models/StateVisitAllowance';

export default class StateVisitAllowanceProcessRelationship extends BaseModel {
	@belongsTo(() => StateVisitAllowance, { foreignKey: 'stateVisitedId' })
    public StateVisitAllowanceAsstateVisited: BelongsTo<typeof StateVisitAllowance>;

    @belongsTo(() => Employee, { foreignKey: 'verifierId' })
    public EmployeeAsverifier: BelongsTo<typeof Employee>;

    @belongsTo(() => Employee, { foreignKey: 'supporterId' })
    public EmployeeAssupporter: BelongsTo<typeof Employee>;

    @belongsTo(() => Employee, { foreignKey: 'approverId' })
    public EmployeeAsapprover: BelongsTo<typeof Employee>;
}
