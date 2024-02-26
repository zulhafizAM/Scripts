import { BaseModel, belongsTo, BelongsTo } from '@ioc:Adonis/Lucid/Orm';
import IntegrityProceeding from 'App/Models/IntegrityProceeding';

export class cancelSuspensionOrDismissalRelationship extends BaseModel{
    @belongsTo(() => IntegrityProceeding, { foreignKey: 'integrityId' })
    public IntegrityProceedingsAsintegrity: BelongsTo<typeof IntegrityProceeding>;
}