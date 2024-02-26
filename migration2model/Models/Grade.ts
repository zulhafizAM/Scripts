import { DateTime } from 'luxon';
import { column, BaseModel, hasMany, HasMany } from '@ioc:Adonis/Lucid/Orm';
import CamelCaseNamingStrategy from 'App/Strategies/CamelCaseNamingStrategy';
import EmploymentInterim from './EmploymentInterim';
import Position from './Position';
import Meeting from './Meeting';
import Employee from './Employee';

export default class Grade extends BaseModel {
    public static table = 'grades';
    public static primaryKey = 'id';
    public static incrementing = false;

    public static namingStrategy = new CamelCaseNamingStrategy();

    @column({ isPrimary: true, columnName: 'id' })
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

    @column({ columnName: 'active' })
    public active: boolean;

    @column({ columnName: 'createdBy' })
    public createdBy: string;

    @column.dateTime({ columnName: 'createdAt', autoCreate: true })
    public createdAt: DateTime;

    @column({ columnName: 'modifiedBy' })
    public modifiedBy: string;

    @column.dateTime({
        columnName: 'modifiedAt',
        autoCreate: true,
        autoUpdate: true,

    })
    public modifiedAt: DateTime;

    @hasMany(() => EmploymentInterim, { foreignKey: 'gradeId' })
    public employmentInterims: HasMany<typeof EmploymentInterim>;

    @hasMany(() => Position, { foreignKey: 'gradeId' })
    public positions: HasMany<typeof Position>;

    @hasMany(() => Meeting, { foreignKey: 'gradeId' })
    public meetings: HasMany<typeof Meeting>;

    @hasMany(() => Employee, { foreignKey: 'gradeId' })
    public employees: HasMany<typeof Employee>;
}