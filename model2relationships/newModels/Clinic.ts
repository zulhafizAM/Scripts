import { DateTime } from 'luxon';
import {
    column,
    BaseModel,
    belongsTo,
    BelongsTo,
    hasOne,
    HasOne,
    HasMany,
    hasMany,
    beforeFind,
    scope,
} from '@ioc:Adonis/Lucid/Orm';
import CamelCaseNamingStrategy from 'App/Strategies/CamelCaseNamingStrategy';
import District from './District';
import ClinicApproveProcess from './ClinicApproveProcess';
import Permission from './Permission';
import MedicalClaim from './MedicalClaim';
import ClinicClaim from './ClinicClaim';

export default class Clinic extends BaseModel {
    public static table = 'clinics';
    public static primaryKey = 'id';
    public static incrementing = false;

    public static namingStrategy = new CamelCaseNamingStrategy();

    public static withPreloadedList = scope<typeof Clinic>((query) => {
        query
            .preload('districts')
            .preload('clinicApproveProcess', (query) =>
                query
                    .preload('comfirmer', employeePreloads)
                    .preload('supporter', employeePreloads)
                    .preload('approver', employeePreloads)
            )
            .preload('permission')
            .preload('medicalClaims')
            .preload('clinicClaims');
    });
    
    @column({ isPrimary: true, columnName: 'id', serializeAs: null })
    public id: bigint;
    
    @column({ columnName: 'districtId', serializeAs: null })
    public districtId: bigint;
    
    @column({ columnName: 'code' })
    public code: string;
    
    @column({ columnName: 'year' })
    public year: number;
    
    @column({ columnName: 'allocatedAmount' })
    public allocatedAmount: number;
    
    @column({ columnName: 'totalClaimed' })
    public totalClaimed: number;
    
    @column.dateTime({ columnName: 'applicationDate' })
    public applicationDate: DateTime;
    
    @column.dateTime({ columnName: 'panelAppointedDate' })
    public panelAppointedDate: DateTime;
    
    @column.dateTime({ columnName: 'panelContractEndDate' })
    public panelContractEndDate: DateTime;
    
    @column({ columnName: 'name' })
    public name: string;
    
    @column({ columnName: 'address' })
    public address: string;
    
    @column.dateTime({ columnName: 'foundationDate' })
    public foundationDate: DateTime;
    
    @column({ columnName: 'clinicType' })
    public clinicType: string;
    
    @column({ columnName: 'ownershipStatus' })
    public ownershipStatus: string;
    
    @column({ columnName: 'registeredMedicalPractitioner' })
    public registeredMedicalPractitioner: string;
    
    @column({ columnName: 'branchCount' })
    public branchCount: number;
    
    @column({ columnName: 'clinicOfficeDistance' })
    public clinicOfficeDistance: number;
    
    @column({ columnName: 'nearestClinicDistance' })
    public nearestClinicDistance: number;
    
    @column({ columnName: 'operationHours' })
    public operationHours: string;
    
    @column({ columnName: 'contactNumber' })
    public contactNumber: string;
    
    @column({ columnName: 'registerMedical' })
    public registerMedical: string;
    
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
    
    @belongsTo(() => District, {
        foreignKey: 'districtId',
        onQuery: (query) => {
        query.where('active', true);
        },
    })
    public districts: BelongsTo<typeof District>;
    
    @hasOne(() => ClinicApproveProcess, {
        foreignKey: 'clinicId',
        onQuery: (query) => {
        query.where('active', true);
        },
    })
    public clinicApproveProcess: HasOne<typeof ClinicApproveProcess>;
    
    @hasOne(() => Permission, {
        foreignKey: 'roleId',
        onQuery: (query) => {
        query.where('active', true);
        },
    })
    public permission: HasOne<typeof Permission>;
    
    @hasMany(() => MedicalClaim, {
        foreignKey: 'clinicId',
        onQuery: (query) => {
        query.where('active', true);
        },
    })
    public medicalClaims: HasMany<typeof MedicalClaim>;
    
    @hasMany(() => ClinicClaim, {
        foreignKey: 'clinicId',
        onQuery: (query) => {
        query.where('active', true);
        },
    })
    public clinicClaims: HasMany<typeof ClinicClaim>;
    
    @beforeFind()
    public static async preloadTables(query) {
        query
            .preload('district')
            .preload('clinicApproveProcess', (query) =>
                query
                    .preload('comfirmer', employeePreloads)
                    .preload('supporter', employeePreloads)
                    .preload('approver', employeePreloads)
            )
            .preload('permission')
            .preload('medicalClaims')
            .preload('clinicClaims');
    }
}