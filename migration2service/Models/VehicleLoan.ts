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
import VehicleLoanProcesses from './VehicleLoanProcesses';

export default class VehicleLoan extends BaseModel {
    public static table = 'vehicleLoans';
    public static primaryKey = 'id';
    public static incrementing = false;

    public static namingStrategy = new CamelCaseNamingStrategy();

    @column({ isPrimary: true, columnName: 'id' })
    public id: bigint;

    @column({ columnName: 'loanId' })
    public loanId: bigint;

    @column({ columnName: 'maxLoanEligibility' })
    public maxLoanEligibility: number;

    @column({ columnName: 'requestedAmount' })
    public requestedAmount: number;

	@column.dateTime({ columnName: 'startLoanDate' })
	public startLoanDate: DateTime;

	@column({ columnName: 'paymentPeriod' })
	public paymentPeriod: number;

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

    @hasOne(() => VehicleLoanProcesses, { foreignKey: 'vehicleLoanId' })
    public vehicleLoanProcesses: HasOne<typeof VehicleLoanProcesses>;
}
