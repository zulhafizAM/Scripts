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
import SelfTransfers from './SelfTransfers';

export default class SelfTransferReason extends BaseModel {
    public static table = 'selfTransferReasons';
    public static primaryKey = 'id';
    public static incrementing = false;

    public static namingStrategy = new CamelCaseNamingStrategy();

    public static withPreloadedList = scope<typeof SelfTransferReason>((query) => {
        query
            .preload('selfTransfer');
    });
    
    @column({ isPrimary: true, columnName: 'id', serializeAs: null })
    public id: bigint;
    
    @column({ columnName: 'selfTransferId', serializeAs: null })
    public selfTransferId: bigint;
    
    @column({ columnName: 'reason' })
    public reason: string;
    
    @column({ columnName: 'remark' })
    public reasonRemark: string;
    
    @column({ columnName: 'distanceFromWork' })
    public distanceFromWork: number;
    
    @column({ columnName: 'employerName' })
    public employerName: string;
    
    @column.dateTime({ columnName: 'startServiceDate' })
    public startServiceDate: DateTime;
    
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
    
    @belongsTo(() => SelfTransfers, {
        foreignKey: 'selfTransferId',
        onQuery: (query) => {
        query.where('active', true);
        },
    })
    public selfTransfer: BelongsTo<typeof SelfTransfers>;
    
    @beforeFind()
    public static async preloadTables(query) {
        query
            .preload('selfTransfer');
    }
}