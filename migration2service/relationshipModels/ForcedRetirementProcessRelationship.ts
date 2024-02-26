import { BaseModel, belongsTo, BelongsTo } from '@ioc:Adonis/Lucid/Orm';
import Employee from 'App/Models/Employee';
import ForcedRetirement from 'App/Models/ForcedRetirement';

export default class ForcedRetirementProcessRelationship extends BaseModel {
	@belongsTo(() => ForcedRetirement, { foreignKey: 'forcedId' })
    public ForcedRetirementAsforced: BelongsTo<typeof ForcedRetirement>;

    @belongsTo(() => Employee, { foreignKey: 'certifierId' })
    public EmployeeAscertifier: BelongsTo<typeof Employee>;

    @belongsTo(() => Employee, { foreignKey: 'confirmerId' })
    public EmployeeAsconfirmer: BelongsTo<typeof Employee>;
    }
