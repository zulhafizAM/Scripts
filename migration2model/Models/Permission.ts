import { DateTime } from 'luxon';
import { column, BaseModel, hasMany, HasMany } from '@ioc:Adonis/Lucid/Orm';
import CamelCaseNamingStrategy from 'App/Strategies/CamelCaseNamingStrategy';
import TemporaryPermission from './TemporaryPermission';
import RolePermission from './RolePermission';

export default class Permission extends BaseModel {
    public static table = 'permissions';
    public static primaryKey = 'id';
    public static incrementing = false;

    public static namingStrategy = new CamelCaseNamingStrategy();

    @column({ isPrimary: true, columnName: 'id' })
    public id: bigint;

    @column({ columnName: 'action' })
    public action: string;

    @column({ columnName: 'module' })
    public module: string;

    @column({ columnName: 'resource' })
    public resource: string;

    @column({ columnName: 'active' })
    public active: boolean;

    @column({ columnName: 'createdBy' })
    public createdBy: string;

    @column.dateTime({ columnName: 'createdAt', autoCreate: true })
    public createdAt: DateTime;

    @column({ columnName: 'modifiedBy' })
    public modifiedBy: string;

    @column.dateTime({
        columnName: 'modifiedAt',
        autoCreate: true,
        autoUpdate: true,

    })
    public modifiedAt: DateTime;

    @hasMany(() => TemporaryPermission, { foreignKey: 'permissionId' })
    public temporaryPermissions: HasMany<typeof TemporaryPermission>;

    @hasMany(() => RolePermission, { foreignKey: 'permissionId' })
    public rolePermissions: HasMany<typeof RolePermission>;
}