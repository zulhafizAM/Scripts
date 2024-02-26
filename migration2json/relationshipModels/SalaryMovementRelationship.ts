import { BaseModel, belongsTo, BelongsTo } from '@ioc:Adonis/Lucid/Orm';
import Meeting from 'App/Models/Meeting';
import Salary from 'App/Models/Salary';

export class salaryMovementRelationship extends BaseModel{
    @belongsTo(() => Salary, { foreignKey: 'salaryDetailId' })
    public SalaryAssalaryDetail: BelongsTo<typeof Salary>;

    @belongsTo(() => Meeting, { foreignKey: 'meetingId' })
    public MeetingAsmeeting: BelongsTo<typeof Meeting>;
}