import { BaseModel, hasOne, HasOne, belongsTo, BelongsTo } from '@ioc:Adonis/Lucid/Orm';
import Employee from 'App/Models/Employee';
import PensionDetailProcess from 'App/Models/PensionDetailProcess';

export default class PensionDetailRelationship extends BaseModel {
	@hasOne(() => PensionDetailProcess, { foreignKey: 'pensionId' })
    public PensionDetailProcessAspension: HasOne<typeof PensionDetailProcess>;

    @belongsTo(() => Employee, { foreignKey: 'employeeId' })
    public EmployeeAsemployee: BelongsTo<typeof Employee>;
}
