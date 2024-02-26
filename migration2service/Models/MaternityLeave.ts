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
import MaternityLeaveProcess from './MaternityLeaveProcess';

export default class MaternityLeave extends BaseModel {
    public static table = 'maternityLeaves';
    public static primaryKey = 'id';
    public static incrementing = false;

    public static namingStrategy = new CamelCaseNamingStrategy();

    @column({ isPrimary: true, columnName: 'id' })
    public id: bigint;

    @column({ columnName: 'employeeId' })
    public employeeId: bigint;

    @column({ columnName: 'reason' })
    public reason: string;

    @column.dateTime({ columnName: 'applicationDate' })
    public applicationDate: DateTime;

    @column.dateTime({ columnName: 'startDate' })
    public startDate: DateTime;

    @column.dateTime({ columnName: 'endDate' })
    public endDate: DateTime;

    @column.dateTime({ columnName: 'expectedDeliveryDate' })
    public expectedDeliveryDate: DateTime;

    @column({ columnName: 'status' })
    public status: string;

    @column({ columnName: 'remark' })
    public remark: string;

    @column({ columnName: 'currentAddress' })
    public currentAddress: string;

    @column({ columnName: 'document' })
    public document: Blob;

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

    @hasOne(() => MaternityLeaveProcess, { foreignKey: 'maternityLeaveId' })
    public maternityLeaveProcess: HasOne<typeof MaternityLeaveProcess>;
}
