import { DateTime } from 'luxon';
import { column, BaseModel, belongsTo, BelongsTo, hasOne, HasOne } from '@ioc:Adonis/Lucid/Orm';
import CamelCaseNamingStrategy from 'App/Strategies/CamelCaseNamingStrategy';
import Employee from './Employee';
import Meeting from './Meeting';
import Placement from './Placement';
import ForcedByDirectorPostponeProcess from './ForcedByDirectorPostponeProcess';
import ForcedByDirectorProcess from './ForcedByDirectorProcess';

export default class ForceTransferByDirector extends BaseModel {
    public static table = 'forceTransferByDirectors';
    public static primaryKey = 'id';
    public static incrementing = false;

    public static namingStrategy = new CamelCaseNamingStrategy();

    @column({ isPrimary: true, columnName: 'id' })
    public id: bigint;

    @column({ columnName: 'employeeId' })
    public employeeId: bigint;

    @column({ columnName: 'meetingId' })
    public meetingId: bigint;

    @column({ columnName: 'newPlacementId' })
    public newPlacementId: bigint;

    @column({ columnName: 'isPostpone' })
    public isPostpone: boolean;

    @column({ columnName: 'reason' })
    public reason: string;

    @column.dateTime({ columnName: 'transferDate' })
    public transferDate: DateTime;

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

    @belongsTo(() => Placement, { foreignKey: 'newPlacementId' })
    public newPlacement: BelongsTo<typeof Placement>;

    @hasOne(() => ForcedByDirectorPostponeProcess, { foreignKey: 'forceId' })
    public forcedByDirectorPostponeProcess: HasOne<typeof ForcedByDirectorPostponeProcess>;

    @hasOne(() => ForcedByDirectorProcess, { foreignKey: 'forceId' })
    public forcedByDirectorProcess: HasOne<typeof ForcedByDirectorProcess>;
}