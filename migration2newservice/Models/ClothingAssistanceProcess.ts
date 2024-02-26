import { DateTime } from 'luxon';
import { column, BaseModel, belongsTo, BelongsTo } from '@ioc:Adonis/Lucid/Orm';
import CamelCaseNamingStrategy from 'App/Strategies/CamelCaseNamingStrategy';
import ClothingAssistance from './ClothingAssistance';
import Employee from './Employee';

export default class ClothingAssistanceProcess extends BaseModel {
    public static table = 'clothingAssistanceProcess';
    public static primaryKey = 'id';
    public static incrementing = false;

    public static namingStrategy = new CamelCaseNamingStrategy();

    @column({ isPrimary: true, columnName: 'id' })
    public id: bigint;

    @column({ columnName: 'clothingId' })
    public clothingId: bigint;

    @column({ columnName: 'directorSupporterId' })
    public directorSupporterId: bigint;

    @column({ columnName: 'directorSupportedStatus' })
    public directorSupportedStatus: string;

    @column({ columnName: 'directorSupportedRemark' })
    public directorSupportedRemark: string;

    @column.dateTime({ columnName: 'directorSupportedDate' })
    public directorSupportedDate: DateTime;

    @column({ columnName: 'verifierId' })
    public verifierId: bigint;

    @column({ columnName: 'verifiedStatus' })
    public verifiedStatus: string;

    @column({ columnName: 'verifiedRemark' })
    public verifiedRemark: string;

    @column.dateTime({ columnName: 'verifiedDate' })
    public verifiedDate: DateTime;

    @column({ columnName: 'appointedSupporterId' })
    public appointedSupporterId: bigint;

    @column({ columnName: 'appointedSupportedStatus' })
    public appointedSupportedStatus: string;

    @column({ columnName: 'appointedSupportedRemark' })
    public appointedSupportedRemark: string;

    @column.dateTime({ columnName: 'appointedSupportedDate' })
    public appointedSupportedDate: DateTime;

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

    @belongsTo(() => ClothingAssistance, { foreignKey: 'clothingId' })
    public clothing: BelongsTo<typeof ClothingAssistance>;

    @belongsTo(() => Employee, { foreignKey: 'directorSupporterId' })
    public directorSupporter: BelongsTo<typeof Employee>;

    @belongsTo(() => Employee, { foreignKey: 'verifierId' })
    public verifier: BelongsTo<typeof Employee>;

    @belongsTo(() => Employee, { foreignKey: 'appointedSupporterId' })
    public appointedSupporter: BelongsTo<typeof Employee>;

    @belongsTo(() => Employee, { foreignKey: 'approverId' })
    public approver: BelongsTo<typeof Employee>;
}
