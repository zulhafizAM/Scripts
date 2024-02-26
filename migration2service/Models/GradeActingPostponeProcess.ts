import { DateTime } from 'luxon';
import { column, BaseModel, belongsTo, BelongsTo } from '@ioc:Adonis/Lucid/Orm';
import CamelCaseNamingStrategy from 'App/Strategies/CamelCaseNamingStrategy';
import GradeActingType from './GradeActingType';
import Meeting from './Meeting';
import Placement from './Placement';

export default class GradeActingPostponeProcess extends BaseModel {
    public static table = 'gradeActingPostponeProcess';
    public static primaryKey = 'id';
    public static incrementing = false;

    public static namingStrategy = new CamelCaseNamingStrategy();

    @column({ isPrimary: true, columnName: 'id' })
    public id: bigint;

    @column({ columnName: 'actingId' })
    public actingId: bigint;

    @column({ columnName: 'meetingId' })
    public meetingId: bigint;

    @column({ columnName: 'placementId' })
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

    @belongsTo(() => GradeActingType, { foreignKey: 'actingId' })
    public acting: BelongsTo<typeof GradeActingType>;

    @belongsTo(() => Meeting, { foreignKey: 'meetingId' })
    public meeting: BelongsTo<typeof Meeting>;

    @belongsTo(() => Placement, { foreignKey: 'placementId' })
    public placement: BelongsTo<typeof Placement>;
}
