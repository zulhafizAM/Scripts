import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'
import ReplacementAnnualLeaveProcessRelationship from 'App/RelationshipModels/Leave/ReplacementAnnualLeaveProcessRelationship';

export default class ReplacementAnnualLeaveProcess extends BaseModel {
  public static table = 'replacementAnnualLeavesProcess';
	public static primaryKey = 'id';
	public static incrementing = false;

  @column({ isPrimary: true, columnName: 'id' })
	public id: bigint;

  @column({ columnName: 'replacementId' })
	public replacementId: bigint;

  @column({ columnName: 'directorSupporterId' })
	public directorSupporterId: bigint;

	@column({ columnName: 'directorSupportedStatus' })
	public directorSupportedStatus: string;

	@column({ columnName: 'directorSupportedRemark' })
	public directorSupportedRemark: string;

	@column.dateTime({ columnName: 'directorSupportedDate' })
	public directorSupportedDate: DateTime;

  @column({ columnName: 'certifierId' })
	public certifierId: bigint;

	@column({ columnName: 'certifiedStatus' })
	public certifiedStatus: string;

	@column({ columnName: 'certifiedRemark' })
	public certifiedRemark: string;

	@column.dateTime({ columnName: 'certifiedDate' })
	public certifiedDate: DateTime;

  @column({ columnName: 'appointedSupporterId' })
	public appointedSupporterId: bigint;

	@column({ columnName: 'appointedSupportedStatus' })
	public appointedSupportedStatus: string;

	@column({ columnName: 'appointedSupportedRemark' })
	public appointedSupportedRemark: string;

	@column.dateTime({ columnName: 'appointedSupportedDate' })
	public appointedSupportedDate: DateTime;

  @column({ columnName: 'approverId' })
	public approverId: bigint;

	@column({ columnName: 'approvedStatus' })
	public approvedStatus: string;

	@column({ columnName: 'approvedRemark' })
	public approvedRemark: string;

	@column.dateTime({ columnName: 'approvedDate' })
	public approvedDate: DateTime;
  
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
  public modifiedAt:DateTime;
  static relationship:ReplacementAnnualLeaveProcessRelationship
}
