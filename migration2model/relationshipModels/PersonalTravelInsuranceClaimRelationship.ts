import { BaseModel, hasOne, HasOne, belongsTo, BelongsTo } from '@ioc:Adonis/Lucid/Orm';
import PersonalInsuranceProcess from 'App/Models/PersonalInsuranceProcess';
import ServiceAllowance from 'App/Models/ServiceAllowance';

export default class PersonalTravelInsuranceClaimRelationship extends BaseModel {
	@hasOne(() => PersonalInsuranceProcess, { foreignKey: 'insuranceId' })
    public PersonalInsuranceProcessAsinsurance: HasOne<typeof PersonalInsuranceProcess>;

    @belongsTo(() => ServiceAllowance, { foreignKey: 'allowanceId' })
    public ServiceAllowanceAsallowance: BelongsTo<typeof ServiceAllowance>;

}
