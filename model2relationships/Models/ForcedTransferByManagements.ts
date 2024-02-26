import { DateTime } from 'luxon';
import {
    column,
    BaseModel,
    belongsTo,
    BelongsTo,
    hasOne,
    HasOne,
    scope,
} from '@ioc:Adonis/Lucid/Orm';
import CamelCaseNamingStrategy from 'App/Strategies/CamelCaseNamingStrategy';
import Employee from './Employee';
import Placement from './Placement';
import ForcedByManagementProcess from './ForcedByManagementProcess';
import ForcedByManagementPostponeProcesses from './ForcedByManagementPostponeProcesses';

export default class ForceTransferByManagement extends BaseModel {
    public static table = 'forcedTransferByManagements';
    public static primaryKey = 'id';
    public static incrementing = false;

    public static namingStrategy = new CamelCaseNamingStrategy();

    public static withPreloadedList = scope<typeof ForceTransferByManagement>(
        (query) => {
            query.preload('newPlacement');
        },
    );

    @column({ isPrimary: true, columnName: 'id', serializeAs: null })
    public id: bigint;

    @column({ columnName: 'employeeId', serializeAs: null })
    public employeeId: bigint;

    @column({ columnName: 'newPlacementId', serializeAs: null })
    public newPlacementId: bigint;

    @column({ columnName: 'isPostpone' })
    public isPostpone: boolean;

    @column({ columnName: 'reason' })
    public reason: string;

    @column.dateTime({ columnName: 'transferDate' })
    public transferDate: DateTime;

    @column.dateTime({ columnName: 'startDate' })
    public startDate: DateTime;

    @column({ columnName: 'status' })
    public status: string;

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

    @belongsTo(() => Placement, {
        foreignKey: 'newPlacementId',
        onQuery: (query) => {
            query.where('active', true);
        },
    })
    public newPlacement: BelongsTo<typeof Placement>;

    @hasOne(() => ForcedByManagementProcess, {
        foreignKey: 'forceId',
        onQuery: (query) => {
            query.where('active', true);
        },
    })
    public forcedByManagementProcess: HasOne<typeof ForcedByManagementProcess>;

    @hasOne(() => ForcedByManagementPostponeProcesses, {
        foreignKey: 'forceId',
    })
    public forcedByManagementPostponeProcesses: HasOne<
        typeof ForcedByManagementPostponeProcesses
    >;
}
