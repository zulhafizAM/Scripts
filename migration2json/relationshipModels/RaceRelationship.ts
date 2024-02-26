import { BaseModel, hasMany, HasMany } from '@ioc:Adonis/Lucid/Orm';
import PersonalDetail from 'App/Models/PersonalDetail';

export default class RacesRelationship extends BaseModel {
	@hasMany(() => PersonalDetail, { foreignKey: 'raceId' })
    public PersonalDetailAsrace: HasMany<typeof PersonalDetail>;
}
