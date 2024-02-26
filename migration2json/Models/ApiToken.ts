import { DateTime } from 'luxon';
import { column, BaseModel, belongsTo, BelongsTo } from '@ioc:Adonis/Lucid/Orm';
import CamelCaseNamingStrategy from 'App/Strategies/CamelCaseNamingStrategy';
import UserAccount from './UserAccount';

export default class ApiToken extends BaseModel {
    public static table = 'apiTokens';
    public static primaryKey = 'id';
    public static incrementing = false;

    public static namingStrategy = new CamelCaseNamingStrategy();

    @column({ isPrimary: true, columnName: 'id' })
    public id: bigint;

    @column({ columnName: 'userId' })
    public userId: bigint;

    @column({ columnName: 'name' })
    public name: string;

    @column({ columnName: 'type' })
    public type: string;

    @column({ columnName: 'token' })
    public token: string;

    @column.dateTime({ columnName: 'expiresAt' })
    public expiresAt: DateTime;

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

    @belongsTo(() => UserAccount, { foreignKey: 'userId' })
    public user: BelongsTo<typeof UserAccount>;
}