import { BaseModel,belongsTo, BelongsTo } from '@ioc:Adonis/Lucid/Orm';
import Meeting from 'App/Models/Meeting';
import GradeActingType from 'App/Models/GradeActingType';
import Placement from 'App/Models/Placement';

export default class GradeActingPostponeProcessRelationship extends BaseModel {
	
    @belongsTo(() => GradeActingType, { foreignKey: 'actingId' })
    public GradeActingTypesAsacting: BelongsTo<typeof GradeActingType>;

    @belongsTo(() => Meeting, { foreignKey: 'meetingId' })
    public MeetingAsmeeting: BelongsTo<typeof Meeting>;

    @belongsTo(() => Placement, { foreignKey: 'placementId' })
    public PlacementAsplacement: BelongsTo<typeof Placement>;
}
