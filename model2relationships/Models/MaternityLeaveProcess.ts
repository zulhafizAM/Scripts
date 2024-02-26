import { DateTime } from 'luxon';
import { column, BaseModel, belongsTo, BelongsTo } from '@ioc:Adonis/Lucid/Orm';
import CamelCaseNamingStrategy from 'App/Strategies/CamelCaseNamingStrategy';
import MaternityLeave from './MaternityLeave';
import Employee from './Employee';

export default class MaternityLeaveProcess extends BaseModel {
    public static table = 'maternityLeaveProcess';
    public static primaryKey = 'id';
    public static incrementing = false;

    public static namingStrategy = new CamelCaseNamingStrategy();

    @column({ isPrimary: true, columnName: 'id', serializeAs: null })
    public id: bigint;

    @column({ columnName: 'maternityLeaveId', serializeAs: null })
    public maternityLeaveId: bigint;

    @column({ columnName: 'verifierId', serializeAs: null })
    public verifierId: bigint;

    @column({ columnName: 'verifiedStatus' })
    public verifiedStatus: string;

    @column({ columnName: 'verifiedRemark' })
    public verifiedRemark: string;

    @column.dateTime({ columnName: 'verifiedDate' })
    public verifiedDate: DateTime;

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

    @belongsTo(() => MaternityLeave, {
        foreignKey: 'maternityLeaveId',
        onQuery: (query) => {
            query.where('active', true);
        },
    })
    public maternityLeave: BelongsTo<typeof MaternityLeave>;

    @belongsTo(() => Employee, {
        foreignKey: 'verifierId',
        onQuery: (query) => {
            query.where('active', true);
        },
    })
    public verifier: BelongsTo<typeof Employee>;

    @belongsTo(() => Employee, {
        foreignKey: 'approverId',
        onQuery: (query) => {
            query.where('active', true);
        },
    })
    public approver: BelongsTo<typeof Employee>;
}
