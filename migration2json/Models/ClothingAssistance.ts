import { DateTime } from 'luxon';
import { column, BaseModel, hasOne, HasOne } from '@ioc:Adonis/Lucid/Orm';
import CamelCaseNamingStrategy from 'App/Strategies/CamelCaseNamingStrategy';
import ClothingAssistanceProcess from './ClothingAssistanceProcess';

export default class ClothingAssistance extends BaseModel {
    public static table = 'clothingAssistances';
    public static primaryKey = 'id';
    public static incrementing = false;

    public static namingStrategy = new CamelCaseNamingStrategy();

    @column({ isPrimary: true, columnName: 'id' })
    public id: bigint;

    @column({ columnName: 'reason' })
    public reason: string;

    @column({ columnName: 'totalPersonalClaim' })
    public totalPersonalClaim: number;

    @column({ columnName: 'totalPartnerClaim' })
    public totalPartnerClaim: number;

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

    @hasOne(() => ClothingAssistanceProcess, { foreignKey: 'clothingId' })
    public clothingAssistanceProcess: HasOne<typeof ClothingAssistanceProcess>;
}