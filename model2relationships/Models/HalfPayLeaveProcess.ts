import { DateTime } from 'luxon';
import { column, BaseModel, belongsTo, BelongsTo } from '@ioc:Adonis/Lucid/Orm';
import CamelCaseNamingStrategy from 'App/Strategies/CamelCaseNamingStrategy';
import HalfPayLeave from './HalfPayLeave';
import Employee from './Employee';

export default class HalfPayLeaveProcess extends BaseModel {
    public static table = 'halfPayLeaveProcess';
    public static primaryKey = 'id';
    public static incrementing = false;

    public static namingStrategy = new CamelCaseNamingStrategy();

    @column({ isPrimary: true, columnName: 'id', serializeAs: null })
    public id: bigint;

    @column({ columnName: 'halfPayLeaveId', serializeAs: null })
    public halfPayLeaveId: bigint;

    @column({ columnName: 'directorSupporterId', serializeAs: null })
    public directorSupporterId: bigint;

    @column({ columnName: 'directorSupportedStatus' })
    public directorSupportedStatus: string;

    @column({ columnName: 'directorSupportedRemark' })
    public directorSupportedRemark: string;

    @column.dateTime({ columnName: 'directorSupportedDate' })
    public directorSupportedDate: DateTime;

    @column({ columnName: 'verifierId', serializeAs: null })
    public verifierId: bigint;

    @column({ columnName: 'verifiedStatus' })
    public verifiedStatus: string;

    @column({ columnName: 'verifiedRemark' })
    public verifiedRemark: string;

    @column.dateTime({ columnName: 'verifiedDate' })
    public verifiedDate: DateTime;

    @column({ columnName: 'confirmerId', serializeAs: null })
    public confirmerId: bigint;

    @column({ columnName: 'confirmedStatus' })
    public confirmedStatus: string;

    @column({ columnName: 'confirmedRemark' })
    public confirmedRemark: string;

    @column.dateTime({ columnName: 'confirmedDate' })
    public confirmedDate: DateTime;

    @column({ columnName: 'approverId', serializeAs: null })
    public approverId: bigint;

    @column({ columnName: 'approvedStatus' })
    public approvedStatus: string;

    @column({ columnName: 'approvedRemark' })
    public approvedRemark: string;

    @column.dateTime({ columnName: 'approvedDate' })
    public approvedDate: DateTime;

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

    @belongsTo(() => HalfPayLeave, {
        foreignKey: 'halfPayLeaveId',
        onQuery: (query) => {
            query.where('active', true);
        },
    })
    public halfPayLeave: BelongsTo<typeof HalfPayLeave>;

    @belongsTo(() => Employee, {
        foreignKey: 'directorSupporterId',
        onQuery: (query) => {
            query.where('active', true);
        },
    })
    public directorSupporter: BelongsTo<typeof Employee>;

    @belongsTo(() => Employee, {
        foreignKey: 'verifierId',
        onQuery: (query) => {
            query.where('active', true);
        },
    })
    public verifier: BelongsTo<typeof Employee>;

    @belongsTo(() => Employee, {
        foreignKey: 'confirmerId',
        onQuery: (query) => {
            query.where('active', true);
        },
    })
    public confirmer: BelongsTo<typeof Employee>;

    @belongsTo(() => Employee, {
        foreignKey: 'approverId',
        onQuery: (query) => {
            query.where('active', true);
        },
    })
    public approver: BelongsTo<typeof Employee>;
}
