import { DateTime } from 'luxon';
import { column, BaseModel, belongsTo, BelongsTo, hasOne, HasOne } from '@ioc:Adonis/Lucid/Orm';
import CamelCaseNamingStrategy from 'App/Strategies/CamelCaseNamingStrategy';
import Employee from './Employee';
import ForcedRetirementProcess from './ForcedRetirementProcess';

export default class ForcedRetirement extends BaseModel {
    public static table = 'forcedRetirements';
    public static primaryKey = 'id';
    public static incrementing = false;

    public static namingStrategy = new CamelCaseNamingStrategy();

    @column({ isPrimary: true, columnName: 'id' })
    public id: bigint;

    @column({ columnName: 'employeeId' })
    public employeeId: bigint;

    @column({ columnName: 'status' })
    public status: string;

    @column({ columnName: 'remark' })
    public remark: string;

    @column.dateTime({ columnName: 'applicationDate' })
    public applicationDate: DateTime;

    @column.dateTime({ columnName: 'sendDate' })
    public sendDate: DateTime;

    @column.dateTime({ columnName: 'newRetirementDate' })
    public newRetirementDate: DateTime;

    @column({ columnName: 'reason' })
    public reason: string;

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

    @hasOne(() => ForcedRetirementProcess, { foreignKey: 'forcedId' })
    public forcedRetirementProcess: HasOne<typeof ForcedRetirementProcess>;
}