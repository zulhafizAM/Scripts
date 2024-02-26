import { BaseModel,belongsTo, BelongsTo } from '@ioc:Adonis/Lucid/Orm';
import Employee from 'App/Models/Employee';
import PersonalTravelInsuranceClaim from 'App/Models/PersonalTravelInsuranceClaim';

export default class PersonalInsuranceProcessRelationship extends BaseModel {
    @belongsTo(() => PersonalTravelInsuranceClaim, { foreignKey: 'insuranceId' })
    public PersonalTravelInsuranceClaimAsinsurance: BelongsTo<typeof PersonalTravelInsuranceClaim>;

    @belongsTo(() => Employee, { foreignKey: 'verifierId' })
    public EmployeeAsverifier: BelongsTo<typeof Employee>;

    @belongsTo(() => Employee, { foreignKey: 'supporterId' })
    public EmployeeAssupporter: BelongsTo<typeof Employee>;

    @belongsTo(() => Employee, { foreignKey: 'approverId' })
    public EmployeeAsapprover: BelongsTo<typeof Employee>;
}
