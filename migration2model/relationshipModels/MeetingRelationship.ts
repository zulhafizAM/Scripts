import { BaseModel, hasMany, HasMany,belongsTo, BelongsTo } from '@ioc:Adonis/Lucid/Orm';
import Candidate from 'App/Models/Candidate';
import MeetingType from 'App/Models/MeetingType';
import ContractLifeCycle from 'App/Models/ContractLifeCycle';
import ForceTransferByDirector from 'App/Models/ForceTransferByDirector';
import GradeActingPostponeProcess from 'App/Models/GradeActingPostponeProcess';
import GradeActingType from 'App/Models/GradeActingType';
import GradePromotionType from 'App/Models/GradePromotionType';
import MainGradeActingPromotion from 'App/Models/MainGradeActingPromotion';
import NewOffer from 'App/Models/NewOffer';
import SelfRequest from 'App/Models/SelfRequest';
import ServiceConfirmation from 'App/Models/ServiceConfirmation';
import AppealApplication from 'App/Models/AppealApplication';
import IntegrityProceeding from 'App/Models/IntegrityProceeding';
import Surcharge from 'App/Models/Surcharge';
import HalfPayLeave from 'App/Models/HalfPayLeave';
import WithoutPayLeave from 'App/Models/WithoutPayLeave';
import Grade from 'App/Models/Grade';
import Position from 'App/Models/Position';
import SalaryMovement from 'App/Models/SalaryMovement';

export default class meetingRelationship extends BaseModel{
    
    @hasMany(() => Candidate, { foreignKey: 'meetingId' })
    public CandidateAsmeeting: HasMany<typeof Candidate>;

    @hasMany(() => SelfRequest, { foreignKey: 'meetingId' })
    public SelfRequestsAsmeeting: HasMany<typeof SelfRequest>;

    @hasMany(() => ForceTransferByDirector, { foreignKey: 'meetingId' })
    public ForceTransferByDirectorAsmeeting: HasMany<typeof ForceTransferByDirector>;

    @hasMany(() => GradeActingType, { foreignKey: 'meetingId' })
    public GradeActingTypesAsmeeting: HasMany<typeof GradeActingType>;

    @hasMany(() => GradeActingPostponeProcess, { foreignKey: 'meetingId' })
    public GradeActingPostponeProcessAsmeeting: HasMany<typeof GradeActingPostponeProcess>;

    @hasMany(() => MainGradeActingPromotion, { foreignKey: 'meetingId' })
    public MainGradeActingPromotionAsmeeting: HasMany<typeof MainGradeActingPromotion>;

    @hasMany(() => GradePromotionType, { foreignKey: 'meetingId' })
    public GradePromotionTypeAsmeeting: HasMany<typeof GradePromotionType>;

    @hasMany(() => ServiceConfirmation, { foreignKey: 'meetingId' })
    public ServiceConfirmationAsmeeting: HasMany<typeof ServiceConfirmation>;

    @hasMany(() => NewOffer, { foreignKey: 'meetingId' })
    public NewOffersAsmeeting: HasMany<typeof NewOffer>;

    @hasMany(() => Surcharge, { foreignKey: 'meetingId' })
    public SurchargeAsmeeting: HasMany<typeof Surcharge>;

    @hasMany(() => IntegrityProceeding, { foreignKey: 'meetingId' })
    public IntegrityProceedingsAsmeeting: HasMany<typeof IntegrityProceeding>;

    @hasMany(() => AppealApplication, { foreignKey: 'meetingId' })
    public AppealApplicationAsmeeting: HasMany<typeof AppealApplication>;

    @hasMany(() => HalfPayLeave, { foreignKey: 'meetingId' })
    public HalfPayLeaveAsmeeting: HasMany<typeof HalfPayLeave>;

    @hasMany(() => WithoutPayLeave, { foreignKey: 'meetingId' })
    public WithoutPayLeaveAsmeeting: HasMany<typeof WithoutPayLeave>;

    @hasMany(() => SalaryMovement, { foreignKey: 'meetingId' })
    public SalaryMovementAsmeeting: HasMany<typeof SalaryMovement>;

    @hasMany(() => ContractLifeCycle, { foreignKey: 'meetingId' })
    public ContractLifeCycleAsmeeting: HasMany<typeof ContractLifeCycle>;

    @belongsTo(() => MeetingType, { foreignKey: 'meetingTypeId' })
    public MeetingTypeAsmeetingType: BelongsTo<typeof MeetingType>;

    @belongsTo(() => Position, { foreignKey: 'positionId' })
    public PositionAsposition: BelongsTo<typeof Position>;

    @belongsTo(() => Grade, { foreignKey: 'gradeId' })
    public GradeAsgrade: BelongsTo<typeof Grade>;
}
