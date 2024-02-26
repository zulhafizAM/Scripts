import { BaseModel, hasOne,HasOne, hasMany, HasMany, belongsTo, BelongsTo } from '@ioc:Adonis/Lucid/Orm';
import Salary from 'App/Models/Salary';
import Loan from 'App/Models/Loan';
import Quarter from 'App/Models/Quarter';

export class salaryDeductionRelationship extends BaseModel{
    @hasOne(() => Quarter, { foreignKey: 'deductionId' })
    public QuartersAsdeduction: HasOne<typeof Quarter>;

    @hasMany(() => Loan, { foreignKey: 'deductionId' })
    public LoansAsdeduction: HasMany<typeof Loan>;

    @belongsTo(() => Salary, { foreignKey: 'salaryDetailId' })
    public SalaryAssalaryDetail: BelongsTo<typeof Salary>;
}