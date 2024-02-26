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
import PersonalDetail from './PersonalDetail';
import { employeePreloads } from 'App/Helpers/preloads';
import { personalDetailPreloads } from 'App/Helpers/preloads';

export default class InternalRelationship extends BaseModel {
    public static table = 'internalRelationships';
    public static primaryKey = 'id';
    public static incrementing = false;

    public static namingStrategy = new CamelCaseNamingStrategy();

    public static withPreloadedList = scope<typeof InternalRelationship>((query) => {
        query
            .preload('employee', employeePreloads)
            .preload('personalDetail', personalDetailPreloads);
    });
    
    @column({ isPrimary: true, columnName: 'id', serializeAs: null })
    public id: bigint;
    
    @column({ columnName: 'personalDetailId', serializeAs: null })
    public personalDetailId: bigint;
    
    @column({ columnName: 'employeeId', serializeAs: null })
    public employeeId: bigint;
    
    @column({ columnName: 'relationship' })
    public relationship: string;
    
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
    
    @belongsTo(() => PersonalDetail, {
        foreignKey: 'personalDetailId',
        onQuery: (query) => {
        query.where('active', true);
        },
    })
    public personalDetail: BelongsTo<typeof PersonalDetail>;
    
    @beforeFind()
    public static async preloadTables(query) {
        query
            .preload('employee', employeePreloads)
            .preload('personalDetail', personalDetailPreloads);
    }
}