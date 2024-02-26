import { DateTime } from 'luxon';
import { column, BaseModel, belongsTo, BelongsTo } from '@ioc:Adonis/Lucid/Orm';
import CamelCaseNamingStrategy from 'App/Strategies/CamelCaseNamingStrategy';
import UserAccount from './UserAccount';

export default class ApiToken extends BaseModel {
    public static table = 'apiTokens';
    public static primaryKey = 'id';
    public static incrementing = false;

    public static namingStrategy = new CamelCaseNamingStrategy();

    @column({ isPrimary: true, columnName: 'id', serializeAs: null })
    public id: bigint;

    @column({ columnName: 'userId', serializeAs: null })
    public userId: bigint;

    @column({ columnName: 'name' })
    public name: string;

    @column({ columnName: 'type' })
    public type: string;

    @column({ columnName: 'token' })
    public token: string;

    @column.dateTime({ columnName: 'expiresAt' })
    public expiresAt: DateTime;

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

    @belongsTo(() => UserAccount, {
        foreignKey: 'userId',
        onQuery: (query) => {
            query.where('active', true);
        },
    })
    public user: BelongsTo<typeof UserAccount>;
}
