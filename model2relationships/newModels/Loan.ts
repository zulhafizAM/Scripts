import { DateTime } from 'luxon';
import {
    column,
    BaseModel,
    belongsTo,
    BelongsTo,
    HasMany,
    hasMany,
    beforeFind,
    scope,
} from '@ioc:Adonis/Lucid/Orm';
import CamelCaseNamingStrategy from 'App/Strategies/CamelCaseNamingStrategy';
import SalaryDeduction from './SalaryDeduction';
import ComputerLoan from './ComputerLoan';
import VehicleLoan from './VehicleLoan';

export default class Loan extends BaseModel {
    public static table = 'loans';
    public static primaryKey = 'id';
    public static incrementing = false;

    public static namingStrategy = new CamelCaseNamingStrategy();

    public static withPreloadedList = scope<typeof Loan>((query) => {
        query
            .preload('deduction')
            .preload('computerLoans')
            .preload('vehicleLoans');
    });
    
    @column({ isPrimary: true, columnName: 'id', serializeAs: null })
    public id: bigint;
    
    @column({ columnName: 'deductionId', serializeAs: null })
    public deductionId: bigint;
    
    @column({ columnName: 'loanType' })
    public loanType: string;
    
    @column.dateTime({ columnName: 'applicationDate' })
    public applicationDate: DateTime;
    
    @column({ columnName: 'status' })
    public status: string;
    
    @column({ columnName: 'remark' })
    public remark: string;
    
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
    
    @belongsTo(() => SalaryDeduction, {
        foreignKey: 'deductionId',
        onQuery: (query) => {
        query.where('active', true);
        },
    })
    public deduction: BelongsTo<typeof SalaryDeduction>;
    
    @hasMany(() => ComputerLoan, {
        foreignKey: 'loanId',
        onQuery: (query) => {
        query.where('active', true);
        },
    })
    public computerLoans: HasMany<typeof ComputerLoan>;
    
    @hasMany(() => VehicleLoan, {
        foreignKey: 'loanId',
        onQuery: (query) => {
        query.where('active', true);
        },
    })
    public vehicleLoans: HasMany<typeof VehicleLoan>;
    
    @beforeFind()
    public static async preloadTables(query) {
        query
            .preload('deduction')
            .preload('computerLoans')
            .preload('vehicleLoans');
    }
}