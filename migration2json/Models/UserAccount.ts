import { DateTime } from 'luxon';
import { column, BaseModel, belongsTo, BelongsTo } from '@ioc:Adonis/Lucid/Orm';
import CamelCaseNamingStrategy from 'App/Strategies/CamelCaseNamingStrategy';
import Clinic from './Clinic';
import Employee from './Employee';
import Candidate from './Candidate';

export default class UserAccount extends BaseModel {
    public static table = 'userAccounts';
    public static primaryKey = 'id';
    public static incrementing = false;

    public static namingStrategy = new CamelCaseNamingStrategy();

    @column({ isPrimary: true, columnName: 'id' })
    public id: bigint;

    @column({ columnName: 'clinicId' })
    public clinicId: bigint;

    @column({ columnName: 'employeeId' })
    public employeeId: bigint;

    @column({ columnName: 'candidateId' })
    public candidateId: bigint;

    @column({ columnName: 'username' })
    public username: string;

    @column({ columnName: 'password' })
    public password: string;

    @column.dateTime({ columnName: 'registeredDate' })
    public registeredDate: DateTime;

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

    @belongsTo(() => Clinic, { foreignKey: 'clinicId' })
    public clinic: BelongsTo<typeof Clinic>;

    @belongsTo(() => Employee, { foreignKey: 'employeeId' })
    public employee: BelongsTo<typeof Employee>;

    @belongsTo(() => Candidate, { foreignKey: 'candidateId' })
    public candidate: BelongsTo<typeof Candidate>;
}