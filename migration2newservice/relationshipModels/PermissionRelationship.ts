import { BaseModel, hasMany, HasMany } from '@ioc:Adonis/Lucid/Orm';
import TemporaryPermission from 'App/Models/TemporaryPermission';
import RolePermission from 'App/Models/RolePermission';

export default class permissionRelationship extends BaseModel {
    @hasMany(() => TemporaryPermission, { foreignKey: 'permissionId' })
    public TemporaryPermissionAspermission: HasMany<typeof TemporaryPermission>;

    @hasMany(() => RolePermission, { foreignKey: 'permissionId' })
    public RolePermissionAspermission: HasMany<typeof RolePermission>;

}
