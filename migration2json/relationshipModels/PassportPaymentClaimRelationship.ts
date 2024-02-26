import { BaseModel,hasOne,HasOne, belongsTo,BelongsTo } from '@ioc:Adonis/Lucid/Orm';
import PassportPaymentProcess from 'App/Models/PassportPaymentProcess';
import ServiceAllowance from 'App/Models/ServiceAllowance';

export default class PassportPaymentClaimRelationship extends BaseModel {
    @hasOne(() => PassportPaymentProcess, { foreignKey: 'passportPaymentId' })
    public PassportPaymentProcessAspassportPayment: HasOne<typeof PassportPaymentProcess>;

    @belongsTo(() => ServiceAllowance, { foreignKey: 'allowanceId' })
    public ServiceAllowanceAsallowance: BelongsTo<typeof ServiceAllowance>;
}
