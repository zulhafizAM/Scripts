import { BaseModel, hasMany, HasMany } from '@ioc:Adonis/Lucid/Orm';
import Employee from 'App/Models/Employee';
import ContractDetail from 'App/Models/ContractDetail';

export default class ServiceTypesRelationship extends BaseModel {
    @hasMany(() => Employee, { foreignKey: 'serviceTypeId' })
    public EmployeeAsserviceType: HasMany<typeof Employee>;

    @hasMany(() => ContractDetail, { foreignKey: 'serviceTypeId' })
    public ContractDetailAsserviceType: HasMany<typeof ContractDetail>;
}
