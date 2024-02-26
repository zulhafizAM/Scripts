import { DateTime } from 'luxon';
import {
    column,
    BaseModel,
    belongsTo,
    BelongsTo,
    hasOne,
    HasOne,
} from '@ioc:Adonis/Lucid/Orm';
import CamelCaseNamingStrategy from 'App/Strategies/CamelCaseNamingStrategy';
import Employee from './Employee';
import WithdrawalAnnualLeaveProcess from './WithdrawalAnnualLeaveProcess';

export default class WithdrawalAnnualLeave extends BaseModel {
    public static table = 'withdrawalAnnualLeaves';
    public static primaryKey = 'id';
    public static incrementing = false;

    public static namingStrategy = new CamelCaseNamingStrategy();

    @column({ isPrimary: true, columnName: 'id', serializeAs: null })
    public id: bigint;

    @column({ columnName: 'employeeId', serializeAs: null })
    public employeeId: bigint;

    @column.dateTime({ columnName: 'applicationDate' })
    public applicationDate: DateTime;

    @column({ columnName: 'acummulatedLeave' })
    public acummulatedLeave: number;

    @column({ columnName: 'leaveWithdrawal' })
    public leaveWithdrawal: number;

    @column({ columnName: 'leaveBalance' })
    public leaveBalance: number;

    @column.dateTime({ columnName: 'startDate' })
    public startDate: DateTime;

    @column({ columnName: 'status' })
    public status: string;

    @column({ columnName: 'remark' })
    public remark: string;

    @column({ columnName: 'document' })
    public document: Blob;

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

    @belongsTo(() => Employee, {
        foreignKey: 'employeeId',
        onQuery: (query) => {
            query.where('active', true);
        },
    })
    public employee: BelongsTo<typeof Employee>;

    @hasOne(() => WithdrawalAnnualLeaveProcess, {
        foreignKey: 'withdrawalLeaveId',
    })
    public withdrawalAnnualLeaveProcess: HasOne<
        typeof WithdrawalAnnualLeaveProcess
    >;
}
