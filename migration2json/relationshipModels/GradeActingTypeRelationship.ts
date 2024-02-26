import { BaseModel, hasOne, HasOne, belongsTo, BelongsTo } from '@ioc:Adonis/Lucid/Orm';
import Employee from 'App/Models/Employee';
import Meeting from 'App/Models/Meeting';
import GradeActingPostponeProcess from 'App/Models/GradeActingPostponeProcess';
import GradeActingTypesProcess from 'App/Models/GradeActingTypesProcess';

export default class GradeActingTypeRelationship extends BaseModel {
	@hasOne(() => GradeActingTypesProcess, { foreignKey: 'actingId' })
    public GradeActingTypesProcessAsacting: HasOne<typeof GradeActingTypesProcess>;

    @hasOne(() => GradeActingPostponeProcess, { foreignKey: 'actingId' })
    public GradeActingPostponeProcessAsacting: HasOne<typeof GradeActingPostponeProcess>;

    @belongsTo(() => Employee, { foreignKey: 'employeeId' })
    public EmployeeAsemployee: BelongsTo<typeof Employee>;

    @belongsTo(() => Meeting, { foreignKey: 'meetingId' })
    public MeetingAsmeeting: BelongsTo<typeof Meeting>;

}
