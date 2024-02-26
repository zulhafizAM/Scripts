import { DateTime } from 'luxon';
import { column, BaseModel, belongsTo, BelongsTo, hasOne, HasOne } from '@ioc:Adonis/Lucid/Orm';
import CamelCaseNamingStrategy from 'App/Strategies/CamelCaseNamingStrategy';
import Employee from './Employee';
import AccruedAnnualLeaveProcess from './AccruedAnnualLeaveProcess';

export default class AccruedAnnualLeave extends BaseModel {
    public static table = 'accruedAnnualLeaves';
    public static primaryKey = 'id';
    public static incrementing = false;

    public static namingStrategy = new CamelCaseNamingStrategy();

    @column({ isPrimary: true, columnName: 'id' })
    public id: bigint;

    @column({ columnName: 'employeeId' })
    public employeeId: bigint;

    @column.dateTime({ columnName: 'applicationDate' })
    public applicationDate: DateTime;

    @column({ columnName: 'currentYear' })
    public currentYear: number;

    @column({ columnName: 'totalLeaveEntitlement' })
    public totalLeaveEntitlement: number;

    @column({ columnName: 'leaveBalance' })
    public leaveBalance: number;

    @column({ columnName: 'acummulatedLeave' })
    public acummulatedLeave: number;

    @column({ columnName: 'maxReplacementLeave' })
    public maxReplacementLeave: number;

    @column({ columnName: 'forwardedLeaveTotal' })
    public forwardedLeaveTotal: number;

    @column({ columnName: 'status' })
    public status: string;

    @column({ columnName: 'remark' })
    public remark: string;

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

    @belongsTo(() => Employee, { foreignKey: 'employeeId' })
    public employee: BelongsTo<typeof Employee>;

    @hasOne(() => AccruedAnnualLeaveProcess, { foreignKey: 'accruedLeaveId' })
    public accruedAnnualLeaveProcess: HasOne<typeof AccruedAnnualLeaveProcess>;
}