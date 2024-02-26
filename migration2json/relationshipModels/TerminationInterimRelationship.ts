import { BaseModel,belongsTo, BelongsTo, hasOne, HasOne } from '@ioc:Adonis/Lucid/Orm';
import EmploymentInterim from 'App/Models/EmploymentInterim';
import TerminationInterimProcess from 'App/Models/TerminationInterimProcess';

export default class TerminationInterimRelationship extends BaseModel {
	@hasOne(() => TerminationInterimProcess, { foreignKey: 'terminationId' })
    public TerminationInterimProcessAstermination: HasOne<typeof TerminationInterimProcess>;

    @belongsTo(() => EmploymentInterim, { foreignKey: 'interimId' })
    public EmploymentInterimAsinterim: BelongsTo<typeof EmploymentInterim>;
}
