import { BaseModel,belongsTo, BelongsTo } from '@ioc:Adonis/Lucid/Orm';
import Employee from 'App/Models/Employee';
import ComputerLoan from 'App/Models/ComputerLoan';

export default class ComputerLoanProcessRelationship extends BaseModel {
    @belongsTo(() => ComputerLoan, { foreignKey: 'computerLoanId' })
    public ComputerLoansAscomputerLoan: BelongsTo<typeof ComputerLoan>;

    @belongsTo(() => Employee, { foreignKey: 'verifierId' })
    public EmployeeAsverifier: BelongsTo<typeof Employee>;

    @belongsTo(() => Employee, { foreignKey: 'supporterId' })
    public EmployeeAssupporter: BelongsTo<typeof Employee>;

    @belongsTo(() => Employee, { foreignKey: 'approverId' })
    public EmployeeAsapprover: BelongsTo<typeof Employee>;

}
