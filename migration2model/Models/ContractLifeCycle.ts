import { DateTime } from 'luxon';
import { column, BaseModel, belongsTo, BelongsTo, hasOne, HasOne } from '@ioc:Adonis/Lucid/Orm';
import CamelCaseNamingStrategy from 'App/Strategies/CamelCaseNamingStrategy';
import ContractDetail from './ContractDetail';
import Meeting from './Meeting';
import ContractLifeCycleProcess from './ContractLifeCycleProcess';

export default class ContractLifeCycle extends BaseModel {
    public static table = 'contractLifeCycles';
    public static primaryKey = 'id';
    public static incrementing = false;

    public static namingStrategy = new CamelCaseNamingStrategy();

    @column({ isPrimary: true, columnName: 'id' })
    public id: bigint;

    @column({ columnName: 'contractId' })
    public contractId: bigint;

    @column({ columnName: 'meetingId' })
    public meetingId: bigint;

    @column({ columnName: 'workPerformanceRating' })
    public workPerformanceRating: number;

    @column({ columnName: 'individualMark' })
    public individualMark: number;

    @column({ columnName: 'overallMark' })
    public overallMark: number;

    @column({ columnName: 'meetingResult' })
    public meetingResult: string;

    @column({ columnName: 'meetingRemark' })
    public meetingRemark: string;

    @column.dateTime({ columnName: 'meetingResultDate' })
    public meetingResultDate: DateTime;

    @column({ columnName: 'document' })
    public document: Blob;

    @column({ columnName: 'status' })
    public status: string;

    @column({ columnName: 'remark' })
    public remark: string;

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

    @belongsTo(() => ContractDetail, { foreignKey: 'contractId' })
    public contract: BelongsTo<typeof ContractDetail>;

    @belongsTo(() => Meeting, { foreignKey: 'meetingId' })
    public meeting: BelongsTo<typeof Meeting>;

    @hasOne(() => ContractLifeCycleProcess, { foreignKey: 'lifecycleId' })
    public contractLifeCycleProcess: HasOne<typeof ContractLifeCycleProcess>;
}