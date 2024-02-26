import { BaseModel ,belongsTo, BelongsTo} from '@ioc:Adonis/Lucid/Orm';
import Employee from 'App/Models/Employee';
import ForceTransferByDirector from 'App/Models/ForceTransferByDirector';

export default class ForcedByDirectorProcessRelationship extends BaseModel {
	@belongsTo(() => ForceTransferByDirector, { foreignKey: 'forceId' })
    public force: BelongsTo<typeof ForceTransferByDirector>;

    @belongsTo(() => Employee, { foreignKey: 'supporterId' })
    public supporter: BelongsTo<typeof Employee>;

    @belongsTo(() => Employee, { foreignKey: 'approverId' })
    public approver: BelongsTo<typeof Employee>;
}
