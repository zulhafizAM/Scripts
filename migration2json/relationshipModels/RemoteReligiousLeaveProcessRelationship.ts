import { BaseModel, belongsTo, BelongsTo } from '@ioc:Adonis/Lucid/Orm';
import Employee from 'App/Models/Employee';
import RemoteReligiousLeave from 'App/Models/RemoteReligiousLeave';

export default class RemoteReligiousLeaveProcessRelationship extends BaseModel {
    @belongsTo(() => RemoteReligiousLeave, { foreignKey: 'remoteReligiousId' })
    public RemoteReligiousLeaveAsremoteReligious: BelongsTo<typeof RemoteReligiousLeave>;

    @belongsTo(() => Employee, { foreignKey: 'supporterid' })
    public EmployeeAssupporter: BelongsTo<typeof Employee>;

    @belongsTo(() => Employee, { foreignKey: 'verifierId' })
    public EmployeeAsverifier: BelongsTo<typeof Employee>;

    @belongsTo(() => Employee, { foreignKey: 'approverId' })
    public EmployeeAsapprover: BelongsTo<typeof Employee>;
}
