import { BaseModel, belongsTo, BelongsTo } from '@ioc:Adonis/Lucid/Orm';
import Employee from 'App/Models/Employee';
import FuneralArrangementRequest from 'App/Models/FuneralArrangementRequest';

export default class FuneralArrangementProcessRelationship extends BaseModel {
	@belongsTo(() => FuneralArrangementRequest, { foreignKey: 'funeralArrangementId' })
    public FuneralArrangementRequestAsfuneralArrangement: BelongsTo<typeof FuneralArrangementRequest>;

    @belongsTo(() => Employee, { foreignKey: 'secretaryVerifierId' })
    public EmployeeAssecretaryVerifier: BelongsTo<typeof Employee>;

    @belongsTo(() => Employee, { foreignKey: 'supporterId' })
    public EmployeeAssupporter: BelongsTo<typeof Employee>;

    @belongsTo(() => Employee, { foreignKey: 'approverId' })
    public EmployeeAsapprover: BelongsTo<typeof Employee>;

    @belongsTo(() => Employee, { foreignKey: 'verifierId' })
    public EmployeeAsverifier: BelongsTo<typeof Employee>;

    @belongsTo(() => Employee, { foreignKey: 'confirmerId' })
    public EmployeeAsconfirmer: BelongsTo<typeof Employee>;
}
