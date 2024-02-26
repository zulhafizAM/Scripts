import { DateTime } from 'luxon';
import { column, BaseModel, belongsTo, BelongsTo } from '@ioc:Adonis/Lucid/Orm';
import CamelCaseNamingStrategy from 'App/Strategies/CamelCaseNamingStrategy';
import GradeActingType from './GradeActingType';
import Employee from './Employee';

export default class GradeActingTypesProcess extends BaseModel {
    public static table = 'gradeActingTypesProcess';
    public static primaryKey = 'id';
    public static incrementing = false;

    public static namingStrategy = new CamelCaseNamingStrategy();

    @column({ isPrimary: true, columnName: 'id', serializeAs: null })
    public id: bigint;

    @column({ columnName: 'actingId', serializeAs: null })
    public actingId: bigint;

    @column({ columnName: 'integrityCertifierId', serializeAs: null })
    public integrityCertifierId: bigint;

    @column({ columnName: 'integrityCertifiedStatus' })
    public integrityCertifiedStatus: string;

    @column({ columnName: 'integrityCertifiedRemark' })
    public integrityCertifiedRemark: string;

    @column.dateTime({ columnName: 'integrityCertifiedDate' })
    public integrityCertifiedDate: DateTime;

    @column({ columnName: 'directorCertifierId', serializeAs: null })
    public directorCertifierId: bigint;

    @column({ columnName: 'directorCertifiedStatus' })
    public directorCertifiedStatus: string;

    @column({ columnName: 'directorCertifiedRemark' })
    public directorCertifiedRemark: string;

    @column.dateTime({ columnName: 'directorCertifiedDate' })
    public directorCertifiedDate: DateTime;

    @column({ columnName: 'supporterId', serializeAs: null })
    public supporterId: bigint;

    @column({ columnName: 'supportedStatus' })
    public supportedStatus: string;

    @column({ columnName: 'supportedRemark' })
    public supportedRemark: string;

    @column.dateTime({ columnName: 'supportedDate' })
    public supportedDate: DateTime;

    @column({ columnName: 'approverId', serializeAs: null })
    public approverId: bigint;

    @column({ columnName: 'approvedStatus' })
    public approvedStatus: string;

    @column({ columnName: 'approvedRemark' })
    public approvedRemark: string;

    @column.dateTime({ columnName: 'approvedDate' })
    public approvedDate: DateTime;

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

    @belongsTo(() => GradeActingType, {
        foreignKey: 'actingId',
        onQuery: (query) => {
            query.where('active', true);
        },
    })
    public acting: BelongsTo<typeof GradeActingType>;

    @belongsTo(() => Employee, {
        foreignKey: 'integrityCertifierId',
        onQuery: (query) => {
            query.where('active', true);
        },
    })
    public integrityCertifier: BelongsTo<typeof Employee>;

    @belongsTo(() => Employee, {
        foreignKey: 'directorCertifierId',
        onQuery: (query) => {
            query.where('active', true);
        },
    })
    public directorCertifier: BelongsTo<typeof Employee>;

    @belongsTo(() => Employee, {
        foreignKey: 'supporterId',
        onQuery: (query) => {
            query.where('active', true);
        },
    })
    public supporter: BelongsTo<typeof Employee>;

    @belongsTo(() => Employee, {
        foreignKey: 'approverId',
        onQuery: (query) => {
            query.where('active', true);
        },
    })
    public approver: BelongsTo<typeof Employee>;
}
