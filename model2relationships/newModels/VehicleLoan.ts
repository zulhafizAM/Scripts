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
import VehicleLoanProcesses from './VehicleLoanProcesses';

export default class VehicleLoan extends BaseModel {
    public static table = 'vehicleLoans';
    public static primaryKey = 'id';
    public static incrementing = false;

    public static namingStrategy = new CamelCaseNamingStrategy();

    public static withPreloadedList = scope<typeof VehicleLoan>((query) => {
        query
            .preload('loan')
            .preload('vehicleLoanProcesses', (query) =>
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
    
    @column({ columnName: 'maxLoanEligibility' })
    public maxLoanEligibility: number;
    
    @column({ columnName: 'requestedAmount' })
    public requestedAmount: number;
    
    @column.dateTime({ columnName: 'startLoanDate' })
    public startLoanDate: DateTime;
    
    @column({ columnName: 'paymentPeriod' })
    public paymentPeriod: number;
    
    @column({ columnName: 'nettPrice' })
    public nettPrice: number;
    
    @column({ columnName: 'reason' })
    public reason: string;
    
    @column({ columnName: 'document' })
    public document: Blob;
    
    @column({ columnName: 'vehicleCondition' })
    public vehicleCondition: string;
    
    @column({ columnName: 'vehicleType' })
    public vehicleType: string;
    
    @column({ columnName: 'vehicleBrandModel' })
    public vehicleBrandModel: string;
    
    @column({ columnName: 'vehicleDetails' })
    public vehicleDetails: string;
    
    @column({ columnName: 'registrationNumber' })
    public registrationNumber: string;
    
    @column.dateTime({ columnName: 'registrationDate' })
    public registrationDate: DateTime;
    
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
    
    @hasOne(() => VehicleLoanProcesses, {
        foreignKey: 'vehicleLoanId',
        onQuery: (query) => {
        query.where('active', true);
        },
    })
    public vehicleLoanProcesses: HasOne<typeof VehicleLoanProcesses>;
    
    @beforeFind()
    public static async preloadTables(query) {
        query
            .preload('loan')
            .preload('vehicleLoanProcesses', (query) =>
                query
                    .preload('verifier', employeePreloads)
                    .preload('supporter', employeePreloads)
                    .preload('approver', employeePreloads)
            );
    }
}