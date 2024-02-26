import { BaseModel,hasOne, HasOne, belongsTo, BelongsTo } from '@ioc:Adonis/Lucid/Orm';
import HouseMovingProcess from 'App/Models/HouseMovingProcess';
import ServiceAllowance from 'App/Models/ServiceAllowance';

export default class HouseMovingAllowanceRelationship extends BaseModel {
	@hasOne(() => HouseMovingProcess, { foreignKey: 'houseMovingId' })
    public HouseMovingProcessAshouseMoving: HasOne<typeof HouseMovingProcess>;

    @belongsTo(() => ServiceAllowance, { foreignKey: 'allowanceId' })
    public ServiceAllowanceAsallowance: BelongsTo<typeof ServiceAllowance>;


}
