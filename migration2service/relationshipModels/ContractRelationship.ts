import { BaseModel, belongsTo, BelongsTo,hasOne, HasOne } from '@ioc:Adonis/Lucid/Orm';
import Candidate from 'App/Models/Candidate';
import ContractAppointmentsProcess from 'App/Models/ContractAppointmentsProcess';
import ContractLifeCycle from 'App/Models/ContractLifeCycle';
import Placement from 'App/Models/Placement';
import ServiceType from 'App/Models/ServiceType';

export class contractRelationship extends BaseModel{
    @hasOne(() => ContractLifeCycle, { foreignKey: 'contractId' })
    public ContractLifeCycleAscontract: HasOne<typeof ContractLifeCycle>;

    @hasOne(() => ContractAppointmentsProcess, { foreignKey: 'contractId' })
    public ContractAppointmentsProcessAscontract: HasOne<typeof ContractAppointmentsProcess>;
    
    @belongsTo(() => Candidate, { foreignKey: 'candidateId' })
    public CandidateAscandidate: BelongsTo<typeof Candidate>;

    @belongsTo(() => ServiceType, { foreignKey: 'serviceTypeId' })
    public ServiceTypeAsserviceType: BelongsTo<typeof ServiceType>;

    @belongsTo(() => Placement, { foreignKey: 'placementId' })
    public PlacementAsplacement: BelongsTo<typeof Placement>;
}