import { DateTime } from 'luxon';
import {
    column,
    BaseModel,
    belongsTo,
    BelongsTo,
    hasOne,
    HasOne,
} from '@ioc:Adonis/Lucid/Orm';
import CamelCaseNamingStrategy from 'App/Strategies/CamelCaseNamingStrategy';
import ExamsType from './ExamsType';
import ExamApplication from './ExamApplication';

export default class Exam extends BaseModel {
    public static table = 'exams';
    public static primaryKey = 'id';
    public static incrementing = false;

    public static namingStrategy = new CamelCaseNamingStrategy();

    @column({ isPrimary: true, columnName: 'id', serializeAs: null })
    public id: bigint;

    @column({ columnName: 'examTypeId', serializeAs: null })
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

    @column({ columnName: 'active', serializeAs: null })
    public active: boolean;

    @column({ columnName: 'createdBy', serializeAs: null })
    public createdBy: string;

    @column.dateTime({
        columnName: 'createdAt',
        autoCreate: true,
        serializeAs: null,
    })
    public createdAt: DateTime;

    @column({ columnName: 'modifiedBy', serializeAs: null })
    public modifiedBy: string;

    @column.dateTime({
        columnName: 'modifiedAt',
        autoCreate: true,
        autoUpdate: true,
        serializeAs: null,
    })
    public modifiedAt: DateTime;

    @belongsTo(() => ExamsType, {
        foreignKey: 'examTypeId',
        onQuery: (query) => {
            query.where('active', true);
        },
    })
    public examType: BelongsTo<typeof ExamsType>;

    @hasOne(() => ExamApplication, {
        foreignKey: 'examId',
        onQuery: (query) => {
            query.where('active', true);
        },
    })
    public examApplication: HasOne<typeof ExamApplication>;
}
