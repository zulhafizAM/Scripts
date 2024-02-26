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
import PastPosition from './PastPosition';
import EmploymentInterim from './EmploymentInterim';
import Position from './Position';
import Meeting from './Meeting';
import Employee from './Employee';
import { employeePreloads } from 'App/Helpers/preloads';

export default class Grade extends BaseModel {
    public static table = 'grades';
    public static primaryKey = 'id';
    public static incrementing = false;

    public static namingStrategy = new CamelCaseNamingStrategy();

    public static withPreloadedList = scope<typeof Grade>((query) => {
        query
            .preload('pastPositionInPosition')
            .preload('employmentInterims')
            .preload('positions')
            .preload('meetings')
            .preload('employees');
    });
    
    @column({ isPrimary: true, columnName: 'id', serializeAs: null })
    public id: bigint;
    
    @column({ columnName: 'name' })
    public name: string;
    
    @column({ columnName: 'code' })
    public code: string;
    
    @column({ columnName: 'minimumSalary' })
    public minimumSalary: number;
    
    @column({ columnName: 'maximumSalary' })
    public maximumSalary: number;
    
    @column({ columnName: 'annualIncrementRate' })
    public annualIncrementRate: number;
    
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
    
    @hasMany(() => PastPosition, {
        foreignKey: 'gradeId',
        onQuery: (query) => {
        query.where('active', true);
        },
    })
    public pastPositionInPosition: HasMany<typeof PastPosition>;
    
    @hasMany(() => EmploymentInterim, {
        foreignKey: 'gradeId',
        onQuery: (query) => {
        query.where('active', true);
        },
    })
    public employmentInterims: HasMany<typeof EmploymentInterim>;
    
    @hasMany(() => Position, {
        foreignKey: 'gradeId',
        onQuery: (query) => {
        query.where('active', true);
        },
    })
    public positions: HasMany<typeof Position>;
    
    @hasMany(() => Meeting, {
        foreignKey: 'gradeId',
        onQuery: (query) => {
        query.where('active', true);
        },
    })
    public meetings: HasMany<typeof Meeting>;
    
    @hasMany(() => Employee, {
        foreignKey: 'gradeId',
        onQuery: (query) => {
        query.where('active', true);
        },
    })
    public employees: HasMany<typeof Employee>;
    
    @beforeFind()
    public static async preloadTables(query) {
        query
            .preload('pastPositionInPosition')
            .preload('employmentInterims')
            .preload('positions')
            .preload('meetings')
            .preload('employees');
    }
}