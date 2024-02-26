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
import Employee from './Employee';
import FundApplicationProcess from './FundApplicationProcess';

export default class EducationFundApplication extends BaseModel {
    public static table = 'educationFundApplications';
    public static primaryKey = 'id';
    public static incrementing = false;

    public static namingStrategy = new CamelCaseNamingStrategy();

    @column({ isPrimary: true, columnName: 'id', serializeAs: null })
    public id: bigint;

    @column({ columnName: 'employeeId', serializeAs: null })
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

    @belongsTo(() => Employee, {
        foreignKey: 'employeeId',
        onQuery: (query) => {
            query.where('active', true);
        },
    })
    public employee: BelongsTo<typeof Employee>;

    @hasOne(() => FundApplicationProcess, {
        foreignKey: 'fundId',
        onQuery: (query) => {
            query.where('active', true);
        },
    })
    public fundApplicationProcess: HasOne<typeof FundApplicationProcess>;
}
