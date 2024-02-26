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
import GradeActingType from './GradeActingType';
import Meeting from './Meeting';
import Placement from './Placement';

export default class GradeActingPostponeProcess extends BaseModel {
    public static table = 'gradeActingPostponeProcess';
    public static primaryKey = 'id';
    public static incrementing = false;

    public static namingStrategy = new CamelCaseNamingStrategy();

    public static withPreloadedList = scope<typeof GradeActingPostponeProcess>((query) => {
        query
            .preload('acting')
            .preload('meeting')
            .preload('placement');
    });
    
    @column({ isPrimary: true, columnName: 'id', serializeAs: null })
    public id: bigint;
    
    @column({ columnName: 'actingId', serializeAs: null })
    public actingId: bigint;
    
    @column({ columnName: 'meetingId', serializeAs: null })
    public meetingId: bigint;
    
    @column({ columnName: 'placementId', serializeAs: null })
    public placementId: bigint;
    
    @column.dateTime({ columnName: 'newReportDutyDate' })
    public newReportDutyDate: DateTime;
    
    @column({ columnName: 'postponeReason' })
    public postponeReason: string;
    
    @column({ columnName: 'document' })
    public document: Blob;
    
    @column({ columnName: 'meetingResult' })
    public meetingResult: string;
    
    @column({ columnName: 'meetingRemark' })
    public meetingRemark: string;
    
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
    
    @belongsTo(() => GradeActingType, {
        foreignKey: 'actingId',
        onQuery: (query) => {
        query.where('active', true);
        },
    })
    public acting: BelongsTo<typeof GradeActingType>;
    
    @belongsTo(() => Meeting, {
        foreignKey: 'meetingId',
        onQuery: (query) => {
        query.where('active', true);
        },
    })
    public meeting: BelongsTo<typeof Meeting>;
    
    @belongsTo(() => Placement, {
        foreignKey: 'placementId',
        onQuery: (query) => {
        query.where('active', true);
        },
    })
    public placement: BelongsTo<typeof Placement>;
    
    @beforeFind()
    public static async preloadTables(query) {
        query
            .preload('acting')
            .preload('meeting')
            .preload('placement');
    }
}