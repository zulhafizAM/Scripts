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
import EducationFundApplication from './EducationFundApplication';
import Employee from './Employee';
import { employeePreloads } from 'App/Helpers/preloads';

export default class FundApplicationProcess extends BaseModel {
    public static table = 'fundApplicationProcess';
    public static primaryKey = 'id';
    public static incrementing = false;

    public static namingStrategy = new CamelCaseNamingStrategy();

    public static withPreloadedList = scope<typeof FundApplicationProcess>((query) => {
        query
            .preload('fund')
            .preload('supporter', employeePreloads)
            .preload('certifier', employeePreloads)
            .preload('confirmer', employeePreloads)
            .preload('verifier', employeePreloads);
    });
    
    @column({ isPrimary: true, columnName: 'id', serializeAs: null })
    public id: bigint;
    
    @column({ columnName: 'fundId', serializeAs: null })
    public fundId: bigint;
    
    @column({ columnName: 'supporterId', serializeAs: null })
    public supporterId: bigint;
    
    @column({ columnName: 'supportedStatus' })
    public supportedStatus: string;
    
    @column({ columnName: 'supportedRemark' })
    public supportedRemark: string;
    
    @column.dateTime({ columnName: 'supportedDate' })
    public supportedDate: DateTime;
    
    @column({ columnName: 'certifierId', serializeAs: null })
    public certifierId: bigint;
    
    @column({ columnName: 'certifiedStatus' })
    public certifiedStatus: string;
    
    @column({ columnName: 'certifiedRemark' })
    public certifiedRemark: string;
    
    @column.dateTime({ columnName: 'certifiedDate' })
    public certifiedDate: DateTime;
    
    @column({ columnName: 'confirmerId', serializeAs: null })
    public confirmerId: bigint;
    
    @column({ columnName: 'confirmedStatus' })
    public confirmedStatus: string;
    
    @column({ columnName: 'confirmedRemark' })
    public confirmedRemark: string;
    
    @column.dateTime({ columnName: 'confirmedDate' })
    public confirmedDate: DateTime;
    
    @column({ columnName: 'verifierId', serializeAs: null })
    public verifierId: bigint;
    
    @column({ columnName: 'verifiedStatus' })
    public verifiedStatus: string;
    
    @column({ columnName: 'verifiedRemark' })
    public verifiedRemark: string;
    
    @column.dateTime({ columnName: 'verifiedDate' })
    public verifiedDate: DateTime;
    
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
    
    @belongsTo(() => EducationFundApplication, {
        foreignKey: 'fundId',
        onQuery: (query) => {
        query.where('active', true);
        },
    })
    public fund: BelongsTo<typeof EducationFundApplication>;
    
    @belongsTo(() => Employee, {
        foreignKey: 'supporterId',
        onQuery: (query) => {
        query.where('active', true);
        },
    })
    public supporter: BelongsTo<typeof Employee>;
    
    @belongsTo(() => Employee, {
        foreignKey: 'certifierId',
        onQuery: (query) => {
        query.where('active', true);
        },
    })
    public certifier: BelongsTo<typeof Employee>;
    
    @belongsTo(() => Employee, {
        foreignKey: 'confirmerId',
        onQuery: (query) => {
        query.where('active', true);
        },
    })
    public confirmer: BelongsTo<typeof Employee>;
    
    @belongsTo(() => Employee, {
        foreignKey: 'verifierId',
        onQuery: (query) => {
        query.where('active', true);
        },
    })
    public verifier: BelongsTo<typeof Employee>;
    
    @beforeFind()
    public static async preloadTables(query) {
        query
            .preload('fund')
            .preload('supporter', employeePreloads)
            .preload('certifier', employeePreloads)
            .preload('confirmer', employeePreloads)
            .preload('verifier', employeePreloads);
    }
}