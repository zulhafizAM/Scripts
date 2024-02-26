import { BaseModel,  belongsTo, BelongsTo } from '@ioc:Adonis/Lucid/Orm';
import Employee from 'App/Models/Employee';
import ContractDetail from 'App/Models/ContractDetail';

export class contractAppointmentProcessRelationship extends BaseModel{
    @belongsTo(() => ContractDetail, { foreignKey: 'contractId' })
    public ContractDetailsAscontract: BelongsTo<typeof ContractDetail>;

    @belongsTo(() => Employee, { foreignKey: 'supporterId' })
    public EmployeeAssupporter: BelongsTo<typeof Employee>;

    @belongsTo(() => Employee, { foreignKey: 'approverId' })
    public EmployeeAsapprover: BelongsTo<typeof Employee>;
}