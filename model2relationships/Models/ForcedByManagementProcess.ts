import { DateTime } from 'luxon';
import { column, BaseModel, belongsTo, BelongsTo } from '@ioc:Adonis/Lucid/Orm';
import CamelCaseNamingStrategy from 'App/Strategies/CamelCaseNamingStrategy';
import ForceTransferByManagement from './ForcedTransferByManagements';
import Employee from './Employee';

export default class ForcedByManagementProcess extends BaseModel {
    public static table = 'forcedByManagementProcess';
    public static primaryKey = 'id';
    public static incrementing = false;

    public static namingStrategy = new CamelCaseNamingStrategy();

    @column({ isPrimary: true, columnName: 'id', serializeAs: null })
    public id: bigint;

    @column({ columnName: 'forceId', serializeAs: null })
    public forceId: bigint;

    @column({ columnName: 'supporterId', serializeAs: null })
    public supporterId: bigint;

    @column({ columnName: 'supportedStatus' })
    public supportedStatus: string;

    @column({ columnName: 'supportedRemark' })
    public supportedRemark: string;

    @column.dateTime({ columnName: 'supportedDate' })
    public supportedDate: DateTime;

    @column({ columnName: 'approverId', serializeAs: null })
    public approverId: bigint;

    @column({ columnName: 'approvedStatus' })
    public approvedStatus: string;

    @column({ columnName: 'approvedRemark' })
    public approvedRemark: string;

    @column.dateTime({ columnName: 'approvedDate' })
    public approvedDate: DateTime;

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

    @belongsTo(() => ForceTransferByManagement, {
        foreignKey: 'forceId',
        onQuery: (query) => {
            query.where('active', true);
        },
    })
    public force: BelongsTo<typeof ForceTransferByManagement>;

    @belongsTo(() => Employee, {
        foreignKey: 'supporterId',
        onQuery: (query) => {
            query.where('active', true);
        },
    })
    public supporter: BelongsTo<typeof Employee>;

    @belongsTo(() => Employee, {
        foreignKey: 'approverId',
        onQuery: (query) => {
            query.where('active', true);
        },
    })
    public approver: BelongsTo<typeof Employee>;
}
