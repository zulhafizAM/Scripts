import { BaseModel, HasMany,  hasMany  } from '@ioc:Adonis/Lucid/Orm';
import AppealApplication from 'App/Models/AppealApplication';
import IntegrityProceeding from 'App/Models/IntegrityProceeding';
import Surcharge from 'App/Models/Surcharge';

export default class emnployeeToIntegrityRelationship extends BaseModel {
    @hasMany(() => Surcharge, { foreignKey: 'employeeId'})
    public SurchargeAsemployee: HasMany<typeof Surcharge>;

    @hasMany(() => AppealApplication, { foreignKey: 'employeeId'})
    public AppealApplicationAsemployee: HasMany<typeof AppealApplication>;

    @hasMany(() => IntegrityProceeding, { foreignKey: 'employeeId'})
    public IntegrityProceedingsAsemployee: HasMany<typeof IntegrityProceeding>;
}