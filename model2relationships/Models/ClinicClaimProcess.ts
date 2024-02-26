import { DateTime } from 'luxon';
import { column, BaseModel, belongsTo, BelongsTo } from '@ioc:Adonis/Lucid/Orm';
import CamelCaseNamingStrategy from 'App/Strategies/CamelCaseNamingStrategy';
import ClinicClaim from './ClinicClaim';
import Employee from './Employee';

export default class ClinicClaimProcess extends BaseModel {
    public static table = 'clinicClaimProcess';
    public static primaryKey = 'id';
    public static incrementing = false;

    public static namingStrategy = new CamelCaseNamingStrategy();

    @column({ isPrimary: true, columnName: 'id', serializeAs: null })
    public id: bigint;

    @column({ columnName: 'claimId', serializeAs: null })
    public claimId: bigint;

    @column({ columnName: 'secretaryApproverId', serializeAs: null })
    public secretaryApproverId: bigint;

    @column({ columnName: 'secretaryApprovedStatus' })
    public secretaryApprovedStatus: string;

    @column({ columnName: 'secretaryApprovedRemark' })
    public secretaryApprovedRemark: string;

    @column.dateTime({ columnName: 'secretaryApprovedDate' })
    public secretaryApprovedDate: DateTime;

    @column({ columnName: 'supporterId', serializeAs: null })
    public supporterId: bigint;

    @column({ columnName: 'supportedStatus' })
    public supportedStatus: string;

    @column({ columnName: 'supportedRemark' })
    public supportedRemark: string;

    @column.dateTime({ columnName: 'supportedDate' })
    public supportedDate: DateTime;

    @column({ columnName: 'appointedApproverId', serializeAs: null })
    public appointedApproverId: bigint;

    @column({ columnName: 'appointedApprovedStatus' })
    public appointedApprovedStatus: string;

    @column({ columnName: 'appointedApprovedRemark' })
    public appointedApprovedRemark: string;

    @column.dateTime({ columnName: 'appointedApprovedDate' })
    public appointedApprovedDate: DateTime;

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

    @belongsTo(() => ClinicClaim, {
        foreignKey: 'claimId',
        onQuery: (query) => {
            query.where('active', true);
        },
    })
    public claim: BelongsTo<typeof ClinicClaim>;

    @belongsTo(() => Employee, {
        foreignKey: 'secretaryApproverId',
        onQuery: (query) => {
            query.where('active', true);
        },
    })
    public secretaryApprover: BelongsTo<typeof Employee>;

    @belongsTo(() => Employee, {
        foreignKey: 'supporterId',
        onQuery: (query) => {
            query.where('active', true);
        },
    })
    public supporter: BelongsTo<typeof Employee>;

    @belongsTo(() => Employee, {
        foreignKey: 'appointedApproverId',
        onQuery: (query) => {
            query.where('active', true);
        },
    })
    public appointedApprover: BelongsTo<typeof Employee>;
}
