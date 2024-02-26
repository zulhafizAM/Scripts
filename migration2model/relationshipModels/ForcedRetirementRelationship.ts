import { BaseModel, hasOne, belongsTo, HasOne, BelongsTo } from '@ioc:Adonis/Lucid/Orm';
import Employee from 'App/Models/Employee';
import ForcedRetirementProcess from 'App/Models/ForcedRetirementProcess';

export default class ForcedRetirementRelationship extends BaseModel {
	@hasOne(() => ForcedRetirementProcess, { foreignKey: 'forcedId' })
    public ForcedRetirementProcessAsforced: HasOne<typeof ForcedRetirementProcess>;

    @belongsTo(() => Employee, { foreignKey: 'employeeId' })
    public EmployeeAsemployee: BelongsTo<typeof Employee>;

}
