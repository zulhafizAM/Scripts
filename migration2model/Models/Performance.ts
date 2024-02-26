import { DateTime } from 'luxon';
import { column, BaseModel, belongsTo, BelongsTo, hasMany, HasMany } from '@ioc:Adonis/Lucid/Orm';
import CamelCaseNamingStrategy from 'App/Strategies/CamelCaseNamingStrategy';
import Employee from './Employee';
import Employee from './Employee';
import Employee from './Employee';
import PerformanceContributionNotOfficialDuty from './PerformanceContributionNotOfficialDuty';

export default class Performance extends BaseModel {
    public static table = 'performances';
    public static primaryKey = 'id';
    public static incrementing = false;

    public static namingStrategy = new CamelCaseNamingStrategy();

    @column({ isPrimary: true, columnName: 'id' })
    public id: bigint;

    @column({ columnName: 'employeeId' })
    public employeeId: bigint;

    @column({ columnName: 'PPKEmployeeId' })
    public PPKEmployeeId: bigint;

    @column({ columnName: 'PPPEmployeeId' })
    public PPPEmployeeId: bigint;

    @column({ columnName: 'year' })
    public year: number;

    @column({ columnName: 'reviewDuration' })
    public reviewDuration: number;

    @column({ columnName: 'JPAFormPerformance' })
    public JPAFormPerformance: string;

    @column.dateTime({ columnName: 'insertDate' })
    public insertDate: DateTime;

    @column({ columnName: 'propertyStatus' })
    public propertyStatus: string;

    @column.dateTime({ columnName: 'approvedPropertyDate' })
    public approvedPropertyDate: DateTime;

    @column({ columnName: 'gradeMarkPPP' })
    public gradeMarkPPP: number;

    @column({ columnName: 'gradeMarkPPK' })
    public gradeMarkPPK: number;

    @column({ columnName: 'skillMarkPPP' })
    public skillMarkPPP: number;

    @column({ columnName: 'skillMarkPPK' })
    public skillMarkPPK: number;

    @column({ columnName: 'individualMarkPPP' })
    public individualMarkPPP: number;

    @column({ columnName: 'individualMarkPPK' })
    public individualMarkPPK: number;

    @column({ columnName: 'contributeMarkPPP' })
    public contributeMarkPPP: number;

    @column({ columnName: 'contributeMarkPPK' })
    public contributeMarkPPK: number;

    @column({ columnName: 'PPP' })
    public PPP: number;

    @column({ columnName: 'PPK' })
    public PPK: number;

    @column({ columnName: 'average' })
    public average: number;

    @column({ columnName: 'PPSM' })
    public PPSM: number;

    @column({ columnName: 'isAmend' })
    public isAmend: boolean;

    @column({ columnName: 'description' })
    public description: string;

    @column({ columnName: 'salaryMovement' })
    public salaryMovement: string;

    @column({ columnName: 'justification' })
    public justification: string;

    @column({ columnName: 'yearlyAPC' })
    public yearlyAPC: string;

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

    @belongsTo(() => Employee, { foreignKey: 'PPKEmployeeId' })
    public PPKEmployee: BelongsTo<typeof Employee>;

    @belongsTo(() => Employee, { foreignKey: 'PPPEmployeeId' })
    public PPPEmployee: BelongsTo<typeof Employee>;

    @hasMany(() => PerformanceContributionNotOfficialDuty, { foreignKey: 'performanceId' })
    public performanceContributionNotOfficialDuties: HasMany<typeof PerformanceContributionNotOfficialDuty>;
}