import { BaseModel, hasMany, HasMany } from '@ioc:Adonis/Lucid/Orm';
import PersonalDetail from 'App/Models/PersonalDetail';

export default class ReligionsRelationship extends BaseModel {
	@hasMany(() => PersonalDetail, { foreignKey: 'religionId' })
    public PersonalDetailAsreligion: HasMany<typeof PersonalDetail>;
}
