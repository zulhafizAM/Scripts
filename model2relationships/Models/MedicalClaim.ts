import { DateTime } from 'luxon';
import {
    column,
    BaseModel,
    belongsTo,
    BelongsTo,
    hasOne,
    HasOne,
} from '@ioc:Adonis/Lucid/Orm';
import CamelCaseNamingStrategy from 'App/Strategies/CamelCaseNamingStrategy';
import AnnualMedicalAllocation from './AnnualMedicalAllocation';
import Clinic from './Clinic';
import MedicalClaimProcess from './MedicalClaimProcess';

export default class MedicalClaim extends BaseModel {
    public static table = 'medicalClaims';
    public static primaryKey = 'id';
    public static incrementing = false;

    public static namingStrategy = new CamelCaseNamingStrategy();

    @column({ isPrimary: true, columnName: 'id', serializeAs: null })
    public id: bigint;

    @column({ columnName: 'employeeMedicalAllocId', serializeAs: null })
    public employeeMedicalAllocId: bigint;

    @column({ columnName: 'clinicId', serializeAs: null })
    public clinicId: bigint;

    @column({ columnName: 'leaveDay' })
    public leaveDay: number;

    @column.dateTime({ columnName: 'treatmentDate' })
    public treatmentDate: DateTime;

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

    @belongsTo(() => AnnualMedicalAllocation, {
        foreignKey: 'employeeMedicalAllocId',
    })
    public employeeMedicalAlloc: BelongsTo<typeof AnnualMedicalAllocation>;

    @belongsTo(() => Clinic, {
        foreignKey: 'clinicId',
        onQuery: (query) => {
            query.where('active', true);
        },
    })
    public clinic: BelongsTo<typeof Clinic>;

    @hasOne(() => MedicalClaimProcess, {
        foreignKey: 'claimId',
        onQuery: (query) => {
            query.where('active', true);
        },
    })
    public medicalClaimProcess: HasOne<typeof MedicalClaimProcess>;
}
