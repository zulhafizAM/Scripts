import { BaseModel, HasMany,  hasMany  } from '@ioc:Adonis/Lucid/Orm';
import ContractAppointmentsProcess from 'App/Models/ContractAppointmentsProcess';
import ContractLifeCycleProcess from 'App/Models/ContractLifeCycleProcess';

export class employeeToContractRelationship extends BaseModel{
    @hasMany(() => ContractAppointmentsProcess, { foreignKey: 'supporterId'})
    public ContractAppointmentProcessAssupporter: HasMany<typeof ContractAppointmentsProcess>;

    @hasMany(() => ContractAppointmentsProcess, { foreignKey: 'approverId'})
    public ContractAppointmentProcessAsapprover: HasMany<typeof ContractAppointmentsProcess>;

    @hasMany(() => ContractLifeCycleProcess, { foreignKey: 'certifierId'})
    public ContractLifeCycleProcessAscertifier: HasMany<typeof ContractLifeCycleProcess>;

    @hasMany(() => ContractLifeCycleProcess, { foreignKey: 'supporterId'})
    public ContractLifeCycleProcessAssupporter: HasMany<typeof ContractLifeCycleProcess>;

    @hasMany(() => ContractLifeCycleProcess, { foreignKey: 'approverId'})
    public ContractLifeCycleProcessAsapprover: HasMany<typeof ContractLifeCycleProcess>;

    @hasMany(() => ContractLifeCycleProcess, { foreignKey: 'confirmerId'})
    public ContractLifeCycleProcessAsconfirmer: HasMany<typeof ContractLifeCycleProcess>;

}