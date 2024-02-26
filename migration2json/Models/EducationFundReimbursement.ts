import { DateTime } from 'luxon';
import { column, BaseModel, belongsTo, BelongsTo, hasOne, HasOne } from '@ioc:Adonis/Lucid/Orm';
import CamelCaseNamingStrategy from 'App/Strategies/CamelCaseNamingStrategy';
import Employee from './Employee';
import FundReimbursementProcess from './FundReimbursementProcess';

export default class EducationFundReimbursement extends BaseModel {
    public static table = 'educationFundReimbursements';
    public static primaryKey = 'id';
    public static incrementing = false;

    public static namingStrategy = new CamelCaseNamingStrategy();

    @column({ isPrimary: true, columnName: 'id' })
    public id: bigint;

    @column({ columnName: 'employeeId' })
    public employeeId: bigint;

    @column({ columnName: 'academicLevel' })
    public academicLevel: string;

    @column({ columnName: 'courseName' })
    public courseName: string;

    @column({ columnName: 'institution' })
    public institution: string;

    @column({ columnName: 'learningInstitution' })
    public learningInstitution: string;

    @column({ columnName: 'studyDuration' })
    public studyDuration: number;

    @column.dateTime({ columnName: 'entryDateToInstituition' })
    public entryDateToInstituition: DateTime;

    @column({ columnName: 'educationType' })
    public educationType: string;

    @column({ columnName: 'applicationType' })
    public applicationType: string;

    @column({ columnName: 'status' })
    public status: string;

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

    @belongsTo(() => Employee, { foreignKey: 'employeeId' })
    public employee: BelongsTo<typeof Employee>;

    @hasOne(() => FundReimbursementProcess, { foreignKey: 'fundId' })
    public fundReimbursementProcess: HasOne<typeof FundReimbursementProcess>;
}