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
import Position from './Position';
import Grade from './Grade';
import { employeePreloads } from 'App/Helpers/preloads';

export default class PastPosition extends BaseModel {
    public static table = 'pastPositions';
    public static primaryKey = 'id';
    public static incrementing = false;

    public static namingStrategy = new CamelCaseNamingStrategy();

    public static withPreloadedList = scope<typeof PastPosition>((query) => {
        query
            .preload('employee')
            .preload('position')
            .preload('grade');
    });
    
    @column({ isPrimary: true, columnName: 'id', serializeAs: null })
    public id: bigint;
    
    @column({ columnName: 'employeeId', serializeAs: null })
    public employeeId: bigint;
    
    @column({ columnName: 'positionId', serializeAs: null })
    public positionId: bigint;
    
    @column({ columnName: 'gradeId', serializeAs: null })
    public gradeId: bigint;
    
    @column.dateTime({ columnName: 'startDate' })
    public startDate: DateTime;
    
    @column.dateTime({ columnName: 'endDate' })
    public endDate: DateTime;
    
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
        foreignKey: 'employeeId',
        onQuery: (query) => {
        query.where('active', true);
        },
    })
    public employee: HasMany<typeof Employee>;
    
    @hasMany(() => Position, {
        foreignKey: 'positionId',
        onQuery: (query) => {
        query.where('active', true);
        },
    })
    public position: HasMany<typeof Position>;
    
    @hasMany(() => Grade, {
        foreignKey: 'gradeId',
        onQuery: (query) => {
        query.where('active', true);
        },
    })
    public grade: HasMany<typeof Grade>;
    
    @beforeFind()
    public static async preloadTables(query) {
        query
            .preload('employee')
            .preload('position')
            .preload('grade');
    }
}