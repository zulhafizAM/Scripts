import { DateTime } from 'luxon';
import {
    column,
    BaseModel,
    belongsTo,
    BelongsTo,
    hasOne,
    HasOne,
} from '@ioc:Adonis/Lucid/Orm';
import CamelCaseNamingStrategy from 'App/Strategies/CamelCaseNamingStrategy';
import ServiceAllowance from './ServiceAllowance';
import PassportPaymentProcess from './PassportPaymentProcess';

export default class PassportPaymentClaim extends BaseModel {
    public static table = 'passportPaymentClaims';
    public static primaryKey = 'id';
    public static incrementing = false;

    public static namingStrategy = new CamelCaseNamingStrategy();

    @column({ isPrimary: true, columnName: 'id' })
    public id: bigint;

    @column({ columnName: 'allowanceId' })
    public allowanceId: bigint;

    @column.dateTime({ columnName: 'renewDate' })
    public renewDate: DateTime;

    @column({ columnName: 'reason' })
    public reason: string;

    @column({ columnName: 'document' })
    public document: Blob;

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

    @belongsTo(() => ServiceAllowance, { foreignKey: 'allowanceId' })
    public allowance: BelongsTo<typeof ServiceAllowance>;

    @hasOne(() => PassportPaymentProcess, { foreignKey: 'passportPaymentId' })
    public passportPaymentProcess: HasOne<typeof PassportPaymentProcess>;
}
