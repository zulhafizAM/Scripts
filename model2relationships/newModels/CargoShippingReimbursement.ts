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
import CargoShippingProcess from './CargoShippingProcess';

export default class CargoShippingReimbursement extends BaseModel {
    public static table = 'cargoShippingReimbursements';
    public static primaryKey = 'id';
    public static incrementing = false;

    public static namingStrategy = new CamelCaseNamingStrategy();

    public static withPreloadedList = scope<typeof CargoShippingReimbursement>((query) => {
        query
            .preload('allowance')
            .preload('cargoShippingProcess', (query) =>
                query
                    .preload('verifier', employeePreloads)
                    .preload('supporter', employeePreloads)
                    .preload('approver', employeePreloads)
            );
    });
    
    @column({ isPrimary: true, columnName: 'id', serializeAs: null })
    public id: bigint;
    
    @column({ columnName: 'allowanceId', serializeAs: null })
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
    
    @hasOne(() => CargoShippingProcess, {
        foreignKey: 'shippingId',
        onQuery: (query) => {
        query.where('active', true);
        },
    })
    public cargoShippingProcess: HasOne<typeof CargoShippingProcess>;
    
    @beforeFind()
    public static async preloadTables(query) {
        query
            .preload('allowance')
            .preload('cargoShippingProcess', (query) =>
                query
                    .preload('verifier', employeePreloads)
                    .preload('supporter', employeePreloads)
                    .preload('approver', employeePreloads)
            );
    }
}