import { DateTime } from 'luxon';
import { column, BaseModel, hasMany, HasMany } from '@ioc:Adonis/Lucid/Orm';
import CamelCaseNamingStrategy from 'App/Strategies/CamelCaseNamingStrategy';
import UnspecifiedRetirementGroup from './UnspecifiedRetirementGroup';

export default class UnspecifiedRetirementGroup extends BaseModel {
    public static table = 'unspecifiedRetirementGroups';
    public static primaryKey = 'id';
    public static incrementing = false;

    public static namingStrategy = new CamelCaseNamingStrategy();

    @column({ isPrimary: true, columnName: 'id' })
    public id: bigint;

    @column({ columnName: 'name' })
    public name: string;

    @column({ columnName: 'headCount' })
    public headCount: number;

    @column.dateTime({ columnName: 'date' })
    public date: DateTime;

    @column({ columnName: 'status' })
    public status: string;

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

    @hasMany(() => UnspecifiedRetirementGroup, { foreignKey: 'groupId' })
    public unspecifiedRetirementGroups: HasMany<typeof UnspecifiedRetirementGroup>;
}