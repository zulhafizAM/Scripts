import { DateTime } from 'luxon';
import {
    column,
    BaseModel,
    belongsTo,
    BelongsTo,
    hasOne,
    HasOne,
    beforeFind,
    scope,
} from '@ioc:Adonis/Lucid/Orm';
import CamelCaseNamingStrategy from 'App/Strategies/CamelCaseNamingStrategy';
import Employee from './Employee';
import Exam from './Exam';
import ExamApplicationProcess from './ExamApplicationProcess';
import { employeePreloads } from 'App/Helpers/preloads';

export default class ExamApplication extends BaseModel {
    public static table = 'examApplications';
    public static primaryKey = 'id';
    public static incrementing = false;

    public static namingStrategy = new CamelCaseNamingStrategy();

    public static withPreloadedList = scope<typeof ExamApplication>((query) => {
        query
            .preload('employee', employeePreloads)
            .preload('exam')
            .preload('examApplicationProcess', (query) =>
                query
                    .preload('verifier', employeePreloads)
                    .preload('comfirmer', employeePreloads)
            );
    });
    
    @column({ isPrimary: true, columnName: 'id', serializeAs: null })
    public id: bigint;
    
    @column({ columnName: 'employeeId', serializeAs: null })
    public employeeId: bigint;
    
    @column({ columnName: 'examId', serializeAs: null })
    public examId: bigint;
    
    @column.dateTime({ columnName: 'applicationDate' })
    public applicationDate: DateTime;
    
    @column({ columnName: 'document' })
    public document: Blob;
    
    @column({ columnName: 'status' })
    public status: Blob;
    
    @column({ columnName: 'remark' })
    public remark: string;
    
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
    
    @belongsTo(() => Employee, {
        foreignKey: 'employeeId',
        onQuery: (query) => {
        query.where('active', true);
        },
    })
    public employee: BelongsTo<typeof Employee>;
    
    @belongsTo(() => Exam, {
        foreignKey: 'examId',
        onQuery: (query) => {
        query.where('active', true);
        },
    })
    public exam: BelongsTo<typeof Exam>;
    
    @hasOne(() => ExamApplicationProcess, {
        foreignKey: 'applicationId',
        onQuery: (query) => {
        query.where('active', true);
        },
    })
    public examApplicationProcess: HasOne<typeof ExamApplicationProcess>;
    
    @beforeFind()
    public static async preloadTables(query) {
        query
            .preload('employee', employeePreloads)
            .preload('exam')
            .preload('examApplicationProcess', (query) =>
                query
                    .preload('verifier', employeePreloads)
                    .preload('comfirmer', employeePreloads)
            );
    }
}