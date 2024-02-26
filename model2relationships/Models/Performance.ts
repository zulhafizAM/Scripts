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
import Employee from './Employee';
import PerformanceContributionNotOfficialDuty from './PerformanceContributionNotOfficialDuty';

export default class Performance extends BaseModel {
    public static table = 'performances';
    public static primaryKey = 'id';
    public static incrementing = false;

    public static namingStrategy = new CamelCaseNamingStrategy();

    @column({ isPrimary: true, columnName: 'id', serializeAs: null })
    public id: bigint;

    @column({ columnName: 'employeeId', serializeAs: null })
    public employeeId: bigint;

    @column({ columnName: 'PPKEmployeeId', serializeAs: null })
    public PPKEmployeeId: bigint;

    @column({ columnName: 'PPPEmployeeId', serializeAs: null })
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

    @belongsTo(() => Employee, {
        foreignKey: 'PPKEmployeeId',
        onQuery: (query) => {
            query.where('active', true);
        },
    })
    public PPKEmployee: BelongsTo<typeof Employee>;

    @belongsTo(() => Employee, {
        foreignKey: 'PPPEmployeeId',
        onQuery: (query) => {
            query.where('active', true);
        },
    })
    public PPPEmployee: BelongsTo<typeof Employee>;

    @hasMany(() => PerformanceContributionNotOfficialDuty, {
        foreignKey: 'performanceId',
    })
    public performanceContributionNotOfficialDuties: HasMany<
        typeof PerformanceContributionNotOfficialDuty
    >;
}
