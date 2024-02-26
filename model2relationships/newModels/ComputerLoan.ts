import { DateTime } from 'luxon';
import {
    column,
    BaseModel,
    belongsTo,
    BelongsTo,
    hasOne,
    HasOne,
    beforeFind,
    scope,
} from '@ioc:Adonis/Lucid/Orm';
import CamelCaseNamingStrategy from 'App/Strategies/CamelCaseNamingStrategy';
import Loan from './Loan';
import ComputerLoanProcess from './ComputerLoanProcess';

export default class ComputerLoan extends BaseModel {
    public static table = 'computerLoans';
    public static primaryKey = 'id';
    public static incrementing = false;

    public static namingStrategy = new CamelCaseNamingStrategy();

    public static withPreloadedList = scope<typeof ComputerLoan>((query) => {
        query
            .preload('loan')
            .preload('computerLoanProcess', (query) =>
                query
                    .preload('verifier', employeePreloads)
                    .preload('supporter', employeePreloads)
                    .preload('approver', employeePreloads)
            );
    });
    
    @column({ isPrimary: true, columnName: 'id', serializeAs: null })
    public id: bigint;
    
    @column({ columnName: 'loanId', serializeAs: null })
    public loanId: bigint;
    
    @column.dateTime({ columnName: 'startLoanDate' })
    public startLoanDate: DateTime;
    
    @column({ columnName: 'paymentPeriod' })
    public paymentPeriod: number;
    
    @column({ columnName: 'requestedAmount' })
    public requestedAmount: number;
    
    @column({ columnName: 'document' })
    public document: Blob;
    
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
    
    @belongsTo(() => Loan, {
        foreignKey: 'loanId',
        onQuery: (query) => {
        query.where('active', true);
        },
    })
    public loan: BelongsTo<typeof Loan>;
    
    @hasOne(() => ComputerLoanProcess, {
        foreignKey: 'computerLoanId',
        onQuery: (query) => {
        query.where('active', true);
        },
    })
    public computerLoanProcess: HasOne<typeof ComputerLoanProcess>;
    
    @beforeFind()
    public static async preloadTables(query) {
        query
            .preload('loan')
            .preload('computerLoanProcess', (query) =>
                query
                    .preload('verifier', employeePreloads)
                    .preload('supporter', employeePreloads)
                    .preload('approver', employeePreloads)
            );
    }
}