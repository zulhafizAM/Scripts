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
import Employee from './Employee';
import PensionDetailProcess from './PensionDetailProcess';
import { employeePreloads } from 'App/Helpers/preloads';

export default class PensionDetail extends BaseModel {
    public static table = 'pensionDetails';
    public static primaryKey = 'id';
    public static incrementing = false;

    public static namingStrategy = new CamelCaseNamingStrategy();

    public static withPreloadedList = scope<typeof PensionDetail>((query) => {
        query
            .preload('employee', employeePreloads)
            .preload('pensionDetailProcess', (query) =>
                query
                    .preload('supporter', employeePreloads)
                    .preload('approver', employeePreloads)
            );
    });
    
    @column({ isPrimary: true, columnName: 'id', serializeAs: null })
    public id: bigint;
    
    @column({ columnName: 'employeeId', serializeAs: null })
    public employeeId: bigint;
    
    @column.dateTime({ columnName: 'applicationDate' })
    public applicationDate: DateTime;
    
    @column.dateTime({ columnName: 'PTBDate' })
    public PTBDate: DateTime;
    
    @column({ columnName: 'referenceNumber' })
    public referenceNumber: string;
    
    @column.dateTime({ columnName: 'referenceDate' })
    public referenceDate: DateTime;
    
    @column({ columnName: 'status' })
    public status: string;
    
    @column({ columnName: 'remark' })
    public remark: string;
    
    @column({ columnName: 'pensionNumber' })
    public pensionNumber: string;
    
    @column.dateTime({
        columnName: 'KWAPEmailDate',
        autoCreate: true,
        serializeAs: null,
    })
    public KWAPEmailDate: DateTime;
    
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
    
    @hasOne(() => PensionDetailProcess, {
        foreignKey: 'pensionId',
        onQuery: (query) => {
        query.where('active', true);
        },
    })
    public pensionDetailProcess: HasOne<typeof PensionDetailProcess>;
    
    @beforeFind()
    public static async preloadTables(query) {
        query
            .preload('employee', employeePreloads)
            .preload('pensionDetailProcess', (query) =>
                query
                    .preload('supporter', employeePreloads)
                    .preload('approver', employeePreloads)
            );
    }
}