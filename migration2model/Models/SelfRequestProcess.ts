import { DateTime } from 'luxon';
import { column, BaseModel, belongsTo, BelongsTo } from '@ioc:Adonis/Lucid/Orm';
import CamelCaseNamingStrategy from 'App/Strategies/CamelCaseNamingStrategy';
import Employee from './Employee';

export default class SelfRequestProcess extends BaseModel {
    public static table = 'selfRequestProcess';
    public static primaryKey = 'id';
    public static incrementing = false;

    public static namingStrategy = new CamelCaseNamingStrategy();

    @column({ isPrimary: true, columnName: 'id' })
    public id: bigint;

    @column({ columnName: 'directorSupporterId' })
    public directorSupporterId: bigint;

    @column({ columnName: 'directorSupportedStatus' })
    public directorSupportedStatus: string;

    @column({ columnName: 'directorSupportedRemark' })
    public directorSupportedRemark: string;

    @column.dateTime({ columnName: 'directorSupportedDate' })
    public directorSupportedDate: DateTime;

    @column({ columnName: 'appointedSupporterId' })
    public appointedSupporterId: bigint;

    @column({ columnName: 'appointedSupportedStatus' })
    public appointedSupportedStatus: string;

    @column({ columnName: 'appointedSupportedRemark' })
    public appointedSupportedRemark: string;

    @column.dateTime({ columnName: 'appointedSupportedDate' })
    public appointedSupportedDate: DateTime;

    @column({ columnName: 'appointedApproverId' })
    public appointedApproverId: bigint;

    @column({ columnName: 'appointedApprovedStatus' })
    public appointedApprovedStatus: string;

    @column({ columnName: 'appointedApprovedRemark' })
    public appointedApprovedRemark: string;

    @column.dateTime({ columnName: 'appointedApprovedDate' })
    public appointedApprovedDate: DateTime;

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

    @belongsTo(() => Employee, { foreignKey: 'directorSupporterId' })
    public directorSupporter: BelongsTo<typeof Employee>;

    @belongsTo(() => Employee, { foreignKey: 'appointedSupporterId' })
    public appointedSupporter: BelongsTo<typeof Employee>;

    @belongsTo(() => Employee, { foreignKey: 'appointedApproverId' })
    public appointedApprover: BelongsTo<typeof Employee>;
}