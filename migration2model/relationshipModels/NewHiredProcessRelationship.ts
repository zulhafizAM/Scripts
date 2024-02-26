import { BaseModel, belongsTo, BelongsTo, } from '@ioc:Adonis/Lucid/Orm';
import Employee from 'App/Models/Employee';
import NewHire from 'App/Models/NewHire';

export default class NewHiredProcessRelationship extends BaseModel {
	@belongsTo(() => NewHire, { foreignKey: 'hireId' })
    public NewHiresAshire: BelongsTo<typeof NewHire>;

    @belongsTo(() => Employee, { foreignKey: 'supporterId' })
    public EmployeeAssupporter: BelongsTo<typeof Employee>;

    @belongsTo(() => Employee, { foreignKey: 'approverId' })
    public EmployeeAsapprover: BelongsTo<typeof Employee>;
}
