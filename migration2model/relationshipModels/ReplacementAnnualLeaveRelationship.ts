import { BaseModel ,belongsTo,BelongsTo, hasOne, HasOne} from '@ioc:Adonis/Lucid/Orm';
import Employee from 'App/Models/Employee';
import ReplacementAnnualLeaveProcess from 'App/Models/ReplacementAnnualLeaveProcess';

export default class ReplacementAnnualLeaveRelationship extends BaseModel {
	@hasOne(() => ReplacementAnnualLeaveProcess, { foreignKey: 'replacementId' })
    public ReplacementAnnualLeaveProcessAsReplacementId: HasOne<typeof ReplacementAnnualLeaveProcess>;

    @belongsTo(() => Employee, { foreignKey: 'employeeId' })
    public EmployeeAsemployee: BelongsTo<typeof Employee>;
}
