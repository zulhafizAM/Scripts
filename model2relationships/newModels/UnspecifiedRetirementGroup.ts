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
import UnspecifiedRetirement from './UnspecifiedRetirement';

export default class UnspecifiedRetirementGroup extends BaseModel {
    public static table = 'unspecifiedRetirementGroups';
    public static primaryKey = 'id';
    public static incrementing = false;

    public static namingStrategy = new CamelCaseNamingStrategy();

    public static withPreloadedList = scope<typeof UnspecifiedRetirementGroup>((query) => {
        query
            .preload('unspecifiedRetirementGroups');
    });
    
    @column({ isPrimary: true, columnName: 'id', serializeAs: null })
    public id: bigint;
    
    @column({ columnName: 'name' })
    public name: string;
    
    @column({ columnName: 'headCount' })
    public headCount: number;
    
    @column.dateTime({ columnName: 'date' })
    public date: DateTime;
    
    @column({ columnName: 'status' })
    public status: string;
    
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
    
    @hasMany(() => UnspecifiedRetirement, {
        foreignKey: 'groupId',
        onQuery: (query) => {
        query.where('active', true);
        },
    })
    public unspecifiedRetirementGroups: HasMany<typeof UnspecifiedRetirement>;
    
    @beforeFind()
    public static async preloadTables(query) {
        query
            .preload('unspecifiedRetirementGroups');
    }
}