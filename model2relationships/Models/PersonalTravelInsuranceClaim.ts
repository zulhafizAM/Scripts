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

    @column({ isPrimary: true, columnName: 'id', serializeAs: null })
    public id: bigint;

    @column({ columnName: 'allowanceId', serializeAs: null })
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

    @hasOne(() => PersonalInsuranceProcess, {
        foreignKey: 'insuranceId',
        onQuery: (query) => {
            query.where('active', true);
        },
    })
    public personalInsuranceProcess: HasOne<typeof PersonalInsuranceProcess>;
}
