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
import Employee from './Employee';
import SelfTransfers from './SelfTransfers';
import { employeePreloads } from 'App/Helpers/preloads';

export default class SelfTransferProcess extends BaseModel {
    public static table = 'selfTransferProcess';
    public static primaryKey = 'id';
    public static incrementing = false;

    public static namingStrategy = new CamelCaseNamingStrategy();

    public static withPreloadedList = scope<typeof SelfTransferProcess>((query) => {
        query
            .preload('directorSupporter', employeePreloads)
            .preload('appointedSupporter', employeePreloads)
            .preload('appointedApprover', employeePreloads)
            .preload('selfTransfer');
    });
    
    @column({ isPrimary: true, columnName: 'id', serializeAs: null })
    public id: bigint;
    
    @column({ columnName: 'selfTransferId', serializeAs: null })
    public selfTransferId: bigint;
    
    @column({ columnName: 'directorSupporterId', serializeAs: null })
    public directorSupporterId: bigint;
    
    @column({ columnName: 'directorSupportedStatus' })
    public directorSupportedStatus: string;
    
    @column({ columnName: 'directorSupportedRemark' })
    public directorSupportedRemark: string;
    
    @column.dateTime({ columnName: 'directorSupportedDate' })
    public directorSupportedDate: DateTime;
    
    @column({ columnName: 'appointedSupporterId', serializeAs: null })
    public appointedSupporterId: bigint;
    
    @column({ columnName: 'appointedSupportedStatus' })
    public appointedSupportedStatus: string;
    
    @column({ columnName: 'appointedSupportedRemark' })
    public appointedSupportedRemark: string;
    
    @column.dateTime({ columnName: 'appointedSupportedDate' })
    public appointedSupportedDate: DateTime;
    
    @column({ columnName: 'appointedApproverId', serializeAs: null })
    public appointedApproverId: bigint;
    
    @column({ columnName: 'appointedApprovedStatus' })
    public appointedApprovedStatus: string;
    
    @column({ columnName: 'appointedApprovedRemark' })
    public appointedApprovedRemark: string;
    
    @column.dateTime({ columnName: 'appointedApprovedDate' })
    public appointedApprovedDate: DateTime;
    
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
        foreignKey: 'directorSupporterId',
        onQuery: (query) => {
        query.where('active', true);
        },
    })
    public directorSupporter: BelongsTo<typeof Employee>;
    
    @belongsTo(() => Employee, {
        foreignKey: 'appointedSupporterId',
        onQuery: (query) => {
        query.where('active', true);
        },
    })
    public appointedSupporter: BelongsTo<typeof Employee>;
    
    @belongsTo(() => Employee, {
        foreignKey: 'appointedApproverId',
        onQuery: (query) => {
        query.where('active', true);
        },
    })
    public appointedApprover: BelongsTo<typeof Employee>;
    
    @belongsTo(() => SelfTransfers, {
        foreignKey: 'selfTransferId',
        onQuery: (query) => {
        query.where('active', true);
        },
    })
    public selfTransfer: BelongsTo<typeof SelfTransfers>;
    
    @beforeFind()
    public static async preloadTables(query) {
        query
            .preload('directorSupporter', employeePreloads)
            .preload('appointedSupporter', employeePreloads)
            .preload('appointedApprover', employeePreloads)
            .preload('selfTransfer');
    }
}