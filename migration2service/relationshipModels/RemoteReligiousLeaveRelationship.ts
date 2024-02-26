import { BaseModel, hasOne, HasOne, belongsTo, BelongsTo } from '@ioc:Adonis/Lucid/Orm';
import Employee from 'App/Models/Employee';
import RemoteReligiousLeaveProcess from 'App/Models/RemoteReligiousLeaveProcess';

export default class RemoteReligiousLeaveRelationship extends BaseModel {
	@hasOne(() => RemoteReligiousLeaveProcess, { foreignKey: 'remoteReligiousId' })
    public RemoteReligiousLeaveProcessAsremoteReligious: HasOne<typeof RemoteReligiousLeaveProcess>;

    @belongsTo(() => Employee, { foreignKey: 'employeeId' })
    public EmployeeAsemployee: BelongsTo<typeof Employee>;

}
