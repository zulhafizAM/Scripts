import { DateTime } from 'luxon';
import { column, BaseModel, belongsTo, BelongsTo } from '@ioc:Adonis/Lucid/Orm';
import CamelCaseNamingStrategy from 'App/Strategies/CamelCaseNamingStrategy';
import Employee from './Employee';

export default class GradePromotionProcess extends BaseModel {
    public static table = 'gradePromotionProcess';
    public static primaryKey = 'id';
    public static incrementing = false;

    public static namingStrategy = new CamelCaseNamingStrategy();

    @column({ isPrimary: true, columnName: 'id' })
    public id: bigint;

    @column({ columnName: 'integrityCertifierId' })
    public integrityCertifierId: bigint;

    @column({ columnName: 'integrityCertifiedStatus' })
    public integrityCertifiedStatus: string;

    @column({ columnName: 'integrityCertifiedRemark' })
    public integrityCertifiedRemark: string;

    @column.dateTime({ columnName: 'integrityCertifiedDate' })
    public integrityCertifiedDate: DateTime;

    @column({ columnName: 'directorCertifierId' })
    public directorCertifierId: bigint;

    @column({ columnName: 'directorCertifiedStatus' })
    public directorCertifiedStatus: string;

    @column({ columnName: 'directorCertifiedRemark' })
    public directorCertifiedRemark: string;

    @column.dateTime({ columnName: 'directorCertifiedDate' })
    public directorCertifiedDate: DateTime;

    @column({ columnName: 'supporterId' })
    public supporterId: bigint;

    @column({ columnName: 'supportedStatus' })
    public supportedStatus: string;

    @column({ columnName: 'supportedRemark' })
    public supportedRemark: string;

    @column.dateTime({ columnName: 'supportedDate' })
    public supportedDate: DateTime;

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

    @belongsTo(() => Employee, { foreignKey: 'integrityCertifierId' })
    public integrityCertifier: BelongsTo<typeof Employee>;

    @belongsTo(() => Employee, { foreignKey: 'directorCertifierId' })
    public directorCertifier: BelongsTo<typeof Employee>;

    @belongsTo(() => Employee, { foreignKey: 'supporterId' })
    public supporter: BelongsTo<typeof Employee>;

    @belongsTo(() => Employee, { foreignKey: 'approverId' })
    public approver: BelongsTo<typeof Employee>;
}
