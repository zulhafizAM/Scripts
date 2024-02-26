import { DateTime } from 'luxon';
import { column, BaseModel, hasMany, HasMany } from '@ioc:Adonis/Lucid/Orm';
import CamelCaseNamingStrategy from 'App/Strategies/CamelCaseNamingStrategy';
import IntegrityProceeding from './IntegrityProceeding';

export default class DisciplinaryActionType extends BaseModel {
    public static table = 'disciplinaryActionTypes';
    public static primaryKey = 'id';
    public static incrementing = false;

    public static namingStrategy = new CamelCaseNamingStrategy();

    @column({ isPrimary: true, columnName: 'id', serializeAs: null })
    public id: bigint;

    @column({ columnName: 'name' })
    public name: string;

    @column({ columnName: 'description' })
    public description: string;

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

    @hasMany(() => IntegrityProceeding, {
        foreignKey: 'disciplinaryTypeId',
        onQuery: (query) => {
            query.where('active', true);
        },
    })
    public integrityProceedings: HasMany<typeof IntegrityProceeding>;
}
