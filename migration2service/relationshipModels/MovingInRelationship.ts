import { BaseModel, hasOne, HasOne, belongsTo, BelongsTo } from '@ioc:Adonis/Lucid/Orm';
import MovingInProcess from 'App/Models/MovingInProcess';
import Quarter from 'App/Models/Quarter';

export default class MovingInRelationship extends BaseModel {
	@hasOne(() => MovingInProcess, { foreignKey: 'movingInId' })
    public MovingInProcessAsmovingIn: HasOne<typeof MovingInProcess>;

    @belongsTo(() => Quarter, { foreignKey: 'quartersId' })
    public QuartersAsquarters: BelongsTo<typeof Quarter>;
}
