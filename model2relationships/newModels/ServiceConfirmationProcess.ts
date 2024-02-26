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
import Employee from './Employee';
import { employeePreloads } from 'App/Helpers/preloads';

export default class ServiceConfirmationProcess extends BaseModel {
    public static table = 'serviceConfirmationProcess';
    public static primaryKey = 'id';
    public static incrementing = false;

    public static namingStrategy = new CamelCaseNamingStrategy();

    public static withPreloadedList = scope<typeof ServiceConfirmationProcess>((query) => {
        query
            .preload('integrityCertifier', employeePreloads)
            .preload('directorCertifier', employeePreloads);
    });
    
    @column({ isPrimary: true, columnName: 'id', serializeAs: null })
    public id: bigint;
    
    @column({ columnName: 'integrityCertifierId', serializeAs: null })
    public integrityCertifierId: bigint;
    
    @column({ columnName: 'integrityCertifiedStatus' })
    public integrityCertifiedStatus: string;
    
    @column({ columnName: 'integrityCertifiedRemark' })
    public integrityCertifiedRemark: string;
    
    @column.dateTime({ columnName: 'integrityCertifiedDate' })
    public integrityCertifiedDate: DateTime;
    
    @column({ columnName: 'directorCertifierId', serializeAs: null })
    public directorCertifierId: bigint;
    
    @column({ columnName: 'directorCertifiedStatus' })
    public directorCertifiedStatus: string;
    
    @column({ columnName: 'directorCertifiedRemark' })
    public directorCertifiedRemark: string;
    
    @column.dateTime({ columnName: 'directorCertifiedDate' })
    public directorCertifiedDate: DateTime;
    
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
    
    @belongsTo(() => Employee, {
        foreignKey: 'integrityCertifierId',
        onQuery: (query) => {
        query.where('active', true);
        },
    })
    public integrityCertifier: BelongsTo<typeof Employee>;
    
    @belongsTo(() => Employee, {
        foreignKey: 'directorCertifierId',
        onQuery: (query) => {
        query.where('active', true);
        },
    })
    public directorCertifier: BelongsTo<typeof Employee>;
    
    @beforeFind()
    public static async preloadTables(query) {
        query
            .preload('integrityCertifier', employeePreloads)
            .preload('directorCertifier', employeePreloads);
    }
}