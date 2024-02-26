import { DateTime } from 'luxon';
import { column, BaseModel, belongsTo, BelongsTo, hasOne, HasOne } from '@ioc:Adonis/Lucid/Orm';
import CamelCaseNamingStrategy from 'App/Strategies/CamelCaseNamingStrategy';
import ServiceAllowance from './ServiceAllowance';
import FuneralArrangementProcess from './FuneralArrangementProcess';

export default class FuneralArrangementRequest extends BaseModel {
    public static table = 'funeralArrangementRequests';
    public static primaryKey = 'id';
    public static incrementing = false;

    public static namingStrategy = new CamelCaseNamingStrategy();

    @column({ isPrimary: true, columnName: 'id' })
    public id: bigint;

    @column({ columnName: 'allowanceId' })
    public allowanceId: bigint;

    @column.dateTime({ columnName: 'deathDate' })
    public deathDate: DateTime;

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

    @belongsTo(() => ServiceAllowance, { foreignKey: 'allowanceId' })
    public allowance: BelongsTo<typeof ServiceAllowance>;

    @hasOne(() => FuneralArrangementProcess, { foreignKey: 'funeralArrangementId' })
    public funeralArrangementProcess: HasOne<typeof FuneralArrangementProcess>;
}