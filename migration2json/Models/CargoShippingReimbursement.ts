import { DateTime } from 'luxon';
import { column, BaseModel, belongsTo, BelongsTo, hasOne, HasOne } from '@ioc:Adonis/Lucid/Orm';
import CamelCaseNamingStrategy from 'App/Strategies/CamelCaseNamingStrategy';
import ServiceAllowance from './ServiceAllowance';
import CargoShippingProcess from './CargoShippingProcess';

export default class CargoShippingReimbursement extends BaseModel {
    public static table = 'cargoShippingReimbursements';
    public static primaryKey = 'id';
    public static incrementing = false;

    public static namingStrategy = new CamelCaseNamingStrategy();

    @column({ isPrimary: true, columnName: 'id' })
    public id: bigint;

    @column({ columnName: 'allowanceId' })
    public allowanceId: bigint;

    @column.dateTime({ columnName: 'startShippingDate' })
    public startShippingDate: DateTime;

    @column.dateTime({ columnName: 'endShippingDate' })
    public endShippingDate: DateTime;

    @column({ columnName: 'startPoint' })
    public startPoint: string;

    @column({ columnName: 'endPoint' })
    public endPoint: string;

    @column({ columnName: 'distance' })
    public distance: number;

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

    @belongsTo(() => ServiceAllowance, { foreignKey: 'allowanceId' })
    public allowance: BelongsTo<typeof ServiceAllowance>;

    @hasOne(() => CargoShippingProcess, { foreignKey: 'shippingId' })
    public cargoShippingProcess: HasOne<typeof CargoShippingProcess>;
}