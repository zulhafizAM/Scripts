import { BaseModel, hasOne, HasOne, belongsTo, BelongsTo } from '@ioc:Adonis/Lucid/Orm';
import FuneralArrangementProcess from 'App/Models/FuneralArrangementProcess';
import ServiceAllowance from 'App/Models/ServiceAllowance';

export default class FuneralArrangementRequestRelationship extends BaseModel {
	@hasOne(() => FuneralArrangementProcess, { foreignKey: 'funeralArrangementId' })
    public FuneralArrangementProcessAsfuneralArrangement: HasOne<typeof FuneralArrangementProcess>;

    @belongsTo(() => ServiceAllowance, { foreignKey: 'allowanceId' })
    public ServiceAllowanceAsallowance: BelongsTo<typeof ServiceAllowance>;


}
