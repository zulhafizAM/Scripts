import { DateTime } from 'luxon';
import {
    column,
    BaseModel,
    belongsTo,
    BelongsTo,
    beforeFind,
    scope,
} from '@ioc:Adonis/Lucid/Orm';
import CamelCaseNamingStrategy from 'App/Strategies/CamelCaseNamingStrategy';
import ExamApplication from './ExamApplication';
import Employee from './Employee';
import { employeePreloads } from 'App/Helpers/preloads';

export default class ExamApplicationProcess extends BaseModel {
    public static table = 'examApplicationProcess';
    public static primaryKey = 'id';
    public static incrementing = false;

    public static namingStrategy = new CamelCaseNamingStrategy();

    public static withPreloadedList = scope<typeof ExamApplicationProcess>((query) => {
        query
            .preload('applicant')
            .preload('verifier', employeePreloads)
            .preload('comfirmer', employeePreloads);
    });
    
    @column({ isPrimary: true, columnName: 'id', serializeAs: null })
    public id: bigint;
    
    @column({ columnName: 'applicantId', serializeAs: null })
    public applicantId: bigint;
    
    @column({ columnName: 'verifierId', serializeAs: null })
    public verifierId: bigint;
    
    @column({ columnName: 'verifiedStatus' })
    public verifiedStatus: string;
    
    @column({ columnName: 'verifiedRemark' })
    public verifiedRemark: string;
    
    @column.dateTime({ columnName: 'verifiedDate' })
    public verifiedDate: DateTime;
    
    @column({ columnName: 'comfirmerId', serializeAs: null })
    public comfirmerId: bigint;
    
    @column({ columnName: 'comfirmedStatus' })
    public comfirmedStatus: string;
    
    @column({ columnName: 'comfirmedRemark' })
    public comfirmedRemark: string;
    
    @column.dateTime({ columnName: 'comfirmedDate' })
    public comfirmedDate: DateTime;
    
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
    
    @belongsTo(() => ExamApplication, {
        foreignKey: 'applicantId',
        onQuery: (query) => {
        query.where('active', true);
        },
    })
    public applicant: BelongsTo<typeof ExamApplication>;
    
    @belongsTo(() => Employee, {
        foreignKey: 'verifierId',
        onQuery: (query) => {
        query.where('active', true);
        },
    })
    public verifier: BelongsTo<typeof Employee>;
    
    @belongsTo(() => Employee, {
        foreignKey: 'comfirmerId',
        onQuery: (query) => {
        query.where('active', true);
        },
    })
    public comfirmer: BelongsTo<typeof Employee>;
    
    @beforeFind()
    public static async preloadTables(query) {
        query
            .preload('applicant')
            .preload('verifier', employeePreloads)
            .preload('comfirmer', employeePreloads);
    }
}