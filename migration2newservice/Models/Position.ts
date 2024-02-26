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
import Grade from './Grade';
import Employee from './Employee';
import EmploymentInterim from './EmploymentInterim';
import Meeting from './Meeting';

export default class Position extends BaseModel {
    public static table = 'positions';
    public static primaryKey = 'id';
    public static incrementing = false;

    public static namingStrategy = new CamelCaseNamingStrategy();

    @column({ isPrimary: true, columnName: 'id' })
    public id: bigint;

    @column({ columnName: 'name' })
    public name: string;

    @column({ columnName: 'gradeId' })
    public gradeId: bigint;

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

    @belongsTo(() => Grade, { foreignKey: 'gradeId' })
    public grade: BelongsTo<typeof Grade>;

    @hasMany(() => Employee, { foreignKey: 'positionId' })
    public employees: HasMany<typeof Employee>;

    @hasMany(() => EmploymentInterim, { foreignKey: 'positionId' })
    public employmentInterims: HasMany<typeof EmploymentInterim>;

    @hasMany(() => Meeting, { foreignKey: 'positionId' })
    public meetings: HasMany<typeof Meeting>;
}
