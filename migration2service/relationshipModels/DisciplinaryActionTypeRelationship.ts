import { BaseModel, hasMany, HasMany } from '@ioc:Adonis/Lucid/Orm';
import IntegrityProceeding from 'App/Models/IntegrityProceeding';

export class disciplinaryTypeRelationship extends BaseModel {
    @hasMany(() => IntegrityProceeding, { foreignKey: 'disciplinaryTypeId' })
    public IntegrityProceedingsAsdisciplinaryType: HasMany<typeof IntegrityProceeding>;
}