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

    @column({ isPrimary: true, columnName: 'id', serializeAs: null })
    public id: bigint;

    @column({ columnName: 'employeeId', serializeAs: null })
    public employeeId: bigint;

    @column({ columnName: 'meetingId', serializeAs: null })
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

    @belongsTo(() => Meeting, {
        foreignKey: 'meetingId',
        onQuery: (query) => {
            query.where('active', true);
        },
    })
    public meeting: BelongsTo<typeof Meeting>;
}
