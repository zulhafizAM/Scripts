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
import Clinic from './Clinic';
import ClinicClaimProcess from './ClinicClaimProcess';

export default class ClinicClaim extends BaseModel {
    public static table = 'clinicClaims';
    public static primaryKey = 'id';
    public static incrementing = false;

    public static namingStrategy = new CamelCaseNamingStrategy();

    @column({ isPrimary: true, columnName: 'id' })
    public id: bigint;

    @column({ columnName: 'clinicId' })
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

    @belongsTo(() => Clinic, { foreignKey: 'clinicId' })
    public clinic: BelongsTo<typeof Clinic>;

    @hasOne(() => ClinicClaimProcess, { foreignKey: 'claimId' })
    public clinicClaimProcess: HasOne<typeof ClinicClaimProcess>;
}
