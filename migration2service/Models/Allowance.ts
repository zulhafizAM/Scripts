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
import Salary from './Salary';
import ServiceAllowance from './ServiceAllowance';

export default class Allowance extends BaseModel {
    public static table = 'allowances';
    public static primaryKey = 'id';
    public static incrementing = false;

    public static namingStrategy = new CamelCaseNamingStrategy();

    @column({ isPrimary: true, columnName: 'id' })
    public id: bigint;

    @column({ columnName: 'salaryDetailId' })
    public salaryDetailId: bigint;

    @column({ columnName: 'interim' })
    public interim: number;

    @column({ columnName: 'acting' })
    public acting: number;

    @column({ columnName: 'transfer' })
    public transfer: number;

    @column({ columnName: 'houseAllowanceType' })
    public houseAllowanceType: string;

    @column({ columnName: 'houseAllowance' })
    public houseAllowance: number;

    @column({ columnName: 'transferAllowance' })
    public transferAllowance: number;

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

    @hasOne(() => ServiceAllowance, { foreignKey: 'allowanceId' })
    public serviceAllowance: HasOne<typeof ServiceAllowance>;
}
