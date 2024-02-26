import { BaseModel, hasOne, HasOne, belongsTo, BelongsTo } from '@ioc:Adonis/Lucid/Orm';
import ServiceAllowance from 'App/Models/ServiceAllowance';
import StateVisitAllowanceProcess from 'App/Models/StateVisitAllowanceProcess';

export default class StateVisitAllowanceRelationship extends BaseModel {
	

@hasOne(() => StateVisitAllowanceProcess, { foreignKey: 'clothingId' })
public StateVisitAllowanceAsclothing: HasOne<typeof StateVisitAllowanceProcess>;

@belongsTo(() => ServiceAllowance, { foreignKey: 'allowanceId' })
public ServiceAllowanceAsallowance: BelongsTo<typeof ServiceAllowance>;
}
