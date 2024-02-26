import { BaseModel, BelongsTo, belongsTo } from '@ioc:Adonis/Lucid/Orm';
import Employee from 'App/Models/Employee';
import Role from 'App/Models/Role';

export default class employeeRoleRelationship extends BaseModel{
    @belongsTo(() => Employee, { foreignKey: 'employeeId' })
    public EmployeeAsemployee: BelongsTo<typeof Employee>;

    @belongsTo(() => Role, { foreignKey: 'roleId' })
    public RoleAsrole: BelongsTo<typeof Role>;
}