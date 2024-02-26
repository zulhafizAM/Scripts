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
import AccruedAnnualLeaveProcess from './AccruedAnnualLeaveProcess';
import { employeePreloads } from 'App/Helpers/preloads';

export default class AccruedAnnualLeave extends BaseModel {
    public static table = 'accruedAnnualLeaves';
    public static primaryKey = 'id';
    public static incrementing = false;

    public static namingStrategy = new CamelCaseNamingStrategy();

    public static withPreloadedList = scope<typeof AccruedAnnualLeave>((query) => {
        query
            .preload('employee', employeePreloads)
            .preload('accruedAnnualLeaveProcess', (query) =>
                query
                    .preload('supporter', employeePreloads)
                    .preload('approver', employeePreloads)
                    .preload('verifier', employeePreloads)
                    .preload('confirmer', employeePreloads)
            );
    });
    
    @column({ isPrimary: true, columnName: 'id', serializeAs: null })
    public id: bigint;
    
    @column({ columnName: 'employeeId', serializeAs: null })
    public employeeId: bigint;
    
    @column.dateTime({ columnName: 'applicationDate' })
    public applicationDate: DateTime;
    
    @column({ columnName: 'currentYear' })
    public currentYear: number;
    
    @column({ columnName: 'totalLeaveEntitlement' })
    public totalLeaveEntitlement: number;
    
    @column({ columnName: 'leaveBalance' })
    public leaveBalance: number;
    
    @column({ columnName: 'acummulatedLeave' })
    public acummulatedLeave: number;
    
    @column({ columnName: 'maxReplacementLeave' })
    public maxReplacementLeave: number;
    
    @column({ columnName: 'forwardedLeaveTotal' })
    public forwardedLeaveTotal: number;
    
    @column({ columnName: 'status' })
    public status: string;
    
    @column({ columnName: 'remark' })
    public remark: string;
    
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
    
    @hasOne(() => AccruedAnnualLeaveProcess, {
        foreignKey: 'accruedLeaveId',
        onQuery: (query) => {
        query.where('active', true);
        },
    })
    public accruedAnnualLeaveProcess: HasOne<typeof AccruedAnnualLeaveProcess>;
    
    @beforeFind()
    public static async preloadTables(query) {
        query
            .preload('employee', employeePreloads)
            .preload('accruedAnnualLeaveProcess', (query) =>
                query
                    .preload('supporter', employeePreloads)
                    .preload('approver', employeePreloads)
                    .preload('verifier', employeePreloads)
                    .preload('confirmer', employeePreloads)
            );
    }
}