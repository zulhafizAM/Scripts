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

    @column({ isPrimary: true, columnName: 'id' })
    public id: bigint;

    @column({ columnName: 'salaryDetailId' })
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

    @belongsTo(() => Salary, { foreignKey: 'salaryDetailId' })
    public salaryDetail: BelongsTo<typeof Salary>;

    @hasOne(() => Quarter, { foreignKey: 'deductionId' })
    public quarter: HasOne<typeof Quarter>;

    @hasMany(() => Loan, { foreignKey: 'deductionId' })
    public loans: HasMany<typeof Loan>;
}
