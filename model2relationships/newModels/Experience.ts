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
import PersonalDetail from './PersonalDetail';
import { personalDetailPreloads } from 'App/Helpers/preloads';

export default class Experience extends BaseModel {
    public static table = 'experiences';
    public static primaryKey = 'id';
    public static incrementing = false;

    public static namingStrategy = new CamelCaseNamingStrategy();

    public static withPreloadedList = scope<typeof Experience>((query) => {
        query
            .preload('personalDetail', personalDetailPreloads);
    });
    
    @column({ isPrimary: true, columnName: 'id', serializeAs: null })
    public id: bigint;
    
    @column({ columnName: 'personalDetailId', serializeAs: null })
    public personalDetailId: bigint;
    
    @column({ columnName: 'position' })
    public position: string;
    
    @column({ columnName: 'company' })
    public company: string;
    
    @column({ columnName: 'address' })
    public address: string;
    
    @column.dateTime({ columnName: 'startDate' })
    public startDate: DateTime;
    
    @column.dateTime({ columnName: 'endDate' })
    public endDate: DateTime;
    
    @column({ columnName: 'description' })
    public description: string;
    
    @column({ columnName: 'grade' })
    public grade: string;
    
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
            .preload('personalDetail', personalDetailPreloads);
    }
}