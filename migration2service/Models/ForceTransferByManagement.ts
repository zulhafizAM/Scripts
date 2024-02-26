import { DateTime } from 'luxon';
import {
  column,
  BaseModel,
  belongsTo,
  BelongsTo,
  hasOne,
  HasOne,
} from '@ioc:Adonis/Lucid/Orm';
import CamelCaseNamingStrategy from 'App/Strategies/CamelCaseNamingStrategy';
import Employee from './Employee';
import Placement from './Placement';
import ForcedByManagementProcess from './ForcedByManagementProcess';
import ForcedByManagementPostponeProcesses from './ForcedByManagementPostponeProcesses';

export default class ForceTransferByManagement extends BaseModel {
  public static table = 'forceTransferByManagement';
  public static primaryKey = 'id';
  public static incrementing = false;

  public static namingStrategy = new CamelCaseNamingStrategy();

  @column({ isPrimary: true, columnName: 'id' })
  public id: bigint;

  @column({ columnName: 'employeeId' })
  public employeeId: bigint;

  @column({ columnName: 'newPlacementId' })
  public newPlacementId: bigint;

  @column({ columnName: 'isPostpone' })
  public isPostpone: boolean;

  @column({ columnName: 'reason' })
  public reason: string;

  @column.dateTime({ columnName: 'transferDate' })
  public transferDate: DateTime;

  @column({ columnName: 'status' })
  public status: string;

  @column({ columnName: 'remark' })
  public remark: string;

  @column({ columnName: 'active' })
  public active: boolean;

  @column({ columnName: 'createdBy' })
  public createdBy: string;

  @column.dateTime({ columnName: 'createdAt', autoCreate: true })
  public createdAt: DateTime;

  @column({ columnName: 'modifiedBy' })
  public modifiedBy: string;

  @column.dateTime({
    columnName: 'modifiedAt',
    autoCreate: true,
    autoUpdate: true,
  })
  public modifiedAt: DateTime;

  @belongsTo(() => Employee, { foreignKey: 'employeeId' })
  public employee: BelongsTo<typeof Employee>;

  @belongsTo(() => Placement, { foreignKey: 'newPlacementId' })
  public newPlacement: BelongsTo<typeof Placement>;

  @hasOne(() => ForcedByManagementProcess, { foreignKey: 'forceId' })
  public forcedByManagementProcess: HasOne<typeof ForcedByManagementProcess>;

  @hasOne(() => ForcedByManagementPostponeProcesses, { foreignKey: 'forceId' })
  public forcedByManagementPostponeProcesses: HasOne<
    typeof ForcedByManagementPostponeProcesses
  >;
}
