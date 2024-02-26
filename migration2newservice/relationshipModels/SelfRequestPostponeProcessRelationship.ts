import { BaseModel, belongsTo, BelongsTo } from '@ioc:Adonis/Lucid/Orm';
import Employee from 'App/Models/Employee';
import SelfRequest from 'App/Models/SelfRequest';

export default class SelfRequestPostponeProcessRelationship extends BaseModel {
	@belongsTo(() => SelfRequest, { foreignKey: 'selfRequestId' })
    public SelfRequestAsselfRequest: BelongsTo<typeof SelfRequest>;

    @belongsTo(() => Employee, { foreignKey: 'approverId' })
    public EmployeeAsapprover: BelongsTo<typeof Employee>;
}
