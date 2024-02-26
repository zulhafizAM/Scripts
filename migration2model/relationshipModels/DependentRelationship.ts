import { BaseModel, belongsTo, BelongsTo } from '@ioc:Adonis/Lucid/Orm';
import PersonalDetail from 'App/Models/PersonalDetail';

export default class DependentRelationship extends BaseModel {
	@belongsTo(() => PersonalDetail, { foreignKey: 'personalDetailId' })
    public PersonalDetailAspersonalDetail: BelongsTo<typeof PersonalDetail>;
}
