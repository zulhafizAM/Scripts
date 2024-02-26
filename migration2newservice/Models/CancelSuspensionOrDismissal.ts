import { DateTime } from 'luxon';
import { column, BaseModel, belongsTo, BelongsTo } from '@ioc:Adonis/Lucid/Orm';
import CamelCaseNamingStrategy from 'App/Strategies/CamelCaseNamingStrategy';
import IntegrityProceeding from './IntegrityProceeding';

export default class CancelSuspensionOrDismissal extends BaseModel {
    public static table = 'cancelSuspensionOrDismissals';
    public static primaryKey = 'id';
    public static incrementing = false;

    public static namingStrategy = new CamelCaseNamingStrategy();

    @column({ isPrimary: true, columnName: 'id' })
    public id: bigint;

    @column({ columnName: 'integrityId' })
    public integrityId: bigint;

    @column.dateTime({ columnName: 'effectiveDate' })
    public effectiveDate: DateTime;

    @column({ columnName: 'isReturningDuty' })
    public isReturningDuty: boolean;

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

    @belongsTo(() => IntegrityProceeding, { foreignKey: 'integrityId' })
    public integrity: BelongsTo<typeof IntegrityProceeding>;
}
