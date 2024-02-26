import { DateTime } from 'luxon';
import {
    column,
    BaseModel,
    belongsTo,
    BelongsTo,
    hasOne,
    HasOne,
    beforeFind,
    scope,
} from '@ioc:Adonis/Lucid/Orm';
import CamelCaseNamingStrategy from 'App/Strategies/CamelCaseNamingStrategy';
import ServiceAllowance from './ServiceAllowance';
import HouseMovingProcess from './HouseMovingProcess';

export default class HouseMovingAllowance extends BaseModel {
    public static table = 'houseMovingAllowances';
    public static primaryKey = 'id';
    public static incrementing = false;

    public static namingStrategy = new CamelCaseNamingStrategy();

    public static withPreloadedList = scope<typeof HouseMovingAllowance>((query) => {
        query
            .preload('allowance')
            .preload('houseMovingProcess', (query) =>
                query
                    .preload('confirmer', employeePreloads)
                    .preload('verifier', employeePreloads)
                    .preload('supporter', employeePreloads)
                    .preload('approver', employeePreloads)
            );
    });
    
    @column({ isPrimary: true, columnName: 'id', serializeAs: null })
    public id: bigint;
    
    @column({ columnName: 'allowanceId', serializeAs: null })
    public allowanceId: bigint;
    
    @column.dateTime({ columnName: 'movingDate' })
    public movingDate: DateTime;
    
    @column({ columnName: 'oldAddress' })
    public oldAddress: string;
    
    @column({ columnName: 'newAddress' })
    public newAddress: string;
    
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
    
    @hasOne(() => HouseMovingProcess, {
        foreignKey: 'houseMovingId',
        onQuery: (query) => {
        query.where('active', true);
        },
    })
    public houseMovingProcess: HasOne<typeof HouseMovingProcess>;
    
    @beforeFind()
    public static async preloadTables(query) {
        query
            .preload('allowance')
            .preload('houseMovingProcess', (query) =>
                query
                    .preload('confirmer', employeePreloads)
                    .preload('verifier', employeePreloads)
                    .preload('supporter', employeePreloads)
                    .preload('approver', employeePreloads)
            );
    }
}