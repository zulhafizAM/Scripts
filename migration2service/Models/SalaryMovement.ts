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

    @column({ isPrimary: true, columnName: 'id' })
    public id: bigint;

    @column({ columnName: 'salaryDetailId' })
    public salaryDetailId: bigint;

    @column({ columnName: 'meetingId' })
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

    @belongsTo(() => Salary, { foreignKey: 'salaryDetailId' })
    public salaryDetail: BelongsTo<typeof Salary>;

    @belongsTo(() => Meeting, { foreignKey: 'meetingId' })
    public meeting: BelongsTo<typeof Meeting>;
}
