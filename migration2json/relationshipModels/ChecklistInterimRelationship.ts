import { BaseModel, belongsTo,BelongsTo } from '@ioc:Adonis/Lucid/Orm';
import Employee from 'App/Models/Employee';
import EmploymentInterim from 'App/Models/EmploymentInterim';

export default class ChecklistInterimRelationship extends BaseModel {
    @belongsTo(() => EmploymentInterim, { foreignKey: 'applicationId' })
    public EmploymentInterimAsapplication: BelongsTo<typeof EmploymentInterim>;

    @belongsTo(() => Employee, { foreignKey: 'prepareId' })
    public EmployeeAsprepare: BelongsTo<typeof Employee>;

    @belongsTo(() => Employee, { foreignKey: 'checkerId' })
    public EmployeeAschecker: BelongsTo<typeof Employee>;
}
