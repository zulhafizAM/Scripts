import { DateTime } from 'luxon';
import {
    column,
    BaseModel,
    belongsTo,
    BelongsTo,
    hasOne,
    HasOne,
    hasMany,
    HasMany,
} from '@ioc:Adonis/Lucid/Orm';
import CamelCaseNamingStrategy from 'App/Strategies/CamelCaseNamingStrategy';
import Salary from './Salary';
import Quarter from './Quarter';
import Loan from './Loan';

export default class SalaryDeduction extends BaseModel {
    public static table = 'salaryDeduction';
    public static primaryKey = 'id';
    public static incrementing = false;

    public static namingStrategy = new CamelCaseNamingStrategy();

    @column({ isPrimary: true, columnName: 'id', serializeAs: null })
    public id: bigint;

    @column({ columnName: 'salaryDetailId', serializeAs: null })
    public salaryDetailId: bigint;

    @column({ columnName: 'totalLoan' })
    public totalLoan: number;

    @column({ columnName: 'quarterRent' })
    public quarterRent: number;

    @column({ columnName: 'penaltyFee' })
    public penaltyFee: number;

    @column({ columnName: 'unpaidDeduction' })
    public unpaidDeduction: number;

    @column({ columnName: 'sickLeaveDeduction' })
    public sickLeaveDeduction: number;

    @column({ columnName: 'medicalArrearsFee' })
    public medicalArrearsFee: number;

    @column({ columnName: 'others' })
    public others: number;

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

    @belongsTo(() => Salary, {
        foreignKey: 'salaryDetailId',
        onQuery: (query) => {
            query.where('active', true);
        },
    })
    public salaryDetail: BelongsTo<typeof Salary>;

    @hasOne(() => Quarter, {
        foreignKey: 'deductionId',
        onQuery: (query) => {
            query.where('active', true);
        },
    })
    public quarter: HasOne<typeof Quarter>;

    @hasMany(() => Loan, {
        foreignKey: 'deductionId',
        onQuery: (query) => {
            query.where('active', true);
        },
    })
    public loans: HasMany<typeof Loan>;
}
