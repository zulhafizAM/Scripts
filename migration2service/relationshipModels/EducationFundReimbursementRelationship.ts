import { BaseModel, belongsTo, BelongsTo, hasOne, HasOne } from '@ioc:Adonis/Lucid/Orm';
import Employee from 'App/Models/Employee';
import FundReimbursementProcess from 'App/Models/FundReimbursementProcess';

export class educationFundReimbursementRelationship extends BaseModel{
    @belongsTo(() => Employee, { foreignKey: 'employeeId' })
    public EmployeeAsemployee: BelongsTo<typeof Employee>;

    @hasOne(() => FundReimbursementProcess, { foreignKey: 'fundId' })
    public FundReimbursementProcessAsfund: HasOne<typeof FundReimbursementProcess>;
}