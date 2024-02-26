import { BaseModel, hasOne, HasOne, belongsTo, BelongsTo } from '@ioc:Adonis/Lucid/Orm';
import Employee from 'App/Models/Employee';
import Meeting from 'App/Models/Meeting';
import NewOfferProcess from 'App/Models/NewOfferProcess';

export default class NewOfferRelationship extends BaseModel {
	@hasOne(() => NewOfferProcess, { foreignKey: 'newOfferId' })
    public NewOfferProcessAsnewOffer: HasOne<typeof NewOfferProcess>;

    @belongsTo(() => Employee, { foreignKey: 'employeeId' })
    public EmployeeAsemployee: BelongsTo<typeof Employee>;

    @belongsTo(() => Meeting, { foreignKey: 'meetingId' })
    public MeetingAsmeeting: BelongsTo<typeof Meeting>;
}
