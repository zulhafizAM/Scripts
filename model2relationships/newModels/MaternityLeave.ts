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
import MaternityLeaveProcess from './MaternityLeaveProcess';
import { employeePreloads } from 'App/Helpers/preloads';

export default class MaternityLeave extends BaseModel {
    public static table = 'maternityLeaves';
    public static primaryKey = 'id';
    public static incrementing = false;

    public static namingStrategy = new CamelCaseNamingStrategy();

    public static withPreloadedList = scope<typeof MaternityLeave>((query) => {
        query
            .preload('employee', employeePreloads)
            .preload('maternityLeaveProcess', (query) =>
                query
                    .preload('verifier', employeePreloads)
                    .preload('approver', employeePreloads)
            );
    });
    
    @column({ isPrimary: true, columnName: 'id', serializeAs: null })
    public id: bigint;
    
    @column({ columnName: 'employeeId', serializeAs: null })
    public employeeId: bigint;
    
    @column({ columnName: 'reason' })
    public reason: string;
    
    @column.dateTime({ columnName: 'applicationDate' })
    public applicationDate: DateTime;
    
    @column.dateTime({ columnName: 'startDate' })
    public startDate: DateTime;
    
    @column.dateTime({ columnName: 'endDate' })
    public endDate: DateTime;
    
    @column.dateTime({ columnName: 'expectedDeliveryDate' })
    public expectedDeliveryDate: DateTime;
    
    @column({ columnName: 'status' })
    public status: string;
    
    @column({ columnName: 'remark' })
    public remark: string;
    
    @column({ columnName: 'currentAddress' })
    public currentAddress: string;
    
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
    
    @belongsTo(() => Employee, {
        foreignKey: 'employeeId',
        onQuery: (query) => {
        query.where('active', true);
        },
    })
    public employee: BelongsTo<typeof Employee>;
    
    @hasOne(() => MaternityLeaveProcess, {
        foreignKey: 'maternityLeaveId',
        onQuery: (query) => {
        query.where('active', true);
        },
    })
    public maternityLeaveProcess: HasOne<typeof MaternityLeaveProcess>;
    
    @beforeFind()
    public static async preloadTables(query) {
        query
            .preload('employee', employeePreloads)
            .preload('maternityLeaveProcess', (query) =>
                query
                    .preload('verifier', employeePreloads)
                    .preload('approver', employeePreloads)
            );
    }
}