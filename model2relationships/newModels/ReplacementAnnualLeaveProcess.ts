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

export default class ReplacementAnnualLeaveProcess extends BaseModel {
    public static table = 'replacementAnnualLeaveProcess';
    public static primaryKey = 'id';
    public static incrementing = false;

    public static namingStrategy = new CamelCaseNamingStrategy();

    public static withPreloadedList = scope<typeof ReplacementAnnualLeaveProcess>((query) => {
        query
            .preload('replacement', employeePreloads)
            .preload('directorSupporter', employeePreloads)
            .preload('certifier', employeePreloads)
            .preload('appointedSupporter', employeePreloads)
            .preload('approver', employeePreloads);
    });
    
    @column({ isPrimary: true, columnName: 'id', serializeAs: null })
    public id: bigint;
    
    @column({ columnName: 'replacementId', serializeAs: null })
    public replacementId: bigint;
    
    @column({ columnName: 'directorSupporterId', serializeAs: null })
    public directorSupporterId: bigint;
    
    @column({ columnName: 'directorSupportedStatus' })
    public directorSupportedStatus: string;
    
    @column({ columnName: 'directorSupportedRemark' })
    public directorSupportedRemark: string;
    
    @column.dateTime({ columnName: 'directorSupportedDate' })
    public directorSupportedDate: DateTime;
    
    @column({ columnName: 'certifierId', serializeAs: null })
    public certifierId: bigint;
    
    @column({ columnName: 'certifiedStatus' })
    public certifiedStatus: string;
    
    @column({ columnName: 'certifiedRemark' })
    public certifiedRemark: string;
    
    @column.dateTime({ columnName: 'certifiedDate' })
    public certifiedDate: DateTime;
    
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
    
    @belongsTo(() => Employee, {
        foreignKey: 'replacementId',
        onQuery: (query) => {
        query.where('active', true);
        },
    })
    public replacement: BelongsTo<typeof Employee>;
    
    @belongsTo(() => Employee, {
        foreignKey: 'directorSupporterId',
        onQuery: (query) => {
        query.where('active', true);
        },
    })
    public directorSupporter: BelongsTo<typeof Employee>;
    
    @belongsTo(() => Employee, {
        foreignKey: 'certifierId',
        onQuery: (query) => {
        query.where('active', true);
        },
    })
    public certifier: BelongsTo<typeof Employee>;
    
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
            .preload('replacement', employeePreloads)
            .preload('directorSupporter', employeePreloads)
            .preload('certifier', employeePreloads)
            .preload('appointedSupporter', employeePreloads)
            .preload('approver', employeePreloads);
    }
}