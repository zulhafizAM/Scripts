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
import ServiceAllowance from './ServiceAllowance';
import State from './State';
import StateVisitAllowanceProcess from './StateVisitAllowanceProcess';

export default class StateVisitAllowance extends BaseModel {
    public static table = 'stateVisitAllowances';
    public static primaryKey = 'id';
    public static incrementing = false;

    public static namingStrategy = new CamelCaseNamingStrategy();

    @column({ isPrimary: true, columnName: 'id', serializeAs: null })
    public id: bigint;

    @column({ columnName: 'allowanceId', serializeAs: null })
    public allowanceId: bigint;

    @column({ columnName: 'stateId', serializeAs: null })
    public stateId: bigint;

    @column({ columnName: 'reason' })
    public reason: string;

    @column({ columnName: 'amount' })
    public amount: number;

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

    @belongsTo(() => ServiceAllowance, {
        foreignKey: 'allowanceId',
        onQuery: (query) => {
            query.where('active', true);
        },
    })
    public allowance: BelongsTo<typeof ServiceAllowance>;

    @belongsTo(() => State, {
        foreignKey: 'stateId',
        onQuery: (query) => {
            query.where('active', true);
        },
    })
    public state: BelongsTo<typeof State>;

    @hasOne(() => StateVisitAllowanceProcess, {
        foreignKey: 'clothingId',
        onQuery: (query) => {
            query.where('active', true);
        },
    })
    public stateVisitAllowanceProcess: HasOne<
        typeof StateVisitAllowanceProcess
    >;
}
