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
import Position from './Position';
import Grade from './Grade';
import Department from './Department';
import Placement from './Placement';
import ApplicationInterim from './ApplicationInterim';
import TerminationInterim from './TerminationInterim';
import { employeePreloads } from 'App/Helpers/preloads';

export default class EmploymentInterim extends BaseModel {
    public static table = 'employmentInterims';
    public static primaryKey = 'id';
    public static incrementing = false;

    public static namingStrategy = new CamelCaseNamingStrategy();

    public static withPreloadedList = scope<typeof EmploymentInterim>((query) => {
        query
            .preload('employee', employeePreloads)
            .preload('position')
            .preload('grade')
            .preload('department')
            .preload('placement')
            .preload('applicationInterim')
            .preload('terminationInterim');
    });
    
    @column({ isPrimary: true, columnName: 'id', serializeAs: null })
    public id: bigint;
    
    @column({ columnName: 'employeeId', serializeAs: null })
    public employeeId: bigint;
    
    @column({ columnName: 'positionId', serializeAs: null })
    public positionId: bigint;
    
    @column({ columnName: 'gradeId', serializeAs: null })
    public gradeId: bigint;
    
    @column({ columnName: 'departmentId', serializeAs: null })
    public departmentId: bigint;
    
    @column({ columnName: 'placementId', serializeAs: null })
    public placementId: bigint;
    
    @column.dateTime({ columnName: 'applicationDate' })
    public applicationDate: DateTime;
    
    @column({ columnName: 'referenceNumber' })
    public referenceNumber: string;
    
    @column.dateTime({ columnName: 'startDate' })
    public startDate: DateTime;
    
    @column.dateTime({ columnName: 'endDate' })
    public endDate: DateTime;
    
    @column({ columnName: 'duration' })
    public duration: number;
    
    @column({ columnName: 'status' })
    public status: string;
    
    @column({ columnName: 'remark' })
    public remark: string;
    
    @column({ columnName: 'reason' })
    public reason: string;
    
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
    
    @belongsTo(() => Position, {
        foreignKey: 'positionId',
        onQuery: (query) => {
        query.where('active', true);
        },
    })
    public position: BelongsTo<typeof Position>;
    
    @belongsTo(() => Grade, {
        foreignKey: 'gradeId',
        onQuery: (query) => {
        query.where('active', true);
        },
    })
    public grade: BelongsTo<typeof Grade>;
    
    @belongsTo(() => Department, {
        foreignKey: 'departmentId',
        onQuery: (query) => {
        query.where('active', true);
        },
    })
    public department: BelongsTo<typeof Department>;
    
    @belongsTo(() => Placement, {
        foreignKey: 'placementId',
        onQuery: (query) => {
        query.where('active', true);
        },
    })
    public placement: BelongsTo<typeof Placement>;
    
    @hasOne(() => ApplicationInterim, {
        foreignKey: 'interimId',
        onQuery: (query) => {
        query.where('active', true);
        },
    })
    public applicationInterim: HasOne<typeof ApplicationInterim>;
    
    @hasOne(() => TerminationInterim, {
        foreignKey: 'interimId',
        onQuery: (query) => {
        query.where('active', true);
        },
    })
    public terminationInterim: HasOne<typeof TerminationInterim>;
    
    @beforeFind()
    public static async preloadTables(query) {
        query
            .preload('employee', employeePreloads)
            .preload('position')
            .preload('grade')
            .preload('department')
            .preload('placement')
            .preload('applicationInterim')
            .preload('terminationInterim');
    }
}