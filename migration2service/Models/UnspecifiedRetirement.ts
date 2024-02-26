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

    @column({ isPrimary: true, columnName: 'id' })
    public id: bigint;

    @column({ columnName: 'employeeId' })
    public employeeId: bigint;

    @column({ columnName: 'confirmerId' })
    public confirmerId: bigint;

    @column({ columnName: 'retirementTypeId' })
    public retirementTypeId: bigint;

    @column({ columnName: 'groupId' })
    public groupId: bigint;

    @column({ columnName: 'document' })
    public document: Blob;

    @column({ columnName: 'remark' })
    public remark: string;

    @column.dateTime({ columnName: 'confirmedDate' })
    public confirmedDate: DateTime;

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

    @belongsTo(() => Employee, { foreignKey: 'employeeId' })
    public employee: BelongsTo<typeof Employee>;

    @belongsTo(() => Employee, { foreignKey: 'confirmerId' })
    public confirmer: BelongsTo<typeof Employee>;

    @belongsTo(() => RetirementType, { foreignKey: 'retirementTypeId' })
    public retirementType: BelongsTo<typeof RetirementType>;

    @belongsTo(() => UnspecifiedRetirementGroup, { foreignKey: 'groupId' })
    public group: BelongsTo<typeof UnspecifiedRetirementGroup>;
}
