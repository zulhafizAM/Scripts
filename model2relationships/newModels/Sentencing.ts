import { DateTime } from 'luxon';
import {
    column,
    BaseModel,
    belongsTo,
    BelongsTo,
    beforeFind,
    scope,
} from '@ioc:Adonis/Lucid/Orm';
import CamelCaseNamingStrategy from 'App/Strategies/CamelCaseNamingStrategy';
import IntegrityProceeding from './IntegrityProceeding';
import PenaltyType from './PenaltyType';

export default class Sentencing extends BaseModel {
    public static table = 'sentencings';
    public static primaryKey = 'id';
    public static incrementing = false;

    public static namingStrategy = new CamelCaseNamingStrategy();

    public static withPreloadedList = scope<typeof Sentencing>((query) => {
        query
            .preload('integrity')
            .preload('penaltyType');
    });
    
    @column({ isPrimary: true, columnName: 'id', serializeAs: null })
    public id: bigint;
    
    @column({ columnName: 'integrityId', serializeAs: null })
    public integrityId: bigint;
    
    @column({ columnName: 'penaltyTypeId', serializeAs: null })
    public penaltyTypeId: bigint;
    
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
    
    @belongsTo(() => IntegrityProceeding, {
        foreignKey: 'integrityId',
        onQuery: (query) => {
        query.where('active', true);
        },
    })
    public integrity: BelongsTo<typeof IntegrityProceeding>;
    
    @belongsTo(() => PenaltyType, {
        foreignKey: 'penaltyTypeId',
        onQuery: (query) => {
        query.where('active', true);
        },
    })
    public penaltyType: BelongsTo<typeof PenaltyType>;
    
    @beforeFind()
    public static async preloadTables(query) {
        query
            .preload('integrity')
            .preload('penaltyType');
    }
}