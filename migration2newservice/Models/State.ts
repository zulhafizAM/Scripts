import { DateTime } from 'luxon';
import { column, BaseModel, hasMany, HasMany } from '@ioc:Adonis/Lucid/Orm';
import CamelCaseNamingStrategy from 'App/Strategies/CamelCaseNamingStrategy';
import Division from './Division';
import PersonalDetail from './PersonalDetail';
import Experience from './Experience';
import NextOfKin from './NextOfKin';
import StateVisitAllowance from './StateVisitAllowance';

export default class State extends BaseModel {
    public static table = 'states';
    public static primaryKey = 'id';
    public static incrementing = false;

    public static namingStrategy = new CamelCaseNamingStrategy();

    @column({ isPrimary: true, columnName: 'id' })
    public id: bigint;

    @column({ columnName: 'name' })
    public name: string;

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

    @hasMany(() => Division, { foreignKey: 'stateId' })
    public divisions: HasMany<typeof Division>;

    @hasMany(() => PersonalDetail, { foreignKey: 'birthStateId' })
    public birthStatePersonalDetails: HasMany<typeof PersonalDetail>;

    @hasMany(() => PersonalDetail, { foreignKey: 'mailStateId' })
    public mailStatePersonalDetails: HasMany<typeof PersonalDetail>;

    @hasMany(() => PersonalDetail, { foreignKey: 'homeStateId' })
    public homeStatePersonalDetails: HasMany<typeof PersonalDetail>;

    @hasMany(() => Experience, { foreignKey: 'stateId' })
    public experiences: HasMany<typeof Experience>;

    @hasMany(() => NextOfKin, { foreignKey: 'stateId' })
    public nextOfKins: HasMany<typeof NextOfKin>;

    @hasMany(() => StateVisitAllowance, { foreignKey: 'stateId' })
    public stateVisitAllowances: HasMany<typeof StateVisitAllowance>;
}
