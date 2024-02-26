import { BaseModel, belongsTo,hasMany,HasMany, BelongsTo } from '@ioc:Adonis/Lucid/Orm';
import IntegrityProceeding from 'App/Models/IntegrityProceeding';

import PenaltyType from 'App/Models/PenaltyType';
import Sentencing from 'App/Models/Sentencing';

export class penaltyTypeRelationship extends BaseModel{
    @belongsTo(() => IntegrityProceeding, { foreignKey: 'integrityId' })
    public IntegrityProceedingsAsintegrity: BelongsTo<typeof IntegrityProceeding>;
    
    @hasMany(() => Sentencing, { foreignKey: 'penaltyTypeId' })
    public SentencingsAspenaltyType: HasMany<typeof Sentencing>;
}