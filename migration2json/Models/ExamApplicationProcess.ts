import { DateTime } from 'luxon';
import { column, BaseModel, belongsTo, BelongsTo } from '@ioc:Adonis/Lucid/Orm';
import CamelCaseNamingStrategy from 'App/Strategies/CamelCaseNamingStrategy';
import ExamApplication from './ExamApplication';
import Employee from './Employee';

export default class ExamApplicationProcess extends BaseModel {
    public static table = 'examApplicationProcess';
    public static primaryKey = 'id';
    public static incrementing = false;

    public static namingStrategy = new CamelCaseNamingStrategy();

    @column({ isPrimary: true, columnName: 'id' })
    public id: bigint;

    @column({ columnName: 'applicantId' })
    public applicantId: bigint;

    @column({ columnName: 'verifierId' })
    public verifierId: bigint;

    @column({ columnName: 'verifiedStatus' })
    public verifiedStatus: string;

    @column({ columnName: 'verifiedRemark' })
    public verifiedRemark: string;

    @column.dateTime({ columnName: 'verifiedDate' })
    public verifiedDate: DateTime;

    @column({ columnName: 'comfirmerId' })
    public comfirmerId: bigint;

    @column({ columnName: 'comfirmedStatus' })
    public comfirmedStatus: string;

    @column({ columnName: 'comfirmedRemark' })
    public comfirmedRemark: string;

    @column.dateTime({ columnName: 'comfirmedDate' })
    public comfirmedDate: DateTime;

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

    @belongsTo(() => ExamApplication, { foreignKey: 'applicantId' })
    public applicant: BelongsTo<typeof ExamApplication>;

    @belongsTo(() => Employee, { foreignKey: 'verifierId' })
    public verifier: BelongsTo<typeof Employee>;

    @belongsTo(() => Employee, { foreignKey: 'comfirmerId' })
    public comfirmer: BelongsTo<typeof Employee>;
}