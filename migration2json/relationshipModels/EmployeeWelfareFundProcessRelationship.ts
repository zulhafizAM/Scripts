import { BaseModel, belongsTo, BelongsTo } from '@ioc:Adonis/Lucid/Orm';
import Employee from 'App/Models/Employee';
import EmployeeWelfareFund from 'App/Models/EmployeeWelfareFund';

export default class EmployeeWelfareFundProcessRelationship extends BaseModel {
	@belongsTo(() => EmployeeWelfareFund, { foreignKey: 'welfareFundId' })
    public EmployeeWelfareFundAswelfareFund: BelongsTo<typeof EmployeeWelfareFund>;

    @belongsTo(() => Employee, { foreignKey: 'directorSupporterId' })
    public EmployeeAsdirectorSupporter: BelongsTo<typeof Employee>;

    @belongsTo(() => Employee, { foreignKey: 'verifierId' })
    public EmployeeAsverifier: BelongsTo<typeof Employee>;

    @belongsTo(() => Employee, { foreignKey: 'appointedSupporterId' })
    public EmployeeAsappointedSupporter: BelongsTo<typeof Employee>;

    @belongsTo(() => Employee, { foreignKey: 'approverId' })
    public EmployeeAsapprover: BelongsTo<typeof Employee>;
}
