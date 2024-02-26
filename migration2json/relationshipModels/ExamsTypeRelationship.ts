import { BaseModel, hasMany, HasMany } from '@ioc:Adonis/Lucid/Orm';
import Exam from 'App/Models/Exam';


export class examTypeRelationship extends BaseModel{
    @hasMany(() => Exam, { foreignKey: 'examTypeId' })
    public ExamAsexamType: HasMany<typeof Exam>;

}