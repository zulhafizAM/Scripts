import { DateTime } from 'luxon';
import {
    column,
    BaseModel,
    belongsTo,
    BelongsTo,
    hasMany,
    HasMany,
} from '@ioc:Adonis/Lucid/Orm';
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

    @column({ isPrimary: true, columnName: 'id', serializeAs: null })
    public id: bigint;

    @column({ columnName: 'allowanceId', serializeAs: null })
    public allowanceId: bigint;

    @column({ columnName: 'allowanceTypeId', serializeAs: null })
    public allowanceTypeId: bigint;

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

    @belongsTo(() => Allowance, {
        foreignKey: 'allowanceId',
        onQuery: (query) => {
            query.where('active', true);
        },
    })
    public allowance: BelongsTo<typeof Allowance>;

    @belongsTo(() => AllowanceType, {
        foreignKey: 'allowanceTypeId',
        onQuery: (query) => {
            query.where('active', true);
        },
    })
    public allowanceType: BelongsTo<typeof AllowanceType>;

    @hasMany(() => ClothingAssistance, {
        foreignKey: 'allowanceId',
        onQuery: (query) => {
            query.where('active', true);
        },
    })
    public clothingAssistances: HasMany<typeof ClothingAssistance>;

    @hasMany(() => StateVisitAllowance, {
        foreignKey: 'allowanceId',
        onQuery: (query) => {
            query.where('active', true);
        },
    })
    public stateVisitAllowances: HasMany<typeof StateVisitAllowance>;

    @hasMany(() => FuneralArrangementRequest, {
        foreignKey: 'allowanceId',
        onQuery: (query) => {
            query.where('active', true);
        },
    })
    public funeralArrangementRequests: HasMany<
        typeof FuneralArrangementRequest
    >;

    @hasMany(() => EmployeeWelfareFund, {
        foreignKey: 'allowanceId',
        onQuery: (query) => {
            query.where('active', true);
        },
    })
    public employeeWelfareFunds: HasMany<typeof EmployeeWelfareFund>;

    @hasMany(() => HouseMovingAllowance, {
        foreignKey: 'allowanceId',
        onQuery: (query) => {
            query.where('active', true);
        },
    })
    public houseMovingAllowances: HasMany<typeof HouseMovingAllowance>;

    @hasMany(() => PassportPaymentClaim, {
        foreignKey: 'allowanceId',
        onQuery: (query) => {
            query.where('active', true);
        },
    })
    public passportPaymentClaims: HasMany<typeof PassportPaymentClaim>;

    @hasMany(() => PersonalTravelInsuranceClaim, {
        foreignKey: 'allowanceId',
        onQuery: (query) => {
            query.where('active', true);
        },
    })
    public personalTravelInsuranceClaims: HasMany<
        typeof PersonalTravelInsuranceClaim
    >;

    @hasMany(() => CargoShippingReimbursement, {
        foreignKey: 'allowanceId',
        onQuery: (query) => {
            query.where('active', true);
        },
    })
    public cargoShippingReimbursements: HasMany<
        typeof CargoShippingReimbursement
    >;
}
