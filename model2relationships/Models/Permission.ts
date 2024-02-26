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

    @column({ isPrimary: true, columnName: 'id', serializeAs: null })
    public id: bigint;

    @column({ columnName: 'action' })
    public action: string;

    @column({ columnName: 'module' })
    public module: string;

    @column({ columnName: 'resource' })
    public resource: string;

    @column({ columnName: 'active', serializeAs: null })
    public active: boolean;

    @column({ columnName: 'createdBy', serializeAs: null })
    public createdBy: string;

    @column.dateTime({
        columnName: 'createdAt',
        autoCreate: true,
        serializeAs: null,
    })
    public createdAt: DateTime;

    @column({ columnName: 'modifiedBy', serializeAs: null })
    public modifiedBy: string;

    @column.dateTime({
        columnName: 'modifiedAt',
        autoCreate: true,
        autoUpdate: true,
        serializeAs: null,
    })
    public modifiedAt: DateTime;

    @hasMany(() => TemporaryPermission, {
        foreignKey: 'permissionId',
        onQuery: (query) => {
            query.where('active', true);
        },
    })
    public temporaryPermissions: HasMany<typeof TemporaryPermission>;

    @hasMany(() => RolePermission, {
        foreignKey: 'permissionId',
        onQuery: (query) => {
            query.where('active', true);
        },
    })
    public rolePermissions: HasMany<typeof RolePermission>;
}
