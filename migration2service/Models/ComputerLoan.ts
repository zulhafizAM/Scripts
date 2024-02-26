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
import Loan from './Loan';
import ComputerLoanProcess from './ComputerLoanProcess';

export default class ComputerLoan extends BaseModel {
    public static table = 'computerLoans';
    public static primaryKey = 'id';
    public static incrementing = false;

    public static namingStrategy = new CamelCaseNamingStrategy();

    @column({ isPrimary: true, columnName: 'id' })
    public id: bigint;

    @column({ columnName: 'loanId' })
    public loanId: bigint;

	@column.dateTime({ columnName: 'startLoanDate' })
	public startLoanDate: DateTime;

	@column({ columnName: 'paymentPeriod' })
	public paymentPeriod: number;

    @column({ columnName: 'document' })
    public document: Blob;

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

    @belongsTo(() => Loan, { foreignKey: 'loanId' })
    public loan: BelongsTo<typeof Loan>;

    @hasOne(() => ComputerLoanProcess, { foreignKey: 'computerLoanId' })
    public computerLoanProcess: HasOne<typeof ComputerLoanProcess>;
}
