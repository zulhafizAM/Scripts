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
import Meeting from './Meeting';
import GradeActingTypesProcess from './GradeActingTypesProcess';
import GradeActingPostponeProcess from './GradeActingPostponeProcess';

export default class GradeActingType extends BaseModel {
    public static table = 'gradeActingTypes';
    public static primaryKey = 'id';
    public static incrementing = false;

    public static namingStrategy = new CamelCaseNamingStrategy();

    @column({ isPrimary: true, columnName: 'id' })
    public id: bigint;

    @column({ columnName: 'employeeId' })
    public employeeId: bigint;

    @column({ columnName: 'meetingId' })
    public meetingId: bigint;

    @column({ columnName: 'interviewResult' })
    public interviewResult: string;

    @column({ columnName: 'isUpForPromotion' })
    public isUpForPromotion: boolean;

    @column({ columnName: 'isGrade1till54' })
    public isGrade1till54: boolean;

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

    @belongsTo(() => Meeting, { foreignKey: 'meetingId' })
    public meeting: BelongsTo<typeof Meeting>;

    @hasOne(() => GradeActingTypesProcess, { foreignKey: 'actingId' })
    public gradeActingTypesProcess: HasOne<typeof GradeActingTypesProcess>;

    @hasOne(() => GradeActingPostponeProcess, { foreignKey: 'actingId' })
    public gradeActingPostponeProcess: HasOne<
        typeof GradeActingPostponeProcess
    >;
}
