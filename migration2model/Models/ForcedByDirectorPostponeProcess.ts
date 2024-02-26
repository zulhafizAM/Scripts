import { DateTime } from 'luxon';
import { column, BaseModel, belongsTo, BelongsTo } from '@ioc:Adonis/Lucid/Orm';
import CamelCaseNamingStrategy from 'App/Strategies/CamelCaseNamingStrategy';
import ForceTransferByDirector from './ForceTransferByDirector';
import Employee from './Employee';

export default class ForcedByDirectorPostponeProcess extends BaseModel {
    public static table = 'forcedByDirectorPostponeProcess';
    public static primaryKey = 'id';
    public static incrementing = false;

    public static namingStrategy = new CamelCaseNamingStrategy();

    @column({ isPrimary: true, columnName: 'id' })
    public id: bigint;

    @column({ columnName: 'forceId' })
    public forceId: bigint;

    @column.dateTime({ columnName: 'newTransferDate' })
    public newTransferDate: DateTime;

    @column({ columnName: 'postponeReason' })
    public postponeReason: string;

    @column({ columnName: 'document' })
    public document: Blob;

    @column({ columnName: 'approverId' })
    public approverId: bigint;

    @column({ columnName: 'approvedStatus' })
    public approvedStatus: string;

    @column({ columnName: 'approvedRemark' })
    public approvedRemark: string;

    @column.dateTime({ columnName: 'approvedDate' })
    public approvedDate: DateTime;

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

    @belongsTo(() => ForceTransferByDirector, { foreignKey: 'forceId' })
    public force: BelongsTo<typeof ForceTransferByDirector>;

    @belongsTo(() => Employee, { foreignKey: 'approverId' })
    public approver: BelongsTo<typeof Employee>;
}