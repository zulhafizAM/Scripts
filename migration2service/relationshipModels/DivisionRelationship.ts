import { BaseModel, hasMany, HasMany, belongsTo, BelongsTo } from '@ioc:Adonis/Lucid/Orm';
import District from 'App/Models/District';
import State from 'App/Models/State';

export default class DivisionsRelationship extends BaseModel {
	@hasMany(() => District, { foreignKey: 'divisionId' })
    public DistrictAsdivision: HasMany<typeof District>;

    @belongsTo(() => State, { foreignKey: 'stateId' })
    public StateAsstate: BelongsTo<typeof State>;
    }
