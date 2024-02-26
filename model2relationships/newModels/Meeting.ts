import { DateTime } from 'luxon';
import {
    column,
    BaseModel,
    belongsTo,
    BelongsTo,
    HasMany,
    hasMany,
    beforeFind,
    scope,
} from '@ioc:Adonis/Lucid/Orm';
import CamelCaseNamingStrategy from 'App/Strategies/CamelCaseNamingStrategy';
import MeetingType from './MeetingType';
import Position from './Position';
import Grade from './Grade';
import Candidate from './Candidate';
import SelfTransfers from './SelfTransfers';
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

    public static withPreloadedList = scope<typeof Meeting>((query) => {
        query
            .preload('meetingType')
            .preload('position')
            .preload('grade')
            .preload('candidates')
            .preload('selfRequests')
            .preload('forceTransferByDirectors')
            .preload('gradeActingTypes')
            .preload('gradeActingPostponeProcesses')
            .preload('mainGradeActingPromotions')
            .preload('gradePromotionTypes')
            .preload('serviceConfirmations')
            .preload('newOffers')
            .preload('surcharges')
            .preload('integrityProceedings')
            .preload('appealApplications')
            .preload('halfPayLeaves')
            .preload('withoutPayLeaves')
            .preload('salaryMovements')
            .preload('contractLifeCycles');
    });
    
    @column({ isPrimary: true, columnName: 'id', serializeAs: null })
    public id: bigint;
    
    @column({ columnName: 'meetingTypeId', serializeAs: null })
    public meetingTypeId: bigint;
    
    @column({ columnName: 'positionId', serializeAs: null })
    public positionId: bigint;
    
    @column({ columnName: 'gradeId', serializeAs: null })
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
    
    @belongsTo(() => MeetingType, {
        foreignKey: 'meetingTypeId',
        onQuery: (query) => {
        query.where('active', true);
        },
    })
    public meetingType: BelongsTo<typeof MeetingType>;
    
    @belongsTo(() => Position, {
        foreignKey: 'positionId',
        onQuery: (query) => {
        query.where('active', true);
        },
    })
    public position: BelongsTo<typeof Position>;
    
    @belongsTo(() => Grade, {
        foreignKey: 'gradeId',
        onQuery: (query) => {
        query.where('active', true);
        },
    })
    public grade: BelongsTo<typeof Grade>;
    
    @hasMany(() => Candidate, {
        foreignKey: 'meetingId',
        onQuery: (query) => {
        query.where('active', true);
        },
    })
    public candidates: HasMany<typeof Candidate>;
    
    @hasMany(() => SelfTransfers, {
        foreignKey: 'meetingId',
        onQuery: (query) => {
        query.where('active', true);
        },
    })
    public selfRequests: HasMany<typeof SelfTransfers>;
    
    @hasMany(() => ForceTransferByDirector, {
        foreignKey: 'meetingId',
        onQuery: (query) => {
        query.where('active', true);
        },
    })
    public forceTransferByDirectors: HasMany<typeof ForceTransferByDirector>;
    
    @hasMany(() => GradeActingType, {
        foreignKey: 'meetingId',
        onQuery: (query) => {
        query.where('active', true);
        },
    })
    public gradeActingTypes: HasMany<typeof GradeActingType>;
    
    @hasMany(() => GradeActingPostponeProcess, {
        foreignKey: 'meetingId',
        onQuery: (query) => {
        query.where('active', true);
        },
    })
    public gradeActingPostponeProcesses: HasMany<
    typeof GradeActingPostponeProcess
    >;
    
    @hasMany(() => MainGradeActingPromotion, {
        foreignKey: 'meetingId',
        onQuery: (query) => {
        query.where('active', true);
        },
    })
    public mainGradeActingPromotions: HasMany<typeof MainGradeActingPromotion>;
    
    @hasMany(() => GradePromotionType, {
        foreignKey: 'meetingId',
        onQuery: (query) => {
        query.where('active', true);
        },
    })
    public gradePromotionTypes: HasMany<typeof GradePromotionType>;
    
    @hasMany(() => ServiceConfirmation, {
        foreignKey: 'meetingId',
        onQuery: (query) => {
        query.where('active', true);
        },
    })
    public serviceConfirmations: HasMany<typeof ServiceConfirmation>;
    
    @hasMany(() => NewOffer, {
        foreignKey: 'meetingId',
        onQuery: (query) => {
        query.where('active', true);
        },
    })
    public newOffers: HasMany<typeof NewOffer>;
    
    @hasMany(() => Surcharge, {
        foreignKey: 'meetingId',
        onQuery: (query) => {
        query.where('active', true);
        },
    })
    public surcharges: HasMany<typeof Surcharge>;
    
    @hasMany(() => IntegrityProceeding, {
        foreignKey: 'meetingId',
        onQuery: (query) => {
        query.where('active', true);
        },
    })
    public integrityProceedings: HasMany<typeof IntegrityProceeding>;
    
    @hasMany(() => AppealApplication, {
        foreignKey: 'meetingId',
        onQuery: (query) => {
        query.where('active', true);
        },
    })
    public appealApplications: HasMany<typeof AppealApplication>;
    
    @hasMany(() => HalfPayLeave, {
        foreignKey: 'meetingId',
        onQuery: (query) => {
        query.where('active', true);
        },
    })
    public halfPayLeaves: HasMany<typeof HalfPayLeave>;
    
    @hasMany(() => WithoutPayLeave, {
        foreignKey: 'meetingId',
        onQuery: (query) => {
        query.where('active', true);
        },
    })
    public withoutPayLeaves: HasMany<typeof WithoutPayLeave>;
    
    @hasMany(() => SalaryMovement, {
        foreignKey: 'meetingId',
        onQuery: (query) => {
        query.where('active', true);
        },
    })
    public salaryMovements: HasMany<typeof SalaryMovement>;
    
    @hasMany(() => ContractLifeCycle, {
        foreignKey: 'meetingId',
        onQuery: (query) => {
        query.where('active', true);
        },
    })
    public contractLifeCycles: HasMany<typeof ContractLifeCycle>;
    
    @beforeFind()
    public static async preloadTables(query) {
        query
            .preload('meetingType')
            .preload('position')
            .preload('grade')
            .preload('candidates')
            .preload('selfRequests')
            .preload('forceTransferByDirectors')
            .preload('gradeActingTypes')
            .preload('gradeActingPostponeProcesses')
            .preload('mainGradeActingPromotions')
            .preload('gradePromotionTypes')
            .preload('serviceConfirmations')
            .preload('newOffers')
            .preload('surcharges')
            .preload('integrityProceedings')
            .preload('appealApplications')
            .preload('halfPayLeaves')
            .preload('withoutPayLeaves')
            .preload('salaryMovements')
            .preload('contractLifeCycles');
    }
}