import {
  BaseModel,
  hasOne,
  HasOne,
  belongsTo,
  BelongsTo,
} from '@ioc:Adonis/Lucid/Orm';
import Employee from 'App/Models/Employee';
import ForcedByManagementProcess from 'App/Models/ForcedByManagementProcess';
import Placement from 'App/Models/Placement';

export default class ForceTransferByManagementRelationship extends BaseModel {
  @hasOne(() => ForcedByManagementProcess, { foreignKey: 'forceId' })
  public ForcedByManagementProcessAsforce: HasOne<
    typeof ForcedByManagementProcess
  >;

  @hasOne(() => ForcedByManagementPostponeProcesses, { foreignKey: 'forceId' })
  public forcedByManagementPostponeProcess: HasOne<
    typeof ForcedByManagementPostponeProcesses
  >;

  @belongsTo(() => Employee, { foreignKey: 'employeeId' })
  public EmployeeAsemployee: BelongsTo<typeof Employee>;

  @belongsTo(() => Placement, { foreignKey: 'newPlacementId' })
  public PlacementAsnewPlacement: BelongsTo<typeof Placement>;
}
