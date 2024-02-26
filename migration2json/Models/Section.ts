import { DateTime } from 'luxon';
import { column, BaseModel, belongsTo, BelongsTo, hasMany, HasMany } from '@ioc:Adonis/Lucid/Orm';
import CamelCaseNamingStrategy from 'App/Strategies/CamelCaseNamingStrategy';
import Department from './Department';
import Unit from './Unit';

export default class Section extends BaseModel {
    public static table = 'sections';
    public static primaryKey = 'id';
    public static incrementing = false;

    public static namingStrategy = new CamelCaseNamingStrategy();

    @column({ isPrimary: true, columnName: 'id' })
    public id: bigint;

    @column({ columnName: 'name' })
    public name: string;

    @column({ columnName: 'departmentId' })
    public departmentId: bigint;

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

    @belongsTo(() => Department, { foreignKey: 'departmentId' })
    public department: BelongsTo<typeof Department>;

    @hasMany(() => Unit, { foreignKey: 'sectionId' })
    public units: HasMany<typeof Unit>;
}