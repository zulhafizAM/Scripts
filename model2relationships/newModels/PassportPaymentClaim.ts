import { DateTime } from 'luxon';
import {
    column,
    BaseModel,
    belongsTo,
    BelongsTo,
    hasOne,
    HasOne,
    beforeFind,
    scope,
} from '@ioc:Adonis/Lucid/Orm';
import CamelCaseNamingStrategy from 'App/Strategies/CamelCaseNamingStrategy';
import ServiceAllowance from './ServiceAllowance';
import PassportPaymentProcess from './PassportPaymentProcess';

export default class PassportPaymentClaim extends BaseModel {
    public static table = 'passportPaymentClaims';
    public static primaryKey = 'id';
    public static incrementing = false;

    public static namingStrategy = new CamelCaseNamingStrategy();

    public static withPreloadedList = scope<typeof PassportPaymentClaim>((query) => {
        query
            .preload('allowance')
            .preload('passportPaymentProcess', (query) =>
                query
                    .preload('directorSupporter', employeePreloads)
                    .preload('verifier', employeePreloads)
                    .preload('appointedSupporter', employeePreloads)
                    .preload('approver', employeePreloads)
            );
    });
    
    @column({ isPrimary: true, columnName: 'id', serializeAs: null })
    public id: bigint;
    
    @column({ columnName: 'allowanceId', serializeAs: null })
    public allowanceId: bigint;
    
    @column.dateTime({ columnName: 'renewDate' })
    public renewDate: DateTime;
    
    @column({ columnName: 'reason' })
    public reason: string;
    
    @column({ columnName: 'document' })
    public document: Blob;
    
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
    
    @belongsTo(() => ServiceAllowance, {
        foreignKey: 'allowanceId',
        onQuery: (query) => {
        query.where('active', true);
        },
    })
    public allowance: BelongsTo<typeof ServiceAllowance>;
    
    @hasOne(() => PassportPaymentProcess, {
        foreignKey: 'passportPaymentId',
        onQuery: (query) => {
        query.where('active', true);
        },
    })
    public passportPaymentProcess: HasOne<typeof PassportPaymentProcess>;
    
    @beforeFind()
    public static async preloadTables(query) {
        query
            .preload('allowance')
            .preload('passportPaymentProcess', (query) =>
                query
                    .preload('directorSupporter', employeePreloads)
                    .preload('verifier', employeePreloads)
                    .preload('appointedSupporter', employeePreloads)
                    .preload('approver', employeePreloads)
            );
    }
}