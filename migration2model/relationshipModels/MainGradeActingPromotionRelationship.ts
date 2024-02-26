import { BaseModel, hasOne, HasOne, belongsTo, BelongsTo } from '@ioc:Adonis/Lucid/Orm';
import Employee from 'App/Models/Employee';
import Meeting from 'App/Models/Meeting';
import MainGradeActingPromotionProcess from 'App/Models/MainGradeActingPromotionProcess';

export default class MainGradeActingPromotionRelationship extends BaseModel {
	@hasOne(() => MainGradeActingPromotionProcess, { foreignKey: 'actingId' })
    public MainGradeActingPromotionProcessAsacting: HasOne<typeof MainGradeActingPromotionProcess>;

    @belongsTo(() => Employee, { foreignKey: 'employeeId' })
    public EmployeeAsemployee: BelongsTo<typeof Employee>;

    @belongsTo(() => Meeting, { foreignKey: 'meetingId' })
    public MeetingAsmeeting: BelongsTo<typeof Meeting>;
    }
