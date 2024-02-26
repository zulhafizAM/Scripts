import { DateTime } from 'luxon';
import { column, BaseModel, belongsTo, BelongsTo, hasMany, HasMany } from '@ioc:Adonis/Lucid/Orm';
import CamelCaseNamingStrategy from 'App/Strategies/CamelCaseNamingStrategy';
import MeetingType from './MeetingType';
import Position from './Position';
import Grade from './Grade';
import Candidate from './Candidate';
import SelfRequest from './SelfRequest';
import ForceTransferByDirector from './ForceTransferByDirector';
import GradeActingType from './GradeActingType';
import GradeActingPostponeProcess from './GradeActingPostponeProcess';
import MainGradeActingPromotion from './MainGradeActingPromotion';
import GradePromotionType from './GradePromotionType';
import ServiceConfirmation from './ServiceConfirmation';
import NewOffer from './NewOffer';
import Surcharge from './Surcharge';
import IntegrityProceeding from './IntegrityProceeding';
import AppealApplication from './AppealApplication';
import HalfPayLeave from './HalfPayLeave';
import WithoutPayLeave from './WithoutPayLeave';
import SalaryMovement from './SalaryMovement';
import ContractLifeCycle from './ContractLifeCycle';

export default class Meeting extends BaseModel {
    public static table = 'meetings';
    public static primaryKey = 'id';
    public static incrementing = false;

    public static namingStrategy = new CamelCaseNamingStrategy();

    @column({ isPrimary: true, columnName: 'id' })
    public id: bigint;

    @column({ columnName: 'meetingTypeId' })
    public meetingTypeId: bigint;

    @column({ columnName: 'positionId' })
    public positionId: bigint;

    @column({ columnName: 'gradeId' })
    public gradeId: bigint;

    @column({ columnName: 'groupName' })
    public groupName: string;

    @column({ columnName: 'meetingCount' })
    public meetingCount: number;

    @column({ columnName: 'employeeCount' })
    public employeeCount: number;

    @column.dateTime({ columnName: 'meetingDate' })
    public meetingDate: DateTime;

    @column({ columnName: 'status' })
    public status: string;

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

    @belongsTo(() => MeetingType, { foreignKey: 'meetingTypeId' })
    public meetingType: BelongsTo<typeof MeetingType>;

    @belongsTo(() => Position, { foreignKey: 'positionId' })
    public position: BelongsTo<typeof Position>;

    @belongsTo(() => Grade, { foreignKey: 'gradeId' })
    public grade: BelongsTo<typeof Grade>;

    @hasMany(() => Candidate, { foreignKey: 'meetingId' })
    public candidates: HasMany<typeof Candidate>;

    @hasMany(() => SelfRequest, { foreignKey: 'meetingId' })
    public selfRequests: HasMany<typeof SelfRequest>;

    @hasMany(() => ForceTransferByDirector, { foreignKey: 'meetingId' })
    public forceTransferByDirectors: HasMany<typeof ForceTransferByDirector>;

    @hasMany(() => GradeActingType, { foreignKey: 'meetingId' })
    public gradeActingTypes: HasMany<typeof GradeActingType>;

    @hasMany(() => GradeActingPostponeProcess, { foreignKey: 'meetingId' })
    public gradeActingPostponeProcesses: HasMany<typeof GradeActingPostponeProcess>;

    @hasMany(() => MainGradeActingPromotion, { foreignKey: 'meetingId' })
    public mainGradeActingPromotions: HasMany<typeof MainGradeActingPromotion>;

    @hasMany(() => GradePromotionType, { foreignKey: 'meetingId' })
    public gradePromotionTypes: HasMany<typeof GradePromotionType>;

    @hasMany(() => ServiceConfirmation, { foreignKey: 'meetingId' })
    public serviceConfirmations: HasMany<typeof ServiceConfirmation>;

    @hasMany(() => NewOffer, { foreignKey: 'meetingId' })
    public newOffers: HasMany<typeof NewOffer>;

    @hasMany(() => Surcharge, { foreignKey: 'meetingId' })
    public surcharges: HasMany<typeof Surcharge>;

    @hasMany(() => IntegrityProceeding, { foreignKey: 'meetingId' })
    public integrityProceedings: HasMany<typeof IntegrityProceeding>;

    @hasMany(() => AppealApplication, { foreignKey: 'meetingId' })
    public appealApplications: HasMany<typeof AppealApplication>;

    @hasMany(() => HalfPayLeave, { foreignKey: 'meetingId' })
    public halfPayLeaves: HasMany<typeof HalfPayLeave>;

    @hasMany(() => WithoutPayLeave, { foreignKey: 'meetingId' })
    public withoutPayLeaves: HasMany<typeof WithoutPayLeave>;

    @hasMany(() => SalaryMovement, { foreignKey: 'meetingId' })
    public salaryMovements: HasMany<typeof SalaryMovement>;

    @hasMany(() => ContractLifeCycle, { foreignKey: 'meetingId' })
    public contractLifeCycles: HasMany<typeof ContractLifeCycle>;
}