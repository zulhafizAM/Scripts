import { BaseModel,hasMany, HasMany } from '@ioc:Adonis/Lucid/Orm';
import ServiceAllowance from 'App/Models/ServiceAllowance';

export default class AllowanceTypeRelationship extends BaseModel {
	@hasMany(() => ServiceAllowance, { foreignKey: 'allowanceTypeId' })
    public ServiceAllowancesAsallowanceType: HasMany<typeof ServiceAllowance>;
}
