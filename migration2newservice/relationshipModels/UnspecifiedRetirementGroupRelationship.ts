import { BaseModel , hasMany,HasMany} from '@ioc:Adonis/Lucid/Orm';
import UnspecifiedRetirementGroup from 'App/Models/UnspecifiedRetirementGroup';

export default class UnspecifiedRetirementGroupRelationship extends BaseModel {
	@hasMany(() => UnspecifiedRetirementGroup, { foreignKey: 'groupId' })
    public UnspecifiedRetirementGroupsAsgroup: HasMany<typeof UnspecifiedRetirementGroup>;
}
