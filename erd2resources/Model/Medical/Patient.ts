import { DateTime } from 'luxon';
import { column, BaseModel, belongsTo, BelongsTo } from '@ioc:Adonis/Lucid/Orm';
import CamelCaseNamingStrategy from 'App/Strategies/CamelCaseNamingStrategy';

export default class Patient extends BaseModel {
    public static table = 'patients';
    public static primaryKey = 'id';
    public static incrementing = false;

    public static namingStrategy = new CamelCaseNamingStrategy();

    @column({ isPrimary: true, columnName: 'id', serializeAs: null })
    public id: bigint;

    @column({ columnName: 'claimId', serializeAs: null })
    public claimId: bigint;

    @column({ columnName: 'relationshipId', serializeAs: null })
    public relationshipId: bigint;

    @column({ columnName: 'placementId', serializeAs: null })
    public placementId: bigint;

    @column({ columnName: 'name' })
    public name: string;

    @column({ columnName: 'identityDocumentCard' })
    public identityDocumentCard: string;

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

    @belongsTo(() => Claim, {
        foreignKey: 'claimId',
        onQuery: (query) => {
            query.where('active', true);
        },
    })
    public claim: BelongsTo<typeof Claim>;

    @belongsTo(() => Relationship, {
        foreignKey: 'relationshipId',
        onQuery: (query) => {
            query.where('active', true);
        },
    })
    public relationship: BelongsTo<typeof Relationship>;

    @belongsTo(() => Placement, {
        foreignKey: 'placementId',
        onQuery: (query) => {
            query.where('active', true);
        },
    })
    public placement: BelongsTo<typeof Placement>;

}
