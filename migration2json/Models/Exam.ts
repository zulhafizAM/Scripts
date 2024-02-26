import { DateTime } from 'luxon';
import { column, BaseModel, belongsTo, BelongsTo, hasOne, HasOne } from '@ioc:Adonis/Lucid/Orm';
import CamelCaseNamingStrategy from 'App/Strategies/CamelCaseNamingStrategy';
import ExamsType from './ExamsType';
import ExamApplication from './ExamApplication';

export default class Exam extends BaseModel {
    public static table = 'exams';
    public static primaryKey = 'id';
    public static incrementing = false;

    public static namingStrategy = new CamelCaseNamingStrategy();

    @column({ isPrimary: true, columnName: 'id' })
    public id: bigint;

    @column({ columnName: 'examTypeId' })
    public examTypeId: bigint;

    @column({ columnName: 'title' })
    public title: string;

    @column.dateTime({ columnName: 'startDate' })
    public startDate: DateTime;

    @column.dateTime({ columnName: 'endDate' })
    public endDate: DateTime;

    @column.dateTime({ columnName: 'examDate' })
    public examDate: DateTime;

    @column({ columnName: 'examLocation' })
    public examLocation: string;

    @column({ columnName: 'active' })
    public active: boolean;

    @column({ columnName: 'createdBy' })
    public createdBy: string;

    @column.dateTime({ columnName: 'createdAt', autoCreate: true })
    public createdAt: DateTime;

    @column({ columnName: 'modifiedBy' })
    public modifiedBy: string;

    @column.dateTime({
        columnName: 'modifiedAt',
        autoCreate: true,
        autoUpdate: true,

    })
    public modifiedAt: DateTime;

    @belongsTo(() => ExamsType, { foreignKey: 'examTypeId' })
    public examType: BelongsTo<typeof ExamsType>;

    @hasOne(() => ExamApplication, { foreignKey: 'examId' })
    public examApplication: HasOne<typeof ExamApplication>;
}