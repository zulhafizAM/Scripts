import { BaseModel, belongsTo, BelongsTo,hasMany, HasMany } from '@ioc:Adonis/Lucid/Orm';
import SalaryDeduction from 'App/Models/SalaryDeduction';
import ComputerLoan from 'App/Models/ComputerLoan';
import VehicleLoan from 'App/Models/VehicleLoan';

export default class LoanRelationship extends BaseModel {
	@belongsTo(() => SalaryDeduction, { foreignKey: 'deductionId' })
    public SalaryDeductionsAsdeduction: BelongsTo<typeof SalaryDeduction>;

    @hasMany(() => ComputerLoan, { foreignKey: 'loanId' })
    public ComputerLoansAsloan: HasMany<typeof ComputerLoan>;

    @hasMany(() => VehicleLoan, { foreignKey: 'loanId' })
    public VehicleLoansAsloan: HasMany<typeof VehicleLoan>;

}
