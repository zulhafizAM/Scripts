import { DateTime } from 'luxon';
import { column, BaseModel, belongsTo, BelongsTo } from '@ioc:Adonis/Lucid/Orm';
import CamelCaseNamingStrategy from 'App/Strategies/CamelCaseNamingStrategy';
import MedicalClaim from './MedicalClaim';
import Employee from './Employee';

export default class MedicalClaimProcess extends BaseModel {
    public static table = 'medicalClaimProcess';
    public static primaryKey = 'id';
    public static incrementing = false;

    public static namingStrategy = new CamelCaseNamingStrategy();

    @column({ isPrimary: true, columnName: 'id' })
    public id: bigint;

    @column({ columnName: 'claimId' })
    public claimId: bigint;

    @column({ columnName: 'secretaryApproverId' })
    public secretaryApproverId: bigint;

    @column({ columnName: 'secretaryApprovedStatus' })
    public secretaryApprovedStatus: string;

    @column({ columnName: 'secretaryApprovedRemark' })
    public secretaryApprovedRemark: string;

    @column.dateTime({ columnName: 'secretaryApprovedDate' })
    public secretaryApprovedDate: DateTime;

    @column({ columnName: 'supporterId' })
    public supporterId: bigint;

    @column({ columnName: 'supportedStatus' })
    public supportedStatus: string;

    @column({ columnName: 'supportedRemark' })
    public supportedRemark: string;

    @column.dateTime({ columnName: 'supportedDate' })
    public supportedDate: DateTime;

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

    @belongsTo(() => MedicalClaim, { foreignKey: 'claimId' })
    public claim: BelongsTo<typeof MedicalClaim>;

    @belongsTo(() => Employee, { foreignKey: 'secretaryApproverId' })
    public secretaryApprover: BelongsTo<typeof Employee>;

    @belongsTo(() => Employee, { foreignKey: 'supporterId' })
    public supporter: BelongsTo<typeof Employee>;

    @belongsTo(() => Employee, { foreignKey: 'appointedApproverId' })
    public appointedApprover: BelongsTo<typeof Employee>;

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

    @belongsTo(() => MedicalClaim, { foreignKey: 'claimId' })
    public claim: BelongsTo<typeof MedicalClaim>;

    @belongsTo(() => Employee, { foreignKey: 'secretaryApproverId' })
    public secretaryApprover: BelongsTo<typeof Employee>;

    @belongsTo(() => Employee, { foreignKey: 'supporterId' })
    public supporter: BelongsTo<typeof Employee>;

    @belongsTo(() => Employee, { foreignKey: 'appointedApproverId' })
    public appointedApprover: BelongsTo<typeof Employee>;
}