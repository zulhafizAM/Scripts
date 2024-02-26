import { BaseModel ,hasOne, HasOne, belongsTo, BelongsTo} from '@ioc:Adonis/Lucid/Orm';
import ExamApplication from 'App/Models/ExamApplication';
import ExamsType from 'App/Models/ExamsType';

export class examRelationship extends BaseModel{
    @hasOne(() => ExamApplication, { foreignKey: 'examId' })
    public ExamApplicationAsexam: HasOne<typeof ExamApplication>;

    @belongsTo(() => ExamsType, { foreignKey: 'examTypeId' })
    public ExamTypesAsexamType: BelongsTo<typeof ExamsType>;    
}