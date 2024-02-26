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
import { employeePreloads } from 'App/Helpers/preloads';

export default class SelfTransferPostponeProcess extends BaseModel {
    public static table = 'selfTransferPostponeProcess';
    public static primaryKey = 'id';
    public static incrementing = false;

    public static namingStrategy = new CamelCaseNamingStrategy();

    public static withPreloadedList = scope<typeof SelfTransferPostponeProcess>((query) => {
        query
            .preload('employee', employeePreloads)
            .preload('approver', employeePreloads);
    });
    
    public static withPreloadedList = scope<typeof SelfTransferPostponeProcess>(
    (query) => {
    query.preload('approver', (name) => name.preload('personalDetail'));
    },
    );
    
    @column({ isPrimary: true, columnName: 'id', serializeAs: null })
    public id: bigint;
    
    @column({ columnName: 'selfTransferId', serializeAs: null })
    public selfTransferId: bigint;
    
    @column({ columnName: 'employeeId', serializeAs: null })
    public employeeId: bigint;
    
    @column.dateTime({ columnName: 'transferDate' })
    public transferDate: DateTime;
    
    @column.dateTime({ columnName: 'newTransferDate' })
    public newTransferDate: DateTime;
    
    @column({ columnName: 'postponeReason' })
    public postponeReason: string;
    
    @column({ columnName: 'document' })
    public document: Blob;
    
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
    
    @belongsTo(() => Employee, {
        foreignKey: 'employeeId',
        onQuery: (query) => {
        query.where('active', true);
        },
    })
    public employee: BelongsTo<typeof Employee>;
    
    @belongsTo(() => Employee, {
        foreignKey: 'approverId',
        onQuery: (query) => {
        query.where('active', true);
        },
    })
    public approver: BelongsTo<typeof Employee>;
    
    @beforeFind()
    public static async preloadPlacement(query) {
        query.preload('approver', (name) => name.preload('personalDetail'));
    }
    
    @beforeFind()
    public static async preloadTables(query) {
        query
            .preload('employee', employeePreloads)
            .preload('approver', employeePreloads);
    }
}