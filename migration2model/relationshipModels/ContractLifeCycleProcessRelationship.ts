import { BaseModel, belongsTo, BelongsTo } from '@ioc:Adonis/Lucid/Orm';
import Employee from 'App/Models/Employee';
import ContractLifeCycle from 'App/Models/ContractLifeCycle';

export class contractLifeCycleProcessRelationship extends BaseModel{
    
    @belongsTo(() => ContractLifeCycle, { foreignKey: 'lifecycleId' })
    public contractLifeCyclesAslifecycle: BelongsTo<typeof ContractLifeCycle>;

    @belongsTo(() => Employee, { foreignKey: 'certifierId' })
    public EmployeeAscertifier: BelongsTo<typeof Employee>;

    @belongsTo(() => Employee, { foreignKey: 'supporterId' })
    public EmployeeAssupporter: BelongsTo<typeof Employee>;

    @belongsTo(() => Employee, { foreignKey: 'approverId' })
    public EmployeeAsapprover: BelongsTo<typeof Employee>;

    @belongsTo(() => Employee, { foreignKey: 'comfirmerId' })
    public EmployeeAscomfirmer: BelongsTo<typeof Employee>;
}