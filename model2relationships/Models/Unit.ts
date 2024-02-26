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
import Department from './Department';
import Section from './Section';
import Employee from './Employee';

export default class Unit extends BaseModel {
    public static table = 'units';
    public static primaryKey = 'id';
    public static incrementing = false;

    public static namingStrategy = new CamelCaseNamingStrategy();

    @column({ isPrimary: true, columnName: 'id', serializeAs: null })
    public id: bigint;

    @column({ columnName: 'name' })
    public name: string;

    @column({ columnName: 'departmentId', serializeAs: null })
    public departmentId: bigint;

    @column({ columnName: 'sectionId', serializeAs: null })
    public sectionId: bigint;

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

    @belongsTo(() => Department, {
        foreignKey: 'departmentId',
        onQuery: (query) => {
            query.where('active', true);
        },
    })
    public department: BelongsTo<typeof Department>;

    @belongsTo(() => Section, {
        foreignKey: 'sectionId',
        onQuery: (query) => {
            query.where('active', true);
        },
    })
    public section: BelongsTo<typeof Section>;

    @hasMany(() => Employee, {
        foreignKey: 'unitId',
        onQuery: (query) => {
            query.where('active', true);
        },
    })
    public employees: HasMany<typeof Employee>;
}
