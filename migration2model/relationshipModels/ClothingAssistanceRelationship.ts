import { BaseModel, hasOne, HasOne, belongsTo, BelongsTo } from '@ioc:Adonis/Lucid/Orm';
import ClothingAssistanceProcess from 'App/Models/ClothingAssistanceProcess';
import ServiceAllowance from 'App/Models/ServiceAllowance';

export default class ClothingAssistanceRelationship extends BaseModel {
	@hasOne(() => ClothingAssistanceProcess, { foreignKey: 'clothingId' })
    public ClothingAssistanceProcessAsclothing: HasOne<typeof ClothingAssistanceProcess>;

    @belongsTo(() => ServiceAllowance, { foreignKey: 'allowanceId' })
    public ServiceAllowanceAsallowance: BelongsTo<typeof ServiceAllowance>;
}
