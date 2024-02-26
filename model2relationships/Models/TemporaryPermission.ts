import { DateTime } from 'luxon';
import { column, BaseModel, belongsTo, BelongsTo } from '@ioc:Adonis/Lucid/Orm';
import CamelCaseNamingStrategy from 'App/Strategies/CamelCaseNamingStrategy';
import Employee from './Employee';
import Role from './Role';
import Permission from './Permission';

export default class TemporaryPermission extends BaseModel {
    public static table = 'temporaryPermissions';
    public static primaryKey = 'id';
    public static incrementing = false;

    public static namingStrategy = new CamelCaseNamingStrategy();

    @column({ isPrimary: true, columnName: 'id', serializeAs: null })
    public id: bigint;

    @column({ columnName: 'employeeId', serializeAs: null })
    public employeeId: bigint;

    @column({ columnName: 'roleId', serializeAs: null })
    public roleId: bigint;

    @column({ columnName: 'permissionId', serializeAs: null })
    public permissionId: bigint;

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

    @belongsTo(() => Employee, {
        foreignKey: 'employeeId',
        onQuery: (query) => {
            query.where('active', true);
        },
    })
    public employee: BelongsTo<typeof Employee>;

    @belongsTo(() => Role, {
        foreignKey: 'roleId',
        onQuery: (query) => {
            query.where('active', true);
        },
    })
    public role: BelongsTo<typeof Role>;

    @belongsTo(() => Permission, {
        foreignKey: 'permissionId',
        onQuery: (query) => {
            query.where('active', true);
        },
    })
    public permission: BelongsTo<typeof Permission>;
}
