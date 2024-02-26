import { DateTime } from 'luxon';
import {
    column,
    BaseModel,
    belongsTo,
    BelongsTo,
    hasOne,
    HasOne,
} from '@ioc:Adonis/Lucid/Orm';
import CamelCaseNamingStrategy from 'App/Strategies/CamelCaseNamingStrategy';
import Employee from './Employee';
import Candidate from './Candidate';
import NewHiredProcess from './NewHiredProcess';

export default class NewHire extends BaseModel {
    public static table = 'newHires';
    public static primaryKey = 'id';
    public static incrementing = false;

    public static namingStrategy = new CamelCaseNamingStrategy();

    @column({ isPrimary: true, columnName: 'id', serializeAs: null })
    public id: bigint;

    @column({ columnName: 'employeeId', serializeAs: null })
    public employeeId: bigint;

    @column({ columnName: 'candidateId', serializeAs: null })
    public candidateId: bigint;

    @column({ columnName: 'isFitCriteria' })
    public isFitCriteria: boolean;

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

    @belongsTo(() => Candidate, {
        foreignKey: 'candidateId',
        onQuery: (query) => {
            query.where('active', true);
        },
    })
    public candidate: BelongsTo<typeof Candidate>;

    @hasOne(() => NewHiredProcess, {
        foreignKey: 'hireId',
        onQuery: (query) => {
            query.where('active', true);
        },
    })
    public newHiredProcess: HasOne<typeof NewHiredProcess>;
}
