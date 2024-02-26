import { BaseModel,belongsTo, BelongsTo } from '@ioc:Adonis/Lucid/Orm';
import Employee from 'App/Models/Employee';
import PensionDetail from 'App/Models/PensionDetail';

export default class PensionDetailProcessRelationship extends BaseModel {
	@belongsTo(() => PensionDetail, { foreignKey: 'pensionId' })
    public PensionDetailAspension: BelongsTo<typeof PensionDetail>;

    @belongsTo(() => Employee, { foreignKey: 'approverId' })
    public EmployeeAsapprover: BelongsTo<typeof Employee>;

    @belongsTo(() => Employee, { foreignKey: 'supporterId' })
    public EmployeeAssupporter: BelongsTo<typeof Employee>;
}
