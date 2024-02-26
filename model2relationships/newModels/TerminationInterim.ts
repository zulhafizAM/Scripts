import { DateTime } from 'luxon';
import {
    column,
    BaseModel,
    hasOne,
    HasOne,
    beforeFind,
    scope,
} from '@ioc:Adonis/Lucid/Orm';
import CamelCaseNamingStrategy from 'App/Strategies/CamelCaseNamingStrategy';
import TerminationInterimProcess from './TerminationInterimProcess';

export default class TerminationInterim extends BaseModel {
    public static table = 'terminationInterims';
    public static primaryKey = 'id';
    public static incrementing = false;

    public static namingStrategy = new CamelCaseNamingStrategy();

    public static withPreloadedList = scope<typeof TerminationInterim>((query) => {
        query
            .preload('terminationInterimProcess', (query) =>
                query
                    .preload('supporter', employeePreloads)
                    .preload('verifier', employeePreloads)
                    .preload('approver', employeePreloads)
            );
    });
    
    @column({ isPrimary: true, columnName: 'id', serializeAs: null })
    public id: bigint;
    
    @column({ columnName: 'isInterimCompleted' })
    public isInterimCompleted: boolean;
    
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
    
    @hasOne(() => TerminationInterimProcess, {
        foreignKey: 'terminationId',
        onQuery: (query) => {
        query.where('active', true);
        },
    })
    public terminationInterimProcess: HasOne<typeof TerminationInterimProcess>;
    
    @beforeFind()
    public static async preloadTables(query) {
        query
            .preload('terminationInterimProcess', (query) =>
                query
                    .preload('supporter', employeePreloads)
                    .preload('verifier', employeePreloads)
                    .preload('approver', employeePreloads)
            );
    }
}