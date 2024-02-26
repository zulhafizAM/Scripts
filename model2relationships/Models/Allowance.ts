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

    @column({ isPrimary: true, columnName: 'id', serializeAs: null })
    public id: bigint;

    @column({ columnName: 'salaryDetailId', serializeAs: null })
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

    @hasOne(() => ServiceAllowance, {
        foreignKey: 'allowanceId',
        onQuery: (query) => {
            query.where('active', true);
        },
    })
    public serviceAllowance: HasOne<typeof ServiceAllowance>;
}
