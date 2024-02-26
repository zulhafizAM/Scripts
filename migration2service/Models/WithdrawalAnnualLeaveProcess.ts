import { DateTime } from 'luxon';
import { column, BaseModel, belongsTo, BelongsTo } from '@ioc:Adonis/Lucid/Orm';
import CamelCaseNamingStrategy from 'App/Strategies/CamelCaseNamingStrategy';
import WithdrawalAnnualLeave from './WithdrawalAnnualLeave';
import Employee from './Employee';

export default class WithdrawalAnnualLeaveProcess extends BaseModel {
    public static table = 'withdrawalAnnualLeaveProcess';
    public static primaryKey = 'id';
    public static incrementing = false;

    public static namingStrategy = new CamelCaseNamingStrategy();

    @column({ isPrimary: true, columnName: 'id' })
    public id: bigint;

    @column({ columnName: 'withdrawalLeaveId' })
    public withdrawalLeaveId: bigint;

    @column({ columnName: 'supporterId' })
    public supporterId: bigint;

    @column({ columnName: 'supportedStatus' })
    public supportedStatus: string;

    @column({ columnName: 'supportedRemark' })
    public supportedRemark: string;

    @column.dateTime({ columnName: 'supportedDate' })
    public supportedDate: DateTime;

    @column({ columnName: 'verifierId' })
    public verifierId: bigint;

    @column({ columnName: 'verifiedStatus' })
    public verifiedStatus: string;

    @column({ columnName: 'verifiedRemark' })
    public verifiedRemark: string;

    @column.dateTime({ columnName: 'verifiedDate' })
    public verifiedDate: DateTime;

    @column({ columnName: 'confirmerId' })
    public confirmerId: bigint;

    @column({ columnName: 'confirmedStatus' })
    public confirmedStatus: string;

    @column({ columnName: 'confirmedRemark' })
    public confirmedRemark: string;

    @column.dateTime({ columnName: 'confirmedDate' })
    public confirmedDate: DateTime;

    @column({ columnName: 'certifierId' })
    public certifierId: bigint;

    @column({ columnName: 'certifiedStatus' })
    public certifiedStatus: string;

    @column({ columnName: 'certifiedRemark' })
    public certifiedRemark: string;

    @column.dateTime({ columnName: 'certifiedDate' })
    public certifiedDate: DateTime;

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

    @belongsTo(() => WithdrawalAnnualLeave, { foreignKey: 'withdrawalLeaveId' })
    public withdrawalLeave: BelongsTo<typeof WithdrawalAnnualLeave>;

    @belongsTo(() => Employee, { foreignKey: 'supporterId' })
    public supporter: BelongsTo<typeof Employee>;

    @belongsTo(() => Employee, { foreignKey: 'verifierId' })
    public verifier: BelongsTo<typeof Employee>;

    @belongsTo(() => Employee, { foreignKey: 'confirmerId' })
    public confirmer: BelongsTo<typeof Employee>;

    @belongsTo(() => Employee, { foreignKey: 'certifierId' })
    public certifier: BelongsTo<typeof Employee>;

    @belongsTo(() => Employee, { foreignKey: 'approverId' })
    public approver: BelongsTo<typeof Employee>;
}
