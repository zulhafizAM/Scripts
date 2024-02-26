import { BaseModel,hasOne, HasOne, belongsTo,BelongsTo } from '@ioc:Adonis/Lucid/Orm';
import CargoShippingProcess from 'App/Models/CargoShippingProcess';
import ServiceAllowance from 'App/Models/ServiceAllowance';

export default class CargoShippingReimbursementRelationship extends BaseModel {
	@hasOne(() => CargoShippingProcess, { foreignKey: 'shippingId' })
    public CargoShippingProcessAsshipping: HasOne<typeof CargoShippingProcess>;

    @belongsTo(() => ServiceAllowance, { foreignKey: 'allowanceId' })
    public ServiceAllowanceAsallowance: BelongsTo<typeof ServiceAllowance>;
}
