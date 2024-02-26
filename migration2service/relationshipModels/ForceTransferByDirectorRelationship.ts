import { BaseModel,hasOne, HasOne,belongsTo, BelongsTo } from '@ioc:Adonis/Lucid/Orm';
import Employee from 'App/Models/Employee';
import Meeting from 'App/Models/Meeting';
import ForcedByDirectorPostponeProcess from 'App/Models/ForcedByDirectorPostponeProcess';
import ForcedByDirectorProcess from 'App/Models/ForcedByDirectorProcess';
import Placement from 'App/Models/Placement';

export default class ForceTransferByDirectorRelationship extends BaseModel {
	@hasOne(() => ForcedByDirectorPostponeProcess, { foreignKey: 'forceId' })
    public ForcedByDirectorPostponeProcessAsforce: HasOne<typeof ForcedByDirectorPostponeProcess>;

    @hasOne(() => ForcedByDirectorProcess, { foreignKey: 'forceId' })
    public ForcedByDirectorProcessAsforce: HasOne<typeof ForcedByDirectorProcess>;

    @belongsTo(() => Employee, { foreignKey: 'employeId' })
    public EmployeeAsemploye: BelongsTo<typeof Employee>;

    @belongsTo(() => Meeting, { foreignKey: 'meetingId' })
    public MeetingAsmeeting: BelongsTo<typeof Meeting>;

    @belongsTo(() => Placement, { foreignKey: 'newPlacementId' })
    public PlacementAsnewPlacement: BelongsTo<typeof Placement>;
}
