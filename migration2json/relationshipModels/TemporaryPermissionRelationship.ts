import { BaseModel, BelongsTo, belongsTo } from '@ioc:Adonis/Lucid/Orm';
import Employee from 'App/Models/Employee';
import Permission from 'App/Models/Permission';
import Role from 'App/Models/Role';

export default class temporaryPermissionRelationship extends BaseModel{
    @belongsTo(() => Employee, { foreignKey: 'employeeId' })
    public EmployeeAsemployee: BelongsTo<typeof Employee>;

    @belongsTo(() => Permission, { foreignKey: 'permissionId' })
    public PermissionAspermission: BelongsTo<typeof Permission>;

    @belongsTo(() => Role, { foreignKey: 'roleId' })
    public RoleAsrole: BelongsTo<typeof Role>;
}