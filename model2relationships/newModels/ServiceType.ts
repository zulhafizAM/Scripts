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
import Employee from './Employee';
import ContractDetail from './ContractDetail';
import { employeePreloads } from 'App/Helpers/preloads';

export default class ServiceType extends BaseModel {
    public static table = 'serviceTypes';
    public static primaryKey = 'id';
    public static incrementing = false;

    public static namingStrategy = new CamelCaseNamingStrategy();

    public static withPreloadedList = scope<typeof ServiceType>((query) => {
        query
            .preload('employees')
            .preload('contractDetails');
    });
    
    @column({ isPrimary: true, columnName: 'id', serializeAs: null })
    public id: bigint;
    
    @column({ columnName: 'name' })
    public name: string;
    
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
    
    @hasMany(() => Employee, {
        foreignKey: 'serviceTypeId',
        onQuery: (query) => {
        query.where('active', true);
        },
    })
    public employees: HasMany<typeof Employee>;
    
    @hasMany(() => ContractDetail, {
        foreignKey: 'serviceTypeId',
        onQuery: (query) => {
        query.where('active', true);
        },
    })
    public contractDetails: HasMany<typeof ContractDetail>;
    
    @beforeFind()
    public static async preloadTables(query) {
        query
            .preload('employees')
            .preload('contractDetails');
    }
}