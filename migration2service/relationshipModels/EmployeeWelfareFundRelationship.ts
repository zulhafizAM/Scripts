import { BaseModel, hasOne, HasOne, belongsTo, BelongsTo } from '@ioc:Adonis/Lucid/Orm';
import EmployeeWelfareFundProcess from 'App/Models/EmployeeWelfareFundProcess';
import ServiceAllowance from 'App/Models/ServiceAllowance';

export default class EmployeeWelfareFundRelationship extends BaseModel {
	@hasOne(() => EmployeeWelfareFundProcess, { foreignKey: 'welfareFundId' })
    public EmployeeWelfareFundProcessAswelfareFund: HasOne<typeof EmployeeWelfareFundProcess>;

    @belongsTo(() => ServiceAllowance, { foreignKey: 'allowanceId' })
    public ServiceAllowanceAsallowance: BelongsTo<typeof ServiceAllowance>;


}
