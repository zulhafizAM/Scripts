import { BaseModel, belongsTo, BelongsTo } from '@ioc:Adonis/Lucid/Orm';
import Employee from 'App/Models/Employee';
import VehicleLoan from 'App/Models/VehicleLoan';

export default class VehicleLoanProcessesRelationship extends BaseModel {
    @belongsTo(() => VehicleLoan, { foreignKey: 'vehicleLoanId' })
    public VehicleLoansAsvehicleLoan: BelongsTo<typeof VehicleLoan>;

    @belongsTo(() => Employee, { foreignKey: 'verifierId' })
    public EmployeeAsverifier: BelongsTo<typeof Employee>;

    @belongsTo(() => Employee, { foreignKey: 'supporterId' })
    public EmployeeAssupporter: BelongsTo<typeof Employee>;

    @belongsTo(() => Employee, { foreignKey: 'approverId' })
    public EmployeeAsapprover: BelongsTo<typeof Employee>;
}
