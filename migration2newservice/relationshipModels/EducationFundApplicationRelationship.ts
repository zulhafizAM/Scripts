import { BaseModel, belongsTo, BelongsTo, hasOne, HasOne } from '@ioc:Adonis/Lucid/Orm';
import Employee from 'App/Models/Employee';
import FundApplicationProcess from 'App/Models/FundApplicationProcess';

export class educationFundApplicationRelationship extends BaseModel{
    @belongsTo(() => Employee, { foreignKey: 'employeeId' })
    public EmployeeAsemployee: BelongsTo<typeof Employee>;

    @hasOne(() => FundApplicationProcess, { foreignKey: 'fundId' })
    public FundApplicationProcessAsfund: HasOne<typeof FundApplicationProcess>;
}