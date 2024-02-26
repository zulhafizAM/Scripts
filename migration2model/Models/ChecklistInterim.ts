import { DateTime } from 'luxon';
import { column, BaseModel, belongsTo, BelongsTo } from '@ioc:Adonis/Lucid/Orm';
import CamelCaseNamingStrategy from 'App/Strategies/CamelCaseNamingStrategy';
import Employee from './Employee';
import Employee from './Employee';

export default class ChecklistInterim extends BaseModel {
    public static table = 'checklistInterim';
    public static primaryKey = 'id';
    public static incrementing = false;

    public static namingStrategy = new CamelCaseNamingStrategy();

    @column({ isPrimary: true, columnName: 'id' })
    public id: bigint;

    @column({ columnName: 'preparerId' })
    public preparerId: bigint;

    @column({ columnName: 'checkerId' })
    public checkerId: bigint;

    @column({ columnName: 'applicationLetterStatus' })
    public applicationLetterStatus: boolean;

    @column({ columnName: 'applicationLetterCheck' })
    public applicationLetterCheck: boolean;

    @column({ columnName: 'certifiedFormStatus' })
    public certifiedFormStatus: boolean;

    @column({ columnName: 'certifiedFormCheck' })
    public certifiedFormCheck: boolean;

    @column({ columnName: 'organisationalChartStatus' })
    public organisationalChartStatus: boolean;

    @column({ columnName: 'organisationalChartCheck' })
    public organisationalChartCheck: boolean;

    @column({ columnName: 'jobDescriptionStatus' })
    public jobDescriptionStatus: boolean;

    @column({ columnName: 'jobDescriptionCheck' })
    public jobDescriptionCheck: boolean;

    @column({ columnName: 'orderLetterStatus' })
    public orderLetterStatus: boolean;

    @column({ columnName: 'orderLetterCheck' })
    public orderLetterCheck: boolean;

    @column({ columnName: 'leaveStatementStatus' })
    public leaveStatementStatus: boolean;

    @column({ columnName: 'leaveStatementCheck' })
    public leaveStatementCheck: boolean;

    @column({ columnName: 'documentListStatus' })
    public documentListStatus: boolean;

    @column({ columnName: 'documentListCheck' })
    public documentListCheck: boolean;

    @column({ columnName: 'justificationStatus' })
    public justificationStatus: boolean;

    @column({ columnName: 'justificationCheck' })
    public justificationCheck: boolean;

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

    @belongsTo(() => Employee, { foreignKey: 'preparerId' })
    public preparer: BelongsTo<typeof Employee>;

    @belongsTo(() => Employee, { foreignKey: 'checkerId' })
    public checker: BelongsTo<typeof Employee>;
}