import { BaseModel, belongsTo, BelongsTo } from '@ioc:Adonis/Lucid/Orm';
import Performance from 'App/Models/Performance';


export class contributionNotOfficialDutyRelationship extends BaseModel{
    @belongsTo(() => Performance, { foreignKey: 'performanceid' })
    public PerformanceAsId: BelongsTo<typeof Performance>;
}