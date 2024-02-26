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
import ForcedRetirementProcess from './ForcedRetirementProcess';
import { employeePreloads } from 'App/Helpers/preloads';

export default class ForcedRetirement extends BaseModel {
    public static table = 'forcedRetirements';
    public static primaryKey = 'id';
    public static incrementing = false;

    public static namingStrategy = new CamelCaseNamingStrategy();

    public static withPreloadedList = scope<typeof ForcedRetirement>((query) => {
        query
            .preload('employee', employeePreloads)
            .preload('forcedRetirementProcess', (query) =>
                query
                    .preload('certifier', employeePreloads)
                    .preload('confirmer', employeePreloads)
            );
    });
    
    @column({ isPrimary: true, columnName: 'id', serializeAs: null })
    public id: bigint;
    
    @column({ columnName: 'employeeId', serializeAs: null })
    public employeeId: bigint;
    
    @column({ columnName: 'status' })
    public status: string;
    
    @column({ columnName: 'remark' })
    public remark: string;
    
    @column.dateTime({ columnName: 'applicationDate' })
    public applicationDate: DateTime;
    
    @column.dateTime({ columnName: 'sendDate' })
    public sendDate: DateTime;
    
    @column.dateTime({ columnName: 'newRetirementDate' })
    public newRetirementDate: DateTime;
    
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
    
    @belongsTo(() => Employee, {
        foreignKey: 'employeeId',
        onQuery: (query) => {
        query.where('active', true);
        },
    })
    public employee: BelongsTo<typeof Employee>;
    
    @hasOne(() => ForcedRetirementProcess, {
        foreignKey: 'forcedId',
        onQuery: (query) => {
        query.where('active', true);
        },
    })
    public forcedRetirementProcess: HasOne<typeof ForcedRetirementProcess>;
    
    @beforeFind()
    public static async preloadTables(query) {
        query
            .preload('employee', employeePreloads)
            .preload('forcedRetirementProcess', (query) =>
                query
                    .preload('certifier', employeePreloads)
                    .preload('confirmer', employeePreloads)
            );
    }
}