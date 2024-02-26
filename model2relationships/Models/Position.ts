import { DateTime } from 'luxon';
import {
    column,
    BaseModel,
    belongsTo,
    BelongsTo,
    hasMany,
    HasMany,
} from '@ioc:Adonis/Lucid/Orm';
import CamelCaseNamingStrategy from 'App/Strategies/CamelCaseNamingStrategy';
import Grade from 'App/Models/Grade';
import EmploymentInterim from 'App/Models/EmploymentInterim';
import Meeting from 'App/Models/Meeting';
import PastPosition from 'App/Models/PastPosition';
import Employee from './Employee';

export default class Position extends BaseModel {
    public static table = 'positions';
    public static primaryKey = 'id';
    public static incrementing = false;

    public static namingStrategy = new CamelCaseNamingStrategy();

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
}
