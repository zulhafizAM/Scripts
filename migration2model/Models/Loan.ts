import { DateTime } from 'luxon';
import { column, BaseModel, belongsTo, BelongsTo, hasMany, HasMany } from '@ioc:Adonis/Lucid/Orm';
import CamelCaseNamingStrategy from 'App/Strategies/CamelCaseNamingStrategy';
import SalaryDeduction from './SalaryDeduction';
import ComputerLoan from './ComputerLoan';
import VehicleLoan from './VehicleLoan';

export default class Loan extends BaseModel {
    public static table = 'loans';
    public static primaryKey = 'id';
    public static incrementing = false;

    public static namingStrategy = new CamelCaseNamingStrategy();

    @column({ isPrimary: true, columnName: 'id' })
    public id: bigint;

    @column({ columnName: 'deductionId' })
    public deductionId: bigint;

    @column({ columnName: 'loanType' })
    public loanType: string;

    @column.dateTime({ columnName: 'applicationDate' })
    public applicationDate: DateTime;

    @column({ columnName: 'status' })
    public status: string;

    @column({ columnName: 'remark' })
    public remark: string;

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

    @belongsTo(() => SalaryDeduction, { foreignKey: 'deductionId' })
    public deduction: BelongsTo<typeof SalaryDeduction>;

    @hasMany(() => ComputerLoan, { foreignKey: 'loanId' })
    public computerLoans: HasMany<typeof ComputerLoan>;

    @hasMany(() => VehicleLoan, { foreignKey: 'loanId' })
    public vehicleLoans: HasMany<typeof VehicleLoan>;
}