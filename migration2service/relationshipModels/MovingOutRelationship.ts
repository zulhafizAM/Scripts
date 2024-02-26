import { BaseModel, hasOne, HasOne, belongsTo, BelongsTo } from '@ioc:Adonis/Lucid/Orm';
import MovingOutProcess from 'App/Models/MovingOutProcess';
import Quarter from 'App/Models/Quarter';

export default class MovingOutRelationship extends BaseModel {
	@hasOne(() => MovingOutProcess, { foreignKey: 'quartersId' })
    public MovingOutProcessAsquarters: HasOne<typeof MovingOutProcess>;

    @belongsTo(() => Quarter, { foreignKey: 'quartersId' })
    public QuartersAsquarters: BelongsTo<typeof Quarter>;
}
