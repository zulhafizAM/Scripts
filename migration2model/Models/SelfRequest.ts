import { DateTime } from 'luxon';
import { column, BaseModel, belongsTo, BelongsTo, hasOne, HasOne } from '@ioc:Adonis/Lucid/Orm';
import CamelCaseNamingStrategy from 'App/Strategies/CamelCaseNamingStrategy';
import Employee from './Employee';
import Meeting from './Meeting';
import Placement from './Placement';
import Placement from './Placement';
import SelfRequestProcess from './SelfRequestProcess';
import SelfRequestPostponeProcess from './SelfRequestPostponeProcess';

export default class SelfRequest extends BaseModel {
    public static table = 'selfRequests';
    public static primaryKey = 'id';
    public static incrementing = false;

    public static namingStrategy = new CamelCaseNamingStrategy();

    @column({ isPrimary: true, columnName: 'id' })
    public id: bigint;

    @column({ columnName: 'employeeId' })
    public employeeId: bigint;

    @column({ columnName: 'meetingId' })
    public meetingId: bigint;

    @column({ columnName: 'firstChoicePlacementId' })
    public firstChoicePlacementId: bigint;

    @column({ columnName: 'secondChoicePlacementId' })
    public secondChoicePlacementId: bigint;

    @column.dateTime({ columnName: 'applicationDate' })
    public applicationDate: DateTime;

    @column({ columnName: 'isPostpone' })
    public isPostpone: boolean;

    @column({ columnName: 'reason' })
    public reason: string;

    @column({ columnName: 'reasonRemark' })
    public reasonRemark: string;

    @column({ columnName: 'distanceFromWork' })
    public distanceFromWork: number;

    @column({ columnName: 'employerName' })
    public employerName: string;

    @column.dateTime({ columnName: 'startServiceDate' })
    public startServiceDate: DateTime;

    @column({ columnName: 'meetingResult' })
    public meetingResult: string;

    @column({ columnName: 'meetingRemark' })
    public meetingRemark: string;

    @column({ columnName: 'status' })
    public status: string;

    @column({ columnName: 'remark' })
    public remark: string;

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

    @belongsTo(() => Employee, { foreignKey: 'employeeId' })
    public employee: BelongsTo<typeof Employee>;

    @belongsTo(() => Meeting, { foreignKey: 'meetingId' })
    public meeting: BelongsTo<typeof Meeting>;

    @belongsTo(() => Placement, { foreignKey: 'firstChoicePlacementId' })
    public firstChoicePlacement: BelongsTo<typeof Placement>;

    @belongsTo(() => Placement, { foreignKey: 'secondChoicePlacementId' })
    public secondChoicePlacement: BelongsTo<typeof Placement>;

    @hasOne(() => SelfRequestProcess, { foreignKey: 'selfRequestId' })
    public selfRequestProcess: HasOne<typeof SelfRequestProcess>;

    @hasOne(() => SelfRequestPostponeProcess, { foreignKey: 'selfRequestId' })
    public selfRequestPostponeProcess: HasOne<typeof SelfRequestPostponeProcess>;
}