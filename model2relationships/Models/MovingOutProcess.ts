import { DateTime } from 'luxon';
import { column, BaseModel, belongsTo, BelongsTo } from '@ioc:Adonis/Lucid/Orm';
import CamelCaseNamingStrategy from 'App/Strategies/CamelCaseNamingStrategy';
import MovingOut from './MovingOut';
import Employee from './Employee';

export default class MovingOutProcess extends BaseModel {
    public static table = 'movingOutProcess';
    public static primaryKey = 'id';
    public static incrementing = false;

    public static namingStrategy = new CamelCaseNamingStrategy();

    @column({ isPrimary: true, columnName: 'id', serializeAs: null })
    public id: bigint;

    @column({ columnName: 'movingOutId', serializeAs: null })
    public movingOutId: bigint;

    @column({ columnName: 'verifierId', serializeAs: null })
    public verifierId: bigint;

    @column({ columnName: 'verifiedStatus' })
    public verifiedStatus: string;

    @column({ columnName: 'verifiedRemark' })
    public verifiedRemark: string;

    @column.dateTime({ columnName: 'verifiedDate' })
    public verifiedDate: DateTime;

    @column({ columnName: 'directorApproverId', serializeAs: null })
    public directorApproverId: bigint;

    @column({ columnName: 'directorApprovedStatus' })
    public directorApprovedStatus: string;

    @column({ columnName: 'directorApprovedRemark' })
    public directorApprovedRemark: string;

    @column.dateTime({ columnName: 'directorApprovedDate' })
    public directorApprovedDate: DateTime;

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

    @belongsTo(() => MovingOut, {
        foreignKey: 'movingOutId',
        onQuery: (query) => {
            query.where('active', true);
        },
    })
    public movingOut: BelongsTo<typeof MovingOut>;

    @belongsTo(() => Employee, {
        foreignKey: 'verifierId',
        onQuery: (query) => {
            query.where('active', true);
        },
    })
    public verifier: BelongsTo<typeof Employee>;

    @belongsTo(() => Employee, {
        foreignKey: 'directorApproverId',
        onQuery: (query) => {
            query.where('active', true);
        },
    })
    public directorApprover: BelongsTo<typeof Employee>;
}
