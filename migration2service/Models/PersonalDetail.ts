import { DateTime } from 'luxon';
import {
    column,
    BaseModel,
    belongsTo,
    BelongsTo,
    hasOne,
    HasOne,
    hasMany,
    HasMany,
} from '@ioc:Adonis/Lucid/Orm';
import CamelCaseNamingStrategy from 'App/Strategies/CamelCaseNamingStrategy';
import State from './State';
import Race from './Race';
import Religion from './Religion';
import Candidate from './Candidate';
import Employee from './Employee';
import Activity from './Activity';
import Dependent from './Dependent';
import NextOfKin from './NextOfKin';
import Education from './Education';
import Experience from './Experience';

export default class PersonalDetail extends BaseModel {
    public static table = 'personalDetails';
    public static primaryKey = 'id';
    public static incrementing = false;

    public static namingStrategy = new CamelCaseNamingStrategy();

    @column({ isPrimary: true, columnName: 'id' })
    public id: bigint;

    @column({ columnName: 'name' })
    public name: string;

    @column({ columnName: 'birthStateId' })
    public birthStateId: bigint;

    @column({ columnName: 'raceId' })
    public raceId: bigint;

    @column({ columnName: 'religionId' })
    public religionId: bigint;

    @column({ columnName: 'mailStateId' })
    public mailStateId: bigint;

    @column({ columnName: 'homeStateId' })
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

    @belongsTo(() => State, { foreignKey: 'birthStateId' })
    public birthState: BelongsTo<typeof State>;

    @belongsTo(() => Race, { foreignKey: 'raceId' })
    public race: BelongsTo<typeof Race>;

    @belongsTo(() => Religion, { foreignKey: 'religionId' })
    public religion: BelongsTo<typeof Religion>;

    @belongsTo(() => State, { foreignKey: 'mailStateId' })
    public mailState: BelongsTo<typeof State>;

    @belongsTo(() => State, { foreignKey: 'homeStateId' })
    public homeState: BelongsTo<typeof State>;

    @hasOne(() => Candidate, { foreignKey: 'personalDetailId' })
    public candidate: HasOne<typeof Candidate>;

    @hasOne(() => Employee, { foreignKey: 'personalDetailId' })
    public employee: HasOne<typeof Employee>;

    @hasMany(() => Activity, { foreignKey: 'personalDetailId' })
    public activities: HasMany<typeof Activity>;

    @hasMany(() => Dependent, { foreignKey: 'personalDetailId' })
    public dependents: HasMany<typeof Dependent>;

    @hasMany(() => NextOfKin, { foreignKey: 'personalDetailId' })
    public nextOfKins: HasMany<typeof NextOfKin>;

    @hasMany(() => Education, { foreignKey: 'personalDetailId' })
    public educations: HasMany<typeof Education>;

    @hasMany(() => Experience, { foreignKey: 'personalDetailId' })
    public experiences: HasMany<typeof Experience>;
}
