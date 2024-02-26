import { DateTime } from 'luxon';
import { column, BaseModel, belongsTo, BelongsTo } from '@ioc:Adonis/Lucid/Orm';
import CamelCaseNamingStrategy from 'App/Strategies/CamelCaseNamingStrategy';
import Clinic from 'App/Models/Clinic';
import Employee from 'App/Models/Employee';
import Candidate from 'App/Models/Candidate';

export default class UserAccount extends BaseModel {
    public static table = 'userAccounts';
    public static primaryKey = 'id';
    public static incrementing = false;

    public static namingStrategy = new CamelCaseNamingStrategy();

    @column({ isPrimary: true, columnName: 'id', serializeAs: null })
    public id: bigint;

    @column({ columnName: 'clinicId', serializeAs: null })
    public clinicId: bigint;

    @column({ columnName: 'employeeId', serializeAs: null })
    public employeeId: bigint;

    @column({ columnName: 'candidateId', serializeAs: null })
    public candidateId: bigint;

    @column({ columnName: 'username' })
    public username: string;

    @column({ columnName: 'password', serializeAs: null })
    public password: string;

    @column.dateTime({ columnName: 'registeredDate' })
    public registeredDate: DateTime;

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

    @belongsTo(() => Clinic, {
        foreignKey: 'clinicId',
        onQuery: (query) => {
            query.where('active', true);
        },
    })
    public clinic: BelongsTo<typeof Clinic>;

    @belongsTo(() => Employee, {
        foreignKey: 'employeeId',
        onQuery: (query) => {
            query.where('active', true);
        },
    })
    public employee: BelongsTo<typeof Employee>;

    @belongsTo(() => Candidate, {
        foreignKey: 'candidateId',
        onQuery: (query) => {
            query.where('active', true);
        },
    })
    public candidate: BelongsTo<typeof Candidate>;
}
