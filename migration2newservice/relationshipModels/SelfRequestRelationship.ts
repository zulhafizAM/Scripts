import { BaseModel,HasOne, hasOne, belongsTo, BelongsTo } from '@ioc:Adonis/Lucid/Orm';
import Employee from 'App/Models/Employee';
import Meeting from 'App/Models/Meeting';
import SelfRequestPostponeProcess from 'App/Models/SelfRequestPostponeProcess';
import SelfRequestProcess from 'App/Models/SelfRequestProcess';
import Placement from 'App/Models/Placement';

export default class SelfRequestRelationship extends BaseModel {
	@hasOne(() => SelfRequestProcess, { foreignKey: 'selfRequestId' })
    public SelfRequestProcessAsselfRequest: HasOne<typeof SelfRequestProcess>;

    @hasOne(() => SelfRequestPostponeProcess, { foreignKey: 'selfRequestId' })
    public SelfRequestPostponeProcessAsselfRequest: HasOne<typeof SelfRequestPostponeProcess>;

    @belongsTo(() => Employee, { foreignKey: 'employeeId' })
    public EmployeeAsemployee: BelongsTo<typeof Employee>;

    @belongsTo(() => Meeting, { foreignKey: 'meetingId' })
    public MeetingAsmeeting: BelongsTo<typeof Meeting>;

    @belongsTo(() => Placement, { foreignKey: 'firstChoicePlacementId' })
    public PlacementAsfirstChoicePlacement: BelongsTo<typeof Placement>;

    @belongsTo(() => Placement, { foreignKey: 'secondChoicePlacementId' })
    public PlacementAssecondChoicePlacement: BelongsTo<typeof Placement>;
}
