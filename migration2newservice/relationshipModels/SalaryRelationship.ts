import { BaseModel, hasOne, HasOne, belongsTo, BelongsTo } from '@ioc:Adonis/Lucid/Orm';
import Employee from 'App/Models/Employee';
import Allowance from 'App/Models/Allowance';
import SalaryDeduction from 'App/Models/SalaryDeduction';
import SalaryMovement from 'App/Models/SalaryMovement';

export class salaryRelationship extends BaseModel{
    @hasOne(() => SalaryMovement, { foreignKey: 'salaryDetailId' })
    public SalaryMovementsAssalaryDetail: HasOne<typeof SalaryMovement>;

    @hasOne(() => Allowance, { foreignKey: 'salaryDetailId' })
    public AllowancesAssalaryDetail: HasOne<typeof Allowance>;

    @hasOne(() => SalaryDeduction, { foreignKey: 'salaryDetailId' })
    public SalaryDeductionsAssalaryDetail: HasOne<typeof SalaryDeduction>;

    @belongsTo(() => Employee, { foreignKey: 'employeeId' })
    public EmployeeAsemployee: BelongsTo<typeof Employee>;

}