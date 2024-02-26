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

export default class LeaveEntitlement extends BaseModel {
    public static table = 'leaveEntitlements';
    public static primaryKey = 'id';
    public static incrementing = false;

    public static namingStrategy = new CamelCaseNamingStrategy();

    public static withPreloadedList = scope<typeof LeaveEntitlement>((query) => {
        query
            .preload('employee', employeePreloads);
    });
    
    @column({ isPrimary: true, columnName: 'id', serializeAs: null })
    public id: bigint;
    
    @column({ columnName: 'employeeId', serializeAs: null })
    public employeeId: bigint;
    
    @column({ columnName: 'year' })
    public year: number;
    
    @column({ columnName: 'annual' })
    public annual: number;
    
    @column({ columnName: 'medical' })
    public medical: number;
    
    @column({ columnName: 'maternity' })
    public maternity: number;
    
    @column({ columnName: 'paternity' })
    public paternity: number;
    
    @column({ columnName: 'warded' })
    public warded: number;
    
    @column({ columnName: 'remoteReligious' })
    public remoteReligious: number;
    
    @column({ columnName: 'claimable' })
    public claimable: number;
    
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
    
    @beforeFind()
    public static async preloadTables(query) {
        query
            .preload('employee', employeePreloads);
    }
}