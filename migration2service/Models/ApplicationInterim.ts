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
import EmploymentInterim from './EmploymentInterim';
import ApplicationInterimProcess from './ApplicationInterimProcess';
import ChecklistInterim from './ChecklistInterim';

export default class ApplicationInterim extends BaseModel {
    public static table = 'applicationInterims';
    public static primaryKey = 'id';
    public static incrementing = false;

    public static namingStrategy = new CamelCaseNamingStrategy();

    @column({ isPrimary: true, columnName: 'id' })
    public id: bigint;

    @column({ columnName: 'interimId' })
    public interimId: bigint;

    @column({ columnName: 'isSkipSeniority' })
    public isSkipSeniority: boolean;

    @column({ columnName: 'skippingRemark' })
    public skippingRemark: string;

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

    @belongsTo(() => EmploymentInterim, { foreignKey: 'interimId' })
    public interim: BelongsTo<typeof EmploymentInterim>;

    @hasOne(() => ApplicationInterimProcess, { foreignKey: 'applicationId' })
    public applicationInterimProcess: HasOne<typeof ApplicationInterimProcess>;

    @hasOne(() => ChecklistInterim, { foreignKey: 'applicationId' })
    public checklistInterim: HasOne<typeof ChecklistInterim>;
}
