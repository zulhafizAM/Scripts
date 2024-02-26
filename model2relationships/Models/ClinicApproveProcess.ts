import { DateTime } from 'luxon';
import { column, BaseModel, belongsTo, BelongsTo } from '@ioc:Adonis/Lucid/Orm';
import CamelCaseNamingStrategy from 'App/Strategies/CamelCaseNamingStrategy';
import Clinic from './Clinic';
import Employee from './Employee';

export default class ClinicApproveProcess extends BaseModel {
    public static table = 'clinicApproveProcess';
    public static primaryKey = 'id';
    public static incrementing = false;

    public static namingStrategy = new CamelCaseNamingStrategy();

    @column({ isPrimary: true, columnName: 'id', serializeAs: null })
    public id: bigint;

    @column({ columnName: 'clinicId', serializeAs: null })
    public clinicId: bigint;

    @column({ columnName: 'comfirmerId', serializeAs: null })
    public comfirmerId: bigint;

    @column({ columnName: 'comfirmedStatus' })
    public comfirmedStatus: string;

    @column({ columnName: 'comfirmedRemark' })
    public comfirmedRemark: string;

    @column.dateTime({ columnName: 'comfirmedDate' })
    public comfirmedDate: DateTime;

    @column({ columnName: 'supporterId', serializeAs: null })
    public supporterId: bigint;

    @column({ columnName: 'supportedStatus' })
    public supportedStatus: string;

    @column({ columnName: 'supportedRemark' })
    public supportedRemark: string;

    @column.dateTime({ columnName: 'supportedDate' })
    public supportedDate: DateTime;

    @column({ columnName: 'approverId', serializeAs: null })
    public approverId: bigint;

    @column({ columnName: 'approvedStatus' })
    public approvedStatus: string;

    @column({ columnName: 'approvedRemark' })
    public approvedRemark: string;

    @column.dateTime({ columnName: 'approvedDate' })
    public approvedDate: DateTime;

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

    @belongsTo(() => Clinic, {
        foreignKey: 'clinicId',
        onQuery: (query) => {
            query.where('active', true);
        },
    })
    public clinic: BelongsTo<typeof Clinic>;

    @belongsTo(() => Employee, {
        foreignKey: 'comfirmerId',
        onQuery: (query) => {
            query.where('active', true);
        },
    })
    public comfirmer: BelongsTo<typeof Employee>;

    @belongsTo(() => Employee, {
        foreignKey: 'supporterId',
        onQuery: (query) => {
            query.where('active', true);
        },
    })
    public supporter: BelongsTo<typeof Employee>;

    @belongsTo(() => Employee, {
        foreignKey: 'approverId',
        onQuery: (query) => {
            query.where('active', true);
        },
    })
    public approver: BelongsTo<typeof Employee>;
}
