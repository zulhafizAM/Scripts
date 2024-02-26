import { BaseModel,belongsTo, BelongsTo } from '@ioc:Adonis/Lucid/Orm';
import Employee from 'App/Models/Employee';
import ReplacementAnnualLeave from 'App/Models/ReplacementAnnualLeave';

export default class ReplacementAnnualLeaveProcessRelationship extends BaseModel {
    @belongsTo(() => ReplacementAnnualLeave, { foreignKey: 'leaveId' })
    public AlternateUntrackedLeaveAsleave: BelongsTo<typeof ReplacementAnnualLeave>;

    @belongsTo(() => Employee, { foreignKey: 'directorSupporterId' })
    public EmployeeAsdirectorSupporter: BelongsTo<typeof Employee>;

    @belongsTo(() => Employee, { foreignKey: 'certifierId' })
    public EmployeeAsCerfier: BelongsTo<typeof Employee>;

    @belongsTo(() => Employee, { foreignKey: 'appointedSupporterId' })
    public EmployeeAsappointedSupporter: BelongsTo<typeof Employee>;

    @belongsTo(() => Employee, { foreignKey: 'approverId' })
    public EmployeeAsapprover: BelongsTo<typeof Employee>;
}
