import { DateTime } from 'luxon';
import { column, BaseModel, belongsTo, BelongsTo } from '@ioc:Adonis/Lucid/Orm';
import CamelCaseNamingStrategy from 'App/Strategies/CamelCaseNamingStrategy';
import VoluntaryRetirement from './VoluntaryRetirement';
import Employee from './Employee';

export default class VoluntaryRetirementProcess extends BaseModel {
    public static table = 'voluntaryRetirementProcess';
    public static primaryKey = 'id';
    public static incrementing = false;

    public static namingStrategy = new CamelCaseNamingStrategy();

    @column({ isPrimary: true, columnName: 'id' })
    public id: bigint;

    @column({ columnName: 'voluntaryId' })
    public voluntaryId: bigint;

    @column({ columnName: 'certifierId' })
    public certifierId: bigint;

    @column({ columnName: 'certifiedStatus' })
    public certifiedStatus: string;

    @column({ columnName: 'certifiedRemark' })
    public certifiedRemark: string;

    @column.dateTime({ columnName: 'certifiedDate' })
    public certifiedDate: DateTime;

    @column({ columnName: 'confirmerId' })
    public confirmerId: bigint;

    @column({ columnName: 'confirmedStatus' })
    public confirmedStatus: string;

    @column({ columnName: 'confirmedRemark' })
    public confirmedRemark: string;

    @column.dateTime({ columnName: 'confirmedDate' })
    public confirmedDate: DateTime;

    @column({ columnName: 'supporter1Id' })
    public supporter1Id: bigint;

    @column({ columnName: 'supported1Status' })
    public supported1Status: string;

    @column({ columnName: 'supported1Remark' })
    public supported1Remark: string;

    @column.dateTime({ columnName: 'supported1Date' })
    public supported1Date: DateTime;

    @column({ columnName: 'supporter2Id' })
    public supporter2Id: bigint;

    @column({ columnName: 'supported2Status' })
    public supported2Status: string;

    @column({ columnName: 'supported2Remark' })
    public supported2Remark: string;

    @column.dateTime({ columnName: 'supported2Date' })
    public supported2Date: DateTime;

    @column({ columnName: 'appointedApproverId' })
    public appointedApproverId: bigint;

    @column({ columnName: 'appointedApprovedStatus' })
    public appointedApprovedStatus: string;

    @column({ columnName: 'appointedApprovedRemark' })
    public appointedApprovedRemark: string;

    @column.dateTime({ columnName: 'appointedApprovedDate' })
    public appointedApprovedDate: DateTime;

    @column({ columnName: 'secretaryApproverId' })
    public secretaryApproverId: bigint;

    @column({ columnName: 'secretaryApprovedStatus' })
    public secretaryApprovedStatus: string;

    @column({ columnName: 'secretaryApprovedRemark' })
    public secretaryApprovedRemark: string;

    @column.dateTime({ columnName: 'secretaryApprovedDate' })
    public secretaryApprovedDate: DateTime;

    @column({ columnName: 'secretaryCertifierId' })
    public secretaryCertifierId: bigint;

    @column({ columnName: 'secretaryCertifiedStatus' })
    public secretaryCertifiedStatus: string;

    @column({ columnName: 'secretaryCertifiedRemark' })
    public secretaryCertifiedRemark: string;

    @column.dateTime({ columnName: 'secretaryCertifiedDate' })
    public secretaryCertifiedDate: DateTime;

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

    @belongsTo(() => VoluntaryRetirement, { foreignKey: 'voluntaryId' })
    public voluntary: BelongsTo<typeof VoluntaryRetirement>;

    @belongsTo(() => Employee, { foreignKey: 'certifierId' })
    public certifier: BelongsTo<typeof Employee>;

    @belongsTo(() => Employee, { foreignKey: 'confirmerId' })
    public confirmer: BelongsTo<typeof Employee>;

    @belongsTo(() => Employee, { foreignKey: 'supporter1Id' })
    public supporter1: BelongsTo<typeof Employee>;

    @belongsTo(() => Employee, { foreignKey: 'supporter2Id' })
    public supporter2: BelongsTo<typeof Employee>;

    @belongsTo(() => Employee, { foreignKey: 'appointedApproverId' })
    public appointedApprover: BelongsTo<typeof Employee>;

    @belongsTo(() => Employee, { foreignKey: 'secretaryApproverId' })
    public secretaryApprover: BelongsTo<typeof Employee>;

    @belongsTo(() => Employee, { foreignKey: 'secretaryCertifierId' })
    public secretaryCertifier: BelongsTo<typeof Employee>;

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

    @belongsTo(() => VoluntaryRetirement, { foreignKey: 'voluntaryId' })
    public voluntary: BelongsTo<typeof VoluntaryRetirement>;

    @belongsTo(() => Employee, { foreignKey: 'certifierId' })
    public certifier: BelongsTo<typeof Employee>;

    @belongsTo(() => Employee, { foreignKey: 'confirmerId' })
    public confirmer: BelongsTo<typeof Employee>;

    @belongsTo(() => Employee, { foreignKey: 'supporter1Id' })
    public supporter1: BelongsTo<typeof Employee>;

    @belongsTo(() => Employee, { foreignKey: 'supporter2Id' })
    public supporter2: BelongsTo<typeof Employee>;

    @belongsTo(() => Employee, { foreignKey: 'appointedApproverId' })
    public appointedApprover: BelongsTo<typeof Employee>;

    @belongsTo(() => Employee, { foreignKey: 'secretaryApproverId' })
    public secretaryApprover: BelongsTo<typeof Employee>;

    @belongsTo(() => Employee, { foreignKey: 'secretaryCertifierId' })
    public secretaryCertifier: BelongsTo<typeof Employee>;
}