import { DateTime } from 'luxon';
import { column, BaseModel, belongsTo, BelongsTo } from '@ioc:Adonis/Lucid/Orm';
import CamelCaseNamingStrategy from 'App/Strategies/CamelCaseNamingStrategy';
import Employee from './Employee';
import RetirementType from './RetirementType';
import UnspecifiedRetirementGroup from './UnspecifiedRetirementGroup';

export default class UnspecifiedRetirement extends BaseModel {
    public static table = 'unspecifiedRetirements';
    public static primaryKey = 'id';
    public static incrementing = false;

    public static namingStrategy = new CamelCaseNamingStrategy();

    @column({ isPrimary: true, columnName: 'id', serializeAs: null })
    public id: bigint;

    @column({ columnName: 'employeeId', serializeAs: null })
    public employeeId: bigint;

    @column({ columnName: 'confirmerId', serializeAs: null })
    public confirmerId: bigint;

    @column({ columnName: 'retirementTypeId', serializeAs: null })
    public retirementTypeId: bigint;

    @column({ columnName: 'groupId', serializeAs: null })
    public groupId: bigint;

    @column({ columnName: 'document' })
    public document: Blob;

    @column({ columnName: 'remark' })
    public remark: string;

    @column.dateTime({ columnName: 'confirmedDate' })
    public confirmedDate: DateTime;

    @column({ columnName: 'status' })
    public status: string;

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

    @belongsTo(() => Employee, {
        foreignKey: 'employeeId',
        onQuery: (query) => {
            query.where('active', true);
        },
    })
    public employee: BelongsTo<typeof Employee>;

    @belongsTo(() => Employee, {
        foreignKey: 'confirmerId',
        onQuery: (query) => {
            query.where('active', true);
        },
    })
    public confirmer: BelongsTo<typeof Employee>;

    @belongsTo(() => RetirementType, {
        foreignKey: 'retirementTypeId',
        onQuery: (query) => {
            query.where('active', true);
        },
    })
    public retirementType: BelongsTo<typeof RetirementType>;

    @belongsTo(() => UnspecifiedRetirementGroup, {
        foreignKey: 'groupId',
        onQuery: (query) => {
            query.where('active', true);
        },
    })
    public group: BelongsTo<typeof UnspecifiedRetirementGroup>;
}
