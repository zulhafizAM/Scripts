import { BaseModel, BelongsTo, belongsTo } from '@ioc:Adonis/Lucid/Orm';
import Permission from 'App/Models/Permission';
import Role from 'App/Models/Role';

export default class rolePermissionRelationship extends BaseModel{
    @belongsTo(() => Role, { foreignKey: 'roleId' })
    public RoleAsrole: BelongsTo<typeof Role>;

    @belongsTo(() => Permission, { foreignKey: 'permissionId' })
    public PermissionAspermission: BelongsTo<typeof Permission>;
}