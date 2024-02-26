import { BaseModel,belongsTo, BelongsTo } from '@ioc:Adonis/Lucid/Orm';
import Employee from 'App/Models/Employee';
import ForceTransferByDirector from 'App/Models/ForceTransferByDirector';

export default class ForcedByDirectorPostponeProcessRelationship extends BaseModel {
	@belongsTo(() => ForceTransferByDirector, { foreignKey: 'forceId' })
    public ForceTransferByDirectorAsforce: BelongsTo<typeof ForceTransferByDirector>;

    @belongsTo(() => Employee, { foreignKey: 'approverId' })
    public EmployeeAsapprover: BelongsTo<typeof Employee>;
}
