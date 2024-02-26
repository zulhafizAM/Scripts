import { BaseModel, hasOne, HasOne, belongsTo, BelongsTo } from '@ioc:Adonis/Lucid/Orm';
import Employee from 'App/Models/Employee';
import Exam from 'App/Models/Exam';
import ExamApplicationProcess from 'App/Models/ExamApplicationProcess';

export class examApplicationRelationship extends BaseModel{
    @hasOne(() => ExamApplicationProcess, { foreignKey: 'applicationId' })
    public examApplicationProcessAsapplication: HasOne<typeof ExamApplicationProcess>;

    @belongsTo(() => Employee, { foreignKey: 'employeeId' })
    public EmployeeAsemployee: BelongsTo<typeof Employee>;

    @belongsTo(() => Exam, { foreignKey: 'examId' })
    public ExamAsexam: BelongsTo<typeof Exam>;
}