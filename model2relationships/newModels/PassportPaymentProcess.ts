import { DateTime } from 'luxon';
import {
    column,
    BaseModel,
    belongsTo,
    BelongsTo,
    beforeFind,
    scope,
} from '@ioc:Adonis/Lucid/Orm';
import CamelCaseNamingStrategy from 'App/Strategies/CamelCaseNamingStrategy';
import PassportPaymentClaim from './PassportPaymentClaim';
import Employee from './Employee';
import { employeePreloads } from 'App/Helpers/preloads';

export default class PassportPaymentProcess extends BaseModel {
    public static table = 'passportPaymentProcess';
    public static primaryKey = 'id';
    public static incrementing = false;

    public static namingStrategy = new CamelCaseNamingStrategy();

    public static withPreloadedList = scope<typeof PassportPaymentProcess>((query) => {
        query
            .preload('passportPayment')
            .preload('directorSupporter', employeePreloads)
            .preload('verifier', employeePreloads)
            .preload('appointedSupporter', employeePreloads)
            .preload('approver', employeePreloads);
    });
    
    @column({ isPrimary: true, columnName: 'id', serializeAs: null })
    public id: bigint;
    
    @column({ columnName: 'passportPaymentId', serializeAs: null })
    public passportPaymentId: bigint;
    
    @column({ columnName: 'directorSupporterId', serializeAs: null })
    public directorSupporterId: bigint;
    
    @column({ columnName: 'directorSupportedStatus' })
    public directorSupportedStatus: string;
    
    @column({ columnName: 'directorSupportedRemark' })
    public directorSupportedRemark: string;
    
    @column.dateTime({ columnName: 'directorSupportedDate' })
    public directorSupportedDate: DateTime;
    
    @column({ columnName: 'verifierId', serializeAs: null })
    public verifierId: bigint;
    
    @column({ columnName: 'verifiedStatus' })
    public verifiedStatus: string;
    
    @column({ columnName: 'verifiedRemark' })
    public verifiedRemark: string;
    
    @column.dateTime({ columnName: 'verifiedDate' })
    public verifiedDate: DateTime;
    
    @column({ columnName: 'appointedSupporterId', serializeAs: null })
    public appointedSupporterId: bigint;
    
    @column({ columnName: 'appointedSupportedStatus' })
    public appointedSupportedStatus: string;
    
    @column({ columnName: 'appointedSupportedRemark' })
    public appointedSupportedRemark: string;
    
    @column.dateTime({ columnName: 'appointedSupportedDate' })
    public appointedSupportedDate: DateTime;
    
    @column({ columnName: 'approverId', serializeAs: null })
    public approverId: bigint;
    
    @column({ columnName: 'approvedStatus' })
    public approvedStatus: string;
    
    @column({ columnName: 'approvedRemark' })
    public approvedRemark: string;
    
    @column.dateTime({ columnName: 'approvedDate' })
    public approvedDate: DateTime;
    
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
    
    @belongsTo(() => PassportPaymentClaim, {
        foreignKey: 'passportPaymentId',
        onQuery: (query) => {
        query.where('active', true);
        },
    })
    public passportPayment: BelongsTo<typeof PassportPaymentClaim>;
    
    @belongsTo(() => Employee, {
        foreignKey: 'directorSupporterId',
        onQuery: (query) => {
        query.where('active', true);
        },
    })
    public directorSupporter: BelongsTo<typeof Employee>;
    
    @belongsTo(() => Employee, {
        foreignKey: 'verifierId',
        onQuery: (query) => {
        query.where('active', true);
        },
    })
    public verifier: BelongsTo<typeof Employee>;
    
    @belongsTo(() => Employee, {
        foreignKey: 'appointedSupporterId',
        onQuery: (query) => {
        query.where('active', true);
        },
    })
    public appointedSupporter: BelongsTo<typeof Employee>;
    
    @belongsTo(() => Employee, {
        foreignKey: 'approverId',
        onQuery: (query) => {
        query.where('active', true);
        },
    })
    public approver: BelongsTo<typeof Employee>;
    
    @beforeFind()
    public static async preloadTables(query) {
        query
            .preload('passportPayment')
            .preload('directorSupporter', employeePreloads)
            .preload('verifier', employeePreloads)
            .preload('appointedSupporter', employeePreloads)
            .preload('approver', employeePreloads);
    }
}