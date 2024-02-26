import { BaseModel, belongsTo, BelongsTo } from '@ioc:Adonis/Lucid/Orm';
import Employee from 'App/Models/Employee';
import TerminationInterim from 'App/Models/TerminationInterim';

export default class TerminationInterimProcessRelationship extends BaseModel {
	@belongsTo(() => TerminationInterim, { foreignKey: 'terminationId' })
    public TerminationInterimAstermination: BelongsTo<typeof TerminationInterim>;

    @belongsTo(() => Employee, { foreignKey: 'verifierId' })
    public EmployeeAsverifier: BelongsTo<typeof Employee>;

    @belongsTo(() => Employee, { foreignKey: 'supporterId' })
    public EmployeeAssupporter: BelongsTo<typeof Employee>;

    @belongsTo(() => Employee, { foreignKey: 'approverId' })
    public EmployeeAsapprover: BelongsTo<typeof Employee>;
}
