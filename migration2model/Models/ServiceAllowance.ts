import { DateTime } from 'luxon';
import { column, BaseModel, belongsTo, BelongsTo, hasMany, HasMany } from '@ioc:Adonis/Lucid/Orm';
import CamelCaseNamingStrategy from 'App/Strategies/CamelCaseNamingStrategy';
import Allowance from './Allowance';
import AllowanceType from './AllowanceType';
import ClothingAssistance from './ClothingAssistance';
import StateVisitAllowance from './StateVisitAllowance';
import FuneralArrangementRequest from './FuneralArrangementRequest';
import EmployeeWelfareFund from './EmployeeWelfareFund';
import HouseMovingAllowance from './HouseMovingAllowance';
import PassportPaymentClaim from './PassportPaymentClaim';
import PersonalTravelInsuranceClaim from './PersonalTravelInsuranceClaim';
import CargoShippingReimbursement from './CargoShippingReimbursement';

export default class ServiceAllowance extends BaseModel {
    public static table = 'serviceAllowances';
    public static primaryKey = 'id';
    public static incrementing = false;

    public static namingStrategy = new CamelCaseNamingStrategy();

    @column({ isPrimary: true, columnName: 'id' })
    public id: bigint;

    @column({ columnName: 'allowanceId' })
    public allowanceId: bigint;

    @column({ columnName: 'allowanceTypeId' })
    public allowanceTypeId: bigint;

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

    @belongsTo(() => Allowance, { foreignKey: 'allowanceId' })
    public allowance: BelongsTo<typeof Allowance>;

    @belongsTo(() => AllowanceType, { foreignKey: 'allowanceTypeId' })
    public allowanceType: BelongsTo<typeof AllowanceType>;

    @hasMany(() => ClothingAssistance, { foreignKey: 'allowanceId' })
    public clothingAssistances: HasMany<typeof ClothingAssistance>;

    @hasMany(() => StateVisitAllowance, { foreignKey: 'allowanceId' })
    public stateVisitAllowances: HasMany<typeof StateVisitAllowance>;

    @hasMany(() => FuneralArrangementRequest, { foreignKey: 'allowanceId' })
    public funeralArrangementRequests: HasMany<typeof FuneralArrangementRequest>;

    @hasMany(() => EmployeeWelfareFund, { foreignKey: 'allowanceId' })
    public employeeWelfareFunds: HasMany<typeof EmployeeWelfareFund>;

    @hasMany(() => HouseMovingAllowance, { foreignKey: 'allowanceId' })
    public houseMovingAllowances: HasMany<typeof HouseMovingAllowance>;

    @hasMany(() => PassportPaymentClaim, { foreignKey: 'allowanceId' })
    public passportPaymentClaims: HasMany<typeof PassportPaymentClaim>;

    @hasMany(() => PersonalTravelInsuranceClaim, { foreignKey: 'allowanceId' })
    public personalTravelInsuranceClaims: HasMany<typeof PersonalTravelInsuranceClaim>;

    @hasMany(() => CargoShippingReimbursement, { foreignKey: 'allowanceId' })
    public cargoShippingReimbursements: HasMany<typeof CargoShippingReimbursement>;
}