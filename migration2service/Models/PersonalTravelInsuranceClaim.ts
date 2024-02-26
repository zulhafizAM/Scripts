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
import PersonalInsuranceProcess from './PersonalInsuranceProcess';

export default class PersonalTravelInsuranceClaim extends BaseModel {
    public static table = 'personalTravelInsuranceClaims';
    public static primaryKey = 'id';
    public static incrementing = false;

    public static namingStrategy = new CamelCaseNamingStrategy();

    @column({ isPrimary: true, columnName: 'id' })
    public id: bigint;

    @column({ columnName: 'allowanceId' })
    public allowanceId: bigint;

    @column({ columnName: 'insuranceTypes' })
    public insuranceTypes: string;

    @column.dateTime({ columnName: 'startTravelDate' })
    public startTravelDate: DateTime;

    @column.dateTime({ columnName: 'endTravelDate' })
    public endTravelDate: DateTime;

    @column({ columnName: 'reason' })
    public reason: string;

    @column({ columnName: 'region' })
    public region: string;

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

    @hasOne(() => PersonalInsuranceProcess, { foreignKey: 'insuranceId' })
    public personalInsuranceProcess: HasOne<typeof PersonalInsuranceProcess>;
}
