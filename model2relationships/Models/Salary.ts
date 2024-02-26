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
import SalaryMovement from './SalaryMovement';
import Allowance from './Allowance';
import SalaryDeduction from './SalaryDeduction';

export default class Salary extends BaseModel {
    public static table = 'salaries';
    public static primaryKey = 'id';
    public static incrementing = false;

    public static namingStrategy = new CamelCaseNamingStrategy();

    @column({ isPrimary: true, columnName: 'id', serializeAs: null })
    public id: bigint;

    @column({ columnName: 'employeeId', serializeAs: null })
    public employeeId: bigint;

    @column({ columnName: 'revisionMonth' })
    public revisionMonth: string;

    @column({ columnName: 'EPFNumber' })
    public EPFNumber: string;

    @column({ columnName: 'SOSCONumber' })
    public SOSCONumber: string;

    @column({ columnName: 'incomeNumber' })
    public incomeNumber: string;

    @column({ columnName: 'pensionNumber' })
    public pensionNumber: string;

    @column({ columnName: 'retirementBenefit' })
    public retirementBenefit: string;

    @column.dateTime({ columnName: 'effectiveDate' })
    public effectiveDate: DateTime;

    @column({ columnName: 'baseSalary' })
    public baseSalary: number;

    @column({ columnName: 'ITKA' })
    public ITKA: number;

    @column({ columnName: 'COLA' })
    public COLA: number;

    @column({ columnName: 'status' })
    public status: string;

    @column({ columnName: 'remark' })
    public remark: string;

    @column({ columnName: 'isRetiringSoon' })
    public isRetiringSoon: boolean;

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

    @hasOne(() => SalaryMovement, {
        foreignKey: 'salaryDetailId',
        onQuery: (query) => {
            query.where('active', true);
        },
    })
    public salaryMovement: HasOne<typeof SalaryMovement>;

    @hasOne(() => Allowance, {
        foreignKey: 'salaryDetailId',
        onQuery: (query) => {
            query.where('active', true);
        },
    })
    public allowance: HasOne<typeof Allowance>;

    @hasOne(() => SalaryDeduction, {
        foreignKey: 'salaryDetailId',
        onQuery: (query) => {
            query.where('active', true);
        },
    })
    public salaryDeduction: HasOne<typeof SalaryDeduction>;
}
