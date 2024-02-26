import { BaseModel, hasOne, HasOne, belongsTo, BelongsTo } from '@ioc:Adonis/Lucid/Orm';
import ApplicationInterimProcess from 'App/Models/ApplicationInterimProcess';
import ChecklistInterim from 'App/Models/ChecklistInterim';
import EmploymentInterim from 'App/Models/EmploymentInterim';

export default class ApplicationInterimRelationship extends BaseModel {
	@hasOne(() => ApplicationInterimProcess, { foreignKey: 'applicationId' })
    public ApplicationInterimProcessAsapplication: HasOne<typeof ApplicationInterimProcess>;

    @hasOne(() => ChecklistInterim, { foreignKey: 'applicationId' })
    public ChecklistInterimAsapplication: HasOne<typeof ChecklistInterim>;

    @belongsTo(() => EmploymentInterim, { foreignKey: 'interimId' })
    public EmploymentInterimAsinterim: BelongsTo<typeof EmploymentInterim>;


}
