import { BaseModel,belongsTo, BelongsTo } from '@ioc:Adonis/Lucid/Orm';
import Employee from 'App/Models/Employee';
import SelfRequest from 'App/Models/SelfRequest';

export default class SelfRequestProcessRelationship extends BaseModel {
	@belongsTo(() => SelfRequest, { foreignKey: 'selfRequestId' })
    public SelfRequestAsselfRequest: BelongsTo<typeof SelfRequest>;

    @belongsTo(() => Employee, { foreignKey: 'directorSupporterId' })
    public EmployeeAsdirectorSupporter: BelongsTo<typeof Employee>;

    @belongsTo(() => Employee, { foreignKey: 'appointedSupporterId' })
    public EmployeeAsappointedSupporter: BelongsTo<typeof Employee>;

    @belongsTo(() => Employee, { foreignKey: 'appointedApproverId' })
    public EmployeeAsappointedApprover: BelongsTo<typeof Employee>;
}
