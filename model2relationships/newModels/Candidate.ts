import { DateTime } from 'luxon';
import {
    column,
    BaseModel,
    belongsTo,
    BelongsTo,
    hasOne,
    HasOne,
    HasMany,
    hasMany,
    beforeFind,
    scope,
} from '@ioc:Adonis/Lucid/Orm';
import CamelCaseNamingStrategy from 'App/Strategies/CamelCaseNamingStrategy';
import PersonalDetail from './PersonalDetail';
import CandidateType from './CandidateType';
import UserAccount from './UserAccount';
import Employee from './Employee';
import ContractDetail from './ContractDetail';
import { employeePreloads } from 'App/Helpers/preloads';
import { personalDetailPreloads } from 'App/Helpers/preloads';

export default class Candidate extends BaseModel {
    public static table = 'candidates';
    public static primaryKey = 'id';
    public static incrementing = false;

    public static namingStrategy = new CamelCaseNamingStrategy();

    public static withPreloadedList = scope<typeof Candidate>((query) => {
        query
            .preload('personalDetail', personalDetailPreloads)
            .preload('candidateType')
            .preload('userAccount')
            .preload('employee')
            .preload('contractDetails');
    });
    
    @column({ isPrimary: true, columnName: 'id', serializeAs: null })
    public id: bigint;
    
    @column({ columnName: 'personalDetailId', serializeAs: null })
    public personalDetailId: bigint;
    
    @column({ columnName: 'candidateTypeId', serializeAs: null })
    public candidateTypeId: bigint;
    
    @column({ columnName: 'employeeId', serializeAs: null })
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
    
    @belongsTo(() => PersonalDetail, {
        foreignKey: 'personalDetailId',
        onQuery: (query) => {
        query.where('active', true);
        },
    })
    public personalDetail: BelongsTo<typeof PersonalDetail>;
    
    @belongsTo(() => CandidateType, {
        foreignKey: 'candidateTypeId',
        onQuery: (query) => {
        query.where('active', true);
        },
    })
    public candidateType: BelongsTo<typeof CandidateType>;
    
    @hasOne(() => UserAccount, {
        foreignKey: 'candidateId',
        onQuery: (query) => {
        query.where('active', true);
        },
    })
    public userAccount: HasOne<typeof UserAccount>;
    
    @hasOne(() => Employee, {
        foreignKey: 'employeeId',
        onQuery: (query) => {
        query.where('active', true);
        },
    })
    public employee: HasOne<typeof Employee>;
    
    @hasMany(() => ContractDetail, {
        foreignKey: 'candidateId',
        onQuery: (query) => {
        query.where('active', true);
        },
    })
    public contractDetails: HasMany<typeof ContractDetail>;
    
    @beforeFind()
    public static async preloadTables(query) {
        query
            .preload('personalDetail', personalDetailPreloads)
            .preload('candidateType')
            .preload('userAccount')
            .preload('employee')
            .preload('contractDetails');
    }
}