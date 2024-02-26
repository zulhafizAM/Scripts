import { BaseModel,belongsTo, BelongsTo } from '@ioc:Adonis/Lucid/Orm';
import Employee from 'App/Models/Employee';
import ApplicationInterim from 'App/Models/ApplicationInterim';

export default class ApplicationInterimProcessRelationship extends BaseModel {
	@belongsTo(() => ApplicationInterim, { foreignKey: 'applicationId' })
    public ApplicationInterimAsapplication: BelongsTo<typeof ApplicationInterim>;

    @belongsTo(() => Employee, { foreignKey: 'supporterId' })
    public EmployeeAssupporter: BelongsTo<typeof Employee>;

    @belongsTo(() => Employee, { foreignKey: 'verifierId' })
    public EmployeeAsverifier: BelongsTo<typeof Employee>;

    @belongsTo(() => Employee, { foreignKey: 'approverId' })
    public EmployeeAsapprover: BelongsTo<typeof Employee>;
    }
