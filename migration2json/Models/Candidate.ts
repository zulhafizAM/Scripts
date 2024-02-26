import { DateTime } from 'luxon';
import { column, BaseModel, belongsTo, BelongsTo, hasOne, HasOne, hasMany, HasMany } from '@ioc:Adonis/Lucid/Orm';
import CamelCaseNamingStrategy from 'App/Strategies/CamelCaseNamingStrategy';
import PersonalDetail from './PersonalDetail';
import CandidateType from './CandidateType';
import Employee from './Employee';
import UserAccount from './UserAccount';
import ContractDetail from './ContractDetail';

export default class Candidate extends BaseModel {
    public static table = 'candidates';
    public static primaryKey = 'id';
    public static incrementing = false;

    public static namingStrategy = new CamelCaseNamingStrategy();

    @column({ isPrimary: true, columnName: 'id' })
    public id: bigint;

    @column({ columnName: 'personalDetailId' })
    public personalDetailId: bigint;

    @column({ columnName: 'candidateTypeId' })
    public candidateTypeId: bigint;

    @column({ columnName: 'employeeId' })
    public employeeId: bigint;

    @column({ columnName: 'candidateNumber' })
    public candidateNumber: string;

    @column({ columnName: 'category' })
    public category: string;

    @column({ columnName: 'link' })
    public link: string;

    @column.dateTime({ columnName: 'applicationDate' })
    public applicationDate: DateTime;

    @column({ columnName: 'status' })
    public status: string;

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

    @belongsTo(() => PersonalDetail, { foreignKey: 'personalDetailId' })
    public personalDetail: BelongsTo<typeof PersonalDetail>;

    @belongsTo(() => CandidateType, { foreignKey: 'candidateTypeId' })
    public candidateType: BelongsTo<typeof CandidateType>;

    @belongsTo(() => Employee, { foreignKey: 'employeeId' })
    public employee: BelongsTo<typeof Employee>;

    @hasOne(() => UserAccount, { foreignKey: 'candidateId' })
    public userAccount: HasOne<typeof UserAccount>;

    @hasMany(() => ContractDetail, { foreignKey: 'candidateId' })
    public contractDetails: HasMany<typeof ContractDetail>;
}