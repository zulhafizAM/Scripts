import { BaseModel, belongsTo, BelongsTo, hasOne, HasOne } from '@ioc:Adonis/Lucid/Orm';
import Meeting from 'App/Models/Meeting';
import ContractDetail from 'App/Models/ContractDetail';
import ContractLifeCycleProcess from 'App/Models/ContractLifeCycleProcess';

export class contractLifeCyclesRelationship extends BaseModel{
    @hasOne(() => ContractLifeCycleProcess, { foreignKey: 'lifecycleId' })
    public ContractLifeCycleProcessAslifecycle: HasOne<typeof ContractLifeCycleProcess>;

    @belongsTo(() => ContractDetail, { foreignKey: 'contractId' })
    public ContractDetailAscontract: BelongsTo<typeof ContractDetail>;

    @belongsTo(() => Meeting, { foreignKey: 'meetingId' })
    public MeetingAsmeeting: BelongsTo<typeof Meeting>;
}