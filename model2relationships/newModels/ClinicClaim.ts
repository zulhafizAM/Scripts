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
import Clinic from './Clinic';
import ClinicClaimProcess from './ClinicClaimProcess';

export default class ClinicClaim extends BaseModel {
    public static table = 'clinicClaims';
    public static primaryKey = 'id';
    public static incrementing = false;

    public static namingStrategy = new CamelCaseNamingStrategy();

    public static withPreloadedList = scope<typeof ClinicClaim>((query) => {
        query
            .preload('clinic')
            .preload('clinicClaimProcess', (query) =>
                query
                    .preload('secretaryApprover', employeePreloads)
                    .preload('supporter', employeePreloads)
                    .preload('appointedApprover', employeePreloads)
            );
    });
    
    @column({ isPrimary: true, columnName: 'id', serializeAs: null })
    public id: bigint;
    
    @column({ columnName: 'clinicId', serializeAs: null })
    public clinicId: bigint;
    
    @column.dateTime({ columnName: 'invoiceDate' })
    public invoiceDate: DateTime;
    
    @column({ columnName: 'invoiceNumber' })
    public invoiceNumber: string;
    
    @column({ columnName: 'month' })
    public month: number;
    
    @column({ columnName: 'year' })
    public year: number;
    
    @column({ columnName: 'amount' })
    public amount: number;
    
    @column({ columnName: 'status' })
    public status: string;
    
    @column({ columnName: 'remark' })
    public remark: string;
    
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
    
    @belongsTo(() => Clinic, {
        foreignKey: 'clinicId',
        onQuery: (query) => {
        query.where('active', true);
        },
    })
    public clinic: BelongsTo<typeof Clinic>;
    
    @hasOne(() => ClinicClaimProcess, {
        foreignKey: 'claimId',
        onQuery: (query) => {
        query.where('active', true);
        },
    })
    public clinicClaimProcess: HasOne<typeof ClinicClaimProcess>;
    
    @beforeFind()
    public static async preloadTables(query) {
        query
            .preload('clinic')
            .preload('clinicClaimProcess', (query) =>
                query
                    .preload('secretaryApprover', employeePreloads)
                    .preload('supporter', employeePreloads)
                    .preload('appointedApprover', employeePreloads)
            );
    }
}