import { BaseModel, hasMany, HasMany } from '@ioc:Adonis/Lucid/Orm';
import Employee from 'App/Models/Employee';

export default class ServiceGroupsRelationship extends BaseModel {
	@hasMany(() => Employee, { foreignKey: 'serviceGroupId' })
    public EmployeeAsserviceGroup: HasMany<typeof Employee>;
}
