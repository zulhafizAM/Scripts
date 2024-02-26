import { BaseModel, belongsTo, BelongsTo } from '@ioc:Adonis/Lucid/Orm';
import Employee from 'App/Models/Employee';
import RetirementType from 'App/Models/RetirementType';
import UnspecifiedRetirementGroup from 'App/Models/UnspecifiedRetirementGroup';

export default class UnspecifiedRetirementRelationship extends BaseModel {
	@belongsTo(() => Employee, { foreignKey: 'employeeId' })
    public EmployeeAsemployee: BelongsTo<typeof Employee>;

    @belongsTo(() => Employee, { foreignKey: 'confirmerId' })
    public EmployeeAsconfirmer: BelongsTo<typeof Employee>;

    @belongsTo(() => RetirementType, { foreignKey: 'retirementTypeId' })
    public RetirementTypeAsretirementType: BelongsTo<typeof RetirementType>;

    @belongsTo(() => UnspecifiedRetirementGroup, { foreignKey: 'groupId' })
    public UnspecifiedRetirementGroupsAsgroup: BelongsTo<typeof UnspecifiedRetirementGroup>;

}
