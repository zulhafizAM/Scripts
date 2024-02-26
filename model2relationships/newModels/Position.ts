import { DateTime } from 'luxon';
import {
    column,
    BaseModel,
    belongsTo,
    BelongsTo,
    HasMany,
    hasMany,
    beforeFind,
    scope,
} from '@ioc:Adonis/Lucid/Orm';
import CamelCaseNamingStrategy from 'App/Strategies/CamelCaseNamingStrategy';
import Grade from './Grade';
import PastPosition from './PastPosition';
import EmploymentInterim from './EmploymentInterim';
import Meeting from './Meeting';
import Employee from './Employee';
import { employeePreloads } from 'App/Helpers/preloads';

export default class Position extends BaseModel {
    public static table = 'positions';
    public static primaryKey = 'id';
    public static incrementing = false;

    public static namingStrategy = new CamelCaseNamingStrategy();

    public static withPreloadedList = scope<typeof Position>((query) => {
        query
            .preload('grade')
            .preload('pastPositionInPositionId')
            .preload('employmentInterims')
            .preload('meetings')
            .preload('employees');
    });
    
    @column({ isPrimary: true, columnName: 'id', serializeAs: null })
    public id: bigint;
    
    @column({ columnName: 'name' })
    public name: string;
    
    @column({ columnName: 'gradeId', serializeAs: null })
    public gradeId: bigint;
    
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
    
    @belongsTo(() => Grade, {
        foreignKey: 'gradeId',
        onQuery: (query) => {
        query.where('active', true);
        },
    })
    public grade: BelongsTo<typeof Grade>;
    
    @hasMany(() => PastPosition, {
        foreignKey: 'positionId',
        onQuery: (query) => {
        query.where('active', true);
        },
    })
    public pastPositionInPositionId: HasMany<typeof PastPosition>;
    
    @hasMany(() => EmploymentInterim, {
        foreignKey: 'positionId',
        onQuery: (query) => {
        query.where('active', true);
        },
    })
    public employmentInterims: HasMany<typeof EmploymentInterim>;
    
    @hasMany(() => Meeting, {
        foreignKey: 'positionId',
        onQuery: (query) => {
        query.where('active', true);
        },
    })
    public meetings: HasMany<typeof Meeting>;
    
    @hasMany(() => Employee, {
        foreignKey: 'positionId',
        onQuery: (query) => {
        query.where('active', true);
        },
    })
    public employees: HasMany<typeof Employee>;
    
    @beforeFind()
    public static async preloadTables(query) {
        query
            .preload('grade')
            .preload('pastPositionInPositionId')
            .preload('employmentInterims')
            .preload('meetings')
            .preload('employees');
    }
}