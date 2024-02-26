import { DateTime } from 'luxon';
import {
    column,
    BaseModel,
    HasMany,
    hasMany,
    beforeFind,
    scope,
} from '@ioc:Adonis/Lucid/Orm';
import CamelCaseNamingStrategy from 'App/Strategies/CamelCaseNamingStrategy';
import Sentencing from './Sentencing';

export default class PenaltyType extends BaseModel {
    public static table = 'penaltyTypes';
    public static primaryKey = 'id';
    public static incrementing = false;

    public static namingStrategy = new CamelCaseNamingStrategy();

    public static withPreloadedList = scope<typeof PenaltyType>((query) => {
        query
            .preload('sentencings');
    });
    
    @column({ isPrimary: true, columnName: 'id', serializeAs: null })
    public id: bigint;
    
    @column({ columnName: 'name' })
    public name: string;
    
    @column({ columnName: 'description' })
    public description: string;
    
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
    
    @hasMany(() => Sentencing, {
        foreignKey: 'penaltyTypeId',
        onQuery: (query) => {
        query.where('active', true);
        },
    })
    public sentencings: HasMany<typeof Sentencing>;
    
    @beforeFind()
    public static async preloadTables(query) {
        query
            .preload('sentencings');
    }
}