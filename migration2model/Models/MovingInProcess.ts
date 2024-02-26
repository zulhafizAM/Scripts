import { DateTime } from 'luxon';
import { column, BaseModel, belongsTo, BelongsTo } from '@ioc:Adonis/Lucid/Orm';
import CamelCaseNamingStrategy from 'App/Strategies/CamelCaseNamingStrategy';
import MovingIn from './MovingIn';
import Employee from './Employee';

export default class MovingInProcess extends BaseModel {
    public static table = 'movingInProcess';
    public static primaryKey = 'id';
    public static incrementing = false;

    public static namingStrategy = new CamelCaseNamingStrategy();

    @column({ isPrimary: true, columnName: 'id' })
    public id: bigint;

    @column({ columnName: 'movingInId' })
    public movingInId: bigint;

    @column({ columnName: 'verifierId' })
    public verifierId: bigint;

    @column({ columnName: 'verifiedStatus' })
    public verifiedStatus: string;

    @column({ columnName: 'verifiedRemark' })
    public verifiedRemark: string;

    @column.dateTime({ columnName: 'verifiedDate' })
    public verifiedDate: DateTime;

    @column({ columnName: 'secretaryApproverId' })
    public secretaryApproverId: bigint;

    @column({ columnName: 'secretaryApprovedStatus' })
    public secretaryApprovedStatus: string;

    @column({ columnName: 'secretaryApprovedRemark' })
    public secretaryApprovedRemark: string;

    @column.dateTime({ columnName: 'secretaryApprovedDate' })
    public secretaryApprovedDate: DateTime;

    @column({ columnName: 'directorApproverId' })
    public directorApproverId: bigint;

    @column({ columnName: 'directorApprovedStatus' })
    public directorApprovedStatus: string;

    @column({ columnName: 'directorApprovedRemark' })
    public directorApprovedRemark: string;

    @column.dateTime({ columnName: 'directorApprovedDate' })
    public directorApprovedDate: DateTime;

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

    @belongsTo(() => MovingIn, { foreignKey: 'movingInId' })
    public movingIn: BelongsTo<typeof MovingIn>;

    @belongsTo(() => Employee, { foreignKey: 'verifierId' })
    public verifier: BelongsTo<typeof Employee>;

    @belongsTo(() => Employee, { foreignKey: 'secretaryApproverId' })
    public secretaryApprover: BelongsTo<typeof Employee>;

    @belongsTo(() => Employee, { foreignKey: 'directorApproverId' })
    public directorApprover: BelongsTo<typeof Employee>;
}