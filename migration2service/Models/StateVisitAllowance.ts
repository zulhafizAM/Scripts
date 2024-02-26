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

    @column({ isPrimary: true, columnName: 'id' })
    public id: bigint;

    @column({ columnName: 'allowanceId' })
    public allowanceId: bigint;

    @column({ columnName: 'stateId' })
    public stateId: bigint;

    @column({ columnName: 'reason' })
    public reason: string;

    @column({ columnName: 'amount' })
    public amount: number;

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

    @belongsTo(() => ServiceAllowance, { foreignKey: 'allowanceId' })
    public allowance: BelongsTo<typeof ServiceAllowance>;

    @belongsTo(() => State, { foreignKey: 'stateId' })
    public state: BelongsTo<typeof State>;

    @hasOne(() => StateVisitAllowanceProcess, { foreignKey: 'clothingId' })
    public stateVisitAllowanceProcess: HasOne<
        typeof StateVisitAllowanceProcess
    >;
}
