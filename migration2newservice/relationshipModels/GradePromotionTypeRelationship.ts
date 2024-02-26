import { BaseModel, hasOne, HasOne, belongsTo, BelongsTo } from '@ioc:Adonis/Lucid/Orm';
import Employee from 'App/Models/Employee';
import Meeting from 'App/Models/Meeting';
import GradePromotionProcess from 'App/Models/GradePromotionProcess';

export default class GradePromotionTypeRelationship extends BaseModel {
	@hasOne(() => GradePromotionProcess, { foreignKey: 'promotionId' })
    public GradePromotionProcessAspromotion: HasOne<typeof GradePromotionProcess>;

    @belongsTo(() => Employee, { foreignKey: 'employeeId' })
    public EmployeeAsemployee: BelongsTo<typeof Employee>;

    @belongsTo(() => Meeting, { foreignKey: 'meetingId' })
    public MeetingAsmeeting: BelongsTo<typeof Meeting>;
    }
