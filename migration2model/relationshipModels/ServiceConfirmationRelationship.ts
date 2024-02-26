import { BaseModel, hasOne, HasOne, belongsTo, BelongsTo } from '@ioc:Adonis/Lucid/Orm';
import Employee from 'App/Models/Employee';
import Meeting from 'App/Models/Meeting';
import ServiceConfirmationProcess from 'App/Models/ServiceConfirmationProcess';

export default class ServiceConfirmationRelationship extends BaseModel {
	@hasOne(() => ServiceConfirmationProcess, { foreignKey: 'confirmationId' })
    public ServiceConfirmationProcessAsconfirmation: HasOne<typeof ServiceConfirmationProcess>;

    @belongsTo(() => Employee, { foreignKey: 'employeeId' })
    public EmployeeAsemployee: BelongsTo<typeof Employee>;

    @belongsTo(() => Meeting, { foreignKey: 'meetingId' })
    public MeetingAsmeeting: BelongsTo<typeof Meeting>;
}
