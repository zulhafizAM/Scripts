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
import Performance from './Performance';

export default class PerformanceContributionNotOfficialDuty extends BaseModel {
    public static table = 'performanceContributionNotOfficialDuties';
    public static primaryKey = 'id';
    public static incrementing = false;

    public static namingStrategy = new CamelCaseNamingStrategy();

    public static withPreloadedList = scope<typeof PerformanceContributionNotOfficialDuty>((query) => {
        query
            .preload('performance');
    });
    
    @column({ isPrimary: true, columnName: 'id', serializeAs: null })
    public id: bigint;
    
    @column({ columnName: 'performanceId', serializeAs: null })
    public performanceId: bigint;
    
    @column({ columnName: 'name' })
    public name: string;
    
    @column({ columnName: 'achievement' })
    public achievement: string;
    
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
    
    @belongsTo(() => Performance, {
        foreignKey: 'performanceId',
        onQuery: (query) => {
        query.where('active', true);
        },
    })
    public performance: BelongsTo<typeof Performance>;
    
    @beforeFind()
    public static async preloadTables(query) {
        query
            .preload('performance');
    }
}