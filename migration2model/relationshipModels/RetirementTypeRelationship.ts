import { BaseModel, hasMany, HasMany } from '@ioc:Adonis/Lucid/Orm';
import RetirementType from 'App/Models/RetirementType';

export default class RetirementTypeRelationship extends BaseModel {
	@hasMany(() => RetirementType, { foreignKey: 'retirementTypeId' })
    public RetirementTypeAsretirementType: HasMany<typeof RetirementType>;
}
