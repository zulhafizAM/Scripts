import { DateTime } from 'luxon';
import {
  column,
  BaseModel,
  belongsTo,
  BelongsTo,
  hasOne,
  HasOne,
  HasMany,
  hasMany,
  beforeFind,
  scope,
} from '@ioc:Adonis/Lucid/Orm';
import CamelCaseNamingStrategy from 'App/Strategies/CamelCaseNamingStrategy';
import Employee from './Employee';
import Meeting from './Meeting';
import Placement from './Placement';
import SelfTransferProcess from './SelfTransferProcess';
import SelfTransferPostponeProcess from './SelfTransferPostponeProcess';
import SelfTransferReason from './SelfTransferReason';

export default class SelfTransfers extends BaseModel {
  public static table = 'selfTransfers';
  public static primaryKey = 'id';
  public static incrementing = false;

  public static namingStrategy = new CamelCaseNamingStrategy();

  @column({ isPrimary: true, columnName: 'id', serializeAs: null })
  public id: bigint;

  @column({ columnName: 'employeeId', serializeAs: null })
  public employeeId: bigint;

  @column({ columnName: 'meetingId', serializeAs: null })
  public meetingId: bigint;

  @column({ columnName: 'transferType' })
  public transferType: string;

  @column({ columnName: 'firstChoicePlacementId', serializeAs: null })
  public firstChoicePlacementId: bigint;

  @column({ columnName: 'secondChoicePlacementId', serializeAs: null })
  public secondChoicePlacementId: bigint;

  @column.dateTime({ columnName: 'applicationDate' })
  public applicationDate: DateTime;

  @column({ columnName: 'isPostpone' })
  public isPostpone: boolean;

  @column({ columnName: 'meetingResult' })
  public meetingResult: string;

  @column({ columnName: 'meetingRemark' })
  public meetingRemark: string;

  @column({ columnName: 'status' })
  public status: string;

  @column({ columnName: 'remark' })
  public remark: string;

  @column({ columnName: 'active', serializeAs: null })
  public active: boolean;

  @column({ columnName: 'createdBy', serializeAs: null })
  public createdBy: string;

  @column.dateTime({
    columnName: 'createdAt',
    autoCreate: true,
    serializeAs: null,
  })
  public createdAt: DateTime;

  @column({ columnName: 'modifiedBy', serializeAs: null })
  public modifiedBy: string;

  @column.dateTime({
    columnName: 'modifiedAt',
    autoCreate: true,
    autoUpdate: true,
    serializeAs: null,
  })
  public modifiedAt: DateTime;

  @belongsTo(() => Employee, {
    foreignKey: 'employeeId',
    onQuery: (query) => {
      query.where('active', true);
    },
  })
  public employee: BelongsTo<typeof Employee>;

  @belongsTo(() => Meeting, {
    foreignKey: 'meetingId',
    onQuery: (query) => {
      query.where('active', true);
    },
  })
  public meeting: BelongsTo<typeof Meeting>;

  @belongsTo(() => Placement, {
    foreignKey: 'firstChoicePlacementId',
    onQuery: (query) => {
      query.where('active', true);
    },
  })
  public firstChoicePlacement: BelongsTo<typeof Placement>;

  @belongsTo(() => Placement, {
    foreignKey: 'secondChoicePlacementId',
    onQuery: (query) => {
      query.where('active', true);
    },
  })
  public secondChoicePlacement: BelongsTo<typeof Placement>;

  @hasOne(() => SelfTransferProcess, {
    foreignKey: 'selfTransferId',
    onQuery: (query) => {
      query.where('active', true);
    },
  })
  public selfTransferProcess: HasOne<typeof SelfTransferProcess>;

  @hasOne(() => SelfTransferPostponeProcess, {
    foreignKey: 'selfTransferId',
    onQuery: (query) => {
      query.where('active', true);
    },
  })
  public selfTransferPostponeProcess: HasOne<
    typeof SelfTransferPostponeProcess
  >;

  @hasMany(() => SelfTransferReason, {
    foreignKey: 'selfTransferId',
    onQuery: (query) => {
      query.where('active', true);
    },
  })
  public selfTransferReasons: HasMany<typeof SelfTransferReason>;
}
