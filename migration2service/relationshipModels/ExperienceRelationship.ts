import { BaseModel, belongsTo, BelongsTo } from '@ioc:Adonis/Lucid/Orm';
import State from 'App/Models/States';
import PersonalDetail from 'App/Models/PersonalDetail';

export default class ExperienceRelationship extends BaseModel {
	@belongsTo(() => PersonalDetail, { foreignKey: 'personalDetailId' })
    public PersonalDetailAspersonalDetail: BelongsTo<typeof PersonalDetail>;

    @belongsTo(() => State, {foreignKey: 'stateId'})
    public StateAsstate: BelongsTo<typeof State>
}
