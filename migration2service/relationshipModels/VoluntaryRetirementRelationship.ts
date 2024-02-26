import { BaseModel, hasOne, HasOne, belongsTo, BelongsTo } from '@ioc:Adonis/Lucid/Orm';
import Employee from 'App/Models/Employee';
import VoluntaryRetirementProcess from 'App/Models/VoluntaryRetirementProcess';

export default class VoluntaryRetirementRelationship extends BaseModel {
	@hasOne(() => VoluntaryRetirementProcess, { foreignKey: 'voluntaryId' })
    public VoluntaryRetirementProcessAsvoluntary: HasOne<typeof VoluntaryRetirementProcess>;

    @belongsTo(() => Employee, { foreignKey: 'employeeId' })
    public EmployeeAsemployee: BelongsTo<typeof Employee>;

}
