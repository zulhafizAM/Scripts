import { BaseModel, belongsTo, BelongsTo} from '@ioc:Adonis/Lucid/Orm';
import Employee from 'App/Models/Employee';

export default class ConfirmationMoreThan3Relationship extends BaseModel {
	@belongsTo(() => Employee, { foreignKey: 'employeeId' })
    public EmployeeAsemployee: BelongsTo<typeof Employee>;

    @belongsTo(() => Employee, { foreignKey: 'verifierId' })
    public EmployeeAsverifier: BelongsTo<typeof Employee>;
}
