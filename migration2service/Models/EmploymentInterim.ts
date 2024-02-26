import { DateTime } from 'luxon';
import {
    column,
    BaseModel,
    belongsTo,
    BelongsTo,
    hasOne,
    HasOne,
} from '@ioc:Adonis/Lucid/Orm';
import CamelCaseNamingStrategy from 'App/Strategies/CamelCaseNamingStrategy';
import Employee from './Employee';
import Position from './Position';
import Grade from './Grade';
import Department from './Department';
import Placement from './Placement';
import ApplicationInterim from './ApplicationInterim';
import TerminationInterim from './TerminationInterim';

export default class EmploymentInterim extends BaseModel {
    public static table = 'employmentInterims';
    public static primaryKey = 'id';
    public static incrementing = false;

    public static namingStrategy = new CamelCaseNamingStrategy();

    @column({ isPrimary: true, columnName: 'id' })
    public id: bigint;

    @column({ columnName: 'employeeId' })
    public employeeId: bigint;

    @column({ columnName: 'positionId' })
    public positionId: bigint;

    @column({ columnName: 'gradeId' })
    public gradeId: bigint;

    @column({ columnName: 'departmentId' })
    public departmentId: bigint;

    @column({ columnName: 'placementId' })
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

    @belongsTo(() => Employee, { foreignKey: 'employeeId' })
    public employee: BelongsTo<typeof Employee>;

    @belongsTo(() => Position, { foreignKey: 'positionId' })
    public position: BelongsTo<typeof Position>;

    @belongsTo(() => Grade, { foreignKey: 'gradeId' })
    public grade: BelongsTo<typeof Grade>;

    @belongsTo(() => Department, { foreignKey: 'departmentId' })
    public department: BelongsTo<typeof Department>;

    @belongsTo(() => Placement, { foreignKey: 'placementId' })
    public placement: BelongsTo<typeof Placement>;

    @hasOne(() => ApplicationInterim, { foreignKey: 'interimId' })
    public applicationInterim: HasOne<typeof ApplicationInterim>;

    @hasOne(() => TerminationInterim, { foreignKey: 'interimId' })
    public terminationInterim: HasOne<typeof TerminationInterim>;
}
