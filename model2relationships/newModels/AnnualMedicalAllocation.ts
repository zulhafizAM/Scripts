import { DateTime } from 'luxon';
import {
    column,
    BaseModel,
    belongsTo,
    BelongsTo,
    HasMany,
    hasMany,
    beforeFind,
    scope,
} from '@ioc:Adonis/Lucid/Orm';
import CamelCaseNamingStrategy from 'App/Strategies/CamelCaseNamingStrategy';
import Employee from './Employee';
import MedicalClaim from './MedicalClaim';
import { employeePreloads } from 'App/Helpers/preloads';

export default class AnnualMedicalAllocation extends BaseModel {
    public static table = 'annualMedicalAllocations';
    public static primaryKey = 'id';
    public static incrementing = false;

    public static namingStrategy = new CamelCaseNamingStrategy();

    public static withPreloadedList = scope<typeof AnnualMedicalAllocation>((query) => {
        query
            .preload('employee', employeePreloads)
            .preload('medicalClaims');
    });
    
    @column({ isPrimary: true, columnName: 'id', serializeAs: null })
    public id: bigint;
    
    @column({ columnName: 'employeeId', serializeAs: null })
    public employeeId: bigint;
    
    @column({ columnName: 'month' })
    public month: number;
    
    @column({ columnName: 'year' })
    public year: number;
    
    @column({ columnName: 'allocatedAmount' })
    public allocatedAmount: number;
    
    @column({ columnName: 'totalClaimed' })
    public totalClaimed: number;
    
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
        foreignKey: 'employeeId',
        onQuery: (query) => {
        query.where('active', true);
        },
    })
    public employee: BelongsTo<typeof Employee>;
    
    @hasMany(() => MedicalClaim, {
        foreignKey: 'employeeMedicalAllocId',
        onQuery: (query) => {
        query.where('active', true);
        },
    })
    public medicalClaims: HasMany<typeof MedicalClaim>;
    
    @beforeFind()
    public static async preloadTables(query) {
        query
            .preload('employee', employeePreloads)
            .preload('medicalClaims');
    }
}