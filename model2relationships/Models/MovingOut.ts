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
import Quarter from './Quarter';
import MovingOutProcess from './MovingOutProcess';

export default class MovingOut extends BaseModel {
    public static table = 'movingOuts';
    public static primaryKey = 'id';
    public static incrementing = false;

    public static namingStrategy = new CamelCaseNamingStrategy();

    @column({ isPrimary: true, columnName: 'id', serializeAs: null })
    public id: bigint;

    @column({ columnName: 'quartersId', serializeAs: null })
    public quartersId: bigint;

    @column.dateTime({ columnName: 'applicationDate' })
    public applicationDate: DateTime;

    @column({ columnName: 'status' })
    public status: string;

    @column({ columnName: 'remark' })
    public remark: string;

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

    @belongsTo(() => Quarter, {
        foreignKey: 'quartersId',
        onQuery: (query) => {
            query.where('active', true);
        },
    })
    public quarters: BelongsTo<typeof Quarter>;

    @hasOne(() => MovingOutProcess, {
        foreignKey: 'quartersId',
        onQuery: (query) => {
            query.where('active', true);
        },
    })
    public movingOutProcess: HasOne<typeof MovingOutProcess>;
}
