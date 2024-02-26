import { DateTime } from 'luxon';
import {
    column,
    BaseModel,
    belongsTo,
    BelongsTo,
    hasMany,
    HasMany,
} from '@ioc:Adonis/Lucid/Orm';
import CamelCaseNamingStrategy from 'App/Strategies/CamelCaseNamingStrategy';
import State from './State';
import Division from './Division';
import Clinic from './Clinic';

export default class District extends BaseModel {
    public static table = 'districts';
    public static primaryKey = 'id';
    public static incrementing = false;

    public static namingStrategy = new CamelCaseNamingStrategy();

    @column({ isPrimary: true, columnName: 'id', serializeAs: null })
    public id: bigint;

    @column({ columnName: 'name' })
    public name: string;

    @column({ columnName: 'stateId', serializeAs: null })
    public stateId: bigint;

    @column({ columnName: 'divisionId', serializeAs: null })
    public divisionId: bigint;

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

    @belongsTo(() => State, {
        foreignKey: 'stateId',
        onQuery: (query) => {
            query.where('active', true);
        },
    })
    public state: BelongsTo<typeof State>;

    @belongsTo(() => Division, {
        foreignKey: 'divisionId',
        onQuery: (query) => {
            query.where('active', true);
        },
    })
    public division: BelongsTo<typeof Division>;

    @hasMany(() => Clinic, {
        foreignKey: 'districtId',
        onQuery: (query) => {
            query.where('active', true);
        },
    })
    public clinics: HasMany<typeof Clinic>;
}
