import { BaseModel, belongsTo, BelongsTo } from '@ioc:Adonis/Lucid/Orm';
import Employee from 'App/Models/Employee';
import NewOffer from 'App/Models/NewOffer';

export default class NewOfferProcessRelationship extends BaseModel {
	@belongsTo(() => NewOffer, { foreignKey: 'newOfferId' })
    public NewOfferAsnewOffer: BelongsTo<typeof NewOffer>;

    @belongsTo(() => Employee, { foreignKey: 'supporterId' })
    public EmployeeAssupporter: BelongsTo<typeof Employee>;

    @belongsTo(() => Employee, { foreignKey: 'approverId' })
    public EmployeeAsapprover: BelongsTo<typeof Employee>;
}
