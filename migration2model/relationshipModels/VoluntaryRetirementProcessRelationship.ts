import { BaseModel, belongsTo, BelongsTo } from '@ioc:Adonis/Lucid/Orm';
import Employee from 'App/Models/Employee';
import VoluntaryRetirement from 'App/Models/VoluntaryRetirement';

export default class VoluntaryRetirementProcessRelationship extends BaseModel {
    @belongsTo(() => VoluntaryRetirement, { foreignKey: 'voluntaryId' })
    public VoluntaryRetirementAsvoluntary: BelongsTo<typeof VoluntaryRetirement>;

    @belongsTo(() => Employee, { foreignKey: 'certifierId' })
    public EmployeeAscertifier: BelongsTo<typeof Employee>;

    @belongsTo(() => Employee, { foreignKey: 'confirmerId' })
    public EmployeeAsconfirmer: BelongsTo<typeof Employee>;

    @belongsTo(() => Employee, { foreignKey: 'supporter1Id' })
    public EmployeeAssupporter1: BelongsTo<typeof Employee>;

    @belongsTo(() => Employee, { foreignKey: 'supporter2Id' })
    public EmployeeAssupporter2: BelongsTo<typeof Employee>;

    @belongsTo(() => Employee, { foreignKey: 'appointedApproverId' })
    public EmployeeAsappointedApprover: BelongsTo<typeof Employee>;

    @belongsTo(() => Employee, { foreignKey: 'secretaryApproverId' })
    public EmployeeAssecretaryApprover: BelongsTo<typeof Employee>;

    @belongsTo(() => Employee, { foreignKey: 'secretaryCertifierId' })
    public EmployeeAssecretaryCertifier: BelongsTo<typeof Employee>;
}
