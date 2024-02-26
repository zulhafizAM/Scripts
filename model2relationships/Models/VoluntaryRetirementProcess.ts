import { DateTime } from 'luxon';
import { column, BaseModel, belongsTo, BelongsTo } from '@ioc:Adonis/Lucid/Orm';
import CamelCaseNamingStrategy from 'App/Strategies/CamelCaseNamingStrategy';
import VoluntaryRetirement from 'App/Models/VoluntaryRetirement';
import Employee from 'App/Models/Employee';

export default class VoluntaryRetirementProcess extends BaseModel {
    public static table = 'voluntaryRetirementProcess';
    public static primaryKey = 'id';
    public static incrementing = false;

    public static namingStrategy = new CamelCaseNamingStrategy();

    @column({ isPrimary: true, columnName: 'id', serializeAs: null })
    public id: bigint;

    @column({ columnName: 'voluntaryId', serializeAs: null })
    public voluntaryId: bigint;

    @column({ columnName: 'certifierId', serializeAs: null })
    public certifierId: bigint;

    @column({ columnName: 'certifiedStatus' })
    public certifiedStatus: string;

    @column({ columnName: 'certifiedRemark' })
    public certifiedRemark: string;

    @column.dateTime({ columnName: 'certifiedDate' })
    public certifiedDate: DateTime;

    @column({ columnName: 'confirmerId', serializeAs: null })
    public confirmerId: bigint;

    @column({ columnName: 'confirmedStatus' })
    public confirmedStatus: string;

    @column({ columnName: 'confirmedRemark' })
    public confirmedRemark: string;

    @column.dateTime({ columnName: 'confirmedDate' })
    public confirmedDate: DateTime;

    @column({ columnName: 'supporter1Id', serializeAs: null })
    public supporter1Id: bigint;

    @column({ columnName: 'supported1Status' })
    public supported1Status: string;

    @column({ columnName: 'supported1Remark' })
    public supported1Remark: string;

    @column.dateTime({ columnName: 'supported1Date' })
    public supported1Date: DateTime;

    @column({ columnName: 'supporter2Id', serializeAs: null })
    public supporter2Id: bigint;

    @column({ columnName: 'supported2Status' })
    public supported2Status: string;

    @column({ columnName: 'supported2Remark' })
    public supported2Remark: string;

    @column.dateTime({ columnName: 'supported2Date' })
    public supported2Date: DateTime;

    @column({ columnName: 'appointedApproverId', serializeAs: null })
    public appointedApproverId: bigint;

    @column({ columnName: 'appointedApprovedStatus' })
    public appointedApprovedStatus: string;

    @column({ columnName: 'appointedApprovedRemark' })
    public appointedApprovedRemark: string;

    @column.dateTime({ columnName: 'appointedApprovedDate' })
    public appointedApprovedDate: DateTime;

    @column({ columnName: 'secretaryApproverId', serializeAs: null })
    public secretaryApproverId: bigint;

    @column({ columnName: 'secretaryApprovedStatus' })
    public secretaryApprovedStatus: string;

    @column({ columnName: 'secretaryApprovedRemark' })
    public secretaryApprovedRemark: string;

    @column.dateTime({ columnName: 'secretaryApprovedDate' })
    public secretaryApprovedDate: DateTime;

    @column({ columnName: 'documentCertifierId', serializeAs: null })
    public documentCertifierId: bigint;

    @column({ columnName: 'documentCertifiedStatus' })
    public documentCertifiedStatus: string;

    @column({ columnName: 'documentCertifiedRemark' })
    public documentCertifiedRemark: string;

    @column.dateTime({ columnName: 'documentCertifiedDate' })
    public documentCertifiedDate: DateTime;

    @column({ columnName: 'letterCertifierId', serializeAs: null })
    public letterCertifierId: bigint;

    @column({ columnName: 'letterCertifiedStatus' })
    public letterCertifiedStatus: string;

    @column({ columnName: 'letterCertifiedRemark' })
    public letterCertifiedRemark: string;

    @column.dateTime({ columnName: 'letterCertifiedDate' })
    public letterCertifiedDate: DateTime;

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

    @belongsTo(() => VoluntaryRetirement, {
        foreignKey: 'voluntaryId',
        onQuery: (query) => {
            query.where('active', true);
        },
    })
    public voluntary: BelongsTo<typeof VoluntaryRetirement>;

    @belongsTo(() => Employee, {
        foreignKey: 'certifierId',
        onQuery: (query) => {
            query.where('active', true);
        },
    })
    public certifier: BelongsTo<typeof Employee>;

    @belongsTo(() => Employee, {
        foreignKey: 'confirmerId',
        onQuery: (query) => {
            query.where('active', true);
        },
    })
    public confirmer: BelongsTo<typeof Employee>;

    @belongsTo(() => Employee, { foreignKey: 'supporter1Id' })
    public supporter1: BelongsTo<typeof Employee>;

    @belongsTo(() => Employee, { foreignKey: 'supporter2Id' })
    public supporter2: BelongsTo<typeof Employee>;

    @belongsTo(() => Employee, {
        foreignKey: 'appointedApproverId',
        onQuery: (query) => {
            query.where('active', true);
        },
    })
    public appointedApprover: BelongsTo<typeof Employee>;

    @belongsTo(() => Employee, {
        foreignKey: 'secretaryApproverId',
        onQuery: (query) => {
            query.where('active', true);
        },
    })
    public secretaryApprover: BelongsTo<typeof Employee>;

    @belongsTo(() => Employee, {
        foreignKey: 'documentCertifierId',
        onQuery: (query) => {
            query.where('active', true);
        },
    })
    public documentCertifier: BelongsTo<typeof Employee>;

    @belongsTo(() => Employee, {
        foreignKey: 'letterCertifierId',
        onQuery: (query) => {
            query.where('active', true);
        },
    })
    public letterCertifier: BelongsTo<typeof Employee>;
}
