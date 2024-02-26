import { DateTime } from 'luxon';
import { column, BaseModel, belongsTo, BelongsTo } from '@ioc:Adonis/Lucid/Orm';
import CamelCaseNamingStrategy from 'App/Strategies/CamelCaseNamingStrategy';
import Employee from './Employee';
import Meeting from './Meeting';

export default class Surcharge extends BaseModel {
    public static table = 'surcharges';
    public static primaryKey = 'id';
    public static incrementing = false;

    public static namingStrategy = new CamelCaseNamingStrategy();

    @column({ isPrimary: true, columnName: 'id' })
    public id: bigint;

    @column({ columnName: 'employeeId' })
    public employeeId: bigint;

    @column({ columnName: 'meetingId' })
    public meetingId: bigint;

    @column.dateTime({ columnName: 'reportDate' })
    public reportDate: DateTime;

    @column({ columnName: 'surchargeAction' })
    public surchargeAction: string;

    @column({ columnName: 'surchargeRemark' })
    public surchargeRemark: string;

    @column({ columnName: 'amount' })
    public amount: number;

    @column({ columnName: 'paymentType' })
    public paymentType: string;

    @column({ columnName: 'duration' })
    public duration: number;

    @column.dateTime({ columnName: 'effectiveDate' })
    public effectiveDate: DateTime;

    @column({ columnName: 'meetingResult' })
    public meetingResult: string;

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

    @belongsTo(() => Meeting, { foreignKey: 'meetingId' })
    public meeting: BelongsTo<typeof Meeting>;
}
