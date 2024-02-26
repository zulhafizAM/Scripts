import { BaseModel, belongsTo, BelongsTo } from '@ioc:Adonis/Lucid/Orm';
import Employee from 'App/Models/Employee';
import ClothingAssistance from 'App/Models/ClothingAssistance';

export default class ClothingAssistanceProcessRelationship extends BaseModel {
	@belongsTo(() => ClothingAssistance, { foreignKey: 'clothingId' })
    public ClothingAssistanceAsclothing: BelongsTo<typeof ClothingAssistance>;

    @belongsTo(() => Employee, { foreignKey: 'directorSupporterId' })
    public EmployeeAsdirectorSupporter: BelongsTo<typeof Employee>;

    @belongsTo(() => Employee, { foreignKey: 'verifierId' })
    public EmployeeAsverifier: BelongsTo<typeof Employee>;

    @belongsTo(() => Employee, { foreignKey: 'appointedSupporterId' })
    public EmployeeAsappointedSupporter: BelongsTo<typeof Employee>;

    @belongsTo(() => Employee, { foreignKey: 'approverId' })
    public EmployeeAsapprover: BelongsTo<typeof Employee>;
}
