import { BaseModel, hasMany, HasMany, belongsTo,BelongsTo } from '@ioc:Adonis/Lucid/Orm';
import Allowance from 'App/Models/Allowance';
import AllowanceType from 'App/Models/AllowanceType';
import CargoShippingReimbursement from 'App/Models/CargoShippingReimbursement';
import ClothingAssistance from 'App/Models/ClothingAssistance';
import EmployeeWelfareFund from 'App/Models/EmployeeWelfareFund';
import FuneralArrangementRequest from 'App/Models/FuneralArrangementRequest';
import HouseMovingAllowance from 'App/Models/HouseMovingAllowance';
import PassportPaymentClaim from 'App/Models/PassportPaymentClaim';
import PersonalTravelInsuranceClaim from 'App/Models/PersonalTravelInsuranceClaim';
import StateVisitAllowance from 'App/Models/StateVisitAllowance';

export default class ServiceAllowanceRelationship extends BaseModel {
    @hasMany(() => ClothingAssistance, { foreignKey: 'allowanceId' })
    public ClothingAssistanceAsallowance: HasMany<typeof ClothingAssistance>;

    @hasMany(() => StateVisitAllowance, { foreignKey: 'allowanceId' })
    public StateVisitAllowanceAsallowance: HasMany<typeof StateVisitAllowance>;

    @hasMany(() => FuneralArrangementRequest, { foreignKey: 'allowanceId' })
    public FuneralArrangementRequestAsallowance: HasMany<typeof FuneralArrangementRequest>;

    @hasMany(() => EmployeeWelfareFund, { foreignKey: 'allowanceId' })
    public EmployeeWelfareFundAsallowance: HasMany<typeof EmployeeWelfareFund>;

    @hasMany(() => HouseMovingAllowance, { foreignKey: 'allowanceId' })
    public HousingMovingAllowancesAsallowance: HasMany<typeof HouseMovingAllowance>;

    @hasMany(() => PassportPaymentClaim, { foreignKey: 'allowanceId' })
    public PassportPaymentClaimAsallowance: HasMany<typeof PassportPaymentClaim>;

    @hasMany(() => PersonalTravelInsuranceClaim, { foreignKey: 'allowanceId' })
    public PersonalTravelInsuranceClaimsAsallowance: HasMany<typeof PersonalTravelInsuranceClaim>;

    @hasMany(() => CargoShippingReimbursement, { foreignKey: 'allowanceId' })
    public CargoShippingReimbursementsAsallowance: HasMany<typeof CargoShippingReimbursement>;

    @belongsTo(() => Allowance, { foreignKey: 'allowanceId' })
    public AllowanceAsallowance: BelongsTo<typeof Allowance>;

    @belongsTo(() => AllowanceType, { foreignKey: 'allowanceTypeId' })
    public AlllowanceTypesAsallowanceType: BelongsTo<typeof AllowanceType>;
}
