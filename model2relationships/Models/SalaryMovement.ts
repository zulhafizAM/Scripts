import { DateTime } from 'luxon';
import { column, BaseModel, belongsTo, BelongsTo } from '@ioc:Adonis/Lucid/Orm';
import CamelCaseNamingStrategy from 'App/Strategies/CamelCaseNamingStrategy';
import Salary from './Salary';
import Meeting from './Meeting';

export default class SalaryMovement extends BaseModel {
    public static table = 'salaryMovements';
    public static primaryKey = 'id';
    public static incrementing = false;

    public static namingStrategy = new CamelCaseNamingStrategy();

    @column({ isPrimary: true, columnName: 'id', serializeAs: null })
    public id: bigint;

    @column({ columnName: 'salaryDetailId', serializeAs: null })
    public salaryDetailId: bigint;

    @column({ columnName: 'meetingId', serializeAs: null })
    public meetingId: bigint;

    @column({ columnName: 'salaryMovement' })
    public salaryMovement: number;

    @column({ columnName: 'stateAllowance' })
    public stateAllowance: number;

    @column({ columnName: 'criticalAllowance' })
    public criticalAllowance: number;

    @column({ columnName: 'annualSalaryIncrement' })
    public annualSalaryIncrement: number;

    @column({ columnName: 'specialAid' })
    public specialAid: number;

    @column({ columnName: 'specialRaiseType' })
    public specialRaiseType: string;

    @column({ columnName: 'specialRaise' })
    public specialRaise: number;

    @column({ columnName: 'status' })
    public status: string;

    @column({ columnName: 'remark' })
    public remark: string;

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

    @belongsTo(() => Salary, {
        foreignKey: 'salaryDetailId',
        onQuery: (query) => {
            query.where('active', true);
        },
    })
    public salaryDetail: BelongsTo<typeof Salary>;

    @belongsTo(() => Meeting, {
        foreignKey: 'meetingId',
        onQuery: (query) => {
            query.where('active', true);
        },
    })
    public meeting: BelongsTo<typeof Meeting>;
}
