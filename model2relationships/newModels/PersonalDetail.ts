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
import State from './State';
import Race from './Race';
import Religion from './Religion';
import Candidate from './Candidate';
import Employee from './Employee';
import InternalRelationship from './InternalRelationship';
import Activity from './Activity';
import Dependent from './Dependent';
import NextOfKin from './NextOfKin';
import Education from './Education';
import Experience from './Experience';
import MedicalHistory from './MedicalHistory';
import GeneralAssessment from './GeneralAssessment';
import { employeePreloads } from 'App/Helpers/preloads';

export default class PersonalDetail extends BaseModel {
    public static table = 'personalDetails';
    public static primaryKey = 'id';
    public static incrementing = false;

    public static namingStrategy = new CamelCaseNamingStrategy();

    public static withPreloadedList = scope<typeof PersonalDetail>((query) => {
        query
            .preload('birthState')
            .preload('race')
            .preload('religion')
            .preload('mailState')
            .preload('homeState')
            .preload('candidate')
            .preload('employee')
            .preload('internalRelationship')
            .preload('activities')
            .preload('dependents')
            .preload('nextOfKins')
            .preload('educations')
            .preload('experiences')
            .preload('medicalHistories')
            .preload('generalAssessments');
    });
    
    @column({ isPrimary: true, columnName: 'id', serializeAs: null })
    public id: bigint;
    
    @column({ columnName: 'name' })
    public name: string;
    
    @column({ columnName: 'birthStateId', serializeAs: null })
    public birthStateId: bigint;
    
    @column({ columnName: 'raceId', serializeAs: null })
    public raceId: bigint;
    
    @column({ columnName: 'religionId', serializeAs: null })
    public religionId: bigint;
    
    @column({ columnName: 'mailStateId', serializeAs: null })
    public mailStateId: bigint;
    
    @column({ columnName: 'homeStateId', serializeAs: null })
    public homeStateId: bigint;
    
    @column({ columnName: 'alternativeName' })
    public alternativeName: string;
    
    @column({ columnName: 'isMalaysian' })
    public isMalaysian: boolean;
    
    @column({ columnName: 'identityDocumentType' })
    public identityDocumentType: string;
    
    @column({ columnName: 'identityDocumentNumber' })
    public identityDocumentNumber: string;
    
    @column({ columnName: 'email' })
    public email: string;
    
    @column({ columnName: 'marital' })
    public marital: string;
    
    @column({ columnName: 'gender' })
    public gender: string;
    
    @column({ columnName: 'bankName' })
    public bankName: string;
    
    @column({ columnName: 'bankAccount' })
    public bankAccount: string;
    
    @column({ columnName: 'phoneNumber' })
    public phoneNumber: string;
    
    @column({ columnName: 'homeNumber' })
    public homeNumber: string;
    
    @column.dateTime({ columnName: 'birthDate' })
    public birthDate: DateTime;
    
    @column({ columnName: 'birthplace' })
    public birthplace: string;
    
    @column({ columnName: 'isExPoliceOrSoldier' })
    public isExPoliceOrSoldier: boolean;
    
    @column({ columnName: 'homeAddress' })
    public homeAddress: string;
    
    @column({ columnName: 'homePoscode' })
    public homePoscode: string;
    
    @column({ columnName: 'homeCity' })
    public homeCity: string;
    
    @column({ columnName: 'mailAddress' })
    public mailAddress: string;
    
    @column({ columnName: 'mailPoscode' })
    public mailPoscode: string;
    
    @column({ columnName: 'mailCity' })
    public mailCity: string;
    
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
    
    @belongsTo(() => State, {
        foreignKey: 'birthStateId',
        onQuery: (query) => {
        query.where('active', true);
        },
    })
    public birthState: BelongsTo<typeof State>;
    
    @belongsTo(() => Race, {
        foreignKey: 'raceId',
        onQuery: (query) => {
        query.where('active', true);
        },
    })
    public race: BelongsTo<typeof Race>;
    
    @belongsTo(() => Religion, {
        foreignKey: 'religionId',
        onQuery: (query) => {
        query.where('active', true);
        },
    })
    public religion: BelongsTo<typeof Religion>;
    
    @belongsTo(() => State, {
        foreignKey: 'mailStateId',
        onQuery: (query) => {
        query.where('active', true);
        },
    })
    public mailState: BelongsTo<typeof State>;
    
    @belongsTo(() => State, {
        foreignKey: 'homeStateId',
        onQuery: (query) => {
        query.where('active', true);
        },
    })
    public homeState: BelongsTo<typeof State>;
    
    @hasOne(() => Candidate, {
        foreignKey: 'personalDetailId',
        onQuery: (query) => {
        query.where('active', true);
        },
    })
    public candidate: HasOne<typeof Candidate>;
    
    @hasOne(() => Employee, {
        foreignKey: 'personalDetailId',
        onQuery: (query) => {
        query.where('active', true);
        },
    })
    public employee: HasOne<typeof Employee>;
    
    @hasOne(() => InternalRelationship, {
        foreignKey: 'personalDetailId',
        onQuery: (query) => {
        query.where('active', true);
        },
    })
    public internalRelationship: HasOne<typeof InternalRelationship>;
    
    @hasMany(() => Activity, {
        foreignKey: 'personalDetailId',
        onQuery: (query) => {
        query.where('active', true);
        },
    })
    public activities: HasMany<typeof Activity>;
    
    @hasMany(() => Dependent, {
        foreignKey: 'personalDetailId',
        onQuery: (query) => {
        query.where('active', true);
        },
    })
    public dependents: HasMany<typeof Dependent>;
    
    @hasMany(() => NextOfKin, {
        foreignKey: 'personalDetailId',
        onQuery: (query) => {
        query.where('active', true);
        },
    })
    public nextOfKins: HasMany<typeof NextOfKin>;
    
    @hasMany(() => Education, {
        foreignKey: 'personalDetailId',
        onQuery: (query) => {
        query.where('active', true);
        },
    })
    public educations: HasMany<typeof Education>;
    
    @hasMany(() => Experience, {
        foreignKey: 'personalDetailId',
        onQuery: (query) => {
        query.where('active', true);
        },
    })
    public experiences: HasMany<typeof Experience>;
    
    @hasMany(() => MedicalHistory, {
        foreignKey: 'personalDetailId',
        onQuery: (query) => {
        query.where('active', true);
        },
    })
    public medicalHistories: HasMany<typeof MedicalHistory>;
    
    @hasMany(() => GeneralAssessment, {
        foreignKey: 'personalDetailId',
        onQuery: (query) => {
        query.where('active', true);
        },
    })
    public generalAssessments: HasMany<typeof GeneralAssessment>;
    
    @beforeFind()
    public static async preloadTables(query) {
        query
            .preload('birthState')
            .preload('race')
            .preload('religion')
            .preload('mailState')
            .preload('homeState')
            .preload('candidate')
            .preload('employee')
            .preload('internalRelationship')
            .preload('activities')
            .preload('dependents')
            .preload('nextOfKins')
            .preload('educations')
            .preload('experiences')
            .preload('medicalHistories')
            .preload('generalAssessments');
    }
}