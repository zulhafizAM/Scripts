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
import ContractDetail from './ContractDetail';
import Meeting from './Meeting';
import ContractLifeCycleProcess from './ContractLifeCycleProcess';

export default class ContractLifeCycle extends BaseModel {
    public static table = 'contractLifeCycles';
    public static primaryKey = 'id';
    public static incrementing = false;

    public static namingStrategy = new CamelCaseNamingStrategy();

    @column({ isPrimary: true, columnName: 'id', serializeAs: null })
    public id: bigint;

    @column({ columnName: 'contractId', serializeAs: null })
    public contractId: bigint;

    @column({ columnName: 'meetingId', serializeAs: null })
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

    @belongsTo(() => ContractDetail, {
        foreignKey: 'contractId',
        onQuery: (query) => {
            query.where('active', true);
        },
    })
    public contract: BelongsTo<typeof ContractDetail>;

    @belongsTo(() => Meeting, {
        foreignKey: 'meetingId',
        onQuery: (query) => {
            query.where('active', true);
        },
    })
    public meeting: BelongsTo<typeof Meeting>;

    @hasOne(() => ContractLifeCycleProcess, {
        foreignKey: 'lifecycleId',
        onQuery: (query) => {
            query.where('active', true);
        },
    })
    public contractLifeCycleProcess: HasOne<typeof ContractLifeCycleProcess>;
}
