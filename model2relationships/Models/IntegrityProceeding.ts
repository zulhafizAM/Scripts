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

    @column({ isPrimary: true, columnName: 'id', serializeAs: null })
    public id: bigint;

    @column({ columnName: 'employeeId', serializeAs: null })
    public employeeId: bigint;

    @column({ columnName: 'meetingId', serializeAs: null })
    public meetingId: bigint;

    @column({ columnName: 'disciplinaryTypeId', serializeAs: null })
    public disciplinaryTypeId: bigint;

    @column({ columnName: 'meetingResult' })
    public meetingResult: string;

    @column({ columnName: 'remark' })
    public remark: string;

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

    @belongsTo(() => Meeting, {
        foreignKey: 'meetingId',
        onQuery: (query) => {
            query.where('active', true);
        },
    })
    public meeting: BelongsTo<typeof Meeting>;

    @belongsTo(() => DisciplinaryActionType, {
        foreignKey: 'disciplinaryTypeId',
    })
    public disciplinaryType: BelongsTo<typeof DisciplinaryActionType>;

    @hasMany(() => Accussation, {
        foreignKey: 'integrityId',
        onQuery: (query) => {
            query.where('active', true);
        },
    })
    public accussations: HasMany<typeof Accussation>;

    @hasMany(() => Sentencing, {
        foreignKey: 'integrityId',
        onQuery: (query) => {
            query.where('active', true);
        },
    })
    public sentencings: HasMany<typeof Sentencing>;

    @hasMany(() => OnSuspensionOrDismissal, {
        foreignKey: 'integrityId',
        onQuery: (query) => {
            query.where('active', true);
        },
    })
    public onSuspensionOrDismissals: HasMany<typeof OnSuspensionOrDismissal>;

    @hasMany(() => CancelSuspensionOrDismissal, {
        foreignKey: 'integrityId',
        onQuery: (query) => {
            query.where('active', true);
        },
    })
    public cancelSuspensionOrDismissals: HasMany<
        typeof CancelSuspensionOrDismissal
    >;
}
