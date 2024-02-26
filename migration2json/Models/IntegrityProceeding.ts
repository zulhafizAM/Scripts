import { DateTime } from 'luxon';
import { column, BaseModel, belongsTo, BelongsTo, hasMany, HasMany } from '@ioc:Adonis/Lucid/Orm';
import CamelCaseNamingStrategy from 'App/Strategies/CamelCaseNamingStrategy';
import Employee from './Employee';
import Meeting from './Meeting';
import DisciplinaryActionType from './DisciplinaryActionType';
import Accussation from './Accussation';
import Sentencing from './Sentencing';
import OnSuspensionOrDismissal from './OnSuspensionOrDismissal';
import CancelSuspensionOrDismissal from './CancelSuspensionOrDismissal';

export default class IntegrityProceeding extends BaseModel {
    public static table = 'integrityProceedings';
    public static primaryKey = 'id';
    public static incrementing = false;

    public static namingStrategy = new CamelCaseNamingStrategy();

    @column({ isPrimary: true, columnName: 'id' })
    public id: bigint;

    @column({ columnName: 'employeeId' })
    public employeeId: bigint;

    @column({ columnName: 'meetingId' })
    public meetingId: bigint;

    @column({ columnName: 'disciplinaryTypeId' })
    public disciplinaryTypeId: bigint;

    @column({ columnName: 'meetingResult' })
    public meetingResult: string;

    @column({ columnName: 'remark' })
    public remark: string;

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

    @belongsTo(() => Meeting, { foreignKey: 'meetingId' })
    public meeting: BelongsTo<typeof Meeting>;

    @belongsTo(() => DisciplinaryActionType, { foreignKey: 'disciplinaryTypeId' })
    public disciplinaryType: BelongsTo<typeof DisciplinaryActionType>;

    @hasMany(() => Accussation, { foreignKey: 'integrityId' })
    public accussations: HasMany<typeof Accussation>;

    @hasMany(() => Sentencing, { foreignKey: 'integrityId' })
    public sentencings: HasMany<typeof Sentencing>;

    @hasMany(() => OnSuspensionOrDismissal, { foreignKey: 'integrityId' })
    public onSuspensionOrDismissals: HasMany<typeof OnSuspensionOrDismissal>;

    @hasMany(() => CancelSuspensionOrDismissal, { foreignKey: 'integrityId' })
    public cancelSuspensionOrDismissals: HasMany<typeof CancelSuspensionOrDismissal>;
}