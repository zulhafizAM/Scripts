import { DateTime } from 'luxon';
import { column, BaseModel, belongsTo, BelongsTo, hasMany, HasMany } from '@ioc:Adonis/Lucid/Orm';
import CamelCaseNamingStrategy from 'App/Strategies/CamelCaseNamingStrategy';
import State from './State';
import Division from './Division';
import Clinic from './Clinic';

export default class District extends BaseModel {
    public static table = 'districts';
    public static primaryKey = 'id';
    public static incrementing = false;

    public static namingStrategy = new CamelCaseNamingStrategy();

    @column({ isPrimary: true, columnName: 'id' })
    public id: bigint;

    @column({ columnName: 'name' })
    public name: string;

    @column({ columnName: 'stateId' })
    public stateId: bigint;

    @column({ columnName: 'divisionId' })
    public divisionId: bigint;

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

    @belongsTo(() => State, { foreignKey: 'stateId' })
    public state: BelongsTo<typeof State>;

    @belongsTo(() => Division, { foreignKey: 'divisionId' })
    public division: BelongsTo<typeof Division>;

    @hasMany(() => Clinic, { foreignKey: 'districtId' })
    public clinics: HasMany<typeof Clinic>;
}