import { BaseModel, hasOne, HasOne, belongsTo, BelongsTo } from '@ioc:Adonis/Lucid/Orm';
import ComputerLoanProcess from 'App/Models/ComputerLoanProcess';
import Loan from 'App/Models/Loan';

export default class ComputerLoanRelationship extends BaseModel {
	
    @hasOne(() => ComputerLoanProcess, { foreignKey: 'computerLoanId' })
    public ComputerLoanProcessAscomputerLoan: HasOne<typeof ComputerLoanProcess>;

    @belongsTo(() => Loan, { foreignKey: 'loanid' })
    public LoansAsloan: BelongsTo<typeof Loan>;
}
