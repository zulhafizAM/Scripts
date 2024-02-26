import { DateTime } from 'luxon';
import { column, BaseModel, belongsTo, BelongsTo } from '@ioc:Adonis/Lucid/Orm';
import CamelCaseNamingStrategy from 'App/Strategies/CamelCaseNamingStrategy';
import IntegrityProceeding from './IntegrityProceeding';
import PenaltyType from './PenaltyType';

export default class Sentencing extends BaseModel {
    public static table = 'sentencings';
    public static primaryKey = 'id';
    public static incrementing = false;

    public static namingStrategy = new CamelCaseNamingStrategy();

    @column({ isPrimary: true, columnName: 'id' })
    public id: bigint;

    @column({ columnName: 'integrityId' })
    public integrityId: bigint;

    @column({ columnName: 'penaltyTypeId' })
    public penaltyTypeId: bigint;

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

    @belongsTo(() => IntegrityProceeding, { foreignKey: 'integrityId' })
    public integrity: BelongsTo<typeof IntegrityProceeding>;

    @belongsTo(() => PenaltyType, { foreignKey: 'penaltyTypeId' })
    public penaltyType: BelongsTo<typeof PenaltyType>;
}
