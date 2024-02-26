import { BaseModel, belongsTo, BelongsTo } from '@ioc:Adonis/Lucid/Orm';
import Employee from 'App/Models/Employee';
import ForceTransferByManagement from 'App/Models/ForceTransferByManagement';

export default class ForcedByManagementProcessRelationship extends BaseModel {
	@belongsTo(() => ForceTransferByManagement, { foreignKey: 'forceId' })
    public ForceTransferByManagementAsforce: BelongsTo<typeof ForceTransferByManagement>;

    @belongsTo(() => Employee, { foreignKey: 'supporterId' })
    public EmployeeAssupporter: BelongsTo<typeof Employee>;

    @belongsTo(() => Employee, { foreignKey: 'approverId' })
    public EmployeeAsapprover: BelongsTo<typeof Employee>;
    }
