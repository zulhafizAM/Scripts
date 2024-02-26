import { BaseModel, belongsTo, BelongsTo } from '@ioc:Adonis/Lucid/Orm';
import Employee from 'App/Models/Employee';
import CargoShippingReimbursement from 'App/Models/CargoShippingReimbursement';

export default class CargoShippingProcessRelationship extends BaseModel {
    @belongsTo(() => CargoShippingReimbursement, { foreignKey: 'shippingId' })
    public CargoShippingReimbursementAsshipping: BelongsTo<typeof CargoShippingReimbursement>;

    @belongsTo(() => Employee, { foreignKey: 'verifierId' })
    public EmployeeAsverifier: BelongsTo<typeof Employee>;

    @belongsTo(() => Employee, { foreignKey: 'supporterId' })
    public EmployeeAssupporter: BelongsTo<typeof Employee>;

    @belongsTo(() => Employee, { foreignKey: 'approverId' })
    public EmployeeAsapprover: BelongsTo<typeof Employee>;
}
