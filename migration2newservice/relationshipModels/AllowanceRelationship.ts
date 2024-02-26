import { BaseModel, hasOne, HasOne, belongsTo, BelongsTo } from '@ioc:Adonis/Lucid/Orm';
import Salary from 'App/Models/Salary';
import ServiceAllowance from 'App/Models/ServiceAllowance';

export class allowanceRelationship extends BaseModel{
    @hasOne(() => ServiceAllowance, { foreignKey: 'allowanceId' })
    public serviceAllowancesAsallowance: HasOne<typeof ServiceAllowance>;

    @belongsTo(() => Salary, { foreignKey: 'salaryDetailId' })
    public SalaryAssalaryDetail: BelongsTo<typeof Salary>;
}