import { DateTime } from 'luxon';
import {
    column,
    BaseModel,
    belongsTo,
    BelongsTo,
    hasOne,
    HasOne,
    hasMany,
    HasMany,
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

    @column({ isPrimary: true, columnName: 'id' })
    public id: bigint;

    @column({ columnName: 'districtId' })
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

    @column({ columnName: 'active' })
    public active: boolean;

    @column({ columnName: 'createdBy' })
    public createdBy: string;

    @column.dateTime({ columnName: 'createdAt', autoCreate: true })
    public createdAt: DateTime;

    @column({ columnName: 'modifiedBy' })
    public modifiedBy: string;

    @column.dateTime({
        columnName: 'modifiedAt',
        autoCreate: true,
        autoUpdate: true,
    })
    public modifiedAt: DateTime;

    @belongsTo(() => District, { foreignKey: 'districtId' })
    public districts: BelongsTo<typeof District>;

    @hasOne(() => ClinicApproveProcess, { foreignKey: 'clinicId' })
    public clinicApproveProcess: HasOne<typeof ClinicApproveProcess>;

    @hasOne(() => Permission, { foreignKey: 'roleId' })
    public permission: HasOne<typeof Permission>;

    @hasMany(() => MedicalClaim, { foreignKey: 'clinicId' })
    public medicalClaims: HasMany<typeof MedicalClaim>;

    @hasMany(() => ClinicClaim, { foreignKey: 'clinicId' })
    public clinicClaims: HasMany<typeof ClinicClaim>;
}
