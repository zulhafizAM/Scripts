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
import ServiceAllowance from './ServiceAllowance';
import EmployeeWelfareFundProcess from './EmployeeWelfareFundProcess';

export default class EmployeeWelfareFund extends BaseModel {
    public static table = 'employeeWelfareFunds';
    public static primaryKey = 'id';
    public static incrementing = false;

    public static namingStrategy = new CamelCaseNamingStrategy();

    @column({ isPrimary: true, columnName: 'id', serializeAs: null })
    public id: bigint;

    @column({ columnName: 'allowanceId', serializeAs: null })
    public allowanceId: bigint;

    @column({ columnName: 'typeOfWelfare' })
    public typeOfWelfare: string;

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

    @belongsTo(() => ServiceAllowance, {
        foreignKey: 'allowanceId',
        onQuery: (query) => {
            query.where('active', true);
        },
    })
    public allowance: BelongsTo<typeof ServiceAllowance>;

    @hasOne(() => EmployeeWelfareFundProcess, {
        foreignKey: 'welfareFundId',
        onQuery: (query) => {
            query.where('active', true);
        },
    })
    public employeeWelfareFundProcess: HasOne<
        typeof EmployeeWelfareFundProcess
    >;
}
