import { BaseModel, belongsTo, BelongsTo } from '@ioc:Adonis/Lucid/Orm';
import Employee from 'App/Models/Employee';
import ExamApplication from 'App/Models/ExamApplication';

export class examApplicationProcessRelationship extends BaseModel{
    @belongsTo(() => ExamApplication, { foreignKey: 'applicationId' })
    public ExamApplicationAsapplication: BelongsTo<typeof ExamApplication>;

    @belongsTo(() => Employee, { foreignKey: 'verifierId' })
    public EmployeeAsverifier: BelongsTo<typeof Employee>;

    @belongsTo(() => Employee, { foreignKey: 'confirmerId' })
    public EmployeeAsconfirmer: BelongsTo<typeof Employee>;
}